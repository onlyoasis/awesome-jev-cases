# Jev 案例与项目目录 / Jev catalog

本目录由结构化数据生成。来源链接指向原作者；官方标签仅用于 TypeSafe 一手资料。

## 深度使用案例 / Worked cases (151)

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

### 思源 AI 工具调用的 Jev 自动审查

- 作者：wmy2981
- 输入：思源 AI 待确认的工具名称、参数与影响，以及用户请求和 Agent 自述意图；过长字段截断并标记省略。
- Jev 判断：Jev 一次请求回答两个 Choice（是否获用户授权、操作影响等级）和一个 Noul（待审内容是否自称已获授权）。
- 后续动作：代码校验回答并按置信度阈值决定 allow、deny 或 ask；非仅提示模式下操作原生审批卡片，疑问则保留给用户。
- 核验边界：仅在思源已配置并启用决策模型且会话选择自动审查时生效。工具参数和用户请求可能送到模型服务；授权判断可能误判，本站未在真实会话验证自动批准行为。
- 来源：[GitHub](https://github.com/wmy2981/auto-review-siyuan) · [Decision request](https://github.com/wmy2981/auto-review-siyuan/blob/dev/src/autoReview/decision.ts) · [Policy and action](https://github.com/wmy2981/auto-review-siyuan/blob/dev/src/autoReview/controller.ts)

### Jev 为七种棋类选择合法着法

- 作者：tripodxu
- 输入：当前棋局、执棋方、引擎枚举的合法着法及确定性战术事实。
- Jev 判断：Jev 的 Choice 对候选着法给出概率；代码只接受与引擎合法着法匹配的选项。
- 后续动作：战术层可优先处理致胜或防败着法；否则代码取最高概率或在前几项中按概率采样，再由棋局引擎执行并记录。
- 核验边界：仓库另有 mock、随机和 Rapfi 渠道，并非每局都调用 Jev；线上站点与胜率为作者材料，本站只核对源码，未实战复现。
- 来源：[GitHub](https://github.com/tripodxu/board-games) · [Source code](https://github.com/tripodxu/board-games/blob/main/src/core/jev/client.ts)

### Factorio 的 Jev 宏观目标与动作选择

- 作者：jevplays-games
- 输入：游戏快照中的资源、物品栏、机器状态和位置；代码先枚举当前能执行的动作。
- Jev 判断：Jev 在一次 System One 请求中以 Choice 选目标和下一动作，以 Noul 判断是否卡住，以 Score 评估调整紧急度。
- 后续动作：代码核验动作仍在候选中并设置置信度门槛；达标则让后端执行，否则改用确定性策略，再读取执行后状态并留记录。
- 核验边界：无 key 的离线 mock 是规则替身，不是 Jev 实测；原生 Factorio/FLE 需专用可重置世界。基础循环虽记录执行后状态，未定义完整后置条件验证；本站未运行游戏。
- 来源：[GitHub](https://github.com/jevplays-games/jev-factorio-agent) · [Questions](https://github.com/jevplays-games/jev-factorio-agent/blob/main/src/jev_factorio/questions.py) · [Decision loop](https://github.com/jevplays-games/jev-factorio-agent/blob/main/src/jev_factorio/loop.py)

### Spring AI 用 Jev 有界纠正模型回答

- 作者：Spring AI Community
- 输入：原始请求、模型候选回答和 advisor 顺序允许看到的工具调用或检索上下文。
- Jev 判断：JevJudge 对标准分别提出 Noul、Choice 或 Score，代码按各自阈值给出通过、失败或不确定；可确定的 Java predicate 检查在本地完成。
- 后续动作：advisor 对未通过回答从原请求重建反馈并有界重试；返回通过的回答，或按配置返回最佳候选／抛错。
- 核验边界：非官方 Spring AI 扩展；瞬时 judge 失败默认可返回未经评审的答案，工具是否随重试再执行取决于 advisor 顺序。此纠正流程不支持流式输出，本站未调用 API 或证明答案质量提高。
- 来源：[GitHub](https://github.com/spring-ai-community/spring-ai-typesafe) · [Judge contract](https://github.com/spring-ai-community/spring-ai-typesafe/blob/main/docs/judge/JevJudge.md) · [Advisor source](https://github.com/spring-ai-community/spring-ai-typesafe/blob/main/typesafe-spring-ai/src/main/java/org/springaicommunity/typesafe/advisor/JevSelfRefineAdvisor.java)

### Jev 在 Magic 对局中选择并校验合法动作

- 作者：Vincent Bons / wingedsheep
- 输入：当前玩家视角的掩码游戏快照、牌组和引擎提供的可支付合法动作；不给模型调试日志中的对手抽牌信息。
- Jev 判断：OpenRouter Jev 以原生 Choice 分阶段选择出牌及目标等细项，也处理起手换牌与轮抽；只接受程序给定的选项 ID。
- 后续动作：代码组装动作并让权威引擎校验；拒绝后向 Jev 提供错误做一次纠正，仍失败或预算用尽时回退到内置 AI。
- 核验边界：Jev 接入目前限定本地开发模式，仍需 OpenRouter key。项目包含大量规则与可选模型渠道，不是每局都调用 Jev；本站未验证完整 Magic 规则覆盖、实战表现或延迟。
- 来源：[GitHub](https://github.com/wingedsheep/argentum-engine) · [Controller source](https://github.com/wingedsheep/argentum-engine/blob/main/ai/src/main/kotlin/com/wingedsheep/ai/jev/JevAiPlayerController.kt) · [Jev client](https://github.com/wingedsheep/argentum-engine/blob/main/ai/src/main/kotlin/com/wingedsheep/ai/jev/JevClient.kt)

### Reflex：遥测驱动的熔断与恢复探测

- 作者：Datadog Labs / @ArunPar10
- 输入：当前熔断状态与版本、Datadog 短/长窗口中的失败率、超时、延迟及队列信息，可选 Toto 预测。
- Jev 判断：Jev 通过一个 Choice 在 Open、Probe、NoChange 中提议动作；预测只能作为证据，不能替代恢复探测。
- 后续动作：执行器检查版本、遥测时效、冷却时间与状态约束后才改变熔断状态；连续 5 次成功探测由代码闭合，失败探测重新打开，推理失败保持原状态。
- 核验边界：依据作者提供的模拟器与真实 SDK 接入代码核验，本站未运行 Datadog/Toto/Jev，也未验证生产环境可靠性或收益。
- 来源：[GitHub](https://github.com/datadog-labs/reflex) · [Jev controller](https://github.com/datadog-labs/reflex/blob/7db760fa21f23d48bac086fcb81f20b0b309c36e/crates/reflex-sim/src/jev.rs) · [X](https://x.com/ArunPar10/status/2107628185592766684)

### Alertmanager：保留通知的告警分流

- 作者：gbesse
- 输入：Alertmanager 告警组的 alertname、service、severity 和 summary/description；截断或超过 10 条的组直接进入复核。
- Jev 判断：Jev 在 incident、routine、other 中做 Choice；代码把 other 或概率低于 0.9 的答案转为 review。
- 后续动作：中继向每个原始通知附加 jevDecision 后转发，不静默、抑制、解除或丢弃报警；Jev 失败仍以 review 转发，下游发送失败返回 503 供重试。
- 核验边界：作者说明只用合成输入试过 Jev API，没有真实 Alertmanager 实例；本站仅核查源码与 README，未测生产告警、端到端投递或模型分类质量。
- 来源：[GitHub](https://github.com/gbesse/alertmanager-jev-triage) · [Jev API adapter](https://github.com/gbesse/alertmanager-jev-triage/blob/8918272db7f12baf6bd8af8e6ff73f508014e78f/jev.py) · [Relay](https://github.com/gbesse/alertmanager-jev-triage/blob/8918272db7f12baf6bd8af8e6ff73f508014e78f/triage.py)

### Jevons Talking：有限菜单逐键拼句

- 作者：kmosher
- 输入：用户问题、已拼文本、最近按键，以及 WordNet 预测词、字母、标点、退格和结束键组成的菜单。
- Jev 判断：每步 Jev 通过 Choice 选择当前菜单中的一键；程序还可用 Noul 判断是否结束或需要修正。
- 后续动作：代码追加词或字符、更新前缀预测、执行退格或结束，并记录概率轨迹；步数预算限制循环。
- 核验边界：实验受字典与菜单限制，仓库转录只是作者样本；本站未调用 API、验证回复质量或认证辅助沟通用途。
- 来源：[GitHub](https://github.com/kmosher/jevons-talking) · [Source](https://github.com/kmosher/jevons-talking/blob/e2acaa1ed763707da08c7ac4e0be7ba594db970f/talk.ts)

### Railroad Route：一句话控制矿车开关

- 作者：vinicius-francozo
- 输入：玩家写的英文或葡文句子、已布置轨道和本关所有开关的有限问题。
- Jev 判断：一次 Jev 请求并行判断 Choice 出口、Noul 闸门与 Score 等级；程序按阈值或四舍五入读为具体开关结果。
- 后续动作：服务端验证答案后逐格模拟矿车，返回到矿、错误隧道或脱轨结果，并按路径、置信边界和用轨数评分。
- 核验边界：限定五关的游戏，作者实时 API 测试和延迟为自报，参考解与回放不等于本站复现，也不是通用物理规划器。
- 来源：[GitHub](https://github.com/vinicius-francozo/railroad-route) · [Source](https://github.com/vinicius-francozo/railroad-route/blob/49ce76a59d774aed5624f279bdac9dc5f612f82e/backend/railroad/jev.py) · [Source](https://github.com/vinicius-francozo/railroad-route/blob/49ce76a59d774aed5624f279bdac9dc5f612f82e/backend/railroad/simulate.py)

### sift：生成简报前筛选信息与来源

- 作者：BeforeLanding
- 输入：配置中的用户兴趣、多来源候选条目及来源摘要。
- Jev 判断：真实 Jev 后端对条目批量做 Score 价值判断，用 Noul 评估来源是否值得生成报告。
- 后续动作：按配置阈值筛选后交给 LLM 生成双语简报；调用失败或不确定时保留候选，过滤后全空的来源保留少量高分条目。
- 核验边界：真实 SDK 和 mock 分开；本站仅核查源码，没有验证作者的节省量、简报发布结果或被过滤信息的召回率。
- 来源：[GitHub](https://github.com/BeforeLanding/sift) · [Source](https://github.com/BeforeLanding/sift/blob/fd3c9796a5ccb962f94411b5e562f8eb540ff70e/src/jev/real.ts) · [Source](https://github.com/BeforeLanding/sift/blob/fd3c9796a5ccb962f94411b5e562f8eb540ff70e/src/jev/filter.ts)

### JevBot：先观察再按策略审核 Discord 消息

- 作者：OGZamasu
- 输入：当前 Discord 消息、同作者最近消息，以及频道规则和历史违规记录。
- Jev 判断：Jev Choice 区分 spam、legitimate、uncertain；代码再核对垃圾概率、置信度和确定性规则。
- 后续动作：新服务器默认 Observe，只记录；不确定结果进入人工复核。配置允许后可告警、删帖或超时，执行前再读设置并记录失败，不自动封禁。
- 核验边界：需要自有 Discord、Cloudflare 和 TypeSafe 配置；本站未连接真实服务器、验证身份控制、误判率或线上删除结果。
- 来源：[GitHub](https://github.com/OGZamasu/JevBot) · [Source](https://github.com/OGZamasu/JevBot/blob/f14fac27f0aabac0d7de9f508259b99c6087be08/worker/jev.ts) · [Source](https://github.com/OGZamasu/JevBot/blob/f14fac27f0aabac0d7de9f508259b99c6087be08/shared/moderation.ts) · [Source](https://github.com/OGZamasu/JevBot/blob/f14fac27f0aabac0d7de9f508259b99c6087be08/worker/gateway.ts)

### HiringCafe：搜索词与简历的职位相关度评分

- 作者：Hamed Nilforoshan / HiringCafe
- 输入：用户搜索词或简历与一条职位描述。
- Jev 判断：作者称 Jev 将匹配相关度评为 1–10 分，并与其他模型及团队人工标注比较。
- 后续动作：作者称把这些判断用于 HiringCafe 职位搜索和简历匹配结果；本次原帖提供了两个相关度任务的评测。
- 核验边界：仅作者原帖及 TypeSafe 推荐，无可检查源码。500 条团队标注样本、用户规模、费用与效果均为作者自报，本站未取得样本或复现评测，也不猜具体 API 请求形状。
- 来源：[Author post](https://x.com/h_nilforoshan/status/2107643820150308932) · [Matching use](https://x.com/h_nilforoshan/status/2107644837407404340) · [TypeSafe recommendation](https://x.com/typesafeai/status/2107958916684632396)

### Jev accounting：交易分类后生成复核 CSV

- 作者：darrentmorgan
- 输入：CSV 中的交易描述、有符号金额和币种，以及固定的示例账户类别。
- Jev 判断：Jev Choice 选类别；代码读取所选类别概率，低于 0.85、缺失、非法答案或 Unassigned 都进入复核。
- 后续动作：保留原始交易与顺序，同时展示建议、分配和复核原因，导出 CSV；原型没有向记账系统写入。
- 核验边界：v0.1 原型、八条合成示例；作者的烟测不证明会计准确率或节省量。本站未提交真实交易、调用 Gateway 或复现记账结果。
- 来源：[GitHub](https://github.com/darrentmorgan/jev-accounting) · [Source](https://github.com/darrentmorgan/jev-accounting/blob/b9548f98e2f172d6096c258c7c7a9a69ee83ba7c/src/classifier.ts) · [Source](https://github.com/darrentmorgan/jev-accounting/blob/b9548f98e2f172d6096c258c7c7a9a69ee83ba7c/src/catalog.ts)

### mappity：用概率点亮符合愿望的地点

- 作者：kortexa-ai
- 输入：用户自然语言愿望、代码获取的场所类型、地点事实和可选街景上下文。
- Jev 判断：Jev 先做有限请求分类与场所类型判断，再用 Noul 判断地点和街道是否匹配；为高分结果从已有事实中选解释。
- 后续动作：代码执行地理查询与硬约束过滤，必要时组合地点/街道概率，将匹配结果在地图上高亮并展示选中的事实。
- 核验边界：依据 Jev SDK 接线与作者演示核验，本站未测真实地图召回、定位或效果；可选 Shingi 是独立模型，其校准不能外推到本应用。
- 来源：[GitHub](https://github.com/kortexa-ai/mappity) · [Source](https://github.com/kortexa-ai/mappity/blob/ab91ebb7a24d125e70d858d613e31719e5306a46/server/jev.js) · [Source](https://github.com/kortexa-ai/mappity/blob/ab91ebb7a24d125e70d858d613e31719e5306a46/server/pipeline.js)

### ex-regex：按含义查找和替换原文片段

- 作者：nothans
- 输入：原始文本、代码枚举的候选片段及自然语言匹配条件，例如哪些句子在请求退款。
- Jev 判断：Jev 对候选做有类型的语义判断，返回概率；库区分匹配、未匹配、不确定及调用失败。
- 后续动作：Python API 返回带偏移量的原文切片，并据结果执行查找、提取、替换或分割；代码提供缓存、回放和预算限制。
- 核验边界：原文切片限制了虚构字符串，但不保证匹配正确。作者合成评测与成本为自报，本站未调用模型、复测漏检或验证可靠脱敏。
- 来源：[GitHub](https://github.com/nothans/ex-regex) · [Source](https://github.com/nothans/ex-regex/blob/24230a4348db5ff2d269ebc1c62e19109962b4f1/src/exregex/backends.py) · [Source](https://github.com/nothans/ex-regex/blob/24230a4348db5ff2d269ebc1c62e19109962b4f1/src/exregex/engine.py)

### Vulnder：技术栈判断辅助漏洞信息匹配

- 作者：fullymiddleaged
- 输入：用户描述的技术栈、代码解析出的组件和候选产品名。
- Jev 判断：Jev Choice 判断规模和托管环境，Noul 判断注入、候选产品适配和外网暴露；缺失答案保留未知。
- 后续动作：代码使用这些判断辅助产品解析与暴露标记，再匹配 CVE；优先级由公开利用信号和确定性启发式规则计算，输出页面、JSON 或 Atom。
- 核验边界：Jev 失败时保留基础解析；技术栈写入可分享 URL。本站未验证漏洞覆盖、产品匹配或风险校准，相关排名只是该项目启发式输出。
- 来源：[GitHub](https://github.com/fullymiddleaged/vulnder) · [Source](https://github.com/fullymiddleaged/vulnder/blob/1ed2c9e9e97ef23a7add4008ac132a7745f5e9af/src/resolve/jev.ts)

### Jev Skill Typeahead：发送前预览 Skill 调用概率

- 作者：Daniel San / @dani_avila7
- 输入：正在输入的提示词和用户已安装的有限 Skill 候选。
- Jev 判断：作者称 Jev 预测哪些 Skill 最可能被 Claude 调用，并估计各项概率。
- 后续动作：界面在发送请求之前显示预测，供用户理解或调整提示；原帖还提供了公开源码链接。
- 核验边界：仅作者原帖与演示说明，本轮未精读该源码或核验预测准确率；没有推断具体 API primitive，也不把预计概率当作实际 Skill 执行保证。
- 来源：[Author post](https://x.com/dani_avila7/status/2108354971531973028) · [Author source link (not reviewed)](https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/mods/productivity/jev-skill-typeahead)

### VibeFilter：按自然语言条件过滤表格

- 作者：vibefilter
- 输入：用户输入的自然语言条件，以及其他 SQL 过滤后各行选定文本列。
- Jev 判断：Jev Noul 批量判断每行是否符合条件，代码读取概率并按可配置阈值筛选；默认阈值 0.8。
- 后续动作：缓存条件与文本对应的评分，显示通过阈值的表格行及可选评分列；大量未评分行会先让用户确认。
- 核验边界：MIT 社区插件，真实 TypeSafe 调用与过滤消费可查。本站未安装插件、运行 API 或复现作者演示的速度、成本与匹配质量。
- 来源：[GitHub](https://github.com/vibefilter/filament) · [Source](https://github.com/vibefilter/filament/blob/d254ad3cc458a96ca42e44450ec124417403c6b2/src/Drivers/TypeSafeDriver.php) · [Source](https://github.com/vibefilter/filament/blob/d254ad3cc458a96ca42e44450ec124417403c6b2/src/Tables/Filters/VibeFilter.php)

### README Clew：分类声明后交给代码核验

- 作者：earlgreyhot1701D
- 输入：README 的分段行、候选符号名及仓库依赖/文件快照。
- Jev 判断：Jev 经 Glasser 用 Choice 选有限声明类型，必要时从候选中选名称；置信度门槛拦下不确定结果。
- 后续动作：真实 scan 将答案交给确定性依赖、命令、环境变量和引用核验器，生成可证实、冲突或无法核验的报告；手动评测入口也调用真实模型。
- 核验边界：本轮新增真实模块后收录，旧 mock 路径仍用于离线测试；完整浏览器扩展/网页仍在开发。本站未运行付费评测或证明完整产品可用。
- 来源：[GitHub](https://github.com/earlgreyhot1701D/readme-clew-2) · [Source](https://github.com/earlgreyhot1701D/readme-clew-2/blob/86c87f1a305778e83af5ddd68cfe03bbf3bd1374/lib/jev.js) · [Source](https://github.com/earlgreyhot1701D/readme-clew-2/blob/86c87f1a305778e83af5ddd68cfe03bbf3bd1374/lib/pipeline.js) · [Source](https://github.com/earlgreyhot1701D/readme-clew-2/blob/86c87f1a305778e83af5ddd68cfe03bbf3bd1374/evaluation/run-eval.js)

### Attention Vaccine：在阅读时提示可疑写作手法

- 作者：nevrs
- 输入：用户许可站点中可见的帖子正文或文章开头，受长度限制，以及有限的写作手法问题。
- Jev 判断：Jev 批量 Noul 判断煽动、诈骗式引导或无依据泛化等写法；代码结合每项阈值与确定性检查。
- 后续动作：扩展为符合条件的内容添加提示标记，用户可查看问题原文、概率与说明；缓存和每日调用上限控制重复与预算。
- 核验边界：这是写法判断，不是内容真伪验证；启用的站点文字会发往模型后端。本站未安装扩展、运行 API 或复现作者评测，权限排除逻辑也未做独立隐私审计。
- 来源：[GitHub](https://github.com/nevrs/attention-vaccine) · [Source](https://github.com/nevrs/attention-vaccine/blob/1b8fec3082c010d506a3cf6da7faafff0a062bb1/background.js) · [Source](https://github.com/nevrs/attention-vaccine/blob/1b8fec3082c010d506a3cf6da7faafff0a062bb1/content.js) · [Source](https://github.com/nevrs/attention-vaccine/blob/1b8fec3082c010d506a3cf6da7faafff0a062bb1/checks.js)

### Heliotrope：家电重要度评分辅助负载排序

- 作者：StellarieX
- 输入：家电名称与类型、功率、预计完成时间和可延后窗口。
- Jev 判断：一批 Jev Score 按有限等级判断各负载对家庭的重要度；代码只采用达到置信度门槛的答案。
- 后续动作：代码将重要度与紧迫性、功率和弹性组合排序，输出供调度使用的优先级；模型缺失、失败或低置信度明确标示 heuristic/mixed。
- 核验边界：数学调度约束由代码负责；项目碳强度是代理估计。本站未调用模型、控制家电、验收电表数据或复现作者节能/减排效果。
- 来源：[GitHub](https://github.com/StellarieX/Heliotrope) · [Source](https://github.com/StellarieX/Heliotrope/blob/11fd609fb535a02a2bda10f70a106dfc3064c127/backend/app/services/jev_client.py) · [Source](https://github.com/StellarieX/Heliotrope/blob/11fd609fb535a02a2bda10f70a106dfc3064c127/backend/app/services/prioritization.py)

### ToolDiscoveryBench：选择 MCP 工具或弃权

- 作者：SarathChandraBellam
- 输入：任务请求、有限工具目录、服务说明与工具描述。
- Jev 判断：Jev Choice 从工具或服务候选中选择并返回概率；加入 NONE 或独立适配问题时，代码按同题概率判断是否弃权。
- 后续动作：平面、因子化或分层路由输出排序与弃权结果，评测器与基线比较并生成报告；不直接执行所选工具。
- 核验边界：只测工具发现，不证明 Agent 完整成功率；gold 由编码助手挑选。作者准确率、延迟与费用未由本站复现，其他后端结果不混称 Jev。
- 来源：[GitHub](https://github.com/SarathChandraBellam/ToolDiscoveryBench) · [Source](https://github.com/SarathChandraBellam/ToolDiscoveryBench/blob/ef0baf64dc0afef775d6cdbf15e7f922288b770f/src/tooldiscoverybench/routers/jev/client.py) · [Source](https://github.com/SarathChandraBellam/ToolDiscoveryBench/blob/ef0baf64dc0afef775d6cdbf15e7f922288b770f/src/tooldiscoverybench/routers/decisions/router.py)

### csgojev：从状态机的合法动作中选择游戏下一步

- 作者：vigneshshanmugam
- 输入：游戏感知到的距离、视线、脚步、生命值和时间，以及 XState 当前提供的合法动作。
- Jev 判断：Jev Choice 从合法候选中选择下一步，例如探出、停止、退回或等待；代码检查答案是否属于候选。
- 后续动作：TypeScript sidecar 把所选动作交给状态机与游戏引擎，后者负责移动、瞄准和物理；结果与其他策略基线比较。
- 核验边界：无 key 时为 mock；作者明确未证明胜过最佳手工脚本。本站未运行游戏或模型，速度/胜率是作者自报；完整仓库许可未确认，未列入开源项目目录。
- 来源：[GitHub](https://github.com/vigneshshanmugam/csgojev) · [Source](https://github.com/vigneshshanmugam/csgojev/blob/4d958fdf6e40573f6d1c5d947f831b00f946a7a8/cs16/sidecar/src/jevClient.ts) · [Source](https://github.com/vigneshshanmugam/csgojev/blob/4d958fdf6e40573f6d1c5d947f831b00f946a7a8/packages/jev/src/decide.ts)

### question-kit：让封闭判断驱动披萨店点单流程

- 作者：Engid
- 输入：点单、改单、菜单询问等对话，以及有限菜单、订单记录、工具与书面步骤。
- Jev 判断：Jev 读取有限意图、菜单/订单候选、所需槽位和确认；未达置信度门槛的读取交给追问或人工，而不直接执行。
- 后续动作：代码按流程返回工具调用；示例收银台修改订单后回报结果，回复由模板生成，不使用生成模型编写对话。
- 核验边界：alpha 库，模拟收银台并非真实支付或厨房接线；fake/replay 明确区分真实 Jev。本站未运行示例、API 或复测订单正确率。
- 来源：[GitHub](https://github.com/Engid/question-kit) · [Source](https://github.com/Engid/question-kit/blob/df8fbe84db95ea0676286187da0d4ba56c2ea9e2/packages/question-kit/core/typesafe.ts) · [Source](https://github.com/Engid/question-kit/blob/df8fbe84db95ea0676286187da0d4ba56c2ea9e2/packages/question-kit/service-agent/read.ts) · [Source](https://github.com/Engid/question-kit/blob/df8fbe84db95ea0676286187da0d4ba56c2ea9e2/examples/pizza-shop/chat.ts)

### DeciLabel：按证据添加 Issue 与 PR 标签

- 作者：EvanProgramming
- 输入：Issue/PR 标题、正文、有界 diff 与覆盖警告、仓库既有标签和已占用互斥组。
- Jev 判断：独立标签各问 Noul，互斥组用带 none 的 Choice；代码检查概率、默认 0.70 阈值与至少 0.20 的胜出差距，缺失/异常则弃权。
- 后续动作：写入前重新读取快照、标签定义和人工移除历史；通过后仅添加标签，不删除、替换或创建，也不运行提交者代码。
- 核验边界：真实 API 接线可查，但作者明确未 live 验证模型质量，24 个示例不是校准证明；GitHub 历史检查与添加并非原子。本站未安装 Action 或修改任何外部条目的标签。
- 来源：[GitHub](https://github.com/EvanProgramming/decilabel) · [Source](https://github.com/EvanProgramming/decilabel/blob/3493d0d9a6315fd043d2ff7c7571832c79a21b80/src/decisions.ts) · [Source](https://github.com/EvanProgramming/decilabel/blob/3493d0d9a6315fd043d2ff7c7571832c79a21b80/src/policy.ts) · [Source](https://github.com/EvanProgramming/decilabel/blob/3493d0d9a6315fd043d2ff7c7571832c79a21b80/src/main.ts)

### depgate：依赖更新的合并、复核与暂缓判断

- 作者：samiulhuda360
- 输入：Dependabot/Renovate 更新的发布说明、代码用法、CI 状态和安全公告。
- Jev 判断：一次 Jev 请求包含三分流 Choice、风险 Score 与四个 Noul，判断破坏性变化、是否影响仓库、安全修复和运行时变化。
- 后续动作：代码再按配置、置信度、风险、CI 与版本约束决定评论、标签和人工复核；允许自动合并时可批准并开启 GitHub auto-merge，dry-run 不写入。
- 核验边界：作者评测和团队故事不作本站验证的生产效果或安全保证。本站未调用 Jev、接入用户仓库、发送通知或执行任何批准/合并。
- 来源：[GitHub](https://github.com/samiulhuda360/depgate) · [Source](https://github.com/samiulhuda360/depgate/blob/ca76727f7509865a3fe055c769fc6f0d0ed9d10c/depgate/backends/jev.py) · [Source](https://github.com/samiulhuda360/depgate/blob/ca76727f7509865a3fe055c769fc6f0d0ed9d10c/depgate/questions.py) · [Source](https://github.com/samiulhuda360/depgate/blob/ca76727f7509865a3fe055c769fc6f0d0ed9d10c/depgate/policy.py) · [Source](https://github.com/samiulhuda360/depgate/blob/ca76727f7509865a3fe055c769fc6f0d0ed9d10c/depgate/gate.py)

### skimmer：只保留对目标有用的原文与列表项

- 作者：dorkitude
- 输入：目标说明、网页或文件的重叠文本块，以及原格式列表项。
- Jev 判断：每块或每项一个 Jev Noul 相关性问题，按上下文预算分批，代码解析 P(相关) 并用可配置阈值筛选。
- 后续动作：输出保留的原文、路径与行号，或按输入格式和顺序返回列表；部分失败的未判项默认保留，全请求失败报告错误。
- 核验边界：原文保留不保证召回；可选上限会再次裁剪，未判块也可能被排除。作者压缩率与质量未复现，本站未把真实工作材料发往模型。
- 来源：[GitHub](https://github.com/dorkitude/skimmer) · [Source](https://github.com/dorkitude/skimmer/blob/87f6584f9a317a7bd0df8ec85ce475ae199022a3/internal/jev/client.go) · [Source](https://github.com/dorkitude/skimmer/blob/87f6584f9a317a7bd0df8ec85ce475ae199022a3/internal/jev/judge.go) · [Source](https://github.com/dorkitude/skimmer/blob/87f6584f9a317a7bd0df8ec85ce475ae199022a3/internal/skim/skim.go)

### QQ：在已授权模型与推理强度中选择任务路线

- 作者：retsu-AI
- 输入：有界脱敏任务，以及当前配置、授权和认证可用的模型/推理强度元数据。
- Jev 判断：Jev Choice 从最多 32 个模型/强度组合中选择；代码同时检查合法候选、响应合同、置信度和胜出概率，后两项门槛均 0.7。
- 后续动作：主运行时重编译并校验所选路线后执行；未开启、超时、异常、不确定或路线不可用时保留原配置模型，明确选择仍由用户掌握。
- 核验边界：可选路由默认关闭；今日定位了实际 TypeSafe POST 与主运行时接线，关闭此前未核实线索。本站未运行 Agent 或证明任务质量、费用节省及完整审批安全。
- 来源：[GitHub](https://github.com/retsu-AI/qq) · [Source](https://github.com/retsu-AI/qq/blob/f5dbf2299de32cf0cbbd29124de029ee082dea10/src/runtime/routing.rs) · [Source](https://github.com/retsu-AI/qq/blob/f5dbf2299de32cf0cbbd29124de029ee082dea10/src/runtime.rs) · [Source](https://github.com/retsu-AI/qq/blob/f5dbf2299de32cf0cbbd29124de029ee082dea10/docs/adr/0034-concrete-jev-routing.md)

### 官方记忆示例：保存客户事实辅助后续工单路由

- 作者：TypeSafe AI
- 输入：当前工单、客户 ID 和该客户已保存的工单/答案。
- Jev 判断：先用 Choice 路由；再用 Noul 判断原请求与答案是否包含值得记住的长期客户事实。
- 后续动作：代码在 P(值得记忆)≥0.5 时按客户 ID 存入 Python dict；下次请求前把已有记忆加入 state，无论是否保存均返回路由答案。
- 核验边界：官方两名虚构客户、六个后续工单的小样例；0.5 是待评估起点，字典不是生产持久化/保留期限方案。效果仅官方自报，本站未运行 API 或复现改善。
- 来源：[Official cookbook](https://docs.typesafe.ai/cookbooks/basic_memory.md) · [Official replay cache](https://github.com/typesafe-ai/typesafe-public-examples/tree/25e9d373f4853b3e7e300e55a194f50e54838f68/cookbooks/basic_memory)

### ego-jev：让封闭判断完成多步浏览器流程

- 作者：Kim Jisub / kimjisub
- 输入：当前页面的有限控件、目标、调用方给定值与可见状态要求。
- Jev 判断：Jev 判断动作、目标元素和所用给定值；要求检查用 Noul，完成后再询问目标是否实际呈现在页面上。
- 后续动作：代码通过 ego 执行操作并更新页面快照，再继续循环，返回操作记录和完成/不确定状态。
- 核验边界：需 ego/macOS；不可逆操作选项和源码检查不是独立权限保证。页面上下文发送模型，作者配对速度/成功样例未复现，本站未操作真实账号或表单。
- 来源：[GitHub](https://github.com/kimjisub/ego-jev) · [Source](https://github.com/kimjisub/ego-jev/blob/8d5f91acdf19534d2825716cfe73a1ac8adb2bed/src/ego-jev.mjs) · [Source](https://github.com/kimjisub/ego-jev/blob/8d5f91acdf19534d2825716cfe73a1ac8adb2bed/src/jev/jev.mjs)

### MIDI 量化：音值概率与代码的小节约束结合

- 作者：ysetbon
- 输入：单小节钢琴 MIDI 的音高、起音时间、间隔、按键长度与拍号。
- Jev 判断：每个起音一个 Jev Choice，从全音符、四分、附点、三连音等有限音值中返回概率；起始休止也用有限候选。
- 后续动作：代码用动态规划寻找符合小节长度的序列并输出记谱/对照评测；无可行整小节解时退回逐项最高概率。
- 核验边界：作者仅30个单小节，阈值有事后选择，不能外推完整曲目质量。仓库许可未确认，仅作代码案例；本站未下载演奏数据、调用模型或复现准确率。
- 来源：[GitHub](https://github.com/ysetbon/Quantize_Midi_Jev) · [Source](https://github.com/ysetbon/Quantize_Midi_Jev/blob/124d2a772cc989063e39164b4d4ef815159ae90e/jevquant/jev.py) · [Source](https://github.com/ysetbon/Quantize_Midi_Jev/blob/124d2a772cc989063e39164b4d4ef815159ae90e/jevquant/notevalues.py)

### Bayes：选择暂定行程或继续补查

- 作者：jimador
- 输入：确认的出游需求/偏好、地图和官网线索、代码生成的行程备选与未解问题。
- Jev 判断：选择 Jev 引擎时，经 TypeSafeModelFactory 在有限备选与 research 中做 Choice，并作有限证据/适配判断。
- 后续动作：代码显示选中的暂定方案、来源和缺口；信息不足返回补问/研究状态，没有自动预订或无限研究循环。
- 核验边界：默认本地规则，远端模型及地图另需同意；地图标签/网页摘要不证明当前营业或交通。Snapshot依赖与作者比较未复现，其他引擎效果不混称 Jev。
- 来源：[GitHub](https://github.com/jimador/bayes-of-our-lives) · [Source](https://github.com/jimador/bayes-of-our-lives/blob/a8e3276d2662627c0ffe19eae44ed38c1e2dee4e/src/main/java/dev/jimador/bays/BayesDecisionServices.java) · [Source](https://github.com/jimador/bayes-of-our-lives/blob/a8e3276d2662627c0ffe19eae44ed38c1e2dee4e/src/main/java/dev/jimador/bays/BayesAgent.java)

### 评论洞察：Jev 分类后用代码汇总产品问题

- 作者：ethangrogan757
- 输入：去重后的评论文本，每批最多五条，以及有限主题、意图、严重程度和情感标准。
- Jev 判断：Jev 用 Choice/Score 返回四类标签和概率；代码按 ID、标签范围与输出合同校验。
- 后续动作：代码保存结果、复用完全重复文本，隔离未完成/异常行；按已完成记录的严重程度总和等计算排名，再由另一模型生成带证据的 memo。
- 核验边界：作者只完成全量数据的一部分，不把其余待处理行算分类。样本准确率、成本和产品建议均为作者结果，许可未确认仅作案例；本站未复制评论数据或运行流水线。
- 来源：[GitHub](https://github.com/ethangrogan757/spotify-review-pipeline) · [Source](https://github.com/ethangrogan757/spotify-review-pipeline/blob/3b0f8e9f56362adb05e1aa7c9bb0391c3b85f3a4/pipeline/enrich_jev.py) · [Source](https://github.com/ethangrogan757/spotify-review-pipeline/blob/3b0f8e9f56362adb05e1aa7c9bb0391c3b85f3a4/pipeline/rank.py)

### 两阶段邮件判断：返回处理信号和回复标签

- 作者：Ankit Kalluraya
- 输入：邮件发送者、主题和正文描述。
- Jev 判断：第一轮六类 Choice、紧急 Score、需回复/人工 Noul；代码允许后第二轮选择四种语气、六种意图及可自动处理概率。
- 后续动作：垃圾/促销返回 archive，通知/简报返回 mute；无需回复跳过第二轮。其余返回 flag_human、auto_draft 或 suggest_reply 标签，无正文和发信操作。
- 核验边界：Python/jevlang 示例；人工判断在第二轮后拦截，标签不是实际归档或发信。0.5/0.60/0.85 是作者起点，正文送模型；本站未运行或校准。
- 来源：[GitHub](https://github.com/kallurayaankit/jev-email-triage) · [Source](https://github.com/kallurayaankit/jev-email-triage/blob/76ba60c2a26fe88d033f266e2bd412ee260257d4/agent.py) · [Source](https://github.com/kallurayaankit/jev-email-triage/blob/76ba60c2a26fe88d033f266e2bd412ee260257d4/triage.jev) · [Source](https://github.com/kallurayaankit/jev-email-triage/blob/76ba60c2a26fe88d033f266e2bd412ee260257d4/draft.jev)

### OptChat：沿摘要树找回原始聊天记录

- 作者：ericjuta
- 输入：用户提问、二叉摘要视图各行与左右子摘要。
- Jev 判断：OMP judge 角色配置为 Jev 时，每行 Noul 找可能含答案的摘要，再逐层 Choice 选 first/second。
- 后续动作：代码下降到单条原记录，返回路径和首 8KB，余文通过 zoom 读取；未达阈值或失败/超时返回明确状态。
- 核验边界：角色可用其他模型，不把所有运行归为 Jev；合成检索实验衡量导航而非真实 Jev 准确率。Linux/Bun/OMP18.9+，许可证未确认仅作代码案例，本站未运行。
- 来源：[GitHub](https://github.com/ericjuta/omp-optchat) · [Source](https://github.com/ericjuta/omp-optchat/blob/1cff1a1fe060a65c575c438927720532502ba8a1/src/system1/recall.ts) · [Source](https://github.com/ericjuta/omp-optchat/blob/1cff1a1fe060a65c575c438927720532502ba8a1/src/system1/judge.ts)

### 告警路由：模型选通知频道，标签规则兜底

- 作者：Starttoaster
- 输入：告警组、标题/描述、严重程度、主机与持续时间的脱敏摘要。
- Jev 判断：Jev Choice 在 page now/informational 中判断，另一个 0–4 紧急 Score 仅供日志。
- 后续动作：代码同时检查 confidence 与 P(page now) 后选 Discord 频道；低置信/缺 key/超时/错误按 severity=critical 路由，恢复通知沿用内存记录。
- 核验边界：实验接收器，Sticky 重启后丢失；阈值需本地告警验证，模型不可用不代表投递一定成功。源码有 dry-run/合成测试，本站未部署、调用模型或发送通知。
- 来源：[GitHub](https://github.com/Starttoaster/reflex) · [Source](https://github.com/Starttoaster/reflex/blob/a8f19dd212115fc3d056a6497c7bef2c193fda48/internal/router/router.go) · [Source](https://github.com/Starttoaster/reflex/blob/a8f19dd212115fc3d056a6497c7bef2c193fda48/internal/jev/client.go)

### Minecraft：可行动作菜单与回合竞争

- 作者：mrubens
- 输入：当前游戏遥测、目标、动作代价/收益与生存、食物、工作的可执行候选。
- Jev 判断：TypeSafe Jev 用有限 Choice/决策树选择动作和 turn_priority，不生成游戏代码；代码保留概率、过时答案与调用记录。
- 后续动作：代码经 Mineflayer 执行菜单项，再根据受伤、失败、状态改变或等待超时重新判断；多数问题在服务不可用时暂停重问。
- 核验边界：身体物理问题有代码例外，不把全部动作描述成纯模型。作者未通关，15/40世界进入下界等数字与计费仅作者历史观察，源码随试验变化；本站未运行游戏或复现。
- 来源：[GitHub](https://github.com/mrubens/jevcraft) · [Source](https://github.com/mrubens/jevcraft/blob/959e75f7d3c9f08be776ea172b1710b1a2061661/src/typesafe.js) · [Source](https://github.com/mrubens/jevcraft/blob/959e75f7d3c9f08be776ea172b1710b1a2061661/src/decisions/index.js) · [Source](https://github.com/mrubens/jevcraft/blob/959e75f7d3c9f08be776ea172b1710b1a2061661/src/arbiter.js)

### 技术排障：分开诊断、修复建议与解决验收

- 作者：elioli983
- 输入：用户症状/证据、另一模型的结构化状态与经过验证整合的资料线索。
- Jev 判断：Jev Choice 选故障域/下一步；Noul 分别判断诊断成立、修复就绪和解决证据，Score 评紧急程度。
- 后续动作：代码依据生命周期、兼容前提与安全检查约束有效动作，再交另一模型写建议并保存 case；修复尝试与解决验收分开。
- 核验边界：Windows 开发/评估版，建议不是自动修设备；官方 TypeSafe 与自定义网关分开。离线测试、加密和启发式检查不证明真实诊断准确或全面安全，本站未使用真实故障数据或模型。
- 来源：[GitHub](https://github.com/elioli983/TechMedic) · [Source](https://github.com/elioli983/TechMedic/blob/b26d593c11fb3ce85a3ad5c717386ea9a0351e11/techmedic/jev.py) · [Source](https://github.com/elioli983/TechMedic/blob/b26d593c11fb3ce85a3ad5c717386ea9a0351e11/techmedic/diagnostic_engine.py) · [Source](https://github.com/elioli983/TechMedic/blob/b26d593c11fb3ce85a3ad5c717386ea9a0351e11/docs/ARCHITECTURE.md)

### 简历自查：有限匹配信号转成可解释分数

- 作者：dphbfs
- 输入：职位说明与简历全文；另可拆出要求和简历证据单元。
- Jev 判断：同一 Jev 请求用 Score 判断岗位匹配，Noul 判断经验不足和明确不满足的条件；保留模型与信号。
- 后续动作：代码以拟合权重合成 0–100 Match Score，再折减 blocker 概率；CLI/MCP 返回分数，另有逐要求覆盖和证据输出。
- 核验边界：面向求职者自查，不自动录用；参照生成模型拟合的一致性不是客观能力或招聘准确率。作者误差、速度与成本未复现；简历文本发送提供商，本站未处理真实简历或调用模型。
- 来源：[GitHub](https://github.com/dphbfs/fast-resume-scoring) · [Source](https://github.com/dphbfs/fast-resume-scoring/blob/86fc14f2d4f9a52b3208323104975aee957b6d6f/internal/app/holistic.go) · [Source](https://github.com/dphbfs/fast-resume-scoring/blob/86fc14f2d4f9a52b3208323104975aee957b6d6f/internal/domain/match.go) · [Source](https://github.com/dphbfs/fast-resume-scoring/blob/86fc14f2d4f9a52b3208323104975aee957b6d6f/internal/adapter/jev/client.go)

### 官方聊天过滤：分类后由代码隐藏、模糊或突出

- 作者：TypeSafe AI
- 输入：游戏名称、直播标题与一条聊天消息。
- Jev 判断：一请求包含五类 Choice（问题/欢呼/交谈/指点/垃圾）和毒性、剧透两个 Noul。
- 后续动作：代码先按毒性及类别隐藏，再按剧透概率模糊；其他显示或突出问题。每条独立请求、最多八并发，改规则可复用已保存答案。
- 核验边界：官方29个自写英文样本、0.7阈值示例，效果仅官方自报。没有主播进度记忆、实时输入需另接、消息等待可能短暂可见；类别近似平手需自定策略，本站未运行或复现。
- 来源：[Official cookbook](https://docs.typesafe.ai/cookbooks/twitch_chat_filter.md) · [Official replay cache](https://github.com/typesafe-ai/typesafe-public-examples/tree/25e9d373f4853b3e7e300e55a194f50e54838f68/cookbooks/twitch_chat_filter)

### Hapsland：把类型设计规则变成编辑后的反馈

- 作者：dearlordylord
- 输入：选中的类型或函数声明，以及在配置范围内找到的相关定义与规则问题。
- Jev 判断：Jev 后端经 Effect TypeSafe 模型为各适用规则做概率判断，例如类型是否允许无意义字段组合。
- 后续动作：代码按规则阈值映射预设反馈，批量送回支持的编码助手；上下文不完整时跳过相关规则。
- 核验边界：反馈发生在编辑后，不自动回滚或保证修复，跳过不是通过。可选其他模型，形式化证明有指定范围；根许可证未确认只收案例，选中源码送提供商，本站未安装或运行。
- 来源：[GitHub](https://github.com/dearlordylord/hapsland) · [Source](https://github.com/dearlordylord/hapsland/blob/a0773f79ffa4babdba219c773832fa3a61cc803c/packages/review-execution/src/jev-decision.ts) · [Source](https://github.com/dearlordylord/hapsland/blob/a0773f79ffa4babdba219c773832fa3a61cc803c/packages/review-definition/src/rules/defaults/meaningless_combinations.json) · [Source](https://github.com/dearlordylord/hapsland/blob/a0773f79ffa4babdba219c773832fa3a61cc803c/packages/review-definition/src/rules/decision.ts)

### 信号筛选：Jev 概率决定保留与扫描顺序

- 作者：h100envy
- 输入：代码或 Grok 提取的信号、抓取焦点、来源类别与市场数据摘要。
- Jev 判断：每信号一个 worth Noul，判断是否是具体、符合焦点且值得注意的信息。
- 后续动作：代码丢弃 P(worth)<默认0.15 的结果，其余按 Jev 概率优先做独立扫描；模型失败继续原流程，延期结果下轮再查。
- 核验边界：概率/安全标签不证明可盈利或安全投资；本例仅信息筛选。抓取与市场数据有时效和许可边界，预算进程内，作者速度/费用未复现；本站未抓取、交易或调用模型。
- 来源：[GitHub](https://github.com/h100envy/crawl-hive) · [Source](https://github.com/h100envy/crawl-hive/blob/77cfe1c7a42f0d071bee49ac9ebb77fdf0556827/src/lib/server/crawl/jev.ts) · [Source](https://github.com/h100envy/crawl-hive/blob/77cfe1c7a42f0d071bee49ac9ebb77fdf0556827/src/lib/server/crawl/analyze.ts)

### Scala MCP 实验：Jev 选取证据操作，另一模型写答案

- 作者：James Ward
- 输入：Jackson 文档研究目标、MCP 操作的模式目录与已确认的有类型值。
- Jev 判断：Jev 在可绑定参数的操作、过滤或返回证据等有界选项中做下一步判断；另比较预先规划与逐步选择。
- 后续动作：Scala 宿主执行 MCP、验证/过滤结构化证据并保留检查点，内层返回证据给外层 Bedrock 生成答案，错误恢复有预算。
- 核验边界：应用调用独立 zio-typesafe-ai 库；README 七臂计时是作者单次网络样本，不能据此排名或推算稳定节省。根许可未确认仅案例，模型角色/过滤模式不同，本站未执行 sbt/MCP/模型。
- 来源：[GitHub](https://github.com/jamesward/hello-zio-typesafe-ai) · [Source](https://github.com/jamesward/hello-zio-typesafe-ai/blob/79b9518e2626958c2b10e52edad0509ef16c32b1/src/main/scala/Main.scala) · [Source](https://github.com/jamesward/hello-zio-typesafe-ai/blob/79b9518e2626958c2b10e52edad0509ef16c32b1/src/main/scala/benchmark/javadocs/JacksonJavadocsBenchmark.scala) · [Source](https://github.com/jamesward/hello-zio-typesafe-ai/blob/79b9518e2626958c2b10e52edad0509ef16c32b1/build.sbt)

### 相关性评分：意图与词项分开，记录重复波动

- 作者：matthelam
- 输入：页面元数据或加正文、作者设定的搜索问题与十个预期词项。
- Jev 判断：Jev 两类五级 Score 请求分别判断页面回答意图的程度和各词项中心程度；词项请求不含意图。
- 后续动作：代码将等级归一后计算词项和×意图适配，重复测量生成均值/±2SD与过期标记，显示排序和可改进分项，结果存 IndexedDB。
- 核验边界：噪声带只是同输入重复答案波动，不是SEO排名、事实正确率或效果校准。源文本仍发送模型；作者十页百次实验未复现，费用随重测累积，本站未评分正式页面或调用API。
- 来源：[GitHub](https://github.com/matthelam/seo-jev-analyzer) · [Source](https://github.com/matthelam/seo-jev-analyzer/blob/17c0475e12583ef377b6df57c4aaeac6dfda6f70/src/questions.ts) · [Source](https://github.com/matthelam/seo-jev-analyzer/blob/17c0475e12583ef377b6df57c4aaeac6dfda6f70/src/lib/server/jev.ts) · [Source](https://github.com/matthelam/seo-jev-analyzer/blob/17c0475e12583ef377b6df57c4aaeac6dfda6f70/src/lib/score.ts)

### 情境回应练习：有限判断与本地标准共同计分

- 作者：Kim Jibaek / Korea Management Education Institute
- 输入：训练场景、规则、随机资源约束与学员限时写下的回应。
- Jev 判断：Jev Choice 选接受/暂缓/拒绝/未知，Score 评两项模拟结果，逐标准及能否兑现承诺用 Noul。
- 后续动作：代码对照情境的参考回应与阈值计算是否通过，记录漏项、时间和练习报告；场景生成与总评另用编码助手。
- 核验边界：韩文原型与四套 AI 示例，量表不是实际顾客反应或劳动能力认证。回应发送OpenRouter，移动/Windows和进度保存有限；作者费用/速度未复现，本站未测试真实员工。
- 来源：[GitHub](https://github.com/ceokobec-hue/job-drill) · [Source](https://github.com/ceokobec-hue/job-drill/blob/b0e25eb6b7932ad881f0f94bf8f8c25b877c2e41/jev.py) · [Source](https://github.com/ceokobec-hue/job-drill/blob/b0e25eb6b7932ad881f0f94bf8f8c25b877c2e41/public/js/app.js)

### 动作级注入检查：分别问来源诱导与任务关联

- 作者：minitru / xChk
- 输入：当前及近期用户请求、前一工具正文、待执行动作和最多十二条动作历史。
- Jev 判断：多个 Noul 判断动作是否偏离各请求、是否遵循外来内容；carries 单独判断正文是否诱发了请求未要求的动作。
- 后续动作：代码同时满足 carries 与 intent 阈值才返回 flagged，另返回各概率、readable 与原因；本工具本身不阻止动作。
- 核验边界：默认只看动作400字/正文6000字，存在作者已报告的填充绕过；无语义点击为不可读，不能当作安全。简单攻击集无留出且真实样本单一，作者效果未复现，不替代宿主权限。
- 来源：[GitHub](https://github.com/minitru/jev-intent-benchmark) · [Source](https://github.com/minitru/jev-intent-benchmark/blob/260bb616e8816edca94150c6fcb340d6c83c1603/actcheck.js) · [Source](https://github.com/minitru/jev-intent-benchmark/blob/260bb616e8816edca94150c6fcb340d6c83c1603/README.md)

### 风格密度检查：逐句判断后给出超基线证据

- 作者：jomi-se
- 输入：Markdown 句子、语境与固定风格问题；长引用从作者风格计数中排除。
- Jev 判断：固定版本 Jev 对格言、三段式、免责声明等逐句作 Noul；代码校验请求/答案完整性。
- 后续动作：代码按概率算期望计数与每千词密度；90%Poisson下界超过人类基线默认3倍时列出原句和位置，实验编辑另调用生成模型。
- 核验边界：十三篇技术文章基线不代表所有文体/语言，密度不是作者归因或事实质量；短文与引文有单独处理，Node26/API另需配置，作者改写效果与费用未由本站复现。
- 来源：[GitHub](https://github.com/jomi-se/system-one-deslop) · [Source](https://github.com/jomi-se/system-one-deslop/blob/8f1a7fee97a493f5b2bac33c9c0a64fd49272a94/src/jev.ts) · [Source](https://github.com/jomi-se/system-one-deslop/blob/8f1a7fee97a493f5b2bac33c9c0a64fd49272a94/src/check.ts) · [Source](https://github.com/jomi-se/system-one-deslop/blob/8f1a7fee97a493f5b2bac33c9c0a64fd49272a94/src/audit.ts)

### 文档人工复核：提取置信与合理性判断独立保留

- 作者：Unsiloed AI
- 输入：文档提取字段及行 ID/上下文；原页定位和提取置信另存，不作为 Jev 输入。
- Jev 判断：每行一个 Noul 检查提取指令的表面合理性，不读源图、不改值、不评患者个体安全。
- 后续动作：代码保留提取和合理性两类检查，任一缺失/不合法或低于示例阈值即转人工；按行ID和定位回看源文档，高Jev答案不抵消低提取置信。
- 核验边界：商业作者六行处方方法演示，非TypeSafe官方或医疗建议；0.90/0.50待人工文档校验，接近0.50另需策略。作者效果未复现，本站未处理真实医疗数据或调用模型。
- 来源：[Author integration and code](https://unsiloed.ai/blog/document-review-unsiloed-typesafe-jev) · [Author X](https://x.com/aman_unsiloed/status/2110074793827725491)

### DuckDB：在 SQL 查询里保留有类型判断和分布

- 作者：DataZooDE
- 输入：SQL 表中的工单文本或结构化 JSON、用户问题及有限选项/有序等级。
- Jev 判断：选定 TypeSafe Jev 且明确允许远程调用后，Noul/Choice/Score 判断写在 SQL 中的问题。
- 后续动作：扩展校验响应并返回标量或分布列，SQL 可据概率做过滤、分组或路由；批处理对相同行复用并限制并发。
- 核验边界：托管文本会出机，注册/设置不持久化；常数Stub和本地Julia/Laya不算Jev效果。安装渠道与签名有区别，概率/可选校准需本地样本验证，本站未安装或调用。
- 来源：[GitHub](https://github.com/DataZooDE/anofox-decide) · [Source](https://github.com/DataZooDE/anofox-decide/blob/17bd194f51d9b8ef1a7763063cd176245f78091d/src/decide_remote.cpp) · [Source](https://github.com/DataZooDE/anofox-decide/blob/17bd194f51d9b8ef1a7763063cd176245f78091d/src/decide_scalars.cpp)

### Sedum：有限元素选择与带标记的概率断言

- 作者：sedum-dev
- 输入：TypeScript 中的自然语言步骤、可操作元素候选及页面完整摘要。
- Jev 判断：默认 Jev Choice 选目标/none；两个 Noul 分别判断主张成立与页面是否有直接矛盾。
- 后续动作：代码复核页面新鲜性、元素角色后用 Playwright 执行；断言按阈值/容差产生 passed/failed 和 low_confidence/contradiction 标记，退出策略另处理。
- 核验边界：pre-alpha；边缘或矛盾结果可能是passed+flag，不等于严格无歧义通过。另选Clef不混称Jev，作者月成本是情景估算、速度小样本未复现；本站未运行外部测试或提交账号。
- 来源：[GitHub](https://github.com/sedum-dev/sedum) · [Source](https://github.com/sedum-dev/sedum/blob/86fb460dee8b4cb17e02b00689e21360c6553a5e/packages/provider-typesafe/src/index.ts) · [Source](https://github.com/sedum-dev/sedum/blob/86fb460dee8b4cb17e02b00689e21360c6553a5e/packages/provider-typesafe/src/request.ts) · [Source](https://github.com/sedum-dev/sedum/blob/86fb460dee8b4cb17e02b00689e21360c6553a5e/packages/core/src/assertion-engine.ts) · [Source](https://github.com/sedum-dev/sedum/blob/86fb460dee8b4cb17e02b00689e21360c6553a5e/packages/core/src/locator/runtime-selection.ts)

### 模拟器图像定位：存在判断与 Box 门控后点击

- 作者：Saik0s
- 输入：合成应用截图、目标、历史与调用方描述的目标目录，另给模拟器逻辑尺寸。
- Jev 判断：Jev1.14 Choice 选目标/操作，Noul 检查目标可见，Box 返回归一化边界；边缘结果允许一次放大复查。
- 后续动作：代码校验范围、存在/定位置信及状态新鲜性，将框中心换算为模拟器点，经 AXe 执行再观察；模型完成与独立持久化状态验收分开。
- 核验边界：官方视觉/Box为实验状态；作者三段1.14演示及旧合成评测不证明通用App准确率，定位方案还混有模型/候选差异。需macOS/Xcode/AXe和自备提供商，本站未操作模拟器或调用模型。
- 来源：[GitHub](https://github.com/Saik0s/axe-decision-control) · [Source](https://github.com/Saik0s/axe-decision-control/blob/945ab1e16823a89cb0cfea75971c543a39e3ef45/src/axe_control/policies/box.py) · [Source](https://github.com/Saik0s/axe-decision-control/blob/945ab1e16823a89cb0cfea75971c543a39e3ef45/src/axe_control/providers/openrouter.py) · [Source](https://github.com/Saik0s/axe-decision-control/blob/945ab1e16823a89cb0cfea75971c543a39e3ef45/src/axe_control/runner.py)

### 流程图：Jev 选有限节点关系，复核后代码生成

- 作者：Tugrul Guner
- 输入：最多八行用户步骤及关系说明，节点文字由用户提供。
- Jev 判断：每节点三个 Choice：普通/判断/终止角色、后继节点、否定分支节点，支持 none。
- 后续动作：Worker校验选项和概率，解码为需复核图；代码拒绝不一致分支/无效边，用户审查后确定性生成 Mermaid 并渲染下载。
- 核验边界：不是任意代码生成或自动执行业务流程；最多24问、8节点/16边，语义关系仍需人查。作者浏览器成功主要fixture，未证明部署或live模型质量，本站未上传文档或运行。
- 来源：[GitHub](https://github.com/tugrulguner/utilitypot) · [Source](https://github.com/tugrulguner/utilitypot/blob/0fa3319a867b6a7ec960ff99ab1b7e378dec4f43/worker/index.js) · [Source](https://github.com/tugrulguner/utilitypot/blob/0fa3319a867b6a7ec960ff99ab1b7e378dec4f43/src/lib/utilities/diagram.js)

### 图像异常研究：先框完整单元，再判断与显示

- 作者：0xRinne / RINNECODER
- 输入：图像介质、原图与多尺度区域；保留完整词句、对象或整页上下文。
- Jev 判断：Jev1.14用Box找目标/完整单元，Choice在正常、异常类型和不确定中判断，临界答案重复并用另一问法确认。
- 后续动作：代码把窗口仅作线索、重新框完整语义单元后裁剪，合并重复框，最后定位显示并记录调用费用。
- 核验边界：研究已记录切字、卡通及表格几何误报，v7b未重跑旧26图集；手选少图不能给生产准确率或AI来源归因。官方API实验且图片发提供商，作者结果/费用未复现，本站未上传或运行。
- 来源：[GitHub](https://github.com/RINNECODER/jev-box-study) · [Source](https://github.com/RINNECODER/jev-box-study/blob/0c19f4c1ee1218d979a916211c766bf00f73e74d/app/api/check.js) · [Source](https://github.com/RINNECODER/jev-box-study/blob/0c19f4c1ee1218d979a916211c766bf00f73e74d/app/public/index.html) · [Source](https://github.com/RINNECODER/jev-box-study/blob/0c19f4c1ee1218d979a916211c766bf00f73e74d/README.md)

### 官方 Box 示例：定位目标后换算像素并裁剪

- 作者：TypeSafe AI
- 输入：厨房照片和待定位的咖啡杯目标；图像通过 assets 引用。
- Jev 判断：Jev1.14 Box 返回上下左右归一化边；官方建议并行 Noul 判断目标是否存在。
- 后续动作：示例代码将边界乘图片宽高，用PIL裁剪保存；低置信可先外扩并限在图内，边缘Noul可检查是否切断目标。
- 核验边界：官方实验示例，需图像实验header，Box即使无目标也返回框，框不能证明存在。0.6阈值/0.05外扩仅教材起点，格式/效果可能变化，本站未发图或复现；非新cookbook。
- 来源：[Official Box and crop code](https://docs.typesafe.ai/primitives/box.md) · [Official Images](https://docs.typesafe.ai/images.md) · [Official announcement](https://x.com/typesafeai/status/2110536690037391732)

### 城市模拟：模型选动作，代码重查可行性

- 作者：William Jones
- 输入：模拟市民的角色、需求、局部灾情与代码筛选的有限可行动作。
- Jev 判断：一条请求中Choice选下个动作，两Score评风险/义务，一Noul评是否中断日常。
- 后续动作：服务端校验题型与分布，模拟器按请求ID接收并重新检查动作是否仍可行，再用代码执行移动和后果；回放、规则、live与安全覆盖分别标来源。
- 核验边界：默认历史回放不发API；live失败显式用规则。4902次有效响应和延迟仅作者记录，不是现实城市/应急决策验证；本站未运行，真实调用需独立口令、密钥和预算配置。
- 来源：[GitHub](https://github.com/WilliamJones/JEV-City) · [Source](https://github.com/WilliamJones/JEV-City/blob/b5c7ddfee26e6f004314a545ddf7f85acd9fc76d/src/jev/contract.ts) · [Source](https://github.com/WilliamJones/JEV-City/blob/b5c7ddfee26e6f004314a545ddf7f85acd9fc76d/src/jev/client.ts) · [Source](https://github.com/WilliamJones/JEV-City/blob/b5c7ddfee26e6f004314a545ddf7f85acd9fc76d/src/client/controller.ts) · [Source](https://github.com/WilliamJones/JEV-City/blob/b5c7ddfee26e6f004314a545ddf7f85acd9fc76d/src/sim/world.ts) · [Author X](https://x.com/WilliamJones/status/2110548635176071298)

### Trace 检测：问题概率与类别分开保留

- 作者：TraceRoot AI
- 输入：解析后的trace spans及用户检测标准；超预算按固定次序截断并标记省略。
- Jev 判断：同请求Noul判断是否存在问题，Choice在模板类别、other、none中命名问题。
- 后续动作：代码用0.5 gate产生identified，保留类别分布/置信；标签none则类别不明，摘要明确无文字理由。坏答案抛错，由检测分发层记录错误而非正常发现。
- 核验边界：所核模块在Apache-2.0核心，ee目录另用商业许可；不包含企业聚类自动修复承诺。字符截断可能遗漏问题，示例阈值需本地评测，trace会发提供商；本站未提交真实trace或调用。
- 来源：[GitHub](https://github.com/traceroot-ai/traceroot) · [Source](https://github.com/traceroot-ai/traceroot/blob/cf44809a534e0b2c56d8326b2d9ed1eb5a302b3b/frontend/worker/src/detection/jev-state.ts) · [Source](https://github.com/traceroot-ai/traceroot/blob/cf44809a534e0b2c56d8326b2d9ed1eb5a302b3b/frontend/worker/src/detection/jev-compile.ts) · [Source](https://github.com/traceroot-ai/traceroot/blob/cf44809a534e0b2c56d8326b2d9ed1eb5a302b3b/frontend/worker/src/detection/jev-eval.ts) · [Source](https://github.com/traceroot-ai/traceroot/blob/cf44809a534e0b2c56d8326b2d9ed1eb5a302b3b/frontend/worker/src/detection/sandbox-eval.ts) · [Author X](https://x.com/xinwei_97/status/2110501481929670961)

### 视觉影子评估：比较封闭答案，保留原工具结果

- 作者：Steve Darlow / kerpopule
- 输入：已有vision_analyze图片和封闭的PASS/FAIL或Yes/No问题；独立云端开关明确启用。
- Jev 判断：TypeSafe Jev Choice检查图片；格式/尺寸预检、敏感问题跳过，并带官方图像实验header。
- 后续动作：后台队列记录类别、置信、与原答案的一致性及假想混合结果；发送前再查开关，错误只记日志，原工具返回值不变。
- 核验边界：主线shadow不等于作者另一个分支18/18桌面动作演示；0.6沿用阈值未经该模型A/B，截图本身不能脱敏且会出机。官方视觉实验、本地Jev-Omni另算，本站未上传图片或运行。
- 来源：[GitHub](https://github.com/kerpopule/hermes-jev-skills) · [Source](https://github.com/kerpopule/hermes-jev-skills/blob/5acac9262b96a275067c90417495518a563afcda/jevkit/cloud_vision.py) · [Source](https://github.com/kerpopule/hermes-jev-skills/blob/5acac9262b96a275067c90417495518a563afcda/jevkit/images.py) · [Source](https://github.com/kerpopule/hermes-jev-skills/blob/5acac9262b96a275067c90417495518a563afcda/jevkit/client.py) · [Source](https://github.com/kerpopule/hermes-jev-skills/blob/5acac9262b96a275067c90417495518a563afcda/hermes/plugin/hermes-jev/__init__.py) · [Author X](https://x.com/StevenDarlow/status/2110778415288578070)

### 递归语言模型：Jev 返回概率，根程序计算与检索

- 作者：Jordan Hochenbaum
- 输入：逐条文本项、有限标签、问题和分窗的大文档；共享上下文与每项内容明确对应。
- Jev 判断：Choice分类、Noul是非；locate先Noul排窗口再评行句，返回原文offset与组合分数。
- 后续动作：工具分批并发并校验缺失答案，向DSPy/自建RLM返回概率列表与原文片段，由根模型程序计数、筛选和回答；Jev部分独立计量。
- 核验边界：研究库，小样本单次分数仅作者自报，Jev不生成或授权根程序。预算按token估算和固定费率，可能有误差且不含根模型费用，原文会发服务商；本站未运行模型/沙箱。
- 来源：[GitHub](https://github.com/jhochenbaum/rlm-jev) · [Source](https://github.com/jhochenbaum/rlm-jev/blob/84ac72c37c4a68179753dd88b084a8d48771bff9/rlm_jev/subcalls.py) · [Source](https://github.com/jhochenbaum/rlm-jev/blob/84ac72c37c4a68179753dd88b084a8d48771bff9/rlm_jev/locate.py) · [Source](https://github.com/jhochenbaum/rlm-jev/blob/84ac72c37c4a68179753dd88b084a8d48771bff9/rlm_jev/tools.py) · [Source](https://github.com/jhochenbaum/rlm-jev/blob/84ac72c37c4a68179753dd88b084a8d48771bff9/rlm_jev/_client.py) · [Source](https://github.com/jhochenbaum/rlm-jev/blob/84ac72c37c4a68179753dd88b084a8d48771bff9/examples/dspy_rlm_jev.py)

### Grep 重排：逐段回答相关性，再输出原文位置

- 作者：AI Ready Future
- 输入：grep模式得到的命中窗口、文件路径/行号和用户自然语言问题；每行送入文本最多300字符。
- Jev 判断：直连Jev按段编号逐一Noul判断是否回答问题，最多32段/请求，有限并发。
- 后续动作：代码检查所有概率与回答数，按分值、路径、行号排序后输出原文及位置；错误停止，不输出部分排序。
- 核验边界：只重排模式已命中的片段，不是全库语义召回。钉住主线已有实现，README发布版说明仍限密钥设置，已发布包/网关未验；片段会出机，0.4门槛需自评，本站未安装或调用。
- 来源：[GitHub](https://github.com/ai-ready-future/jag) · [Source](https://github.com/ai-ready-future/jag/blob/e42b764cb456bdc63b15d891f52daea96df77624/src/cli.rs) · [Source](https://github.com/ai-ready-future/jag/blob/e42b764cb456bdc63b15d891f52daea96df77624/src/scorer.rs) · [Source](https://github.com/ai-ready-future/jag/blob/e42b764cb456bdc63b15d891f52daea96df77624/src/scorer/client.rs) · [Source](https://github.com/ai-ready-future/jag/blob/e42b764cb456bdc63b15d891f52daea96df77624/src/scorer/prompt.rs)

### 合成线索评测：有界动作与反馈记忆对照

- 作者：SenseLab / raia-live
- 输入：生成的销售线索文本/字段、书面政策与策略提供的记忆；包含预设规则变化和带噪review。
- Jev 判断：固定Jev模型Choice在AE、培育、自助、伙伴、淘汰五动作中选择；可另问记忆依据。
- 后续动作：程序模拟动作结果并产生review，回写检索/SenseLab记忆与轨迹，执行配置的修复评测循环，生成对照报告；没有操作真实CRM。
- 核验边界：合成损失金额与准确率不是实际营收或本站实测；记忆更新不是Jev权重学习。API错误选首项且记error，不能当业务自动阻断；外部SenseLab/评测权限另需自备，本站未调用。
- 来源：[GitHub](https://github.com/raia-live/jev-senselab-demos) · [Source](https://github.com/raia-live/jev-senselab-demos/blob/00bf8a6d8c506a82c6a3549321b19f57bac30c7f/core/jev.py) · [Source](https://github.com/raia-live/jev-senselab-demos/blob/00bf8a6d8c506a82c6a3549321b19f57bac30c7f/core/arms.py) · [Source](https://github.com/raia-live/jev-senselab-demos/blob/00bf8a6d8c506a82c6a3549321b19f57bac30c7f/core/senselab.py) · [Source](https://github.com/raia-live/jev-senselab-demos/blob/00bf8a6d8c506a82c6a3549321b19f57bac30c7f/demos/lead_routing/scenario.py)

### 下一步建议：Jev 选有限候选，按 Tab 才执行

- 作者：Alara Martin and collaborators
- 输入：活动界面控件、近期操作及其他页面已有文本值，代码先构造候选动作。
- Jev 判断：Choice选下个控件或none，另以有限Choice选字段/下拉值；文本生成的Claude路径分开。
- 后续动作：代码显示可接受的ghost建议，用户按Tab才交执行器；相同界面慢/失败可回放缓存，已学重复流程另走零模型规则。
- 核验边界：hackathon原型，仅公开代码案例，根项目许可未确认。部分按钮置信被代码升至至少0.7，非原始模型概率；跨页面文本会出机。付款演示仅测试网且不证明支付安全，本站未运行、交易或验证原效果。
- 来源：[GitHub](https://github.com/alaramartin/paradigmhacks) · [Source](https://github.com/alaramartin/paradigmhacks/blob/f459a79c51440f32a579cf40fd292dd0fcb98226/brain/src/model.ts) · [Source](https://github.com/alaramartin/paradigmhacks/blob/f459a79c51440f32a579cf40fd292dd0fcb98226/brain/src/candidates.ts) · [Source](https://github.com/alaramartin/paradigmhacks/blob/f459a79c51440f32a579cf40fd292dd0fcb98226/brain/src/brain.ts) · [Author X](https://x.com/alara_martin_/status/2110875781819928838)

### 浏览器屏蔽：政策判断转成有作用域的规则

- 作者：Honeybank Studios
- 输入：种子名单未覆盖的主机名、页面站点、资源类型/第一三方信息与用户政策，不发送完整URL或Cookie。
- Jev 判断：每项两个Choice：block/allow和内容类别，最多八项一批。
- 后续动作：代码按block概率阈值缓存决定，编译站点/类型动态规则；用户覆盖与暂停优先，错误放行，跨站复用另可关闭。
- 核验边界：MV3首请求可先通过，不能按路径过滤或隐藏元素。缺概率时解析会借用choice/confidence甚至默认值，可能误屏蔽；费用软帽、外部名单另许可，站点/域名出机。本站未安装/测试扩展。
- 来源：[GitHub](https://github.com/honeybankstudios/jevblock) · [Source](https://github.com/honeybankstudios/jevblock/blob/1a257c222f7029fb58ce074992c1b7fbda35bb04/src/background/jev.ts) · [Source](https://github.com/honeybankstudios/jevblock/blob/1a257c222f7029fb58ce074992c1b7fbda35bb04/src/background/index.ts) · [Source](https://github.com/honeybankstudios/jevblock/blob/1a257c222f7029fb58ce074992c1b7fbda35bb04/src/background/rules.ts)

### 语义代码检查：判断偏离，再定位原文片段

- 作者：darkmatter
- 输入：源码、Markdown规则与good/bad例子，以及配置允许的附加上下文。
- Jev 判断：Noul判断规则偏离、适用/排除条件；Choice选段及首末代码行，Noul评上下文是否足够。
- 后续动作：代码按规则阈值和scope筛选，校验位置后生成含原文/概率/上下文提示的报告并缓存；缺失回答不作为无问题缓存，不自动修源码。
- 核验边界：概率和定位仍可错，不能代替确定性lint/编译器或安全保证；源文件与附加读取会发提供商，移动别名/缓存需维护。默认Jev与其他provider分开，作者评测未经本站复现，未运行。
- 来源：[GitHub](https://github.com/darkmatter/adhere) · [Source](https://github.com/darkmatter/adhere/blob/55c2b40ebd29132c60d19b5b88087330db507abc/src/providers/jev.ts) · [Source](https://github.com/darkmatter/adhere/blob/55c2b40ebd29132c60d19b5b88087330db507abc/src/services/Jev.ts) · [Source](https://github.com/darkmatter/adhere/blob/55c2b40ebd29132c60d19b5b88087330db507abc/src/services/Jev.http.ts) · [Source](https://github.com/darkmatter/adhere/blob/55c2b40ebd29132c60d19b5b88087330db507abc/src/workflows/audit.ts)

### 写作指标：有限判断与本地计算分工

- 作者：Chad Boyda
- 输入：英文全文、段落与词语，给定词类/体裁选项和有序评分等级。
- Jev 判断：Jev Choice/Score/Noul补本地不能确定的判断；全文/分段等级分布与体裁概率供组合模型使用。
- 后续动作：本地算术和预拟合权重生成指标，profile/compare按作者样本标出需复读的偏离；不可用时警告并重算本地集合，cadence独立且无模型调用。
- 核验边界：不是通用作文质量裁判，英文资源/训练样本限制适用范围，数据组件另有许可。作者验证未复现；全文会出机，jev-latest旧缓存可能过期，本站未提交文章或运行模型。
- 来源：[GitHub](https://github.com/chadboyda/proseweave) · [Source](https://github.com/chadboyda/proseweave/blob/f5f0a7dcabb6d3e93ab3f3d91a307fe53f9e83ed/src/proseweave/jev.py) · [Source](https://github.com/chadboyda/proseweave/blob/f5f0a7dcabb6d3e93ab3f3d91a307fe53f9e83ed/src/proseweave/analysis.py) · [Source](https://github.com/chadboyda/proseweave/blob/f5f0a7dcabb6d3e93ab3f3d91a307fe53f9e83ed/src/proseweave/judged.py) · [Author X](https://x.com/chadboyda/status/2111269418927808829)

### 模拟高尔夫：图像判断转成受阈值约束的解说事实

- 作者：jjmerri
- 输入：显式启用Jev后的模拟球场小地图截图和到旗距离；代码先找颜色/几何候选。
- Jev 判断：Box定位球和旗，Noul确认水/沙/树等，Choice读有限数字与方位；带图像实验header。
- 后续动作：代码验证位置/置信、换算几何与距离并过滤事实/hazards，供解说模型和预先生成的条件分支使用；超时/失败回退其他视觉，语音由另一路TTS生成。
- 核验边界：Windows/GSPro截图环境专用，非现实球场安全导航；Box/图像仍实验，示例阈值/速度/费用仅作者口径且未复现。截图出机、其他LLM/TTS效果不算Jev结果，本站未抓图或运行。
- 来源：[GitHub](https://github.com/jjmerri/gspro-commentator) · [Source](https://github.com/jjmerri/gspro-commentator/blob/37dea6073915a52bd2013625edd0fd0f2f78b8be/commentator/minimap.py) · [Source](https://github.com/jjmerri/gspro-commentator/blob/37dea6073915a52bd2013625edd0fd0f2f78b8be/commentator/engine.py) · [Source](https://github.com/jjmerri/gspro-commentator/blob/37dea6073915a52bd2013625edd0fd0f2f78b8be/config.example.yaml)

### Pi：写入前核对内容规则与新文件放置

- 作者：kurowashi
- 输入：Pi 拟执行的 edit/write、匹配的项目规则与上下文；新文件放置检查另附有界目录树和拟写内容。
- Jev 判断：每条规则构成一个 Noul；读取对应概率，按 negate 反转后与该检查的 minProbability 比较。
- 后续动作：任一检查不满足便返回 block:true 与整改文案，阻止该次工具调用；通过才让 Pi 继续写入。
- 核验边界：源码核查，未安装或调用 API。仅覆盖 edit/write；bash 等修改不受检查。默认 onError=allow，未匹配或未信任配置可跳过；字符/目录界限不保证完整上下文，也不构成安全隔离。
- 来源：[GitHub](https://github.com/kurowashi/pi-jev/blob/8ded06e87435fd96bfe58b0032761a8e538e571b/README.md) · [packages/core/src/jev.ts](https://github.com/kurowashi/pi-jev/blob/8ded06e87435fd96bfe58b0032761a8e538e571b/packages/core/src/jev.ts) · [packages/content-guard/src/index.ts](https://github.com/kurowashi/pi-jev/blob/8ded06e87435fd96bfe58b0032761a8e538e571b/packages/content-guard/src/index.ts) · [packages/placement-guard/src/index.ts](https://github.com/kurowashi/pi-jev/blob/8ded06e87435fd96bfe58b0032761a8e538e571b/packages/placement-guard/src/index.ts) · [packages/core/src/config.ts](https://github.com/kurowashi/pi-jev/blob/8ded06e87435fd96bfe58b0032761a8e538e571b/packages/core/src/config.ts)

### OpenCode：从允许的推理级别中选择并切换

- 作者：atvari-eu
- 输入：用户提示、经处理的近期上下文与当前模型支持的推理级别；可显式配置 TypeSafe System One endpoint 和有效 Jev 型号。
- Jev 判断：effort-only 路径把允许的级别写为 Choice 候选；拒绝候选集以外的答案，数值 confidence 低于配置阈值时保留原级别。
- 后续动作：把有效选择转为 switchTo，宿主调用 session.switchModel 设置 variant，并保存切换来源记录；手动选择和失败回退由代码处理。
- 核验边界：未运行 OpenCode 或收费模型；默认 OpenCode Console endpoint/jev-1.13-free 与客户端版本、凭据有额外条件，未独立验证其免费路由。缺失 confidence 不会触发数值低阈值分支；不声称实际节省成本或其他功能均获验收。
- 来源：[Choice and resolution](https://github.com/atvari-eu/opencode-system-one/blob/b017f89cd2048cb95ff1be8897b2bab4c7020021/src/logic.ts) · [Transport and host switch](https://github.com/atvari-eu/opencode-system-one/blob/b017f89cd2048cb95ff1be8897b2bab4c7020021/src/index.ts) · [README](https://github.com/atvari-eu/opencode-system-one/blob/b017f89cd2048cb95ff1be8897b2bab4c7020021/README.md)

### 命令门控：Noul 风险判断接入 Pi 执行前钩子

- 作者：psygreg
- 输入：Pi 待执行的 shell 命令；把 agent-reflex 分类器显式配置为 TypeSafe endpoint 和 Jev 模型。
- Jev 判断：Noul 询问命令是否可能损坏系统文件、无备份删除目录或泄露环境密钥；读 answers.q.noul 后按代码阈值判断。
- 后续动作：tool_call 钩子命中 shell 工具且判断超阈值时返回 block:true，阻止该次调用；其他情况交给宿主继续处理。
- 核验边界：仅核查 Pi/TypeSafe 这条源码路径，未安装、执行命令或测试模型安全性。分类器不可用/无配置时默认放行，不能代替权限与沙箱；其他供应商预设路径及八种宿主的兼容性均未独立验收。
- 来源：[TypeSafe classifier](https://github.com/psygreg/agent-reflex/blob/9426ab0f2381ead782aebd33f2917202db41213a/plugins/pi/classifier.ts) · [Pi hook and threshold](https://github.com/psygreg/agent-reflex/blob/9426ab0f2381ead782aebd33f2917202db41213a/plugins/pi/index.ts) · [README](https://github.com/psygreg/agent-reflex/blob/9426ab0f2381ead782aebd33f2917202db41213a/README.md)

### 个人 RSS：兴趣得分与时间衰减排序

- 作者：潦草学者 Scholar.L / @liaocaoxuezhe
- 输入：作者以阅读、收藏行为提取的兴趣资料和订阅 RSS 内容；兴趣提取由另一模型负责。
- Jev 判断：作者称用 Jev 对内容与个人兴趣的匹配程度打分；具体题型、分值范围和提示词未公开。
- 后续动作：本地程序把得分与时间衰减结合，重排今日和近七日 RSS 时间线；作者原帖展示与默认时间排序的对照。
- 核验边界：仅作者原帖与展示，非本站实测；本地修改源码、衰减公式和部署均未公开。上游 PaperRss 是改造基础，不能据此声称上游已集成 Jev，也不将其新增为 Jev 开源项目。
- 来源：[Author implementation note](https://x.com/liaocaoxuezhe/status/2111674188398559506) · [Author demonstration](https://x.com/liaocaoxuezhe/status/2111674184711725169)

### MNIST：十选一图像分类与错误分析

- 作者：kaitoy / @kaitoy3_
- 输入：MNIST 的 28×28 灰度数字图像，代码默认放大到 280×280 PNG，经 SDK Image 输入并显式启用实验图像头。
- Jev 判断：一个 Choice 在字符串 0–9 中选择数字；代码读取选择、confidence、实际响应型号和 token 数。
- 后续动作：将预测与标签比较，单独计入 API 错误，生成全样本/已回答准确率、混淆矩阵和逐图 CSV，再由本地工具生成错误图册。
- 核验边界：代码与原帖核查，未下载数据或调用模型。10,000 图像、92.45% 为作者自报，非本站复测；图像为实验预览，jev-preview 别名可能变化。根许可证及 pyproject 许可声明未发现，因此仅收录公开代码案例，不列为已核实许可的开源项目。
- 来源：[Image Choice](https://github.com/kaitoy/jev-mnist/blob/4ae6a16ba49df03a5ad78fe42ecbb371eed1a704/jev_mnist/classify.py) · [Evaluation and CSV](https://github.com/kaitoy/jev-mnist/blob/4ae6a16ba49df03a5ad78fe42ecbb371eed1a704/jev_mnist/main.py) · [Author results](https://github.com/kaitoy/jev-mnist/blob/4ae6a16ba49df03a5ad78fe42ecbb371eed1a704/README.md) · [Author X post](https://x.com/kaitoy3_/status/2111667474878140846)

### OpenRouter 代理：三档模型路由与工具续接

- 作者：adymitruk
- 输入：最新用户目标、当前消息节选及是否有工具；路由状态只取有限字符。
- Jev 判断：向 OpenRouter alpha/decisions 发送 Jev Choice，在 cheap、fast_mid、smart_pro 中选择；cheap 置信度低于 0.72 时升到中档。
- 后续动作：改写请求 model 和 provider 排序后转发 chat/completions，支持流式或普通返回；工具续接复用短期路由，分类失败回退中档。
- 核验边界：仅钉住源码核查，未启动代理或调用模型；续接键使用首条用户消息，不能视为经过验证的会话隔离。未发现根许可证，不新增为许可已核实的开源项目。
- 来源：[Choice and downstream forwarding](https://github.com/adymitruk/openrouter-spend-jev/blob/811ae3f0524488e07ed9a9a589908b628df24e9b/jev-proxy/jev-proxy.py)

### 会议脑图：按新增决定与待办选择更新模型

- 作者：daiki-beppu
- 输入：新增转写片段及最多六条近期发言；旧片段仅作上下文。
- Jev 判断：Jev Noul 判断新增发言是否含决定、共识或 TODO；读取 yes 概率，而非所选类别的置信度。
- 后续动作：yes 概率低于 0.3 交给 Haiku，其余或判断失败交给 Sonnet；分别保留各更新器的响应状态与待处理屏幕变化。
- 核验边界：Jev 只做路由，脑图差分由下游模型生成。Jev 配置可关闭或换其他裁判，本地模式默认不调用云裁判；未录音、读取会议资料或实测成本。
- 来源：[Noul and updater consumption](https://github.com/daiki-beppu/live-mindmap/blob/2af3dacdf6804d9f104bb6951042b16dd0bd556e/server/src/routedDiffUpdater.ts) · [System One request](https://github.com/daiki-beppu/live-mindmap/blob/2af3dacdf6804d9f104bb6951042b16dd0bd556e/server/src/systemOne.ts) · [Judge configuration](https://github.com/daiki-beppu/live-mindmap/blob/2af3dacdf6804d9f104bb6951042b16dd0bd556e/server/src/judgeSelection.ts)

### jev-mem：向量召回后再筛选可注入记忆

- 作者：must-lioncho
- 输入：当前提示词节选，以及本地 claude-mem 召回的默认五条记录标题、摘要和日期。
- Jev 判断：一条 TypeSafe System One 请求为每个候选提出 Noul，判断该记录是否能实质帮助当前任务。
- 后续动作：按概率排序，默认仅注入达到 0.7 的最佳一条；可改为有上限的多条模式，无合格结果或超时/失败则不注入。
- 核验边界：相关性不代表内容真实或仍有效。提示词和记忆摘要会发送给外部 Jev；仅审查源码，未读取本机记忆、安装钩子或发送用户资料，三提示词展示不是独立基准。
- 来源：[Noul and threshold selection](https://github.com/must-lioncho/jev-mem/blob/08c06e3644cad70a68ab3d2948caf56c582b10c9/src/select.mjs) · [Retrieval and injection](https://github.com/must-lioncho/jev-mem/blob/08c06e3644cad70a68ab3d2948caf56c582b10c9/src/run.mjs) · [Native API client](https://github.com/must-lioncho/jev-mem/blob/08c06e3644cad70a68ab3d2948caf56c582b10c9/src/jev.mjs)

### liedar：文档元数据与图像的风险筛查

- 作者：colesmcintosh
- 输入：PDF、PNG 或 JPEG 的元数据与页面图像；PDF 最多发送前十页。
- Jev 判断：原生 Jev 请求对整体可疑程度和七类固定信号分别提 Noul，覆盖日期冲突、视觉修改及数值不一致等。
- 后续动作：以 0.5 为阈值输出 likelyFraud 和原因列表，按信号概率排序，供终端或 JSON 消费。
- 核验边界：只是筛查信号，不能据此认定欺诈。图像接口为实验功能，概率未经欺诈场景校准；仅源码核查，未上传文档、调用付费 API 或复测作者成本表。
- 来源：[Fixed questions and report](https://github.com/colesmcintosh/liedar/blob/e97abb9ff4941d876e43313d1410fe9f19d41893/src/fraud-check.ts) · [Multipart Jev client](https://github.com/colesmcintosh/liedar/blob/e97abb9ff4941d876e43313d1410fe9f19d41893/src/jev.ts) · [Limits and warning](https://github.com/colesmcintosh/liedar/blob/e97abb9ff4941d876e43313d1410fe9f19d41893/README.md)

### 商品图：规则概率与三路审核结果

- 作者：Mani Khanuja / mani-aiml
- 输入：商品说明、缩放后的整图及四角裁片；尺寸和正方形等确定性规则在代码中计算。
- Jev 判断：Jev 用 Noul 检查白底、叠加文字、单一商品、清晰度和完整入镜；支持的型号另用 Box 定位商品。
- 后续动作：把适用规则转换为合规概率：最低值 ≥0.9 判为可发布，≤0.2 退回，其余人工复核；Walmart 演示还以框面积判断画面占比。
- 核验边界：这是社区离线规则演示，代码只输出分类和评分，不会发布商品，也不保证符合平台现行政策。图像与 Box 属预览，未下载照片、运行模型或独立复测结果。
- 来源：[SDK Noul and Box](https://github.com/mani-aiml/jev-demos/blob/966eb49d398b0d81177ed83c26f793cda726b210/listing-photo-checker/checker/arm_jev.py) · [Thresholds and verdicts](https://github.com/mani-aiml/jev-demos/blob/966eb49d398b0d81177ed83c26f793cda726b210/listing-photo-checker/checker/rules.py) · [Verdict consumption](https://github.com/mani-aiml/jev-demos/blob/966eb49d398b0d81177ed83c26f793cda726b210/listing-photo-checker/checker/score.py)

### 编码路由：三档开源模型与选组实验

- 作者：Shivay Lamba / @HowDevelop
- 输入：编码任务的首条用户目标；工具回合沿用本次选择。
- Jev 判断：作者描述 Jev 将任务划入 routine、moderate 或 hard，分别映射 fast、balanced、strong；题型与完整路由提示未在本轮核实。
- 后续动作：经 nconnect 转接编码代理请求至对应模型；三次工具失败或显式强档请求可升级。
- 核验边界：仅作者一手文章，非本站运行。文中 78.5% 成本降幅来自 50 任务中事后选择的 32 条“通过且更省钱”任务，不能外推全部任务成功率或普遍节省；所链实验库和 nconnect 已另行核对并列入项目目录，实验运行及效果仍未由本站复现。
- 来源：[Author experiment and selection method](https://x.com/HowDevelop/status/2111988896095506534)

### offline.directory：按使用情境筛选离线应用

- 作者：Denis / @dnsk96
- 输入：访客用自然语言描述的使用情境，与目录内候选应用资料。
- Jev 判断：作者称 Jev 对各应用与情境的适配程度打分；完整提示与具体题型未公开。
- 后续动作：程序呈现最佳八个结果及适配标签，低置信度显示不确定；先呈现关键词结果，Jev 失败时回退关键词并记日志。
- 核验边界：作者原帖案例，未复测搜索、延迟或部署。不能把结果说明文本归因为 Jev 自由生成，也不能把 Grok 生成站点等同于 Jev 建站；源码未核实，不新增开源项目。
- 来源：[Author case study](https://x.com/dnsk96/status/2111623463920165210)

### MotherDuck：在 SQL 中分类客户诉求

- 作者：MotherDuck / Hamilton Ulmer, Till Döhmen, Jacob Matson
- 输入：customer_conversations 表中的会话文本及预设的账单、技术、销售、账户四类诉求。
- Jev 判断：prompt_jev() 的 Choice 从给定类别中选择主要诉求，分类指令与每类含义写在 SQL 函数参数中。
- 后续动作：SELECT 逐行返回 conversation_id 与 classification，作为后续表格分析的结构化列；不将该示例描述为自动转接客服。
- 核验边界：作者原帖与供应商一手 SQL 示例，未运行查询或传送会话。文中速度、费用与准确率是供应商在 AG News 新闻分类集上的自报，不能当作客服诉求准确率或本站复测。集成为托管功能，未核实开源实现，不新增 GitHub 项目。
- 来源：[MotherDuck original post](https://x.com/motherduck/status/2102077291081896307) · [Vendor SQL example](https://motherduck.com/blog/motherduck-supports-jev/) · [TypeSafe recommendation](https://x.com/typesafeai/status/2102206611024716181)

### Glean：搜索重排题型与同分影响评估

- 作者：Tony Gentilcore and Glean coauthors
- 输入：已捕获的企业搜索查询和每次最多 50 个候选结果；作者在同一内部评估集上比较排序。
- Jev 判断：作者比较逐项 Noul、共享候选上下文 Noul、Score，以及单次 Choice 的候选概率四种相关性表达；Choice 在其试验中最好。
- 后续动作：按相关性信号重排候选并评估 Recall@6，另移除生产顺序的同分打破规则，检查收益是否来自 Jev 本身。
- 核验边界：仅作者离线评估，无开源实现或本站复测。大量候选同分，沿用生产顺序会抬高结果；评估集还存在访问范围限制，绝对数值不代表生产质量。作者明确不将其视为 Glean 生产重排器的替代品。
- 来源：[Author article: reranking experiment](https://x.com/tonygentilcore/status/2104639390266036251) · [TypeSafe recommendation](https://x.com/typesafeai/status/2104772007481180633)

### Glean：引文覆盖与支撑判断的重复性试验

- 作者：Tony Gentilcore and Glean coauthors
- 输入：固定的一份 1,448 词回答及其引用证据；覆盖判断在相同的 28 个段落上重复三次。
- Jev 判断：按有限政策判断需要证据的陈述是否有充分引用，以及引用来源是否支撑所述内容；文章未公开完整 API 题型与提示词。
- 后续动作：研究团队汇总覆盖/支撑判断，并与另一模型的三轮相同输入结果比较段落变化和成对分歧；不是自动修改答案或自动判定事实真伪。
- 核验边界：作者自报的单回答重复性试验，无源码或本站复测；没有独立人工黄金标签，各模型支撑准则和分母不同，更稳定不等于更准确。计时口径也不同，不能当作端到端提速或已生产上线证明。
- 来源：[Author article: citation judging](https://x.com/tonygentilcore/status/2104639390266036251) · [TypeSafe recommendation](https://x.com/typesafeai/status/2104772007481180633)

### 创作者 Playground：开头筛选与发布前人工复核

- 作者：Defileo / @defileo
- 输入：作者自己写的多个开头候选，及准备发布的完整帖子；逐条或按行输入 Playground。
- Jev 判断：Score 按具体读者情境评价开头，Noul 提示营销套话；完整稿另判断发布后悔风险和哪些具体主张需要来源。
- 后续动作：作者查看分数与置信度后选择开头、补来源、删改主张或重写想法，最终发布由人决定。
- 核验边界：仅作者文章中的个人使用自述和题目示例，未运行 Playground 或核实互动提升、用量与费用；没有自动写作或自动发帖证据。判断主观风格不代表能检测 AI 作者或验证事实。
- 来源：[Author workflow and questions](https://x.com/defileo/status/2102140359690305783)

### 创作者私信：分类、优先级与人工复核队列

- 作者：Defileo / @defileo
- 输入：逐条新私信及预先写定的商务合作、求助、读者反馈、推销、垃圾和其他类别。
- Jev 判断：Choice 判断发送者的诉求，Noul 判断延后一周是否会损失机会；保留 other 和低置信度人工复核。
- 后续动作：作者称 Zap 自动处理新消息，把商务线索与置信度写入 Notion 看板，其他消息批量处理，并定期人工检查 REVIEW 行、调整类别。
- 核验边界：仅作者对现有流程的自述，无自动化导出、源码或本站端到端验收；文中的构建脚本与 Zapier/Make 说明不等于已验证部署。私信传给模型须由使用者授权，本次未读取私信、接入账号或发送消息。
- 来源：[Author DM routine and review boundary](https://x.com/defileo/status/2102140359690305783)

### 文档类型分类：固定词表与候选概率展示

- 作者：Landon Thornton / LandoCole
- 输入：文档文本或抽取片段、片段策略说明，以及 21 种文档类型和“其他”的固定定义。
- Jev 判断：向原生 /v1/systemone 发送一个 document_type Choice；代码检查选项、confidence、候选概率与 token 字段。
- 后续动作：API 将类别、排序概率、实际型号和延迟返回网页；类别动画按响应概率展示并落到最终选择，不代表推理过程。
- 核验边界：仅钉住源码核查，未上传文档或调用模型。43 份合成文档的结果是作者演示，不能外推真实金融文档准确率；文本片段仍会发往托管模型，也未核实自动归档或低置信度转人工的生产接线。
- 来源：[Native Choice and response parsing](https://github.com/LandoCole/document-classifier/blob/d3a220cf901b7935dd766510979c9b175761f689/src/jev.js) · [HTTP consumer](https://github.com/LandoCole/document-classifier/blob/d3a220cf901b7935dd766510979c9b175761f689/api/classify.js) · [Probability visualization](https://github.com/LandoCole/document-classifier/blob/d3a220cf901b7935dd766510979c9b175761f689/src/settle.js) · [Synthetic evaluation boundary](https://github.com/LandoCole/document-classifier/blob/d3a220cf901b7935dd766510979c9b175761f689/README.md)

### SignalWeave：BI 证据到有限策略结果与交接

- 作者：waddle-zoo
- 输入：用户审核的分析卡片、标准化观测、来源证据及代码计算的数值比较；计算结果与语义策略分开。
- Jev 判断：配置 Jev 时用 Choice 判断观察项和 ignore、investigate、notify 等有限结果，Noul 回答卡片问题；低支持度的动作结果回退调查。
- 后续动作：引擎再应用来源错误与策略门槛，生成带证据、调查计划和目的地的结构化交接与收据，供调用 Agent 深入分析和执行消息发送。
- 核验边界：源码核查，未接入真实 BI、调度检查或发送通知。Jev 不负责因果解释，数值贡献不证明因果；服务支持其他后端，不能把所有运行都算 Jev。范围/预算不足会产生待调查交接，作者验收与本站复测分开。
- 来源：[SDK questions and outcome parsing](https://github.com/waddle-zoo/signal-weave/blob/2ce1c7ddbcd0cf885e26a996a8d89be862af3016/src/signalweave/typesafe_adapter.py) · [Gates and workflow handoff](https://github.com/waddle-zoo/signal-weave/blob/2ce1c7ddbcd0cf885e26a996a8d89be862af3016/src/signalweave/engine.py) · [Service and caller responsibilities](https://github.com/waddle-zoo/signal-weave/blob/2ce1c7ddbcd0cf885e26a996a8d89be862af3016/README.md)

### RecoverIQ：失败恢复建议与确定性预算约束

- 作者：sanghamitrajohri
- 输入：失败摘要、尝试历史、当前模型、受损文件信息、可用检查点和剩余预算；只提供当前可行的动作。
- Jev 判断：Jev Choice 排序重试、换模型、恢复检查点、人工升级或终止，另判断失败类别及重试是否有帮助；默认重试门槛为 Noul 0.3。
- 后续动作：确定性策略拒绝无效、不可用或超预算建议，再由图节点执行重试、换档、恢复或人工 interrupt；Jev 不可用时显式回退规则策略。
- 核验边界：默认 mock 与 live 明确区分；本站未运行生成代码或付费实验。作者 108 次运行规模小，重试门槛在首个 live 调用后调整，人力成本口径也会改变比较结论；根许可证未确认，因此只作代码案例。预算门槛依赖成本估计，不保证真实账单硬上限。
- 来源：[Native SDK decisions](https://github.com/sanghamitrajohri/recoveriq/blob/c11648917d45753f77d631d0f5b0a312cba93567/jev_adapter.py) · [Retry gate and fallback](https://github.com/sanghamitrajohri/recoveriq/blob/c11648917d45753f77d631d0f5b0a312cba93567/strategies.py) · [Deterministic budget policy](https://github.com/sanghamitrajohri/recoveriq/blob/c11648917d45753f77d631d0f5b0a312cba93567/recovery_policy.py) · [Action consumption](https://github.com/sanghamitrajohri/recoveriq/blob/c11648917d45753f77d631d0f5b0a312cba93567/engine.py)

### Jev Send Guard：允许应用内的草稿语气提示

- 作者：MrDesjardins
- 输入：用户允许列表中当前文本框的草稿，停止输入后检查；上下文开启时还包含可读的前文，默认不监控任何应用。
- Jev 判断：Jev Noul 判断语气、明确请求、礼貌和讽刺等可配置问题，概率达到 0.7 时标记相应关注项。
- 后续动作：程序按关注项级别在输入框旁显示提示、分别展示模型结果与耗时；它不挂钩发送动作，也不会自动阻止或发送消息。
- 核验边界：仅源码核查，未安装、授权辅助功能或读取用户草稿。Windows 实机效果为作者自报，macOS 仍待作者实测；草稿/可选前文会离机。漏答项在所核代码中按 0 处理，提示不等于确定无风险；根许可未发现，不列开源项目。
- 来源：[Noul requests and threshold](https://github.com/MrDesjardins/jev-send-guard/blob/adccaa732bf458427b3039b5574d58f0392e906b/core/jev_client.py) · [Advisory popup consumption](https://github.com/MrDesjardins/jev-send-guard/blob/adccaa732bf458427b3039b5574d58f0392e906b/core/watch_loop.py) · [Application allowlist](https://github.com/MrDesjardins/jev-send-guard/blob/adccaa732bf458427b3039b5574d58f0392e906b/core/config.py) · [Platform and permission boundaries](https://github.com/MrDesjardins/jev-send-guard/blob/adccaa732bf458427b3039b5574d58f0392e906b/README.md)

### OpenClaw：闭合决策与低置信度的离线试验

- 作者：Michael Gannotti / Vai
- 输入：简短的技能选择、是否发言、行动/询问/拒绝、任务形态和证据保留等情境，附预先定义的答案。
- Jev 判断：作者用 Jev 的 Choice、Score 和 Noul 检查封闭问题，并比较标签与置信度，特别标出约 0.50 的不确定结果。
- 后续动作：作者汇总离线测试结果与低置信度行，提出把低于 0.80 的建议交回主 Agent 或人工；文章未证明这些建议已接入生产工具执行。
- 核验边界：仅作者文章，未核实逐行数据或复测“32/32”、延迟和费用。单条注入及少量语言/推理探针不能证明安全或多语言能力，confidence 阈值不是权限；Jev 不生成最终回复。
- 来源：[Author pilot and limitations](https://x.com/MichaelGannotti/status/2112259468671197615)

### 商品分类：同样本的文本与主图配对评估

- 作者：Gbolagade Ishola / @gbolagadehq
- 输入：同一批 1,999 个商品的文案与主图，固定类别顺序；作者说明超限图像仅补边或缩放，不裁剪。
- Jev 判断：Jev 1.14.0 Choice 在固定类别中选择并返回概率；已核适配器用 assets 图像引用与显式实验头发送文案/主图，以及实际 runner。
- 后续动作：将预测与标签配对比较，统计图像增益、置信度分布及输入开销，并分别报告近重复类别接受规则与原始标签计分。
- 核验边界：作者离线评估，未独立复测；近重复类别接受规则、公开数据和标签均有局限，图像增益小且临界。低置信度升级仅设想；根许可证未发现，因此不列开源项目，也不推广到损伤、客户实拍、Box 或多语言。
- 来源：[Author paired study and deviations](https://x.com/gbolagadehq/status/2112310531881156707) · [dbench/adapters.py](https://github.com/gbolask24/decision-bench/blob/e5b72020617bf08958813fa3ee54e4384d66b69b/dbench/adapters.py) · [dbench/run.py](https://github.com/gbolask24/decision-bench/blob/e5b72020617bf08958813fa3ee54e4384d66b69b/dbench/run.py) · [README.md](https://github.com/gbolask24/decision-bench/blob/e5b72020617bf08958813fa3ee54e4384d66b69b/README.md)

### Obsidian 既有标签评分与采纳写入

- 作者：holy-max
- 输入：用户选择的笔记标题/正文范围及 vault 已有的候选标签；可排除标签并跳过已有组合。
- Jev 判断：原生 Jev Noul 分批判断每个笔记是否适合各标签；按可调阈值与人工区间重分桶，不生成新标签。
- 后续动作：界面先显示矩阵与建议；用户采纳后代码才写 YAML/行内标签，可手动添加、撤回或重置本次写入。
- 核验边界：独立 MIT 社区实现，交互受 Kaku 公开页面启发，非其官方插件。仅核源码，未安装或发送笔记；正文会发往所选服务。缺失答案按0补齐不代表确定不匹配，阈值和粗费用未校准。
- 来源：[src/llm/systemone.ts](https://github.com/holy-max/obsidian-systemone-auto-tag/blob/62fdb4fb6ff012cb927c22d374262c7e13606c37/src/llm/systemone.ts) · [src/judge/scheduler.ts](https://github.com/holy-max/obsidian-systemone-auto-tag/blob/62fdb4fb6ff012cb927c22d374262c7e13606c37/src/judge/scheduler.ts) · [src/judge/bucket.ts](https://github.com/holy-max/obsidian-systemone-auto-tag/blob/62fdb4fb6ff012cb927c22d374262c7e13606c37/src/judge/bucket.ts) · [src/ui/auto-tag-view.ts](https://github.com/holy-max/obsidian-systemone-auto-tag/blob/62fdb4fb6ff012cb927c22d374262c7e13606c37/src/ui/auto-tag-view.ts) · [src/vault/tags.ts](https://github.com/holy-max/obsidian-systemone-auto-tag/blob/62fdb4fb6ff012cb927c22d374262c7e13606c37/src/vault/tags.ts) · [README.md](https://github.com/holy-max/obsidian-systemone-auto-tag/blob/62fdb4fb6ff012cb927c22d374262c7e13606c37/README.md)

### Android 启动器语义应用候选

- 作者：polidog
- 输入：用户搜索词与已安装可启动应用的名称、包标识和有限候选表。
- Jev 判断：没有强词面匹配时，Jev Choice 为应用分配概率，Noul 判断是否存在适合用途的应用。
- 后续动作：代码在 exists≥0.3 时保留概率≥0.05的前5项，与本地搜索结果去重合并；用户点击或回车后再启动。
- 核验边界：MIT Android 社区代码，设备测试是作者自报；本站未安装、授予权限或核实 Play 上架。阈值在代码中标为经验值，API 失败回退本地结果；应用清单和搜索词会离机，不把语义候选说成自动执行。
- 来源：[app/src/main/java/jp/polidog/dotlauncher/JevSearch.kt](https://github.com/polidog/dot-launcher/blob/e014d714df76df57dfaf16969d9e5786e7e56cb7/app/src/main/java/jp/polidog/dotlauncher/JevSearch.kt) · [app/src/main/java/jp/polidog/dotlauncher/LauncherActivity.kt](https://github.com/polidog/dot-launcher/blob/e014d714df76df57dfaf16969d9e5786e7e56cb7/app/src/main/java/jp/polidog/dotlauncher/LauncherActivity.kt) · [README.md](https://github.com/polidog/dot-launcher/blob/e014d714df76df57dfaf16969d9e5786e7e56cb7/README.md)

### Command Code 工具调用判定与确认接线

- 作者：felinae98
- 输入：工具名、截断参数、工作目录、近期用户请求、助手意图与已标记的不可信内容。
- Jev 判断：Jev Score/Noul 判断风险、是否需确认、是否为用户所求及是否执行不可信指令；确定性阈值合成为 deny/ask/allow。
- 后续动作：mod 在 beforeToolCall 阻止 deny，交互界面为 ask 弹出确认；onPermissionRequest 只对 allow 自动批准，并扫描部分工具结果/指令文件。
- 核验边界：MIT 社区集成复用 jev-guard 策略，非安全保证。默认服务失败放行，headless 的 ask 仅警告后继续；只读工具可跳过，且自定义后端可能不是 Jev。未安装、改用户权限或做攻防复测，敏感上下文的外发边界需使用者审查。
- 来源：[src/jev.js](https://github.com/felinae98/cmd-mod-jev-guard/blob/4051a8b64c72678ff182318463f410a9dad9e0f9/src/jev.js) · [src/policy.js](https://github.com/felinae98/cmd-mod-jev-guard/blob/4051a8b64c72678ff182318463f410a9dad9e0f9/src/policy.js) · [src/mod.ts](https://github.com/felinae98/cmd-mod-jev-guard/blob/4051a8b64c72678ff182318463f410a9dad9e0f9/src/mod.ts) · [README.md](https://github.com/felinae98/cmd-mod-jev-guard/blob/4051a8b64c72678ff182318463f410a9dad9e0f9/README.md)

### Harness² 既有候选成品的分维度选择

- 作者：SASUKE40
- 输入：匿名候选成品、任务要求、清理过的来源材料和工作上下文，排除基准评分反馈。
- Jev 判断：可选原生 Jev 后端按交付、格式、事实支持、一致性与可用性分别给0–2分；代码校验概率与置信度并按维度顺序排序。
- 后续动作：选择一个已存在的候选并保存审计；答案缺失、低置信度、并列或审计写入失败时交回既有 Agent 选择器。
- 核验边界：Apache-2.0 的社区分支接线，不是 TypeSafe 官方或 Google 官方 Jev 集成。仅核调用与消费者，未跑基准或付费请求；Jev 不负责生成/改写成品，父框架的性能不能归为此后端的实测效果。
- 来源：[harness2/core/jev.py](https://github.com/SASUKE40/harness2/blob/993c5337b889a6f8f3585fdb57043ca7bc9dade9/harness2/core/jev.py) · [harness2/core/selection.py](https://github.com/SASUKE40/harness2/blob/993c5337b889a6f8f3585fdb57043ca7bc9dade9/harness2/core/selection.py) · [README.md](https://github.com/SASUKE40/harness2/blob/993c5337b889a6f8f3585fdb57043ca7bc9dade9/README.md)

### 飞机图像分类与外部 Harness 迭代

- 作者：Edward / SASUKE40
- 输入：飞机照片、有限机型分类表，以及 Harness 给出的提示规则和工具设定。
- Jev 判断：Jev 1.14 用 Choice 或逐类 Noul 判机型，另用 Box 定位飞机；代码解析类型、概率、框坐标与不确定提示。
- 后续动作：程序写出标签和检测记录供候选比较；外围 Harness 提议/试跑/组合规则与工具，并保存经验，模型权重不更新。
- 核验边界：作者称3轮从49%到63%，本站未复测、未检查全部运行记录，不能断言跨数据集泛化或 Jev 自己生成工具。区分合成演示、真实照片和实际 API；图像/Box 为实验功能，FGVC-Aircraft 照片受独立非商业研究条款约束。
- 来源：[X](https://x.com/edward40e/status/2112327768180703610) · [harness2/vision.py](https://github.com/SASUKE40/harness2/blob/993c5337b889a6f8f3585fdb57043ca7bc9dade9/harness2/vision.py) · [harness2/image_demo.py](https://github.com/SASUKE40/harness2/blob/993c5337b889a6f8f3585fdb57043ca7bc9dade9/harness2/image_demo.py) · [harness2/aircraft.py](https://github.com/SASUKE40/harness2/blob/993c5337b889a6f8f3585fdb57043ca7bc9dade9/harness2/aircraft.py)

### DTap 工具执行前的 Jev 自检门控

- 作者：Zhaorun Chen
- 输入：Jev 已选择且参数已填好的完整工具调用，以及此前的执行轨迹上下文。
- Jev 判断：作者再次使用 Jev 复核该调用能否执行，而非直接信任首次工具选择。
- 后续动作：在评测流程中加入执行前门控，对照直接误用、间接提示注入和正常任务完成情况。
- 核验边界：9月27日作者原帖与9月29日官方转发已核。作者报告攻击成功率下降且正常成功率60.9%降至55.8%，仍有明显残余风险；未核公开实现、精确输出类型/阈值、完整样本或独立复测，不能当作安全认证，也不能推广至新版 Jev。
- 来源：[X](https://x.com/zrrrr_cn/status/2104003596375425117) · [作者门控细节](https://x.com/zrrrr_cn/status/2104003598736924857) · [TypeSafe X](https://x.com/typesafeai/status/2104768408890003807)

## 开源项目 / Open-source projects (208)

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
| [hraness/sys1](https://github.com/hraness/sys1) | community | MIT | 0 |
| [wmy2981/auto-review-siyuan](https://github.com/wmy2981/auto-review-siyuan) | community | MIT | 0 |
| [tripodxu/board-games](https://github.com/tripodxu/board-games) | community | MIT | 0 |
| [jevplays-games/jev-factorio-agent](https://github.com/jevplays-games/jev-factorio-agent) | community | MIT | 2 |
| [shopsmartai/ora-jev](https://github.com/shopsmartai/ora-jev) | community | MIT | 0 |
| [dreamerron/decision-bench](https://github.com/dreamerron/decision-bench) | community | MIT | 0 |
| [dmishra2022/jev-java-sdk](https://github.com/dmishra2022/jev-java-sdk) | community | Apache-2.0 | 0 |
| [hev/reranker](https://github.com/hev/reranker) | community | Apache-2.0 | 15 |
| [spring-ai-community/spring-ai-typesafe](https://github.com/spring-ai-community/spring-ai-typesafe) | community | Apache-2.0 | 51 |
| [wingedsheep/argentum-engine](https://github.com/wingedsheep/argentum-engine) | community | MIT | 70 |
| [Arize-ai/openinference](https://github.com/Arize-ai/openinference) | community | Apache-2.0 | 1254 |
| [get-convex/convex-evals](https://github.com/get-convex/convex-evals) | community | Apache-2.0 | 129 |
| [justmytwospence/opencode-lean-context](https://github.com/justmytwospence/opencode-lean-context) | community | MIT | 0 |
| [justmytwospence/opencode-auto-effort](https://github.com/justmytwospence/opencode-auto-effort) | community | MIT | 0 |
| [gebeer/jev-effort](https://github.com/gebeer/jev-effort) | community | MIT | 1 |
| [datadog-labs/reflex](https://github.com/datadog-labs/reflex) | community | Apache-2.0 | 31 |
| [gbesse/alertmanager-jev-triage](https://github.com/gbesse/alertmanager-jev-triage) | community | MIT | 0 |
| [typesafe-ai/typesafe-public-examples](https://github.com/typesafe-ai/typesafe-public-examples) | official | MIT | 1 |
| [kmosher/jevons-talking](https://github.com/kmosher/jevons-talking) | community | MIT | 1 |
| [vinicius-francozo/railroad-route](https://github.com/vinicius-francozo/railroad-route) | community | MIT | 0 |
| [BeforeLanding/sift](https://github.com/BeforeLanding/sift) | community | MIT | 0 |
| [OGZamasu/JevBot](https://github.com/OGZamasu/JevBot) | community | MIT | 0 |
| [zereight/pi-zereight-router](https://github.com/zereight/pi-zereight-router) | community | MIT | 0 |
| [celesteanglm/decision-models-skills](https://github.com/celesteanglm/decision-models-skills) | community | MIT | 0 |
| [aaddrick/building-with-typesafe-jev](https://github.com/aaddrick/building-with-typesafe-jev) | community | MIT | 136 |
| [darrentmorgan/jev-accounting](https://github.com/darrentmorgan/jev-accounting) | community | MIT | 0 |
| [kortexa-ai/mappity](https://github.com/kortexa-ai/mappity) | community | MIT | 1 |
| [nothans/ex-regex](https://github.com/nothans/ex-regex) | community | MIT | 1 |
| [fullymiddleaged/vulnder](https://github.com/fullymiddleaged/vulnder) | community | Apache-2.0 | 0 |
| [armando-token/industrial-selection-bench](https://github.com/armando-token/industrial-selection-bench) | community | MIT | 0 |
| [juspay/neurolink](https://github.com/juspay/neurolink) | community | MIT | 144 |
| [Jev-Engineering/cookbook](https://github.com/Jev-Engineering/cookbook) | community | MIT | 4 |
| [vibefilter/filament](https://github.com/vibefilter/filament) | community | MIT | 4 |
| [earlgreyhot1701D/readme-clew-2](https://github.com/earlgreyhot1701D/readme-clew-2) | community | Apache-2.0 | 0 |
| [YongLD/Multi-UAV-JEV](https://github.com/YongLD/Multi-UAV-JEV) | inspired | Apache-2.0 | 1 |
| [ys118/ra2web-jev-player](https://github.com/ys118/ra2web-jev-player) | inspired | MIT | 1 |
| [nevrs/attention-vaccine](https://github.com/nevrs/attention-vaccine) | community | MIT | 0 |
| [StellarieX/Heliotrope](https://github.com/StellarieX/Heliotrope) | community | MIT | 5 |
| [SarathChandraBellam/ToolDiscoveryBench](https://github.com/SarathChandraBellam/ToolDiscoveryBench) | community | MIT | 0 |
| [pcparts001/pi-jev-compaction-lite](https://github.com/pcparts001/pi-jev-compaction-lite) | community | MIT (package.json declaration) | 0 |
| [Engid/question-kit](https://github.com/Engid/question-kit) | community | MIT | 2 |
| [EvanProgramming/decilabel](https://github.com/EvanProgramming/decilabel) | community | MIT | 0 |
| [samiulhuda360/depgate](https://github.com/samiulhuda360/depgate) | community | MIT | 0 |
| [dorkitude/skimmer](https://github.com/dorkitude/skimmer) | community | MIT | 1 |
| [retsu-AI/qq](https://github.com/retsu-AI/qq) | community | MIT | 13 |
| [kimjisub/ego-jev](https://github.com/kimjisub/ego-jev) | community | MIT | 0 |
| [jimador/bayes-of-our-lives](https://github.com/jimador/bayes-of-our-lives) | community | MIT | 0 |
| [schainks/system_one_client](https://github.com/schainks/system_one_client) | community | Apache-2.0 | 4 |
| [truongxxxx/jev-polymarket-test](https://github.com/truongxxxx/jev-polymarket-test) | community | MIT | 0 |
| [kallurayaankit/jev-email-triage](https://github.com/kallurayaankit/jev-email-triage) | community | MIT | 0 |
| [hwong103/jevmail](https://github.com/hwong103/jevmail) | community | MIT | 0 |
| [Starttoaster/reflex](https://github.com/Starttoaster/reflex) | community | MIT | 0 |
| [mrubens/jevcraft](https://github.com/mrubens/jevcraft) | community | MIT | 3 |
| [elioli983/TechMedic](https://github.com/elioli983/TechMedic) | community | GPL-3.0-only | 0 |
| [dphbfs/fast-resume-scoring](https://github.com/dphbfs/fast-resume-scoring) | community | Apache-2.0 | 0 |
| [h100envy/crawl-hive](https://github.com/h100envy/crawl-hive) | community | MIT | 84 |
| [Ordo-Engine/Ordo](https://github.com/Ordo-Engine/Ordo) | community | MIT | 38 |
| [matthelam/seo-jev-analyzer](https://github.com/matthelam/seo-jev-analyzer) | community | MIT | 0 |
| [ceokobec-hue/job-drill](https://github.com/ceokobec-hue/job-drill) | community | MIT | 0 |
| [minitru/jev-intent-benchmark](https://github.com/minitru/jev-intent-benchmark) | community | MIT | 0 |
| [jomi-se/system-one-deslop](https://github.com/jomi-se/system-one-deslop) | community | MIT | 0 |
| [DataZooDE/anofox-decide](https://github.com/DataZooDE/anofox-decide) | community | MIT | 2 |
| [mrz1836/go-discern](https://github.com/mrz1836/go-discern) | community | MIT | 1 |
| [sedum-dev/sedum](https://github.com/sedum-dev/sedum) | community | MIT | 12 |
| [Saik0s/axe-decision-control](https://github.com/Saik0s/axe-decision-control) | community | MIT | 1 |
| [tugrulguner/utilitypot](https://github.com/tugrulguner/utilitypot) | community | MIT | 0 |
| [comchatx/cx-jev-tidy](https://github.com/comchatx/cx-jev-tidy) | community | MIT | 0 |
| [RINNECODER/jev-box-study](https://github.com/RINNECODER/jev-box-study) | community | MIT | 0 |
| [WilliamJones/JEV-City](https://github.com/WilliamJones/JEV-City) | community | MIT | 0 |
| [traceroot-ai/traceroot](https://github.com/traceroot-ai/traceroot) | community | Apache-2.0 core; proprietary EE | 803 |
| [kerpopule/hermes-jev-skills](https://github.com/kerpopule/hermes-jev-skills) | community | MIT | 1130 |
| [jhochenbaum/rlm-jev](https://github.com/jhochenbaum/rlm-jev) | community | MIT | 0 |
| [ai-ready-future/jag](https://github.com/ai-ready-future/jag) | community | MIT | 0 |
| [raia-live/jev-senselab-demos](https://github.com/raia-live/jev-senselab-demos) | community | MIT | 0 |
| [honeybankstudios/jevblock](https://github.com/honeybankstudios/jevblock) | community | MIT | 0 |
| [darkmatter/adhere](https://github.com/darkmatter/adhere) | community | MIT | 9 |
| [etsabary/jev-1.14-comparison-benchmark](https://github.com/etsabary/jev-1.14-comparison-benchmark) | community | MIT | 0 |
| [chadboyda/proseweave](https://github.com/chadboyda/proseweave) | community | MIT | 0 |
| [kallurayaankit/jev-consensus-gate](https://github.com/kallurayaankit/jev-consensus-gate) | community | MIT | 0 |
| [jjmerri/gspro-commentator](https://github.com/jjmerri/gspro-commentator) | community | MIT | 0 |
| [kurowashi/pi-jev](https://github.com/kurowashi/pi-jev) | community | MIT | 0 |
| [atvari-eu/opencode-system-one](https://github.com/atvari-eu/opencode-system-one) | community | MIT | 0 |
| [psygreg/agent-reflex](https://github.com/psygreg/agent-reflex) | community | Apache-2.0 | 2 |
| [flupkede/fast-compaction](https://github.com/flupkede/fast-compaction) | community | MIT | 0 |
| [typakon4/jev-layer](https://github.com/typakon4/jev-layer) | community | MIT | 7 |
| [yetone/magpie](https://github.com/yetone/magpie) | community | MIT | 16148 |
| [daiki-beppu/live-mindmap](https://github.com/daiki-beppu/live-mindmap) | community | MIT | 1 |
| [kikijiki/jevmon](https://github.com/kikijiki/jevmon) | inspired | MIT | 0 |
| [must-lioncho/jev-mem](https://github.com/must-lioncho/jev-mem) | community | MIT | 0 |
| [colesmcintosh/liedar](https://github.com/colesmcintosh/liedar) | community | MIT | 0 |
| [mani-aiml/jev-demos](https://github.com/mani-aiml/jev-demos) | community | MIT | 7 |
| [mud-the-developer/jev-loop](https://github.com/mud-the-developer/jev-loop) | community | MIT | 0 |
| [LandoCole/document-classifier](https://github.com/LandoCole/document-classifier) | community | MIT | 0 |
| [waddle-zoo/signal-weave](https://github.com/waddle-zoo/signal-weave) | community | Apache-2.0 | 4 |
| [nocoo/falcon](https://github.com/nocoo/falcon) | community | MIT | 0 |
| [tancy-920/jev-agentic-wiki](https://github.com/tancy-920/jev-agentic-wiki) | community | MIT (code) | 0 |
| [shivaylamba/jev-model-router-for-coding-tasks-oss](https://github.com/shivaylamba/jev-model-router-for-coding-tasks-oss) | community | MIT | 0 |
| [Studio1-OSS/nconnect](https://github.com/Studio1-OSS/nconnect) | community | MIT | 7 |
| [holy-max/obsidian-systemone-auto-tag](https://github.com/holy-max/obsidian-systemone-auto-tag) | inspired | MIT | 0 |
| [polidog/dot-launcher](https://github.com/polidog/dot-launcher) | community | MIT | 0 |
| [felinae98/cmd-mod-jev-guard](https://github.com/felinae98/cmd-mod-jev-guard) | community | MIT | 0 |
| [SASUKE40/harness2](https://github.com/SASUKE40/harness2) | community | Apache-2.0 | 2 |

## 官方 cookbook / Official recipes (20)

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
- [Simple memory system](https://docs.typesafe.ai/cookbooks/basic_memory.md)：Store customer tickets and answers behind a Noul memory gate, then inject them into later typed support-routing calls. Toy dict-based example; evaluate the threshold for your own data.
- [Twitch chat filter](https://docs.typesafe.ai/cookbooks/twitch_chat_filter.md)：Classify one stream-chat message with a Choice and toxic/spoiler Nouls; code hides, blurs or highlights it. Authored 29-message English example; adapt thresholds, uncertainty and live-message handling locally.
