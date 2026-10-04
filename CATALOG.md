# Jev 案例与项目目录 / Jev catalog

本目录由结构化数据生成。来源链接指向原作者；官方标签仅用于 TypeSafe 一手资料。

## 深度使用案例 / Worked cases (57)

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

### JevSearch 网页搜索重排

- 作者：Kyle Jeong
- 输入：用户查询、筛选准则，以及 Browserbase 搜索取得的约 25 个候选网页。
- Jev 判断：Jev 依据准则为候选结果打相关性分数。
- 后续动作：程序返回得分较高的 5 个结果；作者称 Jev 有时会选出原始搜索前五之外的网页。
- 核验边界：已核对作者原帖与 TypeSafe 转发推荐，但未找到公开代码、样本查询或独立相关性评测；不是 TypeSafe 官方项目。
- 来源：[X](https://x.com/kylejeong/status/2102561749404971460) · [TypeSafe X](https://x.com/typesafeai/status/2103218258405118035)

### Jev Audit

- 作者：neozhu
- 输入：基准合同与扫描件提取的 OCR 文本。
- Jev 判断：一次 Jev 调用以 Noul、Choice 和 Score 判断实质条款是否相符、有无可见修改、差异类型及条款接近程度。
- 后续动作：代码把答案汇成加权一致性分数；作者设置超过 90% 才通过，其余进入人工复审并形成可检查报告。
- 核验边界：合同文本会送往 TypeSafe API；可选的问题生成功能还会调用 OpenAI。本站未独立调用 API 或验证法律结论；90% 是作者阈值，合同仍须人工核对原文。
- 来源：[GitHub](https://github.com/neozhu/jev-audit)

### OpenRouter 用 Jev 选择模型

- 作者：OpenRouter
- 输入：发往 OpenRouter 的 LLM 请求及会话上下文；原帖称路由会考虑缓存。
- Jev 判断：Jev 判断任务、难度、精度需求和更大模型的收益，选择目标模型及推理强度。
- 后续动作：OpenRouter 将请求送到所选模型，并在响应中附路由依据；其原帖称 Jev 超时或返回无效内容时请求会失败。
- 核验边界：已核对 OpenRouter 原帖、产品页和 TypeSafe 转发，未见公开路由源码或本站独立质量、成本评估；这是第三方产品，不能把官方转发当作 TypeSafe 一手项目。
- 来源：[OpenRouter X](https://x.com/OpenRouter/status/2103610898690855161) · [OpenRouter details](https://x.com/OpenRouter/status/2103610988432126195) · [TypeSafe X](https://x.com/typesafeai/status/2103612889655353346) · [OpenRouter](https://openrouter.ai/typesafe/jev-router)

### jevgrep 定位代码上下文

- 作者：dzhng
- 输入：编码任务问题、仓库目录、文件预览与源代码单元。
- Jev 判断：Jev 逐层用封闭的是非判断筛出与任务相关的目录、文件和代码位置。
- 后续动作：CLI 返回带行号的原始代码片段和阅读线索，编码 Agent 再自行修改与测试。
- 核验边界：符合筛选条件的源代码会发往用户所选的外部 Jev 服务；仓库作者的成本和任务成功率仅为其样本结果，检索线索不保证完整。
- 来源：[GitHub](https://github.com/dzhng/jevgrep)

### wellposed 检查 Jev 请求

- 作者：suraj-phanindra
- 输入：准备提交给 Jev 的 state、题型、instructions 和 criteria。
- Jev 判断：离线规则先查结构问题；对规则难判断的语义缺陷，工具再让 Jev 用 Noul 判断，例如选项是否遗漏合理的“其他”情形。
- 后续动作：程序在实际业务调用前给出警告与修改建议，由开发者决定是否改写问题。
- 核验边界：语义检查本身需要 TypeSafe API Key，可能发送待检查的请求内容；作者的标注样本和准确率未经本站独立复算，提示不能替代实测。
- 来源：[GitHub](https://github.com/suraj-phanindra/wellposed)

### jevmod 社区消息审核

- 作者：ohernandezdev
- 输入：待审核消息的文本、频道话题及社区自定义规则。
- Jev 判断：Jev 对诈骗、垃圾信息、骚扰等类别分别回答 Noul，输出各类别概率。
- 后续动作：策略按概率标记并交给管理员复核；默认不删除消息，只有显式启用才执行自动处置。
- 核验边界：消息文本和频道话题会发往 TypeSafe；Jev 不可用时程序放行并记录错误。作者的审核准确率和成本数字未由本站复算，不能替代人工申诉与复核。
- 来源：[GitHub](https://github.com/ohernandezdev/jevmod)

### jev-mobile 安卓操作循环

- 作者：Friedjof
- 输入：用户目标、安卓界面的语义状态及当前可执行的动作集合。
- Jev 判断：Jev 用 Choice 从程序给定的候选动作中选下一步，不生成任意坐标或代码。
- 后续动作：工作进程先记录变更，再操作设备并重新观察，按独立检查判断任务是否完成或需升级处理。
- 核验边界：需要已授权的 USB 调试设备和 TypeSafe API；界面状态可能发往外部服务。本站未在真实手机上复现，风险动作和完成状态依赖项目自身的审批与验证。
- 来源：[GitHub](https://github.com/Friedjof/jev-mobile)

### TypeSafe 电脑操作助手

- 作者：awlevin
- 输入：用户目标、屏幕 OCR 或可访问性状态及程序允许的动作。
- Jev 判断：Jev 以 Choice 选择操作种类、目标控件或站点，并可用 Noul 检查填入的文字是否合适。
- 后续动作：执行器确定性地操作鼠标键盘，随后重新获取屏幕状态以判断下一步。
- 核验边界：项目仍属 Beta，会操作真实桌面；屏幕内容送往 TypeSafe，可选文字生成另用其他模型。本站未独立验证速度、费用或 OSWorld 成绩，实际使用应先 dry-run。
- 来源：[GitHub](https://github.com/awlevin/typesafe-computer-use)

### foreman

- 作者：thruwire
- 输入：一条软件工单、规格或缺陷报告，加上 Codex/OpenCode 工人产出的 diff、测试等“工厂证据”。
- Jev 判断：一次 Jev 调用并行输出实现是否完成、需求是否满足、测试是否充分、是否需要核验、工人是否卡住、是否需要人工等一组概率。
- 后续动作：代码按阈值决定继续、纠偏、停止、重试、核验或结束；Jev 只做语义监督，不参与写码。
- 核验边界：仓库明示效果取决于检查配置、证据、阈值与底层模型质量；本站仅读源码与文档，未独立复现其监督效果。
- 来源：[GitHub](https://github.com/thruwire/foreman)

### minecraft-agent

- 作者：rmalde
- 输入：规划目标与原版 Minecraft 服务器的实时状态；只读 Java 传感器可上报末影龙头的精确位置。
- Jev 判断：GPT-6 Astra 负责规划，Jev 在每步从可选玩家动作中做选择；作者最好成绩一次通关共 131 次 Jev 决策、35 次 Astra 调用。
- 后续动作：选中的动作通过正常玩家协议发给服务器；不修改游戏规则或实体状态。
- 核验边界：8 分 43 秒为作者录制的最好成绩，龙的飞行与降落时长逐局波动；录像与证据仅存本地不入库，本站未复跑。
- 来源：[GitHub](https://github.com/rmalde/minecraft-agent)

### typesafe-mario

- 作者：fhshaik
- 输入：NES 模拟器遥测与 RAM 解析成的紧凑 JSON（马里奥运动、跳跃轨迹、敌人、地形、历史控制结果），模型不看截图。
- Jev 判断：Choice 从 noop、right、right_jump 等 7 个合法手柄动作中选一个，并返回完整概率分布。
- 后续动作：模拟器推进若干帧后再次询问；每次决策的延迟、概率与置信度写入本地 JSONL 供复盘。
- 核验边界：仓库不含 ROM，须自备合法游戏文件；默认每 8 帧决策一次的实验设置，作者未发布通关基准，本站未实测。
- 来源：[GitHub](https://github.com/fhshaik/typesafe-mario)

### mobile-jev

- 作者：droidrun
- 输入：Mobilerun 真机的屏幕状态与自然语言目标。
- Jev 判断：Jev 从可用操作中为每一步做选择；演示里 Uber 路线任务 9 步约 21 秒，从打开 App 到支付选择页。
- 后续动作：通过 Mobilerun API 操作真机并记录执行 traces 与请求级延迟；示例任务停在支付选择页。
- 核验边界：计时为作者录制的演示；设备与 Mobilerun 服务费用另计，未演示完整下单，本站未复测。
- 来源：[GitHub](https://github.com/droidrun/mobile-jev)

### jev-voice-browser

- 作者：Moritz Kremb
- 输入：浏览器 Web Speech API 流式输出的部分转写，加上受控 Chromium 页面最多 100 个元素的索引快照。
- Jev 判断：每次部分转写触发一次 Jev 请求，9-11 个问题覆盖意图、目标元素、站点、指令是否说完、是否对它说、是否破坏性，约 250-350ms 返回。
- 后续动作：代码按阈值决定执行、等待、询问或忽略；搜索词与 URL 由代码提取成候选、Jev 只逐字挑选，不生成文本。
- 核验边界：麦克风依赖 Chrome/Edge 的 Web Speech API；延迟与每次约 0.0002 美元为作者环境测量，本站未实测。
- 来源：[GitHub](https://github.com/moritzkremb/jev-voice-browser)

### jev-drone

- 作者：RomanSlack
- 输入：机载相机画面的深度与分割结果，由经典 CV 压成五个前向扇区、遮挡高度等紧凑场景；Jev 不做感知。
- Jev 判断：2.5Hz 一次调用三问：Choice 选机动（保持/绕左/绕右/爬升/刹车/重捕获）、Score 评风险、Noul 判目标是否真丢失；场景指纹缓存，65 秒飞行约 110 次调用。
- 后续动作：战术判断仅作咨询；50Hz 安全反射层与 500Hz 几何控制器保留否决权，如爬升必须在实测障碍顶边可达时才执行。
- 核验边界：MuJoCo 仿真中的五站障碍课程；数字为作者单次飞行测量，非实物飞行，本站未复跑。
- 来源：[GitHub](https://github.com/RomanSlack/jev-drone)

### jev-codex-router

- 作者：0xNatoshi
- 输入：Codex 会话的有界决策状态；完整上下文回放只给执行模型，Jev 看不到。
- Jev 判断：Jev 为每次模型调用（含工具后续轮）同时选择模型与推理强度，目标是用够用的能力、不浪费配额。
- 后续动作：经内嵌的 Codex Router 分发到 luna/terra/sol/astra；任何 Jev 错误 fail-open，原样放行。
- 核验边界：README 的“约省 60%”是旧策略 237 轮的历史回测，作者明示既非实测节省、也不能代表现策略。
- 来源：[GitHub](https://github.com/0xNatoshi/jev-codex-router)

### jev-pruner

- 作者：Tamara Tran
- 输入：Claude Code 刚执行完的 Bash stdout（1 万估算 token 以下直通）与任务、会话历史。
- Jev 判断：输出切块后每块一个 Noul：块内是否有任何行仍需可用；单行需要即保护整块，含此前指令依赖的值。
- 后续动作：不需要的块被裁掉，其余原样进入后续轮次；错误输出、JSON/XML/diff、git diff 等整文档命令与已识别文档豁免。
- 核验边界：与作者另一项目 fast-jev-compaction 相互独立；token 用估算而非精确分词器，压缩率未经本站实测。
- 来源：[GitHub](https://github.com/tamaratran/jev-pruner)

### neo4jev

- 作者：jexp
- 输入：Neo4j 当前节点的出边关系列表（类型、属性、目标节点标签/属性）；schema 经自省发现，不写死。
- Jev 判断：Choice 从出边中选下一条关系，Noul“目标是否已达成”同请求搭车，每跳恰好一次往返。
- 后续动作：对返回概率做 top-k 束搜索，按对数概率求和排序得到最优路径，交互式渲染邻域与路径。
- 核验边界：笔记本与 Streamlit 应用在公开 companies2 图上实测；无 key 时失败原样展示、用明确标注的替身答案跑管线，不冒充 TypeSafe 输出。
- 来源：[GitHub](https://github.com/jexp/neo4jev)

### pi-jev

- 作者：y0usaf
- 输入：Pi 编码 agent 待执行的 bash/write/edit 调用，以及命令执行后的输出。
- Jev 判断：闸门把 3 个 Noul（破坏性/数据外传/超出用户所求）与 1 个 4 级 Score（影响）放进一次请求；输出裁判再两问查泄密与失败类别。
- 后续动作：默认 shadow 模式只提示不拦截，可切换为执行前确认；所有错误路径 fail-open，缺 key、超时、429 都放行工具调用。
- 核验边界：阈值（0.90/0.70/0.85/2.50）为作者默认配置；判定层不替代宿主权限或真实安全边界。
- 来源：[GitHub](https://github.com/y0usaf/pi-jev)

### jevmeter

- 作者：ChetasLua
- 输入：任意视频的逐句转写文本，加上所选预设（辩论访谈/财报电话会/播客闲谈/发布宣传）。
- Jev 判断：按预设维度给每句打分并标记回避问题、情绪诉求、自相矛盾、炒作等信号；作者报告预设留出集准确率 99%。
- 后续动作：渲染成可直接发布的 16:9 成片；整场辩论完整评分成本约 0.05 美元。
- 核验边界：准确率与成本为作者自报的评测，未经本站复现；预设主要面向英文音视频内容。
- 来源：[GitHub](https://github.com/ChetasLua/jevmeter) · [X](https://x.com/chetaslua/status/2100473581251748216)

### jev-shell-history

- 作者：mrnugget
- 输入：当前敲到一半的命令与最近 100 条去重历史。
- Jev 判断：Choice 判断最可能在补全哪条历史命令并返回概率；有前缀命中走字面补全，无命中进入替换模式。
- 后续动作：fish 式灰色建议显示在光标后并附分数，→ 或 ^E 接受；条数、阈值与最小字符数可配。
- 核验边界：击键即可能触发 API 调用（有 2 字符起测与阈值门控），费用由用户自理；演示 GIF 用虚构历史生成。
- 来源：[GitHub](https://github.com/mrnugget/jev-shell-history)

### jev-chat

- 作者：w3cj
- 输入：用户消息、会话状态与早前工具结果；仅 TYPESAFE_API_KEY 为必需。
- Jev 判断：Choice 决定要调的 MCP 工具、每个参数取自哪里、是否先确认、给哪种回复；Noul 判断字段（如截止时间）是否已给出。
- 后续动作：代码调用工具并只用工具返回的数据拼回复——没有任何模型写文本，页面上的值要么来自用户要么来自工具。
- 核验边界：附检查器可查看每条回复的完整请求、概率与代码行为；示例工具集较小，不构成通用对话替代。
- 来源：[GitHub](https://github.com/w3cj/jev-chat)

### typesafe-adblock

- 作者：Zachi
- 输入：扩展用代码规则预筛的“广告形”候选 DOM 元素，压成标签、类名、链接域、IAB 尺寸等紧凑 JSON。
- Jev 判断：每批一次请求、每候选一个 Noul“是否付费广告”，一次拿回逐元素概率。
- 后续动作：P(广告)≥0.70 的元素被描红、收缩并移除；MutationObserver 捕捉懒加载，每批至多 30 个候选。
- 核验边界：作者明示这是趣味项目而非真广告拦截：每页消耗 token、会漏判也会误删，不处理追踪与视频广告。
- 来源：[GitHub](https://github.com/realZachi/typesafe-adblock)

### jevmail

- 作者：fazlerocks
- 输入：Gmail 收件箱消息，经只读 gmail.readonly 单一 scope，仅用 list/get 类方法。
- Jev 判断：每封 3 问：五个托盘（需回复/更新/促销/销售/垃圾）选一、1-5 紧急度、是否真人写给你。
- 后续动作：按托盘与紧急度排序展示，托盘显示前两概率、用户纠错与原始答案一并存本地 SQLite；1000 封约 1 分钟、约 3 美分。
- 核验边界：只读不代发不代归档；速度与成本为作者环境测量（经 Vercel AI Gateway 调 Jev），本站未复测。
- 来源：[GitHub](https://github.com/fazlerocks/jevmail)

### HA-Jev

- 作者：AboveColin
- 输入：房屋与传感器状态，以及用户在 UI 或 YAML 里定义的 Noul/Choice/Score 问题。
- Jev 判断：每个问题变成一个实体：概率、选项及其分布、或量表数值；自动化里 jev.noul/jev.choice/jev.score/jev.ask 四个动作直接作答。
- 后续动作：实体可参与自动化与 Assist 语音路由；集成统计每日调用、输入 token 与估算花费，对照每日预算。
- 核验边界：HACS 社区自定义集成，作者声明与 TypeSafe 无关；判断质量取决于问题设计，自动化后果由用户配置负责。
- 来源：[GitHub](https://github.com/AboveColin/HA-Jev)

### shapeshift

- 作者：anishfn
- 输入：一个文本框的实时输入，如“周五晚 8 点和 Priya 视频”或“2400 三人平摊”。
- Jev 判断：一次 Jev 调用并行 14 问：判断应变形为哪张卡片（日程/清单/计时器/分账/取色/投票…）及“是否视频通话”“是否紧急”等信号。
- 后续动作：日期、金额、单位与运算全部由确定性代码解析计算；无 key 或 API 异常时静默回退内置关键词分类器，完全离线可用。
- 核验边界：在线模式 key 只在服务端读取；离线兜底意味着默认体验不等于 Jev 精度，本站未做两种模式对比。
- 来源：[GitHub](https://github.com/anishfn/shapeshift)

### jevals

- 作者：Openlayer
- 输入：Agent trace（OpenAI 格式 messages 与工具 schema；Anthropic 内容块与 LangChain 对象亦可直接传入）。
- Jev 判断：一次请求并行输出工具选择、是否用了工具结果、有据、未越界、回答相关、完整、间接注入、PHI 等 8 项判定与分数。
- 后续动作：每条 trace 一请求、约数千分之一美分、数百毫秒，可跑在全部流量与 agent 循环内；后端可选 TypeSafe/Vercel、本地 Kev/Laya 或普通 LLM。
- 核验边界：示例数字取自作者 quickstart trace 的真实返回；各 metric 的有效性未经本站独立评测。
- 来源：[GitHub](https://github.com/openlayer-ai/jevals)

### winnow

- 作者：Ghaleb Dweikat
- 输入：Claude Code 中大体积 Read/Bash/Grep 结果，切成约 25 行的块。
- Jev 判断：每块一个 Noul“当前任务是否需要此块”；高置信不需要才隐藏，不确定的块与疑似错误的输出一律原样保留。
- 后续动作：隐藏块替换为三行存根：隐藏了什么、廉价模型一句话摘要、以及可取回全文的召回键。
- 核验边界：依赖判定模型的校准度，作者同时提供用 Claude Haiku 的未校准适配器备选；阈值可调，token 节省未经本站实测。
- 来源：[GitHub](https://github.com/GhalebDweikat/winnow)

### jev-chat-jarvis

- 作者：恸码奇点（jev-chat）
- 输入：读屏采集的当前对话：安卓端走无障碍读节点，Windows 端走窗口截图 + 本地 OCR；仅本机可见会话。
- Jev 判断：Jev 判断对方意图、情绪/紧张度并给候选排序；生成模型起草 3 条候选回复，胜出概率随候选一起展示。
- 后续动作：半透明悬浮窗给出判断摘要与候选，一键复制/填入输入框；发送永远由用户手动点，不碰转账红包。
- 核验边界：判断可走 OpenRouter 或 TypeSafe 直连（用户自带 key）；读屏合规与使用场景由用户自行负责，README 未提供评测数据，本站未实测。
- 来源：[GitHub](https://github.com/jev-chat/jev-chat-jarvis) · [GitHub · Windows 版](https://github.com/jev-chat/jev-chat-windows)

### Glean 专家模型路由离线评估

- 作者：Tony Gentilcore 等 Glean 作者
- 输入：751 条历史请求及其专家路由黄金标签；试验把生产路由简化为 3 个专家候选。
- Jev 判断：Jev 从 3 个预设专家中选处理请求的模型，替代原有生成式路由提示词的封闭选择步骤。
- 后续动作：研究团队将选择与黄金标签及既有 LLM 路由比较，并对真实转接的 40 条样本另测调用延迟；文章未称已上线。
- 核验边界：仅作者公开的离线评估，没有开源实现或本站复测；8.1 倍中位提速为作者在 40 条转接样本上的自报，数据驻留及运行保障仍待解决。
- 来源：[X article](https://x.com/tonygentilcore/status/2104639390266036251) · [TypeSafe X](https://x.com/typesafeai/status/2104772007481180633)

### jevwright 浏览器业务流程测试

- 作者：Ice-Hazymoon
- 输入：测试作者用自然语言写的业务步骤、当前 Chromium 页面的控件，以及声明的 API 请求和断言。
- Jev 判断：Jev 从当前页面定位符合步骤的控件，并对屏幕可见状态做封闭核对；模型不决定测试是否通过。
- 后续动作：Playwright 执行动作并记录语义路径；后续可无模型回放，测试成败由请求、API/数据库断言和代码监控决定。
- 核验边界：首次探索或路径失效时需 OpenRouter/Vercel 网关密钥，纯回放不需；仓库提供源码和 CI，费用与效果数字仅为作者自报，本站未运行真实站点测试。
- 来源：[GitHub](https://github.com/Ice-Hazymoon/jevwright) · [Source code](https://github.com/Ice-Hazymoon/jevwright/blob/main/src/models.ts)

### IRS 表单页分类与置信度门控

- 作者：kyotofin
- 输入：从 PDF 文本层提取的单页文字，以及仓库生成的 IRS 表单与页面类型候选；空白页由代码直接处理。
- Jev 判断：Jev Choice 选择表单及 7 种页面类别；少数表单族再做一次子表单选择，返回概率。
- 后续动作：程序输出表单 ID、页面类别和置信度；默认仅在表单置信度达到 0.95 时放行后续自动路由，低分交给调用方处理。
- 核验边界：仅英文联邦税表；扫描件需先 OCR，州税表只辨类别不识别具体表。页面文字送往 TypeSafe；准确率、速度和费用来自作者评测，本站未复测或用于报税。
- 来源：[GitHub](https://github.com/kyotofin/tax-doc-classifier) · [Source code](https://github.com/kyotofin/tax-doc-classifier/blob/main/src/backend.ts)

### NetHack 合法动作选择

- 作者：statico
- 输入：NetHack 终端画面、当前角色状态及程序在这一回合列出的合法动作。
- Jev 判断：Jev 以 Choice 只从合法动作列表中选下一步，不生成任意按键指令。
- 后续动作：项目的 motor 将所选动作映射成按键，执行后重新读取画面并进入下一回合。
- 核验边界：默认运行需要本地编译的 NetHack 与付费 TypeSafe API key；源码也支持兼容协议的本地服务。仓库展示运行和决策日志，但本站未验证通关、游戏成功率或成本。
- 来源：[GitHub](https://github.com/statico/jev-nethack) · [Source code](https://github.com/statico/jev-nethack/blob/main/jev/jevapi.py)

### jevvium 手机验收测试生成

- 作者：AndresCarreonDiaz
- 输入：YAML 验收目标、Appium 读取的当前屏幕和可操作控件，以及可选的明确断言。
- Jev 判断：Jev 在一次请求中用 Choice 选下一动作、用 Noul 判断目标是否已达成，并从给定输入中选择字段值。
- 后续动作：Appium 执行动作；达到目标且断言成立后，工具生成固定选择器的 WebdriverIO 测试，并用不调用模型的 Appium 回放核验。
- 核验边界：需要 Appium、设备或模拟器及 TypeSafe key。若验收条件没有 expect，通过判定可能只依据模型判断；作者的耗时和通过率未由本站复测。
- 来源：[GitHub](https://github.com/AndresCarreonDiaz/jevvium) · [Source code](https://github.com/AndresCarreonDiaz/jevvium/blob/main/src/providers/jev.ts)

### RAG 段落筛选与可回答性门控

- 作者：MersivMedia
- 输入：待入库文档段落、用户查询和向量库检出的候选片段。
- Jev 判断：Jev 对段落和片段做封闭判断：是否杂质、是否面向 AI 的指令、是否相关或与问题前提冲突，以及现有证据能否回答。
- 后续动作：代码按阈值丢弃或隔离段落、排序并保留证据；可回答时才构建给生成模型的提示，否则拒答。
- 核验边界：需另配向量库与嵌入模型；无 Jev key 时可降级为普通向量排序。README 的命中率、抗注入和成本为作者自报，本站未复测。
- 来源：[GitHub](https://github.com/MersivMedia/jev-rag-retrieval) · [Source code](https://github.com/MersivMedia/jev-rag-retrieval/blob/main/jev_retrieval/jev/client.py)

### Rox 销售资料检索离线实验

- 作者：Rox
- 输入：75 条近似生产的销售查询及从通话转录、邮件、CRM、新闻和文档检出的候选片段。
- Jev 判断：Jev Score 用“不相关、稍相关、大致相关、直接相关”四级规则评判各候选片段。
- 后续动作：团队按评分重排候选，并与 GPT-5 Mini 的重排及另一模型建立的基准标签作离线比较。
- 核验边界：仅作者原帖和实验图片，未取得代码或样本；75 条查询规模有限。速度、成本及准确率均为作者自报，本站未复测，不能称已在生产检索中部署。
- 来源：[Author X](https://x.com/rox_ai/status/2104642687534293353) · [Method thread](https://x.com/rox_ai/status/2104642689455292721) · [TypeSafe X](https://x.com/typesafeai/status/2105356405998063911)

### 风险画像监控与分层调查

- 作者：Edward Irby / youdotcom-oss
- 输入：用户定义的风险主题、地点和触发条件，以及 You.com 返回的当前摘要与来源。
- Jev 判断：Jev Noul 判有无实质威胁并筛选查询提案，Score 评结果相关性，Choice 从低、中、严重三级选最终级别。
- 后续动作：代码按阈值记录清洁巡检或启动限额深查；Qwen 仅提议查询和合成报告，程序保存带来源的报告及判断概率。
- 核验边界：作者公开了三次实时巡检，但成本、结果质量及风险报告内容未由本站复核；外部检索和模型服务会接收相应上下文。
- 来源：[GitHub](https://github.com/youdotcom-oss/risk-analysis-server) · [Author X](https://x.com/edwardirby/status/2105695667486355848) · [Source code](https://github.com/youdotcom-oss/risk-analysis-server/blob/main/src/services/jev.ts)

### 知识库写入准入离线评测

- 作者：Nicia
- 输入：待写入记录、5 至 9 条已有记录，以及修改记录的旧版本；仓库用 85 条合成样本评估。
- Jev 判断：Jev Choice 对每条记录判断冲突、重述或兼容，并对修改判更正、改写、补充或变义。
- 后续动作：评测代码汇总概率，只有低风险判断足够确定才模拟自动接纳，否则转人工；与其他决策模型对照。
- 核验边界：85 条均为虚构组织的合成案例；作者的正确率、顺序稳定性和延迟不是本站复测，更不能当作真实生产准入质量。
- 来源：[GitHub](https://github.com/nicia-ai/admission-decision-eval) · [Source code](https://github.com/nicia-ai/admission-decision-eval/blob/main/run.mjs)

### Wisp 语音桌面动作路由

- 作者：duketopceo
- 输入：按键录下的语音转写、近期会话及当前窗口等受限上下文。
- Jev 判断：Jev 经 OpenRouter Decisions 以 Choice 选启动应用、工具、代理、回答或澄清，并判断具体目标。
- 后续动作：守护进程按风险级别调用桌面工具或启动编码代理；普通问答由单独的聊天模型生成文字，危险 shell 动作需确认。
- 核验边界：主要面向 Linux Omarchy/Hyprland，macOS 为作者提供的移植；运行需麦克风、转写模型和 OpenRouter key，语音上下文可能送外部。本站未在真实桌面复现。
- 来源：[GitHub](https://github.com/duketopceo/wisp) · [Source code](https://github.com/duketopceo/wisp/blob/master/wisp/pipeline.py)

### claude-referee 完成声明核对

- 作者：ismaildasci
- 输入：Claude Code 的测试或 lint 输出，以及用户写出的明确完成条件。
- Jev 判断：代码先解析退出码、跳过测试及摘要，再让 Jev 对每条条件用 Noul 判断现有证据是否足以支持。
- 后续动作：CLI 输出 met、unsure 或 missing 并留本地收据，让使用者补跑或检查缺失证据。
- 核验边界：当前自动 Stop hook 仅为 shadow 记录；阻止停止的 active 模式仍在计划中。顺序敏感与成本数据为作者自报，本站未复测，不能说项目已自动拦截不实完成声明。
- 来源：[GitHub](https://github.com/ismaildasci/claude-referee) · [Source code](https://github.com/ismaildasci/claude-referee/blob/main/src/cli/commands/done.ts)

### PageIndex + Jev 长文档分层找页

- 作者：PageIndex / VectifyAI
- 输入：用户问题和 PageIndex 从 PDF 构建的章节树：节点标题、摘要、页码范围及页文本。
- Jev 判断：Jev Choice 逐层选择最可能回答问题的章节和页面；Noul 再判断候选页是否确有回答信息。
- 后续动作：代码按树路径缩小候选并返回页码、文本和判断轨迹，供调用者查证；项目本身不生成最终答案。
- 核验边界：需要 TypeSafe 和 PageIndex API key；PDF 上传 PageIndex 云端。仓库演示与搜索效果未由本站复测，候选页仍需核对原文。
- 来源：[GitHub](https://github.com/VectifyAI/jev-doc-search) · [Author X](https://x.com/PageIndexAI/status/2105896667446940134) · [Source code](https://github.com/VectifyAI/jev-doc-search/blob/main/tree_search.py)

### Claude Code 自动模式权限预判

- 作者：Madison Rickert
- 输入：Claude Code auto mode 待审批的工具调用、近期用户消息及项目路径。
- Jev 判断：Jev 一次回答八个 Noul：调用是否符合请求、各项风险及是否含自称已获批准的引导文字；代码按阈值判 allow、deny 或 defer。
- 后续动作：明显可允许的调用跳过原生分类器，明确危险且未请求的调用被阻止；不确定的仍交回 Claude Code 原生分类器。
- 核验边界：仅适用于可用 mods 的 Claude Code auto mode。待审批命令和近期消息可能发给 TypeSafe，包括未被规则识别的内嵌秘密；模型错误回退原生分类器。作者延迟与安全样本结果未经本站复测，不能视为通用安全保证。
- 来源：[GitHub](https://github.com/madisonrickert/jev-permission-gate) · [Author X](https://x.com/MadisonJRickert/status/2106183706989953339) · [Source code](https://github.com/madisonrickert/jev-permission-gate/blob/main/hooks/policy.ts)

### 稀薄气体流动的受限决策与求解

- 作者：cfdgasman
- 输入：用户用自然语言描述平板间的气体流动，代码先识别数字和物理单位。
- Jev 判断：Jev Choice 在封闭选项中识别流型、几何、气体及各量值的角色；代码据置信度决定运行、追问或拒绝。
- 后续动作：确定性代码计算 Knudsen 数、选择适用的流体或动力学求解器，并输出有单位的剪切应力或流量。
- 核验边界：只覆盖仓库支持的平板 Couette/Poiseuille 场景；作者对求解器与 Jev 成本的校验未由本站复跑。录制答案可离线重放，不能把每次示例运行都说成实时 Jev 调用。
- 来源：[GitHub](https://github.com/cfdgasman/jev-cfd-copilot) · [Source code](https://github.com/cfdgasman/jev-cfd-copilot/blob/main/copilot/plan.py)

### Jev 批量重排 Agent 记忆候选

- 作者：kitfunso
- 输入：用户检索问题和本地记忆库预检索出的最多 40 条候选，内容先截断并做秘密信息过滤。
- Jev 判断：Jev 在一次 System One 请求中对每条候选回答一个 Noul：它是否有助于回答问题，并返回相关性概率。
- 后续动作：代码按概率重排并将记忆交给后续回答步骤；请求失败或答案不完整时回退到本地交叉编码器。
- 核验边界：Jev 重排需显式启用，会把查询和候选记忆发给 TypeSafe。作者两个语料的排名提升未由本站复测；其评测未显示最终回答优于免费重排器，最高分也不证明候选含答案。
- 来源：[GitHub](https://github.com/kitfunso/hippo-memory) · [Source code](https://github.com/kitfunso/hippo-memory/blob/master/src/rerankers/jev.ts) · [Author evaluation](https://github.com/kitfunso/hippo-memory/blob/master/docs/evals/2026-09-19-jev-reranker.md)

### Jev 筛选社交素材研究样本

- 作者：SeeYangZhi
- 输入：平台帖子经字幕、画面文字、标题、评论与互动数据转成带来源的文字证据包。
- Jev 判断：Jev 对每个帖子按固定 rubric 回答类型化问题，判断是否值得进入后续研究候选。
- 后续动作：代码按阈值和多样性筛选少数素材，再将幸存者交给 Claude 解释模式、草拟创意。
- 核验边界：仓库说明后端及 fixture 流程已实现，前端仍在计划中；本站只核对源码和 README，未接入真实平台或复测筛选质量，Jev 与 Claude 服务均需凭据。
- 来源：[GitHub](https://github.com/SeeYangZhi/clipsieve) · [Source code](https://github.com/SeeYangZhi/clipsieve/blob/main/backend/clipsieve/judge/typesafe_client.py)

### Jev 在编码 Agent 编辑后检查团队规则

- 作者：Chris Korhonen
- 输入：编码 Agent 刚修改的文件内容及仓库配置的团队规则。
- Jev 判断：TypeSafe Jev 对各条规则作 Noul 判断，返回是否出现需要提醒的违例概率。
- 后续动作：编辑钩子及时把疑似违例反馈给 Agent 修复，并记录检查；服务异常时放行编辑。
- 核验边界：可改用 Cloudflare Clef，但作者称其准确率尚未测量；演示视频含示意场景。README 的延迟、成本及违例下降来自作者实验，本站未复测，也不替代确定性 lint 与人工审查。
- 来源：[GitHub](https://github.com/ckorhonen/jev-lint) · [Source code](https://github.com/ckorhonen/jev-lint/blob/main/src/jev.ts) · [Author X](https://x.com/ckorhonen/status/2106503620002996467)

## 开源项目 / Open-source projects (106)

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
| [neozhu/jev-audit](https://github.com/neozhu/jev-audit) | community | MIT | 0 |
| [JevAdvBench/JevAdvBench](https://github.com/JevAdvBench/JevAdvBench) | community | MIT (code); CC BY-NC 4.0 (data) | 0 |
| [dzhng/jevgrep](https://github.com/dzhng/jevgrep) | community | MIT | 182 |
| [suraj-phanindra/wellposed](https://github.com/suraj-phanindra/wellposed) | community | MIT | 2 |
| [brnyxx/jev-ra](https://github.com/brnyxx/jev-ra) | community | MIT | 5 |
| [ohernandezdev/jevmod](https://github.com/ohernandezdev/jevmod) | community | MIT | 1 |
| [Brainwires/jevwire](https://github.com/Brainwires/jevwire) | community | MIT | 22 |
| [Friedjof/jev-mobile](https://github.com/Friedjof/jev-mobile) | community | MIT | 7 |
| [disler/ten-levels-of-jev](https://github.com/disler/ten-levels-of-jev) | community | MIT | 5 |
| [awlevin/typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) | community | MIT | 1044 |
| [thruwire/foreman](https://github.com/thruwire/foreman) | community | MIT | 608 |
| [rmalde/minecraft-agent](https://github.com/rmalde/minecraft-agent) | community | unknown | 571 |
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | community | unknown | 421 |
| [droidrun/mobile-jev](https://github.com/droidrun/mobile-jev) | community | MIT | 422 |
| [moritzkremb/jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser) | community | MIT | 365 |
| [RomanSlack/jev-drone](https://github.com/RomanSlack/jev-drone) | community | MIT | 225 |
| [0xNatoshi/jev-codex-router](https://github.com/0xNatoshi/jev-codex-router) | community | MIT | 277 |
| [tamaratran/jev-pruner](https://github.com/tamaratran/jev-pruner) | community | MIT | 153 |
| [jexp/neo4jev](https://github.com/jexp/neo4jev) | community | MIT | 152 |
| [y0usaf/pi-jev](https://github.com/y0usaf/pi-jev) | community | MIT | 151 |
| [ChetasLua/jevmeter](https://github.com/ChetasLua/jevmeter) | community | MIT | 101 |
| [mrnugget/jev-shell-history](https://github.com/mrnugget/jev-shell-history) | community | unknown | 115 |
| [w3cj/jev-chat](https://github.com/w3cj/jev-chat) | community | MIT | 104 |
| [realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock) | community | MIT | 87 |
| [fazlerocks/jevmail](https://github.com/fazlerocks/jevmail) | community | MIT | 90 |
| [AboveColin/HA-Jev](https://github.com/AboveColin/HA-Jev) | community | MIT | 69 |
| [anishfn/shapeshift](https://github.com/anishfn/shapeshift) | community | MIT | 738 |
| [openlayer-ai/jevals](https://github.com/openlayer-ai/jevals) | community | MIT | 97 |
| [GhalebDweikat/winnow](https://github.com/GhalebDweikat/winnow) | community | MIT | 100 |
| [jev-chat/jev-chat-jarvis](https://github.com/jev-chat/jev-chat-jarvis) | community | MIT | 7075 |
| [TheoLeeCJ/SemIf-OpenJev](https://github.com/TheoLeeCJ/SemIf-OpenJev) | inspired | MIT | 4560 |
| [nokia-applied-research/AnyJev](https://github.com/nokia-applied-research/AnyJev) | inspired | Apache-2.0 | 938 |
| [wfzyx/von](https://github.com/wfzyx/von) | inspired | Apache-2.0 | 767 |
| [featherless-ai/simple-jev](https://github.com/featherless-ai/simple-jev) | inspired | Apache-2.0 | 568 |
| [razorback16/openjev](https://github.com/razorback16/openjev) | inspired | Apache-2.0 | 521 |
| [Yinsongxu/LLM2Jev](https://github.com/Yinsongxu/LLM2Jev) | inspired | Apache-2.0 | 370 |
| [ekzhang/openjev-sglang](https://github.com/ekzhang/openjev-sglang) | inspired | unknown | 332 |
| [logan-markewich/jeff](https://github.com/logan-markewich/jeff) | inspired | MIT | 264 |
| [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | inspired | Apache-2.0 | 28212 |
| [heyjunpenn/awesome-jev](https://github.com/heyjunpenn/awesome-jev) | community | MIT | 895 |
| [v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools) | community | unknown | 732 |
| [AnotiaWang/awesome-jev](https://github.com/AnotiaWang/awesome-jev) | community | CC0-1.0 | 567 |
| [wuyoscar/jev-skill](https://github.com/wuyoscar/jev-skill) | community | MIT | 543 |
| [kitze/unclutter](https://github.com/kitze/unclutter) | community | MIT | 337 |
| [BillionsBobby/JevRouter](https://github.com/BillionsBobby/JevRouter) | community | MIT | 288 |
| [vinilana/jev-gateway](https://github.com/vinilana/jev-gateway) | community | MIT | 252 |
| [fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench) | community | MIT | 176 |
| [jev-chat/jev-chat-windows](https://github.com/jev-chat/jev-chat-windows) | community | unknown | 685 |
| [obie/ruby_decision_model](https://github.com/obie/ruby_decision_model) | community | MIT | 52 |
| [openqa-cn/jev-browser](https://github.com/openqa-cn/jev-browser) | community | MIT | 104 |
| [columnar-tech/jevaro](https://github.com/columnar-tech/jevaro) | community | Apache-2.0 | 10 |
| [Ice-Hazymoon/jevwright](https://github.com/Ice-Hazymoon/jevwright) | community | MIT | 12 |
| [duberblock/JEVals](https://github.com/duberblock/JEVals) | community | MIT | 2 |
| [kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | community | Apache-2.0 | 483 |
| [typesafe-ai/n8n-nodes-typesafe-ai](https://github.com/typesafe-ai/n8n-nodes-typesafe-ai) | official | MIT | 2 |
| [typesafe-ai/WorkflowEvals](https://github.com/typesafe-ai/WorkflowEvals) | official | Apache-2.0 | 12 |
| [statico/jev-nethack](https://github.com/statico/jev-nethack) | community | MIT | 0 |
| [AndresCarreonDiaz/jevvium](https://github.com/AndresCarreonDiaz/jevvium) | community | MIT | 1 |
| [MersivMedia/jev-rag-retrieval](https://github.com/MersivMedia/jev-rag-retrieval) | community | MIT | 0 |
| [youdotcom-oss/risk-analysis-server](https://github.com/youdotcom-oss/risk-analysis-server) | community | MIT | 2 |
| [duketopceo/wisp](https://github.com/duketopceo/wisp) | community | MIT | 0 |
| [ismaildasci/claude-referee](https://github.com/ismaildasci/claude-referee) | community | MIT | 3 |
| [reindent/jauvex](https://github.com/reindent/jauvex) | community | Apache-2.0 | 5 |
| [jonathanavis96/jev-kit](https://github.com/jonathanavis96/jev-kit) | community | MIT | 55 |
| [nicia-ai/admission-decision-eval](https://github.com/nicia-ai/admission-decision-eval) | community | Apache-2.0 | 0 |
| [VectifyAI/jev-doc-search](https://github.com/VectifyAI/jev-doc-search) | community | Apache-2.0 | 48 |
| [madisonrickert/jev-permission-gate](https://github.com/madisonrickert/jev-permission-gate) | community | MIT | 5 |
| [cfdgasman/jev-cfd-copilot](https://github.com/cfdgasman/jev-cfd-copilot) | community | MIT | 0 |
| [BareIQ/Jev.TypeSafe.AI](https://github.com/BareIQ/Jev.TypeSafe.AI) | community | MIT | 0 |
| [dante01yoon/ComfyUI-SystemOne](https://github.com/dante01yoon/ComfyUI-SystemOne) | community | MIT | 0 |
| [rodrigojager/pi-workspace-search](https://github.com/rodrigojager/pi-workspace-search) | community | MIT | 0 |
| [aktonay/snapdec](https://github.com/aktonay/snapdec) | community | Apache-2.0 | 0 |
| [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | community | MIT | 770 |
| [deepnoodle-ai/decide](https://github.com/deepnoodle-ai/decide) | community | Apache-2.0 | 0 |
| [SeeYangZhi/clipsieve](https://github.com/SeeYangZhi/clipsieve) | community | Apache-2.0 | 0 |
| [DAXZEIT/Pi-JEV-VCC-memory-relevance](https://github.com/DAXZEIT/Pi-JEV-VCC-memory-relevance) | community | MIT | 0 |
| [NaokiKomura/x-bookmark-digest-template](https://github.com/NaokiKomura/x-bookmark-digest-template) | community | MIT | 0 |
| [ckorhonen/jev-lint](https://github.com/ckorhonen/jev-lint) | community | MIT | 6 |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | inspired | MIT | 130238 |

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
