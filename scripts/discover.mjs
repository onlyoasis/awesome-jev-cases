import fs from 'node:fs/promises';
import path from 'node:path';

const root = new URL('../', import.meta.url);
const today = new Date().toISOString().slice(0, 10);
const read = async (name) => JSON.parse(await fs.readFile(new URL(`data/${name}`, root), 'utf8'));
const write = async (name, value) => fs.writeFile(new URL(`data/${name}`, root), JSON.stringify(value, null, 2) + '\n');
const ghToken = process.env.GITHUB_TOKEN;
const xToken = process.env.X_BEARER_TOKEN;
const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'awesome-jev-cases' };
if (ghToken) headers.Authorization = `Bearer ${ghToken}`;

async function get(url, requestHeaders = {}, optional = false) {
  const response = await fetch(url, { headers: { ...headers, ...requestHeaders }, signal: AbortSignal.timeout(20000) });
  if (optional && response.status === 404) return null;
  if (!response.ok) throw new Error(`${new URL(url).host} returned HTTP ${response.status} for ${new URL(url).pathname}`);
  return response;
}

function repoPath(url) {
  try {
    const u = new URL(url);
    if (u.hostname !== 'github.com') return null;
    const [owner, repo] = u.pathname.split('/').filter(Boolean);
    if (!owner || !repo) return null;
    return `${owner}/${repo.replace(/\.git$/, '')}`;
  } catch { return null; }
}

function category(repo) {
  const text = `${repo.name} ${repo.description || ''} ${(repo.topics || []).join(' ')}`.toLowerCase();
  if (/browser|computer.use/.test(text)) return 'browser';
  if (/mcp|skill/.test(text)) return 'mcp';
  if (/guard|safety|moderation|review/.test(text)) return 'guard';
  if (/rout|gateway/.test(text)) return 'routing';
  if (/agent|claude|codex|coding/.test(text)) return 'coding';
  return 'data';
}

const status = { checkedAt: new Date().toISOString(), github: 'pending', official: 'pending', x: xToken ? 'pending' : 'not_configured', addedProjects: 0, officialRecipes: 0, xPosts: 0 };
const projects = await read('projects.json');
const known = new Set(projects.map((p) => repoPath(p.url)?.toLowerCase()).filter(Boolean));
const posts = new Map();

if (xToken) {
  const q = new URL('https://api.x.com/2/tweets/search/recent');
  q.searchParams.set('query', '("Jev" "TypeSafe" OR "jev" url:github.com) -is:retweet has:links');
  q.searchParams.set('max_results', '100');
  q.searchParams.set('tweet.fields', 'created_at,entities');
  const response = await get(q, { Authorization: `Bearer ${xToken}` });
  const body = await response.json();
  for (const post of body.data || []) {
    for (const link of post.entities?.urls || []) {
      const repo = repoPath(link.expanded_url || link.url);
      if (repo && !posts.has(repo.toLowerCase())) posts.set(repo.toLowerCase(), `https://x.com/i/status/${post.id}`);
    }
  }
  status.xPosts = body.data?.length || 0;
  status.x = 'ok';
}

const queries = ['Jev TypeSafe in:readme', 'jev in:name', 'typesafe-ai Jev in:readme'];
const found = new Map();
for (const query of queries) {
  const url = new URL('https://api.github.com/search/repositories');
  url.searchParams.set('q', query);
  url.searchParams.set('sort', 'updated');
  url.searchParams.set('per_page', '50');
  const body = await (await get(url)).json();
  for (const repo of body.items || []) found.set(repo.full_name.toLowerCase(), repo);
}
for (const repoName of posts.keys()) {
  if (!found.has(repoName)) {
    const response = await get(`https://api.github.com/repos/${repoName}`, {}, true);
    if (response) found.set(repoName, await response.json());
  }
}

const cutoff = Date.now() - 365 * 86400000;
for (const [key, searchResult] of found) {
  if (known.has(key)) continue;
  if (searchResult.fork || searchResult.archived || new Date(searchResult.pushed_at).getTime() < cutoff) continue;
  if (searchResult.stargazers_count < 25 && !/^typesafe-ai\//i.test(key)) continue;
  const repo = await (await get(`https://api.github.com/repos/${key}`)).json();
  const license = repo.license?.spdx_id;
  if (!license || license === 'NOASSERTION') continue;
  const response = await get(`https://api.github.com/repos/${key}/readme`, { Accept: 'application/vnd.github.raw+json' }, true);
  if (!response) continue;
  const readme = (await response.text()).slice(0, 100000);
  if (!/\bJev\b/i.test(readme) || !/(api\.typesafe\.ai\/v1\/systemone|typesafe[_-]sdk|client\.systemOne\s*\(|client\.system_one\s*\()/i.test(readme)) continue;
  const description = (repo.description || '').replace(/\s+/g, ' ').trim().slice(0, 180);
  if (!description || !/\bJev\b|TypeSafe/i.test(`${description} ${repo.name}`)) continue;
  if (/compatible with|replica|reimplementation|inspired by|self.hosted.*model/i.test(description)) continue;
  const official = /^typesafe-ai\//i.test(key);
  const entry = {
    id: key.replace(/[^a-z0-9]+/g, '-'), name: repo.full_name, url: repo.html_url,
    category: official ? 'official-sdk' : category(repo), relationship: official ? 'official' : 'community',
    license, summary: { zh: `作者说明：${description}`, en: description }, sourceUrl: repo.html_url,
    lastVerified: today, status: 'verified', stars: repo.stargazers_count,
  };
  const post = posts.get(key);
  if (post) entry.authorPostUrl = post;
  projects.push(entry);
  known.add(key);
  status.addedProjects++;
}

for (const project of projects) {
  const key = repoPath(project.url)?.toLowerCase();
  const repo = key ? found.get(key) : null;
  if (repo) {
    project.stars = repo.stargazers_count;
    project.lastVerified = today;
    const post = posts.get(key);
    if (post && !project.authorPostUrl) project.authorPostUrl = post;
  }
}
await write('projects.json', projects);
status.github = 'ok';

const index = await (await get('https://docs.typesafe.ai/llms.txt', {})).text();
const existing = new Map((await read('official-recipes.json')).map((x) => [x.url, x]));
const recipes = [];
for (const line of index.split('\n')) {
  const match = line.match(/^- \[([^\]]+)\]\((https:\/\/docs\.typesafe\.ai\/cookbooks\/[^)]+\.md)\): (.+)$/);
  if (!match) continue;
  const [, name, url, description] = match;
  const page = await (await get(url, {})).text();
  if (page.trim().length < 100) throw new Error(`Official recipe has no substantive content: ${url}`);
  recipes.push({ id: new URL(url).pathname.split('/').pop().replace(/\.md$/, ''), name, url,
    description, source: 'official', discoveredAt: existing.get(url)?.discoveredAt || today, lastVerified: today });
}
if (recipes.length < 5) throw new Error(`Official index yielded only ${recipes.length} recipes`);
await write('official-recipes.json', recipes);
status.officialRecipes = recipes.length;
status.official = 'ok';
await write('monitor-status.json', status);
console.log(JSON.stringify(status));
