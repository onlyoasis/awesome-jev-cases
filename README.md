# Awesome Jev Cases

🌐 **简体中文** · [English](README.en.md)

独立社区维护的 Jev 使用案例与 GitHub 项目目录。每条案例说明输入、Jev 的判断、后续动作和证据边界；项目链接指向原作者仓库。本站与 TypeSafe AI 无隶属或背书关系。

<!-- catalog:summary:start -->
**14 条使用案例 · 28 个项目条目 · 18 篇官方 cookbook**
<!-- catalog:summary:end -->

[网站案例库](https://typesafe-jev.com/use-cases/) · [网站项目页](https://typesafe-jev.com/projects/) · [官方 cookbook](https://docs.typesafe.ai/cookbooks.md) · [详细目录](CATALOG.md)

## 使用案例

下表汇总作者公开的实际用法。**公开源码**表示可检查实现，**仅作者原帖**表示尚无可检查的代码；两者都不等于本站复现了 API、性能或生产效果。完整核验边界见每行及[详细目录](CATALOG.md)。

<!-- catalog:cases:start -->
| 案例 | 场景与输入 | Jev 判断 → 后续动作 | 证据与核验边界 |
| --- | --- | --- | --- |
| [jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | **浏览器 Agent**<br>网页当前可见控件及用户目标。 | **判断：**Jev 在一次请求中选择操作和当前元素编号；只有填写文字时才交给小型文本模型。<br>**动作：**执行器重新校验目标后操作浏览器，并单独检查任务结果；仓库给出机票搜索示例，停在结果页，没有预订。 | 源码＋作者原帖<br>仓库中的速度数据仅对应作者的样本任务，不能外推为通用成功率。<br>[GitHub](https://github.com/browser-use/jev-ultrafast) · [X](https://x.com/gregpr07/status/2100411066966749359) |
| [fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | **编码 Agent**<br>Agent 对话中的工具调用、结果和上下文。 | **判断：**对每个可裁剪的调用分别问两个 Noul：调用还需保留吗、结果还需逐字保留吗。<br>**动作：**按代码阈值保留、截短或移除调用与结果；用户和助手文本保持原样。 | 源码＋作者原帖<br>压缩可能丢失后来才变重要的证据；仓库的失败分支会抛错，由调用方决定回退。<br>[GitHub](https://github.com/tamaratran/fast-jev-compaction) · [X](https://x.com/tamarajtran/status/2100694549362553153) |
| [DocJev](https://github.com/jerryjliu/docjev) | **文档处理**<br>PDF、DOCX 或 PPTX 的页文本，以及自然语言分类规则。 | **判断：**Jev 判断文档类别和合并文件中的文档边界。<br>**动作：**程序输出类别、页码范围、复核标记，并可导出拆分后的 PDF。 | 公开源码<br>文字提取可在本地完成，但 Jev 推理仍使用托管服务；复杂 OCR 是另一个可选步骤。<br>[GitHub](https://github.com/jerryjliu/docjev) |
| [pg-jev](https://github.com/realZachi/pg-jev) | **数据库检索**<br>PostgreSQL 表行和 SQL 中写下的自然语言条件。 | **判断：**扩展按批次为每行提一个 Noul 问题，也提供 Choice 和 Score 函数。<br>**动作：**把概率返回给 SQL，用 WHERE、排序和分组接入现有查询；会话内按行内容缓存。 | 源码＋作者原帖<br>每条被评估的行都可能发往外部 API；作者的延迟和成本数字是其环境中的测量。<br>[GitHub](https://github.com/realZachi/pg-jev) · [X](https://x.com/iam_zachi/status/2100679300756435135) |
| [hono-jev-router](https://github.com/yusukebe/hono-jev-router) | **请求路由**<br>HTTP 请求的方法、URL、脱敏后的请求头及部分文本正文。 | **判断：**每条语义路由对应一个 Noul，所有描述在一次 Jev 调用中评估。<br>**动作：**代码按注册顺序和阈值选处理器；未匹配则走常规回退。 | 公开源码<br>作者明确称其为实验，不建议把语义路由用作认证或授权边界。<br>[GitHub](https://github.com/yusukebe/hono-jev-router) |
| [jev-guard](https://github.com/leepokai/jev-guard) | **Agent 工具检查**<br>编码 Agent 准备执行的工具调用、近期用户指令及已读内容。 | **判断：**Score 评估风险，Noul 判断是否需批准、是否由用户请求以及是否受不可信内容诱导。<br>**动作：**项目代码按阈值输出 deny、ask 或 allow，并通过各宿主的 hook 接入。 | 公开源码<br>这是社区实现的判断层，不能替代宿主权限、人工审批或真实安全边界。<br>[GitHub](https://github.com/leepokai/jev-guard) |
| [typesafe-jev-examples · ticket triage](https://github.com/rajivkuriakose/typesafe-jev-examples) | **客服工单**<br>一条客服工单。 | **判断：**一次请求并行提问：Choice 选部门，Score 评估业务影响，Noul 判断流失等信号。<br>**动作：**代码依据不同风险设置不同的路由阈值，并为不匹配选项保留 other。 | 公开源码<br>这是可运行的示例工程；作者说明 OpenRouter 路径已运行，TypeSafe 直连路径尚未实测。<br>[GitHub](https://github.com/rajivkuriakose/typesafe-jev-examples) |
| [500 封邮件批量分类](https://x.com/rileybrown/status/2100404532119269426) | **邮件分类**<br>作者演示中的 500 封邮件。 | **判断：**作者用 Jev 批量分类；原帖没有给出题型、分类标签或阈值。<br>**动作：**演示展示分类结果；作者自报耗时为数秒、成本为 3.5 美分。 | 仅作者原帖<br>仅核对了作者原帖，未取得代码、邮件样本或独立计费记录。<br>[X](https://x.com/rileybrown/status/2100404532119269426) |
| [下载文件夹自动整理](https://x.com/marcelpociot/status/2100906882365788167) | **个人文件整理**<br>macOS 下载文件夹中的新文件和用户自定义规则。 | **判断：**作者举例让 Jev 判断文件是否为发票；原帖未公开具体题型和字段。<br>**动作：**应用按规则把文件移动到指定文件夹并更名；作者称未调用其他语言模型。 | 仅作者原帖<br>仅为作者演示，源码、文件识别流程和误分类处理未从原帖核实。<br>[X](https://x.com/marcelpociot/status/2100906882365788167) |
| [3,282 条 X 帖子分析](https://x.com/iannuttall/status/2100668908227162567) | **内容分析**<br>作者自己的 3,282 条 X 帖子及其表现数据。 | **判断：**每条帖子回答八个关于主题、开头、语气和是否提供教学价值等问题；原帖未说明 Jev 题型。<br>**动作：**作者将判断结果与已有互动数据汇总，寻找高表现内容特征。 | 仅作者原帖<br>样本只来自作者账户；成本与增长结论均为作者自报，不能推断因果或跨账号效果。<br>[X](https://x.com/iannuttall/status/2100668908227162567) |
| [hn-oracle](https://github.com/anthony-maio/hn-oracle) | **历史预测分析**<br>历史 Hacker News 评论及其上下文。 | **判断：**首轮 Noul 判断评论是否预测未来；过阈值后，Noul、Choice 和 Score 判断可核对性、方向、主题与时间范围。<br>**动作：**代码筛选可事后核验的预测，记录结构化字段，并公布预注册千条评论试验的结果；全库处理尚未完成。 | 公开源码<br>准确率、成本和校准数字是作者试验的自报结果；概率经另一步校准，整库规模与耗时仍属估计。<br>[GitHub](https://github.com/anthony-maio/hn-oracle) |
| [undertone](https://github.com/Nuu-maan/undertone) | **消息语气预览**<br>用户在发送前写下的消息文本。 | **判断：**一次 Jev 请求用 Choice、Noul 和 Score 判断整体语气、讽刺或催促等信号、紧急程度，以及是否适合发给经理。<br>**动作：**界面展示语气标签、颜色与措辞提示，由用户决定是否发送。 | 源码＋作者原帖<br>没有独立准确率测量；无 API Key 或请求失败时程序会切换到离线关键词判断，因此演示画面不能全部归因于 Jev。<br>[GitHub](https://github.com/Nuu-maan/undertone) · [X](https://x.com/Numankhannnnn/status/2102779770220286158) |
| [JevSearch 网页搜索重排](https://x.com/kylejeong/status/2102561749404971460) | **网页搜索**<br>用户查询、筛选准则，以及 Browserbase 搜索取得的约 25 个候选网页。 | **判断：**Jev 依据准则为候选结果打相关性分数。<br>**动作：**程序返回得分较高的 5 个结果；作者称 Jev 有时会选出原始搜索前五之外的网页。 | 仅作者原帖<br>已核对作者原帖与 TypeSafe 转发推荐，但未找到公开代码、样本查询或独立相关性评测；不是 TypeSafe 官方项目。<br>[X](https://x.com/kylejeong/status/2102561749404971460) · [TypeSafe X](https://x.com/typesafeai/status/2103218258405118035) |
| [Jev Audit](https://github.com/neozhu/jev-audit) | **合同文本比对**<br>基准合同与扫描件提取的 OCR 文本。 | **判断：**一次 Jev 调用以 Noul、Choice 和 Score 判断实质条款是否相符、有无可见修改、差异类型及条款接近程度。<br>**动作：**代码把答案汇成加权一致性分数；作者设置超过 90% 才通过，其余进入人工复审并形成可检查报告。 | 公开源码<br>合同文本会送往 TypeSafe API；可选的问题生成功能还会调用 OpenAI。本站未独立调用 API 或验证法律结论；90% 是作者阈值，合同仍须人工核对原文。<br>[GitHub](https://github.com/neozhu/jev-audit) |
<!-- catalog:cases:end -->

## GitHub 项目库

仅 `typesafe-ai/*` 一手仓库标为**官方**；**受启发的复刻**不代表 Jev 权重开源。星数和核验日期是快照，不是质量认证；许可证以原仓库为准。标为“未核实”的公开仓库，不代表已获得开源使用许可。

<!-- catalog:projects:start -->
| 项目 | 类别 | 关系 | 许可证 | ★ / 核验日期 | 简介 |
| --- | --- | --- | --- | ---: | --- |
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 官方 SDK 与工具 | 官方 | MIT | 1,472 · 2026-09-22 | 官方 Agent Skill：教 Claude Code、Codex 等编码助手正确调用 System One API 的技能包。 |
| [typesafe-ai/system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python) | 官方 SDK 与工具 | 官方 | MIT | 226 · 2026-09-22 | 官方适配器：用普通 LLM API 模拟 TypeSafeClient，便于对照测试或降级运行。 |
| [typesafe-ai/typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js) | 官方 SDK 与工具 | 官方 | MIT | 206 · 2026-09-22 | 官方 TypeScript/JavaScript SDK（npm 包 @typesafe-ai/sdk），答案类型可自动推断，内置重试与错误分类。 |
| [typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python) | 官方 SDK 与工具 | 官方 | MIT | 178 · 2026-09-22 | 官方 Python SDK（pip 包 typesafe-sdk，要求 Python ≥ 3.10），提供同步/异步客户端与 Choice/Score/Noul 类型，默认读取 TYPESAFE_API_KEY。 |
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 浏览器与电脑操作 | 社区项目 | MIT | 14,820 · 2026-09-22 | Browser Use 出品的极速网页 Agent：Jev 负责选择操作与目标元素，小模型只在需要打字时介入。发布首周星数最高的 Jev 项目。 |
| [jkudish/jev-browser](https://github.com/jkudish/jev-browser) | 浏览器与电脑操作 | 社区项目 | MIT | 221 · 2026-09-22 | 基于 Jev 的浏览器自动化实现。 |
| [laihenyi/pi-Jev-browser](https://github.com/laihenyi/pi-Jev-browser) | 浏览器与电脑操作 | 社区项目 | Apache-2.0 | 0 · 2026-09-24 | pi 的浏览器与 macOS 桌面 Agent 扩展：Jev 根据可见文本、控件和目标选择单步动作，执行循环设有步数和人工复核边界。 |
| [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 编码助手 | 社区项目 | MIT | 5,845 · 2026-09-22 | Claude Code 插件：用 Jev 逐条判断历史工具调用的去留，替代摘要式上下文压缩；保留的内容原样保留。社区对该策略存在争议。 |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 编码助手 | 社区项目 | MIT | 460 · 2026-09-22 | 分阶段代码审查流程与本地面板。 |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | 编码助手 | 社区项目 | MIT | 299 · 2026-09-22 | Claude Code 插件：按任务选择最便宜且够用的模型。 |
| [Tech-Byte-Frontier/jevgate](https://github.com/Tech-Byte-Frontier/jevgate) | 编码助手 | 社区项目 | Apache-2.0 OR MIT | 3 · 2026-09-24 | Rust 代码审查工具：解析源码后向 Jev 提交局部、类型化的维护性判断，并由代码汇成带位置和建议的发现；安全规则需另行启用。 |
| [jkudish/jev-mcp](https://github.com/jkudish/jev-mcp) | MCP 与 Agent Skill | 社区项目 | MIT | 213 · 2026-09-22 | MCP 服务器：把校验、筛选、排序等判断暴露为 Agent 可调用的工具。 |
| [itsmostafa/typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp) | MCP 与 Agent Skill | 社区项目 | MIT | 187 · 2026-09-22 | MCP 连接器：让 Agent 直接调用 Jev。 |
| [yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router) | 路由与网关 | 社区项目 | MIT | 45 · 2026-09-22 | Hono 中间件：按语义把请求路由到不同处理器。 |
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | 数据与检索 | 社区项目 | MIT | 363 · 2026-09-22 | 用 Jev 选择数据源、理解查询并按相关性排序的网页搜索（基于 Search1API）。 |
| [realZachi/pg-jev](https://github.com/realZachi/pg-jev) | 数据与检索 | 社区项目 | 未核实 | 272 · 2026-09-22 | PostgreSQL 扩展：用自然语言对表格行做判断。许可证未被 GitHub 识别为标准开源协议。 |
| [sutro-sh/jev-align](https://github.com/sutro-sh/jev-align) | 数据与检索 | 社区项目 | Apache-2.0 | 258 · 2026-09-22 | 用人工反馈与 GEPA 校准 Jev 判断函数。 |
| [jerryjliu/docjev](https://github.com/jerryjliu/docjev) | 数据与检索 | 社区项目 | Apache-2.0 | 165 · 2026-09-22 | LlamaIndex 出品：用 Jev 做快速文档分类与子文档边界识别。 |
| [anthony-maio/hn-oracle](https://github.com/anthony-maio/hn-oracle) | 数据与检索 | 社区项目 | MIT | 0 · 2026-09-24 | 用 Jev 筛选历史 Hacker News 评论中的可核验预测；仓库包含预注册试验、实际调用代码和作者发布的结果数据，尚未处理完整档案。 |
| [neozhu/jev-audit](https://github.com/neozhu/jev-audit) | 数据与检索 | 社区项目 | MIT | 0 · 2026-09-25 | 用 Jev 的 Noul、Choice、Score 比对基准合同与扫描件 OCR 文本，区分实质变化和识别噪声，并把低于作者阈值的结果交给人工复审；含真实 API 调用与一致性测试。 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 安全与审核 | 社区项目 | MIT | 18 · 2026-09-22 | 编码 Agent 的安全闸门：对每次工具调用给出 deny/ask/allow 风险判断，并标记提示注入；支持多种编码助手。 |
| [win4r/jev-security-scan](https://github.com/win4r/jev-security-scan) | 安全与审核 | 社区项目 | MIT | 9 · 2026-09-22 | 用 Jev 审查 Agent Skill 与 MCP 代码中的可疑行为（中文说明项目）。 |
| [TheoLeeCJ/SemIf](https://github.com/TheoLeeCJ/SemIf) | 开源复刻 | 受启发的复刻 | MIT | 2,935 · 2026-09-22 | 受 Jev 启发的开源实现：在开源模型上复刻“语义 if”接口，3090 显卡可本地运行。原名 OpenJev，作者声明与 TypeSafe 无关；不是 Jev 权重开源。 |
| [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 开源复刻 | 受启发的复刻 | Apache-2.0 | 1,968 · 2026-09-22 | 基于 Qwen3.5 的迷你 Jev 式决策模型，可自行训练并在本机运行。 |
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 开源复刻 | 受启发的复刻 | MIT | 1,751 · 2026-09-22 | 0.6B 参数的 Jev 复刻：并行决策、动态候选与端到端训练流程。社区项目，与官方无关。 |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 交易研究 | 社区项目 | MIT | 1,740 · 2026-09-22 | 在 Monad 链上每个区块做一次买卖判断（默认 dry-run 模拟）。仅供研究，不构成任何投资建议；实盘风险自担。 |
| [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | 导航清单 | 社区项目 | 未核实 | 1,493 · 2026-09-24 | 英文精选清单，按 13 类收录数百个项目与讨论；作者提醒同日批量提交的项目未经验证。 |
| [yzfly/awesome-jev-zh](https://github.com/yzfly/awesome-jev-zh) | 导航清单 | 社区项目 | CC0-1.0 | 67 · 2026-09-24 | 中文精选列表：官方资料、应用、Agent 工具与开源复现，附中文上手指南。 |
<!-- catalog:projects:end -->

## 数据与更新

表格由 [`data/cases.json`](data/cases.json)、[`data/projects.json`](data/projects.json) 生成。另有 [`data/official-recipes.json`](data/official-recipes.json) 收录 TypeSafe 官方 cookbook，正文与来源见[详细目录](CATALOG.md)。运行 `node scripts/validate.mjs` 检查结构，再运行 `node scripts/render.mjs` 同步中英文 README 与目录；`node scripts/render.mjs --check` 可确认生成内容没有过期。

每日编辑流程写在 [`docs/codex-daily-curation.md`](docs/codex-daily-curation.md)：Codex 读取 GitHub、Chrome 中的 X 原帖和官方资料后判断收录，不设 stars 硬门槛。**原生 Scheduled 心跳任务 `jev` 已启用，每天日本时间 12:17 运行**；2026-09-25 首次自然触发已核实双源搜索，发布在用户纠正日期筛选判断后完成。下一次无人介入发布仍待验收。

## 贡献

欢迎通过 Issue 或 PR 推荐案例。请提供原始仓库或作者原帖、实际调用位置、许可证、输入与后续动作；不要提交 API Key、用户数据或整段第三方源码。项目本身的问题请向原作者反馈。

## 许可

本仓库原创代码和文字采用 [MIT](LICENSE)。链接项目与 TypeSafe 文档保留各自的许可证和版权。
