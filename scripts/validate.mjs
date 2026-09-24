import fs from 'node:fs';
const data = (name) => JSON.parse(fs.readFileSync(new URL(`../data/${name}`, import.meta.url), 'utf8'));
const cases = data('cases.json');
const projects = data('projects.json');
const recipes = data('official-recipes.json');
function unique(items, field) {
  const values = items.map((item) => item[field]);
  if (new Set(values).size !== values.length) throw new Error(`Duplicate ${field}`);
}
for (const [name, items] of [['cases', cases], ['projects', projects], ['recipes', recipes]]) {
  if (!Array.isArray(items) || items.length === 0) throw new Error(`${name} must be a nonempty array`);
  unique(items, 'id');
}
unique(projects, 'url');
unique(recipes, 'url');
for (const item of cases) {
  if (!item.input?.zh || !item.input?.en || !item.decision?.zh || !item.decision?.en ||
      !item.action?.zh || !item.action?.en || !item.boundary?.zh || !item.boundary?.en ||
      !item.sources?.every((source) => new URL(source.url).protocol === 'https:')) throw new Error(`Invalid case ${item.id}`);
}
for (const item of projects) {
  if (new URL(item.url).hostname !== 'github.com' || !item.summary?.zh || !item.summary?.en ||
      !['official', 'community', 'inspired'].includes(item.relationship)) throw new Error(`Invalid project ${item.id}`);
  if (item.relationship === 'official' && !/^typesafe-ai\//i.test(item.name)) throw new Error(`False official label: ${item.id}`);
}
for (const item of recipes) {
  if (new URL(item.url).hostname !== 'docs.typesafe.ai' || item.source !== 'official' || !item.description) throw new Error(`Invalid recipe ${item.id}`);
}
console.log(`Validated ${cases.length} cases, ${projects.length} projects, ${recipes.length} official recipes`);
