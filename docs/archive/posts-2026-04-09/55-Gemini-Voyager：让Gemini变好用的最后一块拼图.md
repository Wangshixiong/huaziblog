---
date: 2026/02/15
issueTitle: "Gemini Voyager：让Gemini变好用的最后一块拼图"
description: "1. 为什么写这个 大家可能会想：Gemini 已经够强了，还需要什么插件？我想说不是的。 **先说结论：原生 Gemini 是个顶级模型，但它现在的网页端体验，离\"好用的生产力工具\"还差得远。** 你有没有遇到过这种崩溃瞬间： - 长对话聊到后面，滚轮滚到手酸也找不到刚才那段代"
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B0%81%E9%9D%A2gemini.webp"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B0%81%E9%9D%A2gemini.webp"
tags:
  - "工具"
  - "AI"
  - "Gemini"
  - "浏览器插件"
categories:
  - "效率工具"
---
![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B0%81%E9%9D%A2gemini.webp)
## 1. 为什么写这个

大家可能会想：Gemini 已经够强了，还需要什么插件？我想说不是的。

**先说结论：原生 Gemini 是个顶级模型，但它现在的网页端体验，离"好用的生产力工具"还差得远。**

你有没有遇到过这种崩溃瞬间：
- 长对话聊到后面，滚轮滚到手酸也找不到刚才那段代码在哪。
- 想引用 AI 的一句话反驳，得复制、粘贴、手动打个 `>`，烦得想摔键盘。
- 好不容易调教好的 Prompt，下次换个新对话又要重新打一遍。
- 网页上聊透了方案，回到 VS Code 里还得像教小学生一样重新给 AI 喂背景。

写到这里你可能会想：忍忍不就过去了？没关系，我以前也忍。直到我发现了 **Gemini Voyager**。

它不只是修补丁，它是直接给 Gemini 的工作流"升舱"。

---

## 2. 长对话的"解药"：时间轴与引用

在原生界面里，长对话就是灾难。你就像在一个没有路标的迷宫里，上上下下，找不着北。

Voyager 给出的解法极其直观：**右侧时间轴**。
![Voyager 时间轴](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%97%B6%E9%97%B4%E8%BD%B4.png)

它就像视频的进度条，或者书的目录：
- **每一个点**，就是一次对话。
- **鼠标放上去**，能偷看（预览）内容。
- **点一下**，瞬间瞬移过去。
- **长按**，还能加星（插眼），标记高光时刻。

以前我找一段之前的代码，得翻半分钟；现在？**指哪打哪**。
还有很多高级设置功能：
![时间轴](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%97%B6%E9%97%B4%E8%BD%B4-1.png)

## 3. 引用回复

这是我最想吐槽原生体验的点。我想针对 AI 的某句话追问，流程通常是：
1. 选中文字
2. `Ctrl+C`
3. 滚到底部输入框
4. `Ctrl+V`
5. 换行写我的话

**真服了。** 这在 2025 年简直是原始人的操作。

Voyager 把它变成了两步：
1. 选中文字。
2. 点击浮现的 **"引用回复"** 按钮。
![引用](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%BC%95%E7%94%A8.png)
啪，格式整整齐齐地进了输入框。这才是人用的工具。

---

## 4. 你的数字资产，要"拿得走"，不只是 Gemini 能用

我们经常会磨出一些神级 Prompt，比如"帮我把这段代码重构为函数式风格"或者"用乔布斯的语气写一段产品发布稿"。

用完就丢？太浪费了。存记事本？找起来太慢。

Voyager 的 **灵感库（提示词管理器）** 解决得刚刚好：
- **捕获**：输入框旁边有个小图标，点一下直接存。
- **调用**：输入 `/` 或者打开库搜标签，一键插入。
![提示词管理](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8F%90%E7%A4%BA%E8%AF%8D%E7%AE%A1%E7%90%86-1.png)
**我这里插一句：目的不同，手段就不一样。** 如果它只能在 Gemini 用，那格局就小了。
Voyager 允许你在 **自定义网站** 里激活这个功能。这意味着，你在 Gemini 里存的 Prompt，去 ChatGPT、Claude 甚至 DeepSeek 的网页版里，照样能调出来用。
![提示词管理](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8F%90%E7%A4%BA%E8%AF%8D%E7%AE%A1%E7%90%86.png)

## 5. 文件夹与导出：拒绝数据锁死

原生 Gemini 的左侧列表，基本就是个"垃圾堆"。除非你记忆力超群，否则别想找到一周前的某个特定对话。

Voyager 加入了 **文件夹** 系统。
- **拖拽**：把对话抓起来，扔进文件夹。有物理反馈的那种爽感。
- **套娃**：大项目套小项目，层级随你定。
- **识图**：它会自动识别你是写代码还是闲聊，配上不同的图标。
![文件夹管理对话](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%96%87%E4%BB%B6%E5%A4%B9%E7%AE%A1%E7%90%86%E5%AF%B9%E8%AF%9D.png)
更重要的是 **导出**。
Gemini 的数据在云端，那是 Google 的；导出来，才是你的。
Voyager 支持导出为：
- **Markdown**：直接扔进 Obsidian 或 Notion，完美。
- **PDF**：发给老板或客户。
- **JSON**：给开发者做二次处理。
![对话导出](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%AF%B9%E8%AF%9D%E5%AF%BC%E5%87%BA.png)
特别是现在的 **Deep Research** 模式，Voyager 能把它完整的"思考过程"——包括思考阶段、条目、参考网站——全部结构化导出。这才是知识沉淀。
![deepresearch](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/deepresearch.png)


## 6. 最后
上面我只是简单说了一些功能，大家如果有兴趣的话，可以详细阅读官方文档：

> https://voyager.nagi.fun/

![官方文档](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3.png)

最重要，它是开源的，朋友们，安全绝对保障：

> https://github.com/Nagi-ovo/gemini-voyager

**不想做被工具困住的人，就得先把工具变成手脚的延伸**。

Gemini Voyager，值得你试一试。
