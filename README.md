# Awesome Jev Cases · Jev 使用案例与开源项目

独立社区维护的 Jev 案例库，记录可追溯的使用案例、相关开源项目和 [TypeSafe 官方 cookbook](https://docs.typesafe.ai/cookbooks.md)。网站版：[typesafe-jev.com/use-cases/](https://typesafe-jev.com/use-cases/)；项目目录：[typesafe-jev.com/projects/](https://typesafe-jev.com/projects/)。本仓库与 TypeSafe AI 无隶属或背书关系。

当前数据：[`data/cases.json`](data/cases.json) 是逐条说明输入、Jev 判断、后续动作和证据边界的深度案例；[`data/projects.json`](data/projects.json) 是 GitHub 项目；[`data/official-recipes.json`](data/official-recipes.json) 从 TypeSafe 官方文档索引同步。可阅读的清单见 [CATALOG.md](CATALOG.md)。

## 每日发现与发布

GitHub Actions 每天 12:17（日本时间）执行一次，也可手动触发。它搜索 GitHub、检查仓库 README 与元数据、读取官方 `llms.txt` 并逐页确认 cookbook。通过校验的新条目直接提交到公开 `main`；网站的私有源码仓库在 13:23（日本时间）同步同一份 JSON。正式网站自动部署还需要其专用 Cloudflare CI Token；在配置和真实周期验收完成前，源码同步不等于线上同步。运行状态写入 [`data/monitor-status.json`](data/monitor-status.json)。GitHub 定时任务可能延迟或漏跑，应以 Actions 运行记录与该状态文件为准。

X Recent Search 需要开发者 App 的 `X_BEARER_TOKEN`。未配置时状态为 `not_configured`，不会声称已经搜索 X。配置后只把带 GitHub 链接的作者帖关联到通过仓库规则的项目；单独演示帖不会自动进入深度案例库。

### 自动收录规则

- 新社区项目必须是非 fork、未归档、最近一年有提交、至少 25 stars、有 GitHub 可识别的许可证。
- README 必须同时出现 Jev 和实际 TypeSafe API/SDK 调用线索；仓库说明要指向 Jev/TypeSafe，并排除仅兼容接口或复刻模型的描述。
- 仅 `typesafe-ai/*` 一手仓库可自动标为官方；官方 cookbook 以 `docs.typesafe.ai/llms.txt` 和正文可访问性为准。
- 星数只表示关注度。自动检查不能证明运行效果、性能、内容质量或作者的生产使用。旧条目保留其原核验口径；新增项目的中文说明显式标为“作者说明”。
- 深度案例需要输入、判断、动作、核验边界和原始来源，不从仓库简介或 X 帖子自动编造。可通过 Issue/PR 提交，核验后进入 `cases.json`。

## 贡献与运行

推荐案例请开 Issue，附原始仓库或作者原帖、实际调用位置、许可证和可复核的结果。不要提交 API Key、用户数据或整段第三方源码。

```bash
node scripts/discover.mjs
node scripts/validate.mjs
node scripts/render.mjs
```

`GITHUB_TOKEN` 提高 GitHub API 配额；GitHub Actions 自动提供。X Token 只应放在 GitHub Secret，勿提交到仓库。本项目不含长期本地 runtime；工作流日志在 GitHub Actions，发现状态在 JSON 中。

## English

An independent, source-linked catalog of Jev use cases, open-source integrations, and official TypeSafe cookbooks. A daily GitHub Action publishes qualifying repositories and official recipes. X search is inactive until an `X_BEARER_TOKEN` is configured. Automated inclusion is a discoverability check, not a quality or performance endorsement. See [CATALOG.md](CATALOG.md) for links and the JSON files for evidence fields.

License: [MIT](LICENSE) for original repository code and text. Linked projects and TypeSafe documentation retain their own licenses and copyrights.
