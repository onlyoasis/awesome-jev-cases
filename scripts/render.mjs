import fs from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const load = async (name) => JSON.parse(await fs.readFile(new URL(`data/${name}`, root), 'utf8'));
const cases = await load('cases.json');
const projects = await load('projects.json');
const recipes = await load('official-recipes.json');
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
await fs.writeFile(new URL('CATALOG.md', root), lines.join('\n'));
console.log(`Rendered ${cases.length} cases, ${projects.length} projects, ${recipes.length} official recipes`);
