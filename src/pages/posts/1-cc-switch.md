---
title: "1. 同时用5款AI编程CLI？cc-switch 一站式管理"
date: "2026-04-02"
description: 一款跨平台桌面工具，帮你统一管理 Claude Code、Codex、Gemini CLI 等多款 AI 编程 CLI 的 provider、MCP、skills 和历史记录。
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/add-zh.webp"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/add-zh.webp"
tags:
  - AI编程
  - 开源工具
categories:
  - 工具推荐
---

![add-zh](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/add-zh.webp)同时用 Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw 的兄弟，有没有被这个问题难住过：换 API provider 要改 JSON/TOML/.env 文件，MCP 和 Skills 也无法统一管理。

cc-switch 就是这个问题的答案。一款跨平台桌面工具（Tauri 2 构建），支持 Windows、macOS、Linux，同时管理上面说的 5 款 CLI。

**主要功能：**
- 50+ provider 预设（GLM、kimi 等），一键切换
- MCP 服务器统一管理，支持多工具双向同步
- Skills 一键安装，symlink 或文件复制两种模式
- 系统托盘快速切换，不用打开主界面
- 会话历史跨工具浏览搜索
- 云端同步（Dropbox / OneDrive / iCloud / WebDAV）

项目地址：https://github.com/farion1231/cc-switch
