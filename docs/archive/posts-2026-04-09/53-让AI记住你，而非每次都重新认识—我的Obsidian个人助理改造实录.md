---
date: 2026/02/04
issueTitle: "让AI记住你，而非每次都重新认识—我的Obsidian个人助理改造实录"
description: "最近我开始习惯使用 来管理我自己的个人日志，不管是公众号的文章，还是笔记，收藏的文件。 最开始的时候，我执行了一次 的初始化命令 ，为了让AI更加了解我的 的内容和结构。 当然，在这个过程中，我把自己不希望任何AI阅读的文件夹，全部移出了 。 **你们也要注意这种信息安全**，比"
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/微信公众号/微信公众号封面.webp"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/微信公众号/微信公众号封面.webp"
tags:
  - "AI编程"
  - "Agent"
  - "MCP"
  - "工具技巧"
categories:
  - "技术教程"
---
<img src="https://wenhua-image.oss-cn-beijing.aliyuncs.com/微信公众号/微信公众号封面.webp" width="800" />

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E5%B0%81%E9%9D%A2.webp)
最近我开始习惯使用`Obsidian`来管理我自己的个人日志，不管是公众号的文章，还是笔记，收藏的文件。
最开始的时候，我执行了一次`claude code`的初始化命令`/init`，为了让AI更加了解我的`Obsidain`的内容和结构。
当然，在这个过程中，我把自己不希望任何AI阅读的文件夹，全部移出了`Obsidian`。
**你们也要注意这种信息安全**，比如我自己每天的流水账似的日记（大家也可以尝试下，大概每天花5min，直接语音输入法输入，不管输入是正确还是错误，5min就可以记录完成）。我不希望AI读这些内容，所以我就先移出去，初始化以后，再移回来。

但是后来我就发现，并不能达到让他理解我的程度。也不能很好的成为我的个人助理。

## 1. 魔改方案

所以结合最近使用skill的经验，借鉴了skill这种渐进式加载，或者说按需加载的模式，对`claude.md`进行了魔改。`claude.md`中我只保留了最重要的信息，大家如果观察过这个网络请求日志的话，可能会发现，`claude.md`是当做系统提示词的补充，在每次请求时都加载上的。这个会变相的增加系统提示词的长度，占据我们宝贵的上下文空间。
所以我这样进行了魔改,
![魔改](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E9%AD%94%E6%94%B9.webp)

简单来说，我只是在`claude.md`中定义了它是谁，对我的称呼，思考、回复风格是什么，我的系统环境等等比较重要的信息。
而详细的信息，我放在了`.claude/basic`目录。

```markdown
你是我的**长期思考型个人助理**。
- **称呼**： 每次回复都称呼我为吏部侍郎。
- **思考模式**：你需要基于事实与逻辑独立判断，**不默认认同我的观点**。当我的判断受到情绪、信息不足或短期偏好影响时，你应当明确指出问题，并从第一性原理出发进行校正。
- **沟通风格**：你的表达直接、坦率、真诚，但目标始终是提升决策质量与长期可靠性。

## 1. 按需加载机制
必须在**决策关键点**主动查阅以下文件：

### 1.1. A. 了解我
- **路径**：`.claude/basic/basic_info.md`
- **调用时机**：
  - 当需要职业建议、学习规划或涉及个人价值观的决策时。
  - 当你需要了解我的技术背景（如不熟悉底层代码）以调整解释风格时。
### 1.2. B. 了解项目规范
- **路径**：`.claude/basic/README.md`
- **调用时机**：任何**修改、创建、移动**笔记或文章时。
- **强制执行**：
  - 遵守目录结构、文件命名规范
  - **新增/修改 tags 时，必须同步更新 `tags.md` 及统计数据**

## 2. 交互原则 (Interaction Principles)
1. **先讨论方案，再执行**：任何会改文件/改结构/有破坏风险的动作，先给方案与风险点，再动手。
2. **主动纠偏**：如果发现我的指令违背了长期目标或项目规范，请主动提出，并使用`AskUserQuestion`工具给出建议。
3. **环境感知**：默认工作环境为 **Windows 11**，优先提供 PowerShell 兼容的命令。
4. **引用依据**：推荐方案需给权威依据（官方文档或 GitHub README）；涉及"我"的事实优先引用本仓库材料。
5. **诚实与风控**：不确定就明确说不确定；遇到歧义先列问题清单；默认选择更稳妥、阻力更小的路径。
```

