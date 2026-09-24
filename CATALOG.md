# Jev 案例与项目目录 / Jev catalog

本目录由结构化数据生成。来源链接指向原作者；官方标签仅用于 TypeSafe 一手资料。

## 深度使用案例 / Worked cases (12)

### jev-ultrafast

- 作者：Browser Use / Gregor Zunic
- 输入：网页当前可见控件及用户目标。
- Jev 判断：Jev 在一次请求中选择操作和当前元素编号；只有填写文字时才交给小型文本模型。
- 后续动作：执行器重新校验目标后操作浏览器，并单独检查任务结果；仓库给出机票搜索示例，停在结果页，没有预订。
- 核验边界：仓库中的速度数据仅对应作者的样本任务，不能外推为通用成功率。
- 来源：[GitHub](https://github.com/browser-use/jev-ultrafast) · [X](https://x.com/gregpr07/status/2100411066966749359)

### fast-jev-compaction

- 作者：Tamara Tran
- 输入：Agent 对话中的工具调用、结果和上下文。
- Jev 判断：对每个可裁剪的调用分别问两个 Noul：调用还需保留吗、结果还需逐字保留吗。
- 后续动作：按代码阈值保留、截短或移除调用与结果；用户和助手文本保持原样。
- 核验边界：压缩可能丢失后来才变重要的证据；仓库的失败分支会抛错，由调用方决定回退。
- 来源：[GitHub](https://github.com/tamaratran/fast-jev-compaction) · [X](https://x.com/tamarajtran/status/2100694549362553153)

### DocJev

- 作者：Jerry Liu
- 输入：PDF、DOCX 或 PPTX 的页文本，以及自然语言分类规则。
- Jev 判断：Jev 判断文档类别和合并文件中的文档边界。
- 后续动作：程序输出类别、页码范围、复核标记，并可导出拆分后的 PDF。
- 核验边界：文字提取可在本地完成，但 Jev 推理仍使用托管服务；复杂 OCR 是另一个可选步骤。
- 来源：[GitHub](https://github.com/jerryjliu/docjev)

### pg-jev

- 作者：Zachi
- 输入：PostgreSQL 表行和 SQL 中写下的自然语言条件。
- Jev 判断：扩展按批次为每行提一个 Noul 问题，也提供 Choice 和 Score 函数。
- 后续动作：把概率返回给 SQL，用 WHERE、排序和分组接入现有查询；会话内按行内容缓存。
- 核验边界：每条被评估的行都可能发往外部 API；作者的延迟和成本数字是其环境中的测量。
- 来源：[GitHub](https://github.com/realZachi/pg-jev) · [X](https://x.com/iam_zachi/status/2100679300756435135)

### hono-jev-router

- 作者：Yusuke Wada
- 输入：HTTP 请求的方法、URL、脱敏后的请求头及部分文本正文。
- Jev 判断：每条语义路由对应一个 Noul，所有描述在一次 Jev 调用中评估。
- 后续动作：代码按注册顺序和阈值选处理器；未匹配则走常规回退。
- 核验边界：作者明确称其为实验，不建议把语义路由用作认证或授权边界。
- 来源：[GitHub](https://github.com/yusukebe/hono-jev-router)

### jev-guard

- 作者：leepokai
- 输入：编码 Agent 准备执行的工具调用、近期用户指令及已读内容。
- Jev 判断：Score 评估风险，Noul 判断是否需批准、是否由用户请求以及是否受不可信内容诱导。
- 后续动作：项目代码按阈值输出 deny、ask 或 allow，并通过各宿主的 hook 接入。
- 核验边界：这是社区实现的判断层，不能替代宿主权限、人工审批或真实安全边界。
- 来源：[GitHub](https://github.com/leepokai/jev-guard)

### typesafe-jev-examples · ticket triage

- 作者：Rajiv Kuriakose
- 输入：一条客服工单。
- Jev 判断：一次请求并行提问：Choice 选部门，Score 评估业务影响，Noul 判断流失等信号。
- 后续动作：代码依据不同风险设置不同的路由阈值，并为不匹配选项保留 other。
- 核验边界：这是可运行的示例工程；作者说明 OpenRouter 路径已运行，TypeSafe 直连路径尚未实测。
- 来源：[GitHub](https://github.com/rajivkuriakose/typesafe-jev-examples)

### 500 封邮件批量分类

- 作者：Riley Brown
- 输入：作者演示中的 500 封邮件。
- Jev 判断：作者用 Jev 批量分类；原帖没有给出题型、分类标签或阈值。
- 后续动作：演示展示分类结果；作者自报耗时为数秒、成本为 3.5 美分。
- 核验边界：仅核对了作者原帖，未取得代码、邮件样本或独立计费记录。
- 来源：[X](https://x.com/rileybrown/status/2100404532119269426)

### 下载文件夹自动整理

- 作者：Marcel Pociot
- 输入：macOS 下载文件夹中的新文件和用户自定义规则。
- Jev 判断：作者举例让 Jev 判断文件是否为发票；原帖未公开具体题型和字段。
- 后续动作：应用按规则把文件移动到指定文件夹并更名；作者称未调用其他语言模型。
- 核验边界：仅为作者演示，源码、文件识别流程和误分类处理未从原帖核实。
- 来源：[X](https://x.com/marcelpociot/status/2100906882365788167)

### 3,282 条 X 帖子分析

- 作者：Ian Nuttall
- 输入：作者自己的 3,282 条 X 帖子及其表现数据。
- Jev 判断：每条帖子回答八个关于主题、开头、语气和是否提供教学价值等问题；原帖未说明 Jev 题型。
- 后续动作：作者将判断结果与已有互动数据汇总，寻找高表现内容特征。
- 核验边界：样本只来自作者账户；成本与增长结论均为作者自报，不能推断因果或跨账号效果。
- 来源：[X](https://x.com/iannuttall/status/2100668908227162567)

### hn-oracle

- 作者：Anthony Maio
- 输入：历史 Hacker News 评论及其上下文。
- Jev 判断：首轮 Noul 判断评论是否预测未来；过阈值后，Noul、Choice 和 Score 判断可核对性、方向、主题与时间范围。
- 后续动作：代码筛选可事后核验的预测，记录结构化字段，并公布预注册千条评论试验的结果；全库处理尚未完成。
- 核验边界：准确率、成本和校准数字是作者试验的自报结果；概率经另一步校准，整库规模与耗时仍属估计。
- 来源：[GitHub](https://github.com/anthony-maio/hn-oracle)

### undertone

- 作者：Numan
- 输入：用户在发送前写下的消息文本。
- Jev 判断：一次 Jev 请求用 Choice、Noul 和 Score 判断整体语气、讽刺或催促等信号、紧急程度，以及是否适合发给经理。
- 后续动作：界面展示语气标签、颜色与措辞提示，由用户决定是否发送。
- 核验边界：没有独立准确率测量；无 API Key 或请求失败时程序会切换到离线关键词判断，因此演示画面不能全部归因于 Jev。
- 来源：[GitHub](https://github.com/Nuu-maan/undertone) · [X](https://x.com/Numankhannnnn/status/2102779770220286158)

## 开源项目 / Open-source projects (27)

| 项目 | 关系 | 许可证 | ★ |
| --- | --- | --- | ---: |
| [typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python) | official | MIT | 178 |
| [typesafe-ai/typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js) | official | MIT | 206 |
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | official | MIT | 1472 |
| [typesafe-ai/system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python) | official | MIT | 226 |
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | community | MIT | 14820 |
| [jkudish/jev-browser](https://github.com/jkudish/jev-browser) | community | MIT | 221 |
| [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | community | MIT | 5845 |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | community | MIT | 299 |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | community | MIT | 460 |
| [jkudish/jev-mcp](https://github.com/jkudish/jev-mcp) | community | MIT | 213 |
| [itsmostafa/typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp) | community | MIT | 187 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | community | MIT | 18 |
| [win4r/jev-security-scan](https://github.com/win4r/jev-security-scan) | community | MIT | 9 |
| [TheoLeeCJ/SemIf](https://github.com/TheoLeeCJ/SemIf) | inspired | MIT | 2935 |
| [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | inspired | Apache-2.0 | 1968 |
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | inspired | MIT | 1751 |
| [realZachi/pg-jev](https://github.com/realZachi/pg-jev) | community | unknown | 272 |
| [jerryjliu/docjev](https://github.com/jerryjliu/docjev) | community | Apache-2.0 | 165 |
| [yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router) | community | MIT | 45 |
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | community | MIT | 363 |
| [sutro-sh/jev-align](https://github.com/sutro-sh/jev-align) | community | Apache-2.0 | 258 |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | community | MIT | 1740 |
| [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | community | unknown | 1493 |
| [yzfly/awesome-jev-zh](https://github.com/yzfly/awesome-jev-zh) | community | CC0-1.0 | 67 |
| [anthony-maio/hn-oracle](https://github.com/anthony-maio/hn-oracle) | community | MIT | 0 |
| [Tech-Byte-Frontier/jevgate](https://github.com/Tech-Byte-Frontier/jevgate) | community | Apache-2.0 OR MIT | 3 |
| [laihenyi/pi-Jev-browser](https://github.com/laihenyi/pi-Jev-browser) | community | Apache-2.0 | 0 |

## 官方 cookbook / Official recipes (18)

- [Self-consistency: nouls](https://docs.typesafe.ai/cookbooks/consistency_noul_cookbook.md)：Route uncertain probabilities to human review while keeping the underlying noul values visible.
- [Self-consistency: choices](https://docs.typesafe.ai/cookbooks/consistency_choice_cookbook.md)：Add an uncertain outcome to moderation decisions and compare label agreement with the share of automatic actions.
- [Parallel questions](https://docs.typesafe.ai/cookbooks/parallel_questions.md)：Runs a 13-question regulatory briefing over the GDPR Wikipedia article, showing that batching every question into one TypeSafe call is 12.2x cheaper and 10.0x faster with no change in answers.
- [Re-ranking](https://docs.typesafe.ai/cookbooks/rerank_typesafe.md)：Builds 30-passage BM25 shortlists for 40 CLERC legal queries, then uses one TypeSafe question per query-candidate pair to raise top-1 accuracy from 5% to 18% and top-10 accuracy from 38% to 62%.
- [Line-by-line search](https://docs.typesafe.ai/cookbooks/semantic_find.md)：Build semantic search for GitHub's Terms of Service. In one request, score 218 line ids against a plain-language query with a Choice question, and use a Noul question to check whether the document contains an answer.
- [Structure recovery](https://docs.typesafe.ai/cookbooks/autoformat.md)：Reconstructs Markdown from plain text that lost its formatting in two requests: one stitches hard-wrapped lines back together, one classifies every block (heading, list, code, callout).
- [Function calling](https://docs.typesafe.ai/cookbooks/function_calling.md)：Turns natural-language trading requests into calls to ordinary typed functions by mapping function names and closed-set arguments to confidence-aware TypeSafe questions.
- [Skill suggestion](https://docs.typesafe.ai/cookbooks/skill_suggestion.md)：Picks at most one skill for an agent turn out of the 182 in Nous Research's Hermes catalog, using two TypeSafe requests to rank and re-check the top candidates.
- [Knowledge graph entity alignment](https://docs.typesafe.ai/cookbooks/entity_alignment.md)：Decides which of 450 candidate pairs from two beer catalogues describe the same product using one Score question plus three companion Nouls that surface which fields disagree.
- [Classifying RAG passages](https://docs.typesafe.ai/cookbooks/classifying_rag_passages.md)：Score each retrieved passage with one TypeSafe request, then decide in code which ones reach the answering model.
- [Double-checking citations](https://docs.typesafe.ai/cookbooks/citation_check.md)：Catch wrong or hallucinated citations by checking against the source document. One Choice question decides whether the quote's context supports the claim.
- [Guardrails for LLMs](https://docs.typesafe.ai/cookbooks/llm_guardrails.md)：Screen every message going into and out of an LLM app with one TypeSafe request, thresholding hazard probabilities and severity to pass, review, block, or route.
- [SDE cascade](https://docs.typesafe.ai/cookbooks/sde_cascade.md)：Uses a 2-stage structured-data-extraction cascade (mini → verify → reasoning) to get most of the quality of a big reasoning model at a fraction of the cost.
- [Date extraction](https://docs.typesafe.ai/cookbooks/date_extraction_cookbook.md)：Extracts absolute and relative dates by asking TypeSafe for the parts named in a document, then resolving and validating them in code with confidence-based review.
- [Pre-parsed value extraction](https://docs.typesafe.ai/cookbooks/pre_parsed_value_extraction_cookbook.md)：Uses regexes to find candidate emails, phone numbers, and amounts, then has TypeSafe select the requested span so code can normalize a verbatim value.
- [Hierarchical classification](https://docs.typesafe.ai/cookbooks/hierarchical_classification.md)：Classifies documents through deep patent, retail product, biomedical, and source-code hierarchies using parallel beam search over TypeSafe Choice probabilities.
- [Autoresearch feature discovery](https://docs.typesafe.ai/cookbooks/autoresearch_feature_discovery.md)：Runs an autoresearch loop that proposes TypeSafe questions, converts free text into numeric features, and uses model errors to improve a supervised CatBoost regressor.
- [Classification using confidence](https://docs.typesafe.ai/cookbooks/classification_using_confidence.md)：Classify SEC annual reports into 75 industry groups with one Choice each, then read the answer's own confidence to decide whether to report that group or the broader division above it.
