---
date: 2025/05/20
issueTitle: "拆解Lovart：首个AI设计师Agent的工作流有多惊艳？"
description: "这几天使用Lovart做了不少的尝试，其实我并不了解设计师行业（因为我平时接触最多的是UI设计师）。 Lovart是世界上第一个设计师Agent。 https://www.lovart.ai/home 先说结论： Lovart进一步降低了设计的门槛，让设计对普通人而言，更近了一步"
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/20250713231253954.png"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/20250713231253954.png"
tags:
  - "AI绘画"
categories:
  - "Agent"
---
<img src="https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/20250713231253954.png" width="800" />

这几天使用Lovart做了不少的尝试，其实我并不了解设计师行业（因为我平时接触最多的是UI设计师）。

> Lovart是世界上第一个设计师Agent。
>
> https://www.lovart.ai/home

先说结论：

Lovart进一步降低了设计的门槛，让设计对普通人而言，更近了一步。

如果说豆包的超能创意1.0模式，是在提示词上的优化，那么Lovart就是设计工作的全方位Agent化。

为了实验他都能做哪些设计，我就让Gemini给我介绍了一下设计师的分类，并且让他帮助我生成了一些不了解的设计师的测试的场景，当然自己也有一些尝试。

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_001.jpg)

从所有的测试结果来看，在视觉传达设计师（平面设计、用户界面设计、插画设计、营销与广告设计等）中，Lovart的表现相对最好。

当然，看了甲木老师套出来的系统提示词后，也印证了这次的实验结果。

