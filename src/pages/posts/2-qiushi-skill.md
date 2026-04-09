---
title: "2. 教员思想为什么适合武装 AI？我最近最想推荐的 Skill：求是"
date: "2026-04-09"
description: 我最近最想推荐的，不是某个模型，而是 qiushi-skill 这套能把 AI 拉回调查、分析、实践和复盘的方法论。
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/qiushi-skill-logo.webp"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/qiushi-skill-logo.webp"
socialImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/qiushi-skill-logo.webp"
tags:
  - AI编程
  - Claude Code
  - Skill
categories:
  - 工具推荐
---

我最近最想推荐的，不是某个模型，而是 qiushi-skill 这套能把 AI 拉回调查、分析、实践和复盘的方法论。

![qiushi-skill](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/qiushi-skill-logo.webp)

它最有价值的地方，不是“多几个命令”，而是把教员思想里最能落地的部分，变成了 AI 真能执行的工作流：调查研究、抓主要矛盾、实践检验、批评与自我批评、集中兵力。项目地址在这里：[qiushi-skill](https://github.com/HughYau/qiushi-skill)。AI 一旦按这套方法做事，就不容易上来就瞎答，也不容易半路跑偏。

更关键的是，它不只支持 Claude Code。这个项目同时给 Claude Code、Cursor、Codex、OpenCode 都准备了安装入口，其他支持 system prompt 和 Markdown commands 的 agent 端，也能直接复用 `skills/` 和 `commands/`。

如果你是在 Claude Code 里装，我建议直接用原生命令。README 里那条 `npx claudepluginhub ...` 我实测会报错，但下面这组能跑通：

```bash
claude plugin marketplace add https://www.claudepluginhub.com/api/plugins/hughyau-qiushi-skill/marketplace.json
claude plugin install hughyau-qiushi-skill@cpd-hughyau-qiushi-skill
claude plugin list
```

如果你也想让 AI 少一点“会说”，多一点“会干正事”，这个 skill 很值得装。
