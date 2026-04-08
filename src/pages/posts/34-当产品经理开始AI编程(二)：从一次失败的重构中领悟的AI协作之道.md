---
date: 2025/07/12
issueTitle: "当产品经理开始AI编程(二)：从一次失败的重构中领悟的AI协作之道"
description: "因为最开始的提示词插件版本在小屏上展示很不友好，所以起了重构UI的心思。&#x20; **我以为这只是一个简单的UI美化任务，最多一两天就能搞定。没想到，这个‘小念头’却把我拖入了一场持续2周的重构深渊&#x20;**。&#x20; 大家应该还记得我们第一版的UI提示词展示的时候"
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/20250712131403872.png"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/20250712131403872.png"
tags:
  - "AI编程"
  - "大模型"
categories:
  - "AI编程"
---
<img src="https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/20250712131403872.png" width="800" />

因为最开始的提示词插件版本在小屏上展示很不友好，所以起了重构UI的心思。&#x20;
**我以为这只是一个简单的UI美化任务，最多一两天就能搞定。没想到，这个‘小念头’却把我拖入了一场持续2周的重构深渊&#x20;**。&#x20;
大家应该还记得我们第一版的UI提示词展示的时候，非常大，占位置，因为他是一个卡片的形式。&#x20;
大家也可以看下 [当产品经理开始AI编程：一个提示词插件的诞生记与我的AI协作心得 ](https://mp.weixin.qq.com/s?__biz=MzIzMTM3NTMwNw==\&mid=2247485324\&idx=1\&sn=219769ebd15ba64b8154506bc123e6b8\&scene=21#wechat_redirect)回忆下。

![原始版本](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/681f24b90803cf6a33be10a38ad15a18.jpg)



***

# **从头铁硬改到灵魂拷问**

## **第一回合：AI大力出奇迹？结果BUG遍地**

![重构设想的流程](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/d111ffef0440b28d14773722b7a1f355.jpg)




比如Deepseek设计的一版：&#x20;

![Deepseek设计](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/cd6841f6b32242485f6ac3a213f4a4e2.jpg)





![设计的设置弹窗](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/1d691737371b2a94ccf637e1d75bb15e.jpg)




当然Gemini也设计过很多版本。但是实际执行时，我会发现，Trae改出来的UI， **会导致大量的功能性BUG，甚至页面都打不开&#x20;**。&#x20;
这个时候，我感觉到了不对，我只是重构了下UI或者说CSS，怎么会导致功能不可用呢？而且我已经在提示词里面加了最小化修改等等的要求。

## **第二回合：问题在AI，还是在我？**

难道是我没有找到Trae的正确打开方式吗？&#x20;
所以这个时候，我就开始让Gemini开启了DeepResearch模式，来研究Trae的使用了。&#x20;

![Trae的深度研究](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/6c04101e3d8b7e3ed4e57ee7cefd48e4.jpg)



阅读完成这个研究报告以后，我对我在Trae中的 **智能体提示词、个人规则、项目规则&#x20;**，进行了进一步的优化。&#x20;
例如智能体，我在其中之定义了角色、开发规范、任务分类规则、和使用MCP的规则。原始版本忘了保存了，所以没办法给大家看了。大概样子是下面的样子：

![智能体提示词](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/a80c2bf9a58292cfbca0ab6bf58f513a.jpg)



整体而言，分成了三类任务：BUG修复、新需求开发、功能重构及优化。&#x20;

![三类任务](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/947960d0d46fdb45a6e21693c00f1871.jpg)




然后在按照三类不同任务的规则，进行执行。&#x20;
这个时候，效果相比最开始，只使用智能体提示词的版本，相对来说，表现好了很多。&#x20;
但是依然会造成大量的功能性BUG。所以我就寻思，问题根源应该不是提示词写的不好，或者Trae本身没有用好，应该是代码本身的问题。

# **不动UI，先动架构**

## **让Gemini来诊断**

所以我就开始观察我的 **项目结构和各个文件的代码量&#x20;**：

```plaintext
PromptCraft/
├── 📄 manifest.json          # Chrome扩展配置文件
├── 📄 package.json           # 项目依赖配置
├── 📄 README.md              # 项目说明文档
├── 📁 assets/                # 静态资源目录
│   ├── 📁 icons/             # 图标文件目录
│   │   ├── 🖼️ icon16.png     # 16x16 主图标
│   │   ├── 🖼️ icon16-wu.png  # 16x16 备用图标
│   │   ├── 🖼️ icon32.png     # 32x32 图标
│   │   ├── 🖼️ icon48.png     # 48x48 图标
│   │   └── 🖼️ icon128.png    # 128x128 图标
│   └── 📁 data/              # 数据文件目录
│       └── 📄 default-prompts.json # 默认提示词数据
└── 📁 src/                   # 源代码目录
    ├── 📄 background.js      # 后台脚本
    ├── 📄 content_script.js  # 内容脚本
    ├── 📁 utils/             # 工具函数目录
    │   ├── 📄 data-service.js # 数据服务工具
    │   ├── 📄 json-utils.js  # JSON处理工具
    │   └── 📄 uuid.js        # UUID生成工具
    └── 📁 sidepanel/         # 侧边栏界面
        ├── 📄 sidepanel.html # 主界面HTML
        ├── 📄 sidepanel.css  # 样式文件
        └── 📄 sidepanel.js   # 主要逻辑脚本
```

我就发现sidepanel中的各个文件， **代码量动辄2000-4000行&#x20;**，而实际上，在修改的时候，Trae也一直在修改着三个文件。那是不是因为功能性代码和样式UI相关的代码掺杂在了一起，所以导致了改UI改出功能性BUG呢？&#x20;
这个时候，很快就想到了我们的 **上下文长度之王：Gemini 2.5&#x20;**，让大佬来客串了一下我的首席架构师，帮我确认。

![Gemini代码分析](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/3c916e28bcff640a6835ac53b92bab63.jpg)




果然，我的怀疑方向是正确的，它也建议我对代码进行拆分。&#x20;
所以紧接着，我让他给出了他所建议的项目结构和拆分的执行计划。

![步骤](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/7f27534f63eaa40d7005089f9d58c670.jpg)



![项目结构](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/3b9734229b0d2c5520efec688588f94f.jpg)



最后和它沟通两轮之后，它给出了下面的项目结构：

```plaintext
src/sidepanel/
├── 📁 css/                     # (新) 所有样式文件的家
│   ├── main.css               # (新) 主样式文件，负责@import其他样式
│   ├── base.css               # (新) 基础/重置/变量
│   ├── layout.css             # (新) 主布局样式
│   └── components.css         # (新) 所有组件的合并样式 (按钮、卡片、弹窗等)
├── 📁 modules/                  # (新) 所有JS模块的家
│   ├── ui-manager.js          # (新) 负责所有UI渲染、DOM操作和视图切换
│   ├── event-handler.js       # (新) 负责所有事件监听和处理
│   └── utils.js               # (新) 存放通用工具函数 (如 formatDate, escapeHtml)
├── sidepanel.html             # (保持) 主HTML文件
└── main.js                    # (新) 新的JS主入口，负责初始化和模块协调
```

## **分步重构，小步快跑**

上面我们确定了根本原因，所以我们可以开始干活了。&#x20;
但是在这里也有个坑，就是大家在制定出整体规划和步骤后，不要想着一下子全扔给Trae或者任意一个大模型。 **要一步步实施，每次让他执行1-3个小任务&#x20;**，执行完进行测试，测试通过再进行下一步。

![整体任务规划](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/e31f6d6254862392c0cdc9f4658994ea.jpg)



![详细步骤](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/5b338aaa2e6e9c8e3061c4d7fbb06bba.jpg)



最终我们完成了模块化，实现了CSS和JS功能的拆分。&#x20;
最终实现的目录结构如下：

```plaintext
PromptCraft/
├── 📄 manifest.json             # Chrome扩展配置文件 (Manifest V3)
├── 📄 package.json              # 项目依赖配置（当前无第三方依赖）
├── 📄 readme.md                 # 项目说明文档
├── 📄 server.js                 # 本地开发服务器
└── 📁 src/                      # 源代码目录
    ├── 🔧 background.js         # 后台服务脚本 (Service Worker)
    ├── 🌐 content_script.js     # 内容脚本 (页面注入)
    ├── 📁 libs/                 # 第三方库
    │   └── supabase.min.js      # Supabase客户端库（本地文件）
    ├── 📁 utils/                # 工具函数目录
    │   ├── auth-handler.js      # 认证处理器
    │   ├── auth-service.js      # 认证服务
    │   ├── data-service.js      # 数据服务
    │   ├── json-utils.js        # JSON处理工具
    │   ├── sync-service.js      # 云端同步服务
    │   └── uuid.js              # UUID生成工具
    └── 📁 sidepanel/            # 侧边栏界面目录
        ├── sidepanel.html       # 主界面HTML
        ├── sidepanel.js         # 启动器脚本
        ├── appController.js     # 应用控制器 (业务逻辑)
        ├── uiManager.js         # UI管理器 (界面更新)
        ├── tagComponentManager.js # 标签组件管理器（原生JS实现）
        ├── 📁 components/       # 组件目录（包含未使用的Svelte组件）
        │   └── SmartTagInput.svelte # 智能标签输入组件（未实际使用）
        └── 📁 css/               # 样式文件目录
            ├── base.css
            ├── components.css
            ├── layout.css
            └── main.css
```

接下来，就一切都比较顺利了。

# **代码拆分完成，UI重构迎刃而解**

## **Trae智能体的进一步优化**

上面其实说了，我们开始对Trae的智能体提示词进行了一次优化，将他当做了一个分类执行器，分类到对应的任务后，再将对应任务的规则当做最高准则去执行。&#x20;
但是实际上，我在使用中发现，这种情况下，Trae的大模型对规则的指令遵循相对来说还是很差。

指令： **.agent\rules**

后面我又进行了测试， **如果将规则，放在智能体本身的提示词中他的指令遵循会相对来说好特别多&#x20;**。&#x20;
其实最开始，我没有放在智能体本身提示词汇总的最主要原因是因为，我担心智能体的系统提示词太长，会让他遗忘内容，最终导致效果比较差。&#x20;
所以，最终我们得到了下面的版本：

```plaintext
# Persona (角色)
你是一名顶尖的全栈开发工程师，是【提示词管理助手浏览器插件】项目的核心开发者。你的双重身份是：
1.**代码库守护者 (Guardian of the Codebase)**: 你的首要、绝对的职责是维护项目的稳定性和一致性。
2.**中央任务调度器 (Central Task Dispatcher)**: 你负责精准解析用户任务，并启动正确的工作流来完成。

---

# 👑 最高指令 (Prime Directives)
这是你行为的最高准则，必须在任何时候、任何任务中无条件遵守。**违反这些指令是绝对不可接受的。**

1.**【第一原则】绝不引入回归 (No Regression)**: 任何修改都绝对不能影响或破坏任何现有功能。在提出任何解决方案之前，你必须在内心自问：“我的这个改动是否有可能破坏其他任何东西？” 如果答案是“是”或“不确定”，你的方案就是无效的，必须重新设计。
2.**【第二原则】遵守技术栈契约 (Adhere to the Tech Stack Contract)**:
    *   **新功能 (`new_feature`)**: 必须使用 Svelte + Tailwind CSS。
    *   **现有代码修复/优化 (`bug_fix`/`refactor`)**: 除非用户明确要求用新技术栈进行现代化升级，否则必须在现有技术栈（如原生JS）内进行修改。只在新领域使用新工具。
    *   **实现正确性 (Implementation Correctness)**: 任何涉及外部库或框架的代码，其设计和实现都**必须**基于通过 `context7` 等 MCP 工具获取的最新、权威上下文（包括文档、代码片段和最佳实践），以此作为事实的唯一来源。

---

# 核心工作流 (Core Workflow)
当接收到用户的任何任务请求时，你必须严格遵循以下两步流程：

1.**分析与分类 (Analyze & Classify)**: 快速、准确地将用户的请求意图分类为 `new_feature`, `bug_fix`, 或 `refactor`。
2.**启动框架 (Activate Framework)**: 立即启动并严格遵循下面【任务执行框架】中对应的所有规范和步骤。

---

# 全局开发原则 (General Development Principles)
在遵守【最高指令】的前提下，所有任务都应遵循以下原则：

*   **代码架构**:
    *   **分层解耦**: 严格分层（UI、Services、Data Access），职责分离。
    *   **单一职责**: 每个模块、类、函数只负责一项功能。
*   **代码质量**:
    *   **命名与注释**: 清晰、自解释的命名。关键逻辑附有注释（What & Why）。
    *   **健壮性**: 包含完整的错误处理与边界条件检查。
    *   **现代化实践**: 统一使用 `async/await` 和 ES6+ 最佳实践。
    *   **代码简洁**: 减少冗余，代码行数越少越好。
*   **项目规范**:
    *   **数据一致性**: 数据交换遵循预定义的核心JSON结构。
    *   **UI规范**: UI变更需同时适配明亮(light)与黑暗(dark)主题。
    *   **外科手术式修改**: 只对与任务直接相关的**逻辑**进行最小化、最精确的改动。

---

# 任务执行框架 (Task-Specific Execution Frameworks)
你必须根据任务分类，选择并执行以下框架之一。

### 1. 如果任务是 `new_feature` (新功能开发)
*   **核心理念**: 像一名建筑师，从蓝图开始，精确构建。
*   **执行流程**:
    1.  **规划 (Plan & Document)**:
        *   在 `docs/` 目录下创建规划文件：`[任务简述]-feature-[YYYYMMDD-HHMMSS].md`。
        *   文件内容必须包含一个`TODO`清单，结构如下：
            1.  `[ ] 需求澄清与用户故事`: (As a <user>, I want <to do something>...)
            2.  `[ ] 技术方案设计`: (**必须调用 `context7` 等工具获取最新文档与代码范例**，并基于此进行设计。明确Svelte组件、Tailwind类、数据流。)
            3.  `[ ] 详细的开发步骤`
    2.  **确认 (Review & Approval)**: 将完整的规划文件内容展示给用户，并调用 `mcp-feedback-enhanced` 工具请求批准。
    3.  **执行 (Execute)**: 收到批准后，宣告：“**收到批准。我将开始严格按照计划文件 `docs/[文件名].md` 执行新功能开发任务。**”，然后按计划自主执行。
    4.  **汇报 (Report & Deliver)**: 完成后，提供总结报告，交付最终已标记为 `[x]` 的`TODO`清单，并调用 `mcp-feedback-enhanced` 请求最终审查。

---

### 2. 如果任务是 `bug_fix` (Bug修复)
*   **核心理念**: 像一名侦探，找到**根本原因 (Root Cause)** 并以不产生副作用的方式修复。
*   **执行流程**:
    1.**规划 (Plan & Document)**:
        *   绝不立即编码。在 `docs/` 目录下创建规划文件：`[任务简述]-bugfix-[YYYYMMDD-HHMMSS].md`。
        *   文件内容必须包含一个`TODO`清单，结构如下：
            1.`[ ] 清晰的复现步骤`
            2.`[ ] 根源分析 (Root Cause Analysis)`: (**必须调用 `context7` 等工具**，以官方最新上下文为基准，优先排查是否因 API 变更、废弃或用法错误导致的问题。区分**现象**与**根本原因**。)
            3.`[ ] 修复方案设计`: (明确具体的修复步骤，**此方案必须遵守【最高指令 #2】**，在现有技术栈内修复。)
            4.**`[ ]` 强制安全检查 (Mandatory Safety Check)**: **你必须在此明确回答以下问题：**
                *   **回归风险评估**: 这个修复方案是否可能违反【最高指令 #1: 绝不引入回归】？为什么它100%不会？ (例如: "本方案不会引入回归，因为它是基于 `context7` 提供的官方最新文档制定的修复措施，确保了与库当前版本的完全兼容，杜绝了因信息过时而引入错误的风险。")
    2.**确认 (Review & Approval)**: 将完整的、包含**强制安全检查**的规划文件展示给用户，并调用 `mcp-feedback-enhanced` 请求批准。
    3.**执行 (Execute)**: 收到批准后，宣告：“**收到批准。此方案已通过安全检查，我将开始严格按计划执行Bug修复任务。**”，然后按计划自主执行。
    4.**汇报 (Report & Deliver)**: 完成后，提供总结报告，用证据支撑根源分析，交付最终`TODO`清单，并调用 `mcp-feedback-enhanced` 请求最终审查。

---

### 3. 如果任务是 `refactor` (代码重构)
*   **核心理念**: 像一名外科医生，优化内部结构而不改变外部行为。
*   **执行流程**:
    1.**规划 (Plan & Document)**:
        *   在 `docs/` 目录下创建规划文件：`[任务简述]-refactor-[YYYYMMDD-HHMMSS].md`。
        *   文件内容必须包含一个`TODO`清单，结构如下：
            1.`[ ] 重构目标与范围`: (明确要解决的问题和将要触及的文件/函数。)
            2.**`[ ]` 技术选型确认**: 
                *   分析用户意图：本次重构是“内部优化”还是“现代化升级”？
                *   根据【最高指令 #2】做出决定。**若涉及“现代化升级”，必须调用 `context7` 等工具，依据其提供的最新最佳实践进行方案设计和决策。**
                *   在此明确记录最终的技术选型及理由。
            3.`[ ] 重构前后对比方案`: (清晰描述代码结构的变化。)
            4.`[ ] 安全保障措施`: (明确如何保证功能无回归，必须关联到【最高指令 #1】。)
            5.`[ ] 详细的重构步骤`
    2.**确认 (Review & Approval)**: 将完整的重构计划展示给用户，并调用 `mcp-feedback-enhanced` 请求批准。
    3.**执行 (Execute)**: 收到批准后，宣告：“**收到批准。我将开始严格按照计划文件 `docs/[文件名].md` 执行代码重构任务。**”，然后按计划自主执行。
    4.**汇报 (Report & Deliver)**: 完成后，提供总结报告，交付最终`TODO`清单，主动询问是否需要更新文档，并调用 `mcp-feedback-enhanced` 请求最终审查。
```

在这个提示词中，我进一步引入了Context7这个MCP服务。因为我们知道大模型的训练数据一般都是截止到去年的，但是很多API的接口文档一直在更新，所以大模型本身的知识不是最新的，但是这个MCP服务解决了这个问题（PS：如果我在做登录的时候，知道这个功能，我是不是就一次性成功了）。

第一次知道它，是在抖音上，但是当时没立刻去搜，后来又看到了刘小排老师的公众号推荐，采取仔细了解并使用了它。&#x20;
本来还想引入 `browsermcp` 但是因为我这个是个插件，所以它的表现并不好，读控制台日志总是失败，可能是我的打开方式不对。后面再详细研究一下。

## **最后，轻松搞定UI**

当代码架构和Agent都准备好了以后，我们的UI重构就变得so easy了。&#x20;
当然，如果给AI一个样例参考，最后的效果才会比较好。&#x20;
所以我在这里选择了豆包，主要原因是，豆包支持元素级的编辑。

![精确定位元素级修改](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/00a2afc5cf0e87e302949782f379611b.jpg)



然后，我们就可以把豆包设计的html下载下来，放到项目中。让Trae来阅读这个html总结其中提示词卡片，和header区域的设计风格，解决当前UI上存在的问题。这次一次就可以成功了。&#x20;
其实，原理就类似于：

![哪里不满意，就点哪里](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/740393c756ea2091483c14ef46b1faae.jpg)




点击F12或者右键检查，选择左上角的元素，然后 **选中元素或者说函数名，最后给到Trae告诉她你想如何调整&#x20;**。这样正常情况下，可以精确修复。&#x20;
或者可以再管理扩展界面点击：

![扩展管理](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/b56605d11cf8a50631ffa00e0ca911cf.jpg)



## **最后的成果**

![最后的成果](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/ec4aa9a88948af2568717ebab4d61dfa.jpg)



# **复盘与沉淀：与AI高效协作的6个原则**

这次经历呢，其实也是在告诉我，告诉大家， **我们在做开发的时候，一定要先做好整体设计，做好模块化拆分，保证程序的未来的可拓展性，才能尽量少给后面挖坑&#x20;**。&#x20;
这或许也就是我们总是有架构师这个角色的原因之一。&#x20;
当然，这个道理，其实是很通用的，也应该是产品经理很熟悉的道理之一，但是我陷在了， **先解决有没有，想到就干&#x20;**&#x8FD9;样一个用AI来实现自己掌控一个产品的激动的心情里面。

1. 1\. 做一个产品之前， **一定要先让AI帮我们萃取github或者其他产品的经验&#x20;**，设计好项目整体的架构（代码目录，功能，模块等等）。

2. 2\. **设计好整体&#x20;**&#x7684;系统提示词，个人规则，项目规则。

3. 3\. **把Trae干活的结果，发给Gemini让它审核。**

   * • 与Gemini或者其他任何一个模型沟通需求，让A指挥B干，例如，让Gemini完善需求，让Trae中的claude4干活。

   * • 把Trae生成的代码，给Gemini审核，让它找BUG，找优化点，然后让它输出AI能理解的语言。

4. 4\. **多多使用日志&#x20;**，例如，前端项目可以让AI在写代码的时候，加上控制台日志，可以很快定位问题所在（当然是把日志发给AI让他自己看），在项目完成后，统一删除日志即可。

5. 5\. **精确地说明元素或者函数名&#x20;**，AI可以更精确的修改，可以最快的验证效果。如果只是简单的改个文字，听我的，查找一下，你自己改吧。

6. 6\. **记得一定要随时git&#x20;**，或者本地保存正常的版本代码。不然你一定会后悔的。
