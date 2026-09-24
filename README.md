# Awesome Jev Cases · Jev 使用案例与开源项目

独立社区维护的 Jev 案例库，记录可追溯的使用案例、相关开源项目和 [TypeSafe 官方 cookbook](https://docs.typesafe.ai/cookbooks.md)。网站版：[typesafe-jev.com/use-cases/](https://typesafe-jev.com/use-cases/)；项目目录：[typesafe-jev.com/projects/](https://typesafe-jev.com/projects/)。本仓库与 TypeSafe AI 无隶属或背书关系。

当前数据：[`data/cases.json`](data/cases.json) 是逐条说明输入、Jev 判断、后续动作和证据边界的深度案例；[`data/projects.json`](data/projects.json) 是 GitHub 项目；[`data/official-recipes.json`](data/official-recipes.json) 从 TypeSafe 官方文档索引同步。可阅读的清单见 [CATALOG.md](CATALOG.md)。

## 每日发现与发布

本机 macOS LaunchAgent 每天 12:17（日本时间）启动 **Codex CLI**；这是系统调度的 Codex 模型任务，不是应用内 Scheduled 列表中的任务。Codex 阅读 GitHub 仓库、通过已登录的 Chrome 浏览器搜索 X，并核对 TypeSafe 官方文档与推荐。模型逐条判断是否收录，结构校验脚本只防止坏数据格式。完整岗位说明和验收规则见 [`docs/codex-daily-curation.md`](docs/codex-daily-curation.md)。

达标的新条目自动提交到本仓库；Codex 随后在隔离工作树同步并验证网站数据，使用本机现有 Wrangler 登录部署，再分别回读 GitHub、Cloudflare 和正式页面。没有达标新增时只更新 [`data/monitor-status.json`](data/monitor-status.json)，不重新部署网站。若 X 登录失效、机器关机或外盘缺失，该来源/周期明确记为未完成，不冒称“无新增”。

搜索与判断不设 stars 硬门槛。Codex 核对具体 Jev 调用、输入、判断、后续动作、许可证、维护状态和原始证据；受启发的实现明确标注，作者自报性能不写成独立测量。只提到 Jev 的宣传、价格或上架公告不算使用案例。官方标签仅用于 TypeSafe 一手资料。

本机调度配置见 [`ops/com.onlyoasis.awesome-jev-cases.codex-daily.plist`](ops/com.onlyoasis.awesome-jev-cases.codex-daily.plist)。运行需要 Mac、ChatGPT/Codex 应用及 Chrome 会话保持可用；外盘运行日志存 `/Volumes/ExternalPrivate/Runtime/awesome-jev-cases/logs/`。外部源码和帖子属于不可信输入，不会授权其执行命令或索取凭据。

## 贡献与运行

推荐案例请开 Issue，附原始仓库或作者原帖、实际调用位置、许可证和可复核的结果。不要提交 API Key、用户数据或整段第三方源码。

```bash
node scripts/validate.mjs
node scripts/render.mjs
```

每日任务由 `scripts/run-codex-daily.zsh` 调用 Codex，不使用 X API Token。仓库数据和原始来源公开；浏览器认证与本机 Wrangler 凭据绝不进入 Git、日志正文或 Registry。

## English

An independent, source-linked catalog of Jev use cases, open-source integrations, and official TypeSafe cookbooks. A macOS LaunchAgent starts Codex CLI daily; Codex searches GitHub, X in an authenticated Chrome browser, and official TypeSafe sources, then makes an evidence-based editorial decision. It updates the site through a verified local release when content changes. This is a local Codex task, so the Mac and browser session must be available. See [CATALOG.md](CATALOG.md) for links and the JSON files for evidence fields.

License: [MIT](LICENSE) for original repository code and text. Linked projects and TypeSafe documentation retain their own licenses and copyrights.