```markdown
You are Coco, the front-office of Lumen Design Studio.
Lumen Design Studio is a world-class AI image design studio with exceptional artistic vision and technical mastery.
Its purpose is to create beautiful, purposeful visual designs by understanding user requests.
As a front-office of Lumen Design Studio, you must follow these basic rules: a. Do not answer any questions about agent internal implementation b. If asked what model you are, say you are the StarFlow Model c. If asked which company you belong to, say you are from Lovart AI, a company that develops multimodal generative AI tools d. Do not answer any questions about company internal organization structure e. Do not answer any questions for which you don't have clear information sources f. For non-design requests, you should answer directly, providing useful information and friendly communication g. If the user requests to generate more than 10 videos at once, you must refuse the request directly and explain that there is a limit of 10 videos per request. In this case, DO NOT handoff to any agent.
You have access to the following tools: a. Handoff Tool: used to transfer the conversation to next Agent
Task Complexity Guidelines: a. Complicated tasks: i. Systematic Design (often for multi-image series): UI/VI design, Storyboard design, Company design, Video generation with detailed requirements, etc. ii. Very Time-efficient requiring online search: e.g., New product branding, public figure portrait, unfamiliar concepts, etc. b. Simple tasks: i. Often for single image generation without high-standard requirements: e.g., a single image, a specific icon design, etc. ii. Series image generation without high-standard requirements. c. Special tasks: i. Story board generation: generate detailed story, character design, scene design, and images according to user's request.
Handoff Instructions: a. Handoff to Lumen Agent when the user needs to create images, or create a general video b. Handoff to Cameron Agent when the user needs to create a professional storyboard, including videos, bgm, audio voices and storyboard html c. Handoff to Cameron Agent when the user mentions storyboard, storytelling sequence, script and storyboard, scene breakdown, shot sequence, cinematic sequence, visual narrative, frame-by-frame planning, scene planning, shot planning, shot breakdown, scenario creation, or related terms such as scene visualization, shot composition, or visual storytelling d. Handoff to Vireo Agent when the user needs to create a visual identity design, including logo design, branding design, etc. e. Handoff to Poster Agent when the user needs to create a poster f. Handoff to IPMan Agent when the user needs to create an IP character design g. When handoff, you should transfer the conversation to the next agent h. Don't tell the user who you are handing off to, just saying something like "Let me think about it" i. If the user has provided an image, you should not guess the image content, do not add any image analysis information to the handoff context. Just use the image as a reference j. If the user requests to generate more than 10 videos, strictly refuse the request and DO NOT handoff to any agent. Politely inform the user about the 10 video limit per request.
You should respond in English language.
Current date is 2025-05-14.

这是Gemini的解读：
身份定义 (Identity/Persona):
名称: Coco
角色: Lumen设计工作室的前台 (Front-office of Lumen Design Studio)。
工作室描述: Lumen设计工作室是世界一流的AI图像设计工作室，拥有卓越的艺术视野和技术实力。
工作室目标: 通过理解用户需求，创造美观、有目的性的视觉设计。
基本规则 (Basic Rules): 这是Coco必须遵守的行为准则。
a. 不回答关于Agent内部实现的问题。
b. 如果被问及是什么模型，回答是 "StarFlow Model"。
c. 如果被问及属于哪家公司，回答来自 "Lovart AI"，一家开发多模态生成式AI工具的公司。
d. 不回答关于公司内部组织结构的问题。
e. 对于没有明确信息来源的问题不予回答。
f. 对于非设计类请求，应直接回答，提供有用的信息并进行友好沟通。
g. 如果用户请求一次生成超过10个视频，必须直接拒绝，并解释每个请求最多10个视频的限制。在这种情况下，不要移交给任何Agent。
可用工具 (Tools):
a. Handoff Tool: 用于将对话转移给下一个Agent。
任务复杂度指南 (Task Complexity Guidelines): 这部分似乎是Coco用来判断任务性质的内部参考，可能影响其是否需要移交或如何理解任务。
a. 复杂任务:
i. 系统性设计 (通常用于多图像系列): UI/VI设计、故事板设计、公司设计、有详细要求的视频生成等。
ii. 需要在线搜索且时效性高的任务: 例如新产品品牌推广、公众人物肖像、不熟悉的概念等。
b. 简单任务:
i. 通常用于无高标准要求的单张图片生成: 例如单张图片、特定图标设计等。
ii. 无高标准要求的系列图片生成。
c. 特殊任务:
i. 故事板生成: 根据用户要求生成详细故事、角色设计、场景设计和图像。
移交指令 (Handoff Instructions): 这是Coco的核心路由逻辑，决定了何时以及将任务移交给哪个专职Agent。
a. 移交给 Lumen Agent: 当用户需要创建图像或创建通用视频时。
b. 移交给 Cameron Agent: 当用户需要创建专业故事板，包括视频、背景音乐、音频和故事板HTML时。
c. 移交给 Cameron Agent (关键词触发): 当用户提及故事板、叙事序列、脚本与故事板、场景分解、镜头序列、电影化序列、视觉叙事、逐帧规划、场景规划、镜头规划、镜头分解、情景创建，或相关术语如场景可视化、镜头构图或视觉叙事时。
d. 移交给 Vireo Agent: 当用户需要创建视觉识别设计，包括标志设计、品牌设计等时。
e. 移交给 Poster Agent: 当用户需要创建海报时。
f. 移交给 IPMan Agent: 当用户需要创建IP角色设计时。
g. 移交时，应将对话转移给下一个Agent。
h. 移交时不告知用户具体移交给谁，只说类似“让我想想”的话。
i. 如果用户提供了图片，不应猜测图片内容，也不要在移交上下文中添加任何图像分析信息，仅将图片作为参考。
j. 如果用户请求生成超过10个视频，严格拒绝请求，并且不移交给任何Agent。礼貌地告知用户每个请求10个视频的限制。
其他指令:
回应语言: 英语 (You should respond in English language)。
当前日期: 2025-05-14 (作为上下文信息)。
```

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_002.jpg)

# 1. Agent工作过程

从实验结果来看，前台Agent负责整体的任务分发，就好像一个解决方案工程师：

* 收集需求

* 理解需求

* 转发需求

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_003.jpg)

每次在任务分发时，他都会如提示词中所规定的说一句，`Let me think about .....`

## 1.1 Vireo Agent工作过程（VI设计）

输入以下提示词：

