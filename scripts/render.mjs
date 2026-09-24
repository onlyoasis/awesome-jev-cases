import fs from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const load = async (name) => JSON.parse(await fs.readFile(new URL(`data/${name}`, root), 'utf8'));
const cases = await load('cases.json');
const projects = await load('projects.json');
const recipes = await load('official-recipes.json');
const checkOnly = process.argv.includes('--check');
const stale = [];

async function output(name, expected) {
  const file = new URL(name, root);
  const actual = await fs.readFile(file, 'utf8').catch((error) => {
    if (error.code === 'ENOENT') return '';
    throw error;
  });
  if (actual === expected) return;
  if (checkOnly) stale.push(name);
  else await fs.writeFile(file, expected);
}

function cell(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

function link(label, url) {
  const safeLabel = cell(label).replace(/\[/g, '\\[').replace(/\]/g, '\\]');
  const safeUrl = String(url).replace(/\(/g, '%28').replace(/\)/g, '%29');
  return `[${safeLabel}](${safeUrl})`;
}

function block(document, name, content) {
  const start = `<!-- catalog:${name}:start -->`;
  const end = `<!-- catalog:${name}:end -->`;
  const first = document.indexOf(start);
  const last = document.indexOf(end);
  if (first < 0 || last < first || document.indexOf(start, first + start.length) >= 0 ||
      document.indexOf(end, last + end.length) >= 0) throw new Error(`Missing or repeated ${name} markers`);
  return `${document.slice(0, first + start.length)}\n${content}\n${document.slice(last)}`;
}

const categoryOrder = ['official-sdk', 'browser', 'coding', 'mcp', 'routing', 'data', 'guard', 'replica', 'finance', 'list'];
const labels = {
  zh: {
    evidence: { 'code-and-post': '源码＋作者原帖', code: '公开源码', post: '仅作者原帖' },
    relationship: { official: '官方', community: '社区项目', inspired: '受启发的复刻' },
    category: { 'official-sdk': '官方 SDK 与工具', browser: '浏览器与电脑操作', coding: '编码助手', mcp: 'MCP 与 Agent Skill', routing: '路由与网关', data: '数据与检索', guard: '安全与审核', replica: '开源复刻', finance: '交易研究', list: '导航清单' },
  },
  en: {
    evidence: { 'code-and-post': 'Code + author post', code: 'Public code', post: 'Author post only' },
    relationship: { official: 'Official', community: 'Community', inspired: 'Inspired replica' },
    category: { 'official-sdk': 'Official SDKs & tools', browser: 'Browser & computer use', coding: 'Coding agents', mcp: 'MCP & agent skills', routing: 'Routing & gateways', data: 'Data & retrieval', guard: 'Safety & review', replica: 'Open replicas', finance: 'Trading research', list: 'Curated lists' },
  },
};

function caseTable(lang) {
  const zh = lang === 'zh';
  const rows = [
    zh ? '| 案例 | 场景与输入 | Jev 判断 → 后续动作 | 证据与核验边界 |' : '| Case | Scenario & input | Jev decision → action | Evidence & limit |',
    '| --- | --- | --- | --- |',
  ];
  for (const item of cases) {
    const original = item.sources[0];
    const title = item.title?.[lang] ?? item.name;
    const sources = item.sources.map((source) => link(source.label, source.url)).join(' · ');
    const decision = zh ? `**判断：**${cell(item.decision.zh)}<br>**动作：**${cell(item.action.zh)}`
      : `**Decision:** ${cell(item.decision.en)}<br>**Action:** ${cell(item.action.en)}`;
    const evidence = `${labels[lang].evidence[item.evidence] ?? item.evidence}<br>${cell(item.boundary[lang])}<br>${sources}`;
    rows.push(`| ${link(title, original.url)} | **${cell(item.area[lang])}**<br>${cell(item.input[lang])} | ${decision} | ${evidence} |`);
  }
  return rows.join('\n');
}

function projectTable(lang) {
  const zh = lang === 'zh';
  const rows = [
    zh ? '| 项目 | 类别 | 关系 | 许可证 | ★ / 核验日期 | 简介 |' : '| Project | Category | Relationship | License | ★ / checked | Summary |',
    '| --- | --- | --- | --- | ---: | --- |',
  ];
  const ranked = [...projects].sort((a, b) => {
    const rank = (item) => categoryOrder.indexOf(item.category) < 0 ? 99 : categoryOrder.indexOf(item.category);
    return rank(a) - rank(b) || (b.stars ?? 0) - (a.stars ?? 0) || a.name.localeCompare(b.name);
  });
  for (const item of ranked) {
    const license = item.license === 'unknown' && zh ? '未核实' : item.license;
    rows.push(`| ${link(item.name, item.url)} | ${cell(labels[lang].category[item.category] ?? item.category)} | ${cell(labels[lang].relationship[item.relationship] ?? item.relationship)} | ${cell(license)} | ${Number(item.stars ?? 0).toLocaleString('en-US')} · ${cell(item.lastVerified)} | ${cell(item.summary[lang])} |`);
  }
  return rows.join('\n');
}

for (const [name, lang] of [['README.md', 'zh'], ['README.en.md', 'en']]) {
  let document = await fs.readFile(new URL(name, root), 'utf8');
  const summary = lang === 'zh'
    ? `**${cases.length} 条使用案例 · ${projects.length} 个项目条目 · ${recipes.length} 篇官方 cookbook**`
    : `**${cases.length} worked cases · ${projects.length} project listings · ${recipes.length} official cookbooks**`;
  document = block(document, 'summary', summary);
  document = block(document, 'cases', caseTable(lang));
  document = block(document, 'projects', projectTable(lang));
  await output(name, document);
}

const lines = [
  '# Jev 案例与项目目录 / Jev catalog', '',
  '本目录由结构化数据生成。来源链接指向原作者；官方标签仅用于 TypeSafe 一手资料。', '',
  `## 深度使用案例 / Worked cases (${cases.length})`, '',
];
for (const item of cases) {
  lines.push(`### ${item.title?.zh || item.name}`, '', `- 作者：${item.author}`, `- 输入：${item.input.zh}`,
    `- Jev 判断：${item.decision.zh}`, `- 后续动作：${item.action.zh}`, `- 核验边界：${item.boundary.zh}`,
    `- 来源：${item.sources.map((s) => `[${s.label}](${s.url})`).join(' · ')}`, '');
}
lines.push(`## 开源项目 / Open-source projects (${projects.length})`, '', '| 项目 | 关系 | 许可证 | ★ |', '| --- | --- | --- | ---: |');
for (const item of projects) lines.push(`| [${item.name}](${item.url}) | ${item.relationship} | ${item.license} | ${item.stars} |`);
lines.push('', `## 官方 cookbook / Official recipes (${recipes.length})`, '');
for (const item of recipes) lines.push(`- [${item.name}](${item.url})：${item.description}`);
lines.push('');
await output('CATALOG.md', lines.join('\n'));
if (stale.length) throw new Error(`Generated files are stale: ${stale.join(', ')}`);
console.log(`${checkOnly ? 'Checked' : 'Rendered'} ${cases.length} cases, ${projects.length} projects, ${recipes.length} official recipes in both README languages`);