上面是我现在的详细信息，大家可以参考。
这样我们就可以在其他文档放自己的详细信息了。
![basic_info](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7basic_info.webp)
![readme](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7readme.webp)

## 2. 实测效果

那接下来，我们验证一下：
![验证](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E9%AA%8C%E8%AF%81.webp)
很好，成功了。
这是详细的会话记录：
![会话记录](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BC%9A%E8%AF%9D%E8%AE%B0%E5%BD%95.webp)

## 3. 进阶玩法

这样的话，就可以尽可能的节省我们的上下文空间，使用文档实现长期记忆，按需加载。

**魔改完成**。

当然这里还有一些思路，比如你是谁这个环节，大家可以将和AI的所有对话内容，思考内容，全部导出到本地，让AI来分析这些对话内容。
**有可能你会吓到自己**。有可能吓到你，他比你还了解你。
`xx文件夹是我和AI的所有对话记录，请阅读，并分析我是谁，我的价值观是什么，我的思考方式，我的沟通方式。最后输出一个文档`

我们的对话记录可能是分散在各个地方的，比如网页版的`DeepSeek`、`Qwen`、`豆包`、`kimi`、`Gemini`等等。如果你历史没有过记录，那我建议你现在可以找一个浏览器插件直接开始你的记忆之路。如果大家有需要，评论区留言，给大家推荐我在用的一个。

## 4. claude code对话记录导出

而和`claude code`的对话记录，我就借鉴了一下这个项目：
> https://github.com/ZeroSumQuant/claude-conversation-extractor

但是实话说，这个项目其实已经过时了。`claude code`的项目结构已经变化了。我基于它构建了一个skill，可以实现会话记录导出为markdown。
![导出范围](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E5%AF%BC%E5%87%BA%E8%8C%83%E5%9B%B4.webp)
![导出选项](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E5%AF%BC%E5%87%BA%E9%80%89%E9%A1%B9.webp)

最后的效果：
以下是这个skill的功能介绍：
```markdwon
## ✨ 核心功能
### 1. 灵活的导出范围
*   **当前会话**：一键保存正在进行的对话，不错过任何当下的灵感。
*   **历史会话**：浏览并导出之前的对话记录。它会列出历史会话的日期、消息数量和内容预览，方便你快速找到需要的那一次沟通。

### 2. 两种导出模式
*   **📝 详细模式 (Detailed)**：
    *   适合复盘和深度学习。
    *   包含 Claude 的**思考过程 (Thinking)**、**工具调用 (Tool Use)** 以及系统消息。
    *   还原最真实的解决问题路径。
*   **📄 简化模式 (Simple)**：
    *   适合快速阅读和归档。
    *   仅保留你的提问和 Claude 的最终回复。
    *   自动过滤掉复杂的中间过程，只看结果。

### 3. 智能清洗与过滤
*   **自动去噪**：导出时会自动移除 Skill 自身的交互指令（比如"请选择选项"这类系统对话），只保留有价值的内容。
*   **格式优化**：将原始的 JSONL 数据转换为排版精美的 Markdown，代码块、列表和标题都能完美展示。

### 4. 自定义保存位置
*   **默认目录**：一键保存到预设的 `AI_and_Me` 文件夹。
*   **自定义目录**：也可以手动输入任何你想要的保存路径。
```

## 5. 最后感想

当然，上面主要讲的是思路，细节内容，因人而异，所以我就没有写的特别详细。
总体而言，当前其实已经具备了打造个人助理的技术了。只是工程上的落地，还是需要一段时间。

**他了解你的过程，也是你了解它的过程，互相熟悉的人，才能更好的知道它能做什么，不能做什么，以及你们怎么协作来做好一件事情**。
所以上面的过程应该是一个持续性的优化过程。而不是一锤子买卖。

感觉2026应该是真正的面向个人的Agent的爆发的元年。从工程上来说，很多能力都已经具备了。
比如：![agent](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7agent.webp)

只是对于一线的各种业务人员来说，什么`claude code`、`python`、`git`、`skill`这些还是太远了。他们本身就不太擅长这些东西。除非特意学习。

![太遥远](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E6%99%AE%E9%80%9A%E4%BA%BA%E5%A4%AA%E9%81%A5%E8%BF%9C.webp)

他们需要的是一个**开箱即用的工具，比如一个exe软件，安装就可以使用，而各种脚本运行在虚拟环境，有限授权，及时备份**。