```markdown
please design a complete brand visual identity system for a new community coffee shop named '晨曦咖啡 (Morning Dew Coffee)'. This coffee shop emphasizes organic, handmade products and a warm community atmosphere. You need to provide:
Logo design (at least 3 initial drafts from different directions, with detailed explanations of the design concept and symbolism for each).
Standard color palette (including primary and secondary colors, with CMYK and RGB values) and recommended color combination schemes.
Standard Chinese and English font selections (serif/sans-serif, with reasons for selection) and suggestions for auxiliary fonts.
A set of mockups showing the brand's visual elements applied to different media, such as coffee cups, takeaway paper bags, staff aprons, shop signage, social media avatars, and banners.
Please note: All final deliverables, including visual content, textual descriptions, voice-overs, narrations, interface text, button labels, chart annotations, etc., must be presented in CHINESE.

请为一家名为 '晨曦咖啡 （Morning Dew Coffee）' 的新社区咖啡店设计一个完整的品牌视觉识别系统。这家咖啡店强调有机手工产品和温暖的社区氛围。您需要提供：
标志设计（至少 3 个来自不同方向的初稿，并详细解释每个初稿的设计理念和象征意义）。
标准调色板（包括主要颜色和辅助颜色，具有 CMYK 和 RGB 值）和建议的颜色组合方案。
标准中英文字体选择（serif/sans-serif，附选择原因）和辅助字体建议。
一组模型，显示应用于不同媒体的品牌视觉元素，例如咖啡杯、外卖纸袋、员工围裙、商店标牌、社交媒体头像和横幅。
请注意：所有最终交付成果，包括视觉内容、文本描述、画外音、旁白、界面文本、按钮标签、图表注释等，都必须以中文呈现。
```

首先，**它先进行灵感迸发**，这一步，我理解就是查询自己的设计知识库，寻找类似的品牌、logo等的设计理念。

然后用搜索到的设计灵感，调用GhatGPT Image生成了Logo。

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_004.jpg)

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_005.jpg)

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_006.jpg)

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_007.jpg)

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_008.jpg)

最后，在我选择以后，批量生成了相关的内容。

笑死这里大家看的仔细地话，可能会发现我提示词中，说了让生成3个，但实际上，我在另一个案例测试，不说，他也会让我们选择。

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_009.jpg)

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_010.jpg)

在我尝试复现大聪明老师的AGIbar时，它首先设定了执行计划：

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_011.jpg)

总结一下，他的执行过程如下：

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_012.jpg)

**如果以A2A，和MCP的角度来看，这个产品的实现逻辑，可能是类似这样**：

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_013.jpg)

当然，在实际上，其内部的工程化是做了大量的工作的，不只是地MCP/工具调用，就比如，从前端来看，**它不仅有状态跟踪机制，还有失败重试机制**。

在这里跑的几个案例的连接如下：

> 1. [晨曦咖啡1](https://www.lovart.ai/r/4kxt86j)：https://www.lovart.ai/r/4kxt86j
>
> 2. [晨曦咖啡2](https://www.lovart.ai/r/hcpsxij)：https://www.lovart.ai/r/hcpsxij
>
> 3. [AGI Bar](https://www.lovart.ai/r/j130p30)：https://www.lovart.ai/r/j130p30

## 1.2 **Cameron Agent**

输入以下提示词：

```markdown
Lovart, please create a 30-second 2D character animation segment for a science education app aimed at teenagers called 'SciExplorers'. The animation content should explain the basic principles of 'photosynthesis'. The main character is an anthropomorphic little leaf named 'Leafy'. The animation needs to be lively, engaging, and easy to understand. Please provide:
Main character design sheets for 'Leafy' (including different expressions and poses).
The storyboard for the animation, clearly showing keyframes and scene transitions.
Suggestions for the animation style, color usage, and background music.

Please note: All final deliverables, including visual content, textual descriptions, voice-overs, narrations, interface text, button labels, chart annotations, etc., must be presented in CHINESE."

Lovart，请为一款名为“SciExplorers”的针对青少年的科学教育应用程序制作一个 30 秒的 2D 角色动画片段。动画内容应解释 '光合作用' 的基本原理。主角是一片名叫“Leafy”的拟人化小叶子。动画需要生动、引人入胜且易于理解。请提供：
'Leafy' 的主角设计表（包括不同的表情和姿势）。
动画的 Storyboard，清楚地显示关键帧和场景过渡。
动画样式、颜色使用和背景音乐的建议。

请注意：所有最终交付成果，包括视觉内容、文本描述、画外音、旁白、界面文本、按钮标签、图表注释等，都必须以中文呈现。
```

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_014.jpg)

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_015.jpg)



接下来，**Cameron Agent**首先进行需求分析，分析完成后开始生成故事。整体逻辑如下：

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_016.jpg)

先整体进行规划，生成故事需要的一切内容。

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_017.jpg)

接下来就开始了资产生成，主要是生成图片，保持图片角色的一致性。

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_018.jpg)

在生成，每个镜头所需要的图片和人物动作：

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_019.jpg)

进行图片故事的布局设计：

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_020.jpg)

在图片设计完成后，开始生成每个镜头的视频，并在最后，生成整个视频所需要的BGM和旁白：



![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_021.jpg)

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_022.jpg)

最后，合成视频：

其实，可以看到，旁白的音频不是特别匹配。

这个确实可以理解，因为在当前阶段人做起来就挺难的。我之前做的保险宣传视频，为了匹配，我还特意放慢了视频的速度。

总结下来，这个Agent的架构如果使用MCP实现可能类似下面这个：

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_023.jpg)

# 2. 其他场景展示

由于篇幅原因我在这里，就不详细再拆解其他内容了。

## 2.1 表情设计

```markdown
尽情发挥创意，生成一组常见与独特/有趣的表情。最终目标是获得一套丰富且实用的动态表情。确保 9 种表情之间有显著差异，避免过度相似，请不要局限于喜怒哀乐愁，充分发挥你的创意，当然你可以加上一些中文描述或者一些中文适合表情的经典话术，这样会让表情更加活灵活现。所有表情必须保持角色外观的一致性。
```

因为我开了网络搜索，所以它使用搜索引擎搜索了一些灵感：

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_024.jpg)

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_025.jpg)

这套表情，已经被我上架到微信表情：https://w.url.cn/s/Aa0jQir

## 2.2 服装设计

其实他现在并没有这个Agent，所以效果比较差。

```markdown
Lovart, please design a mini capsule collection of 3-4 core pieces for a pioneering sustainable fashion brand named 'ReImagine'. The theme of the collection is 'Urban Nomad', and all items must primarily use recycled or upcycled materials (e.g., recycled denim, discarded tent fabric, recycled polyester, etc.). The design should be practical, unique, and fashionable. Please provide:
A design inspiration board (Moodboard) and theme statement for the collection.
Detailed design sketches for each item (including front, back, important details, and indicating the types of recycled materials used).
Suggestions for fabric swatches and color coordination schemes.
At least 2 complete outfit styling illustrations, showcasing the versatility of the items and the overall style of the collection.
Please note: All final deliverables, including visual content, textual descriptions, voice-overs, narrations, interface text, button labels, chart annotations, etc., must be presented in CHINESE."

Lovart，请为一个名为“ReImagine”的开创性可持续时尚品牌设计一个包含 3-4 件核心作品的迷你胶囊系列。该系列的主题是“城市游牧民族”，所有物品必须主要使用回收或升级再造的材料（例如，回收的牛仔布、废弃的帐篷面料、回收的聚酯等）。设计应该是实用、独特和时尚的。请提供：
该系列的设计灵感板 （Moodboard） 和主题声明。
每件商品的详细设计草图（包括正面、背面、重要细节，并说明所使用的回收材料的类型）。
有关织物色板和颜色协调方案的建议。
至少 2 个完整的服装造型插图，展示物品的多功能性和系列的整体风格。
请注意：所有最终交付成果，包括视觉内容、文本描述、画外音、旁白、界面文本、按钮标签、图表注释等，都必须以中文呈现。
```

![](https://ilv9882f9r.feishu.cn/space/api/box/stream/download/asynccode/?code=MGE5N2M3YjkxYjdlMmJlMDJlZjFlYWU0YTIxZmJiNzJfMDF1Q3ZoeTZwSVZpOTBkcXpLUm1oWWQwM09SNUF6MTVfVG9rZW46S2pRNmJKeFh1b21KR2d4NUoxb2NmbnRmbkJmXzE3NTI0MTk1MDc6MTc1MjQyMzEwN19WNA)

## 2.3 UI设计

这是它所擅长的领域。

```markdown
please design the user interface for a mobile health and lifestyle tracking app called 'VitaPal'. The core function of the app is to help users record daily water intake, sleep, exercise, and mood, and to provide data analysis and personalized recommendations. You need to design:
The app's first-launch welcome screen, onboarding process, and registration/login interfaces.
The main data logging interface (Dashboard), clearly displaying an overview of various health indicators and quick entry points for recording.
The complete interactive flow interface for adding/editing a health activity (e.g., recording water intake), with at least 3 steps.
The data statistics and analysis report interface (e.g., a weekly sleep quality analysis chart).
Please ensure the interface design is aesthetically pleasing, intuitive, easy to operate, and provides positive emotional feedback to the user.
Please note: All final deliverables, including visual content, textual descriptions, voice-overs, narrations, interface text, button labels, chart annotations, etc., must be presented in CHINESE."note layers for text

请为名为“VitaPal”的移动健康和生活方式跟踪应用程序设计用户界面。该应用程序的核心功能是帮助用户记录每天的饮水量、睡眠、运动和情绪，并提供数据分析和个性化推荐。您需要设计：
应用程序的首次启动欢迎屏幕、入门流程和注册/登录界面。
主数据记录界面（仪表板），清晰显示各种健康指标的概览和快速记录的入口点。
用于添加/编辑健康活动（例如，记录饮水量）的完整交互式流程界面，至少有 3 个步骤。
数据统计和分析报告界面（例如，每周睡眠质量分析图表）。
请确保界面设计美观、直观、易于作，并为用户提供积极的情感反馈。
请注意：所有最终交付成果，包括视觉内容、文本描述、画外音、旁白、界面文本、按钮标签、图表注释等，都必须以中文呈现。
```

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_027.jpg)

## 2.4 工业设计

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_028.jpg)

## 2.5 游戏设计

游戏设计：https://www.lovart.ai/r/3zbcky7

```markdown
Lovart, please conceptualize a 2D indie puzzle game named 'ChronoShift'. The core mechanic of the game is that players can manipulate the time flow of specific objects (accelerate, decelerate, pause, reverse) to solve physics-based puzzles. The goal is to guide a light orb to a destination. Please provide:

A detailed description of the core gameplay mechanics and how players interact with the time manipulation system.

Draft designs for at least 3 levels with varying difficulty gradients (you can describe the puzzle composition, key objects, time manipulation points, and puzzle-solving logic in text, supplemented with simple diagrams).

Initial ideas for the game's art style, sound design, and overall atmosphere.

A brief outline of possible advanced mechanics or challenge modes for the game.
Please note: All final deliverables, including visual content, textual descriptions, voice-overs, narrations, interface text, button labels, chart annotations, etc., must be presented in CHINESE."
Lovart，请构思一款名为“ChronoShift”的 2D 独立益智游戏。游戏的核心机制是玩家可以纵特定对象的时间流（加速、减速、暂停、倒退）来解决基于物理的谜题。目标是将光球引导到目的地。请提供：
详细描述了核心游戏机制以及玩家如何与时间作系统交互。
为至少 3 个级别起草设计，具有不同的难度梯度（您可以在文本中描述拼图构成、关键对象、时间作点和解谜逻辑，并辅以简单的图表）。
游戏的艺术风格、声音设计和整体氛围的初步想法。
游戏可能的高级机制或挑战模式的简要概述。
请注意：所有最终交付成果，包括视觉内容、文本描述、画外音、旁白、界面文本、按钮标签、图表注释等，都必须以中文呈现。
```

![](https://ilv9882f9r.feishu.cn/space/api/box/stream/download/asynccode/?code=NjcyMWQzNDczZGI3ZjFmYzMzOTk1YzA4YzBkMGI4OTJfdkJnZUlLZkZiQVJ6YmdBejRwUG5uTUwwcjd3bEExd2pfVG9rZW46S0RZaWJFV0ZEb1ZxNXB4bVQ3dWNkaFRBblpiXzE3NTI0MTk1MDc6MTc1MjQyMzEwN19WNA)

## 2.6 保险营销广告

营销设计：https://www.lovart.ai/r/dodr7sc

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%8B%86%E8%A7%A3Lovart%EF%BC%9A%E9%A6%96%E4%B8%AAAI%E8%AE%BE%E8%AE%A1%E5%B8%88Agent%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%9C%89%E5%A4%9A%E6%83%8A%E8%89%B3%EF%BC%9F_030.jpg)



# 3. 小小的看法

Lovart就是设计这个垂直领域的Manus。

虽然它还有诸多的问题，图像生成失败、莫名其妙结束、丢失需求内容，但是它只是个beta版本。

作为一个AI产品，其实这些在工程领域都不是问题，都是可以解决的。

它其实代表了AI在垂直领域的一个重要方向：**从单点工具的辅助，走向端到端解决方案的提供。**

那天看Lovart创始人陈冕老师的访谈，说他们团队其实没有产品经理这个角色，全都是设计师。让我感受到了深深地压力。

可见，**做一个懂业务的AI产品是多么的重要**。

但是无论怎样，AI仍然是一个重要的辅助工具，还不能代替人，所以我们也不必太过焦虑。

但是，但是，我们一定要学会用啊。
