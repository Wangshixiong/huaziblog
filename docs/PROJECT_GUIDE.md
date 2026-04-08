# 项目说明

## 1. 项目定位

这个仓库是华哥个人博客的代码仓库，基于 `tw93/Weekly` 模板改造而来，当前目标是：

- 保留 Weekly 的排版和阅读体验
- 使用 Astro 继续维护博客
- 内容以中文为主
- 部署目标是 `https://www.wenhuateng.top`

当前不是一个通用主题仓库，而是一个已经绑定个人内容和个人配置的博客项目。

## 2. 当前技术结构

### 2.1 核心栈

- 框架：Astro
- 样式：Tailwind + 模板内原有样式
- 搜索：Pagefind
- RSS：Astro RSS

### 2.2 关键目录

- `src/pages/posts`
  中文文章目录，当前主内容都在这里
- `src/pages/posts/[id].astro`
  中文数字路由页，例如 `/posts/56`
- `src/pages/about.astro`
  关于页
- `src/config.ts`
  站点标题、作者、域名、仓库、评论配置
- `src/i18n`
  界面文案和多语言路径工具，不负责文章正文翻译
- `public/images`
  本地静态图片资源
- `.migration-backup`
  本轮迁移过程中的备份目录

## 3. 当前内容状态

### 3.1 已完成

- Hexo 旧站中文文章已迁入
- 关于页已迁入
- 站点标题、头像、GitHub、域名等基础信息已替换
- RSS 已改成当前站点信息
- 评论区当前关闭，不会在页面显示

### 3.2 暂未完成

- 英文版未上线
- 有部分文章封面仍使用迁移时的兜底图策略
- 一些迁移调试目录仍残留在仓库根目录，属于非功能性清理项

### 3.3 英文目录现状

仓库里保留了英文结构：

- `src/pages/en/index.astro`
- `src/pages/en/rss.xml.js`
- `src/pages/en/posts/[id].astro`

但英文正文当前没有正式上线。之前尝试过批量翻译，结果质量不稳定，所以所有英文草稿都已移出正式目录，放入：

- `.migration-backup/english-draft-20260408`
- `.migration-backup/english-draft-rejected-20260408`

## 4. 本地开发

### 4.1 安装依赖

```bash
npm install
```

### 4.2 启动开发环境

```bash
npm run dev
```

默认本地访问地址通常是：

- `http://127.0.0.1:4321`

### 4.3 生产构建

```bash
npm run build
```

### 4.4 构建预览

```bash
npm run preview
```

## 5. 如何新增文章

新文章直接新建到：

- `src/pages/posts`

建议文件名格式：

- `57-你的标题.md`

建议 frontmatter 模板：

```md
---
date: 2026/04/08
issueTitle: "这里写标题"
description: "这里写摘要"
image: "https://你的封面图地址"
heroImage: "https://你的封面图地址"
tags:
  - "AI"
  - "产品"
categories:
  - "博客"
---

<img src="https://你的封面图地址" width="800" />

正文从这里开始。
```

说明：

- `issueTitle` 是文章标题
- `description` 会用于首页摘要和 SEO 描述
- `image` / `heroImage` 目前建议保持一致
- 如果文章首图就是封面，正文顶部保留一张 `<img>` 最稳

## 6. 发布流程

当前建议的发布流程：

1. 在 `src/pages/posts` 新建或修改文章
2. 本地执行 `npm run dev` 检查页面
3. 执行 `npm run build` 确认可构建
4. 提交 git
5. 推送到 GitHub
6. 再接 Vercel 自动部署

当前这份文档只覆盖项目维护，不展开 Vercel 与域名接入细节。

## 7. 关键配置项

关键配置在：

- `src/config.ts`

重点字段：

- `title`
- `author`
- `description`
- `keywords`
- `icon`
- `siteImage`
- `homePage`
- `blogPage`
- `githubId`
- `repo`

评论配置也在同文件：

- `GISCUS_CONFIG`

当前评论是关闭状态，因为 `repo` 被设成了禁用占位值。

## 8. 迁移策略说明

本项目是从 Hexo 内容迁到 Astro，不是把 Hexo 主题照搬过来。

迁移时采用了这些原则：

- 保内容，不保 Hexo 机制
- 保 Weekly 外观，不重做主题
- 优先让中文主站先稳定可用
- 英文版后置

封面迁移策略是：

- 优先用 `cover`
- 没有 `cover` 时尝试取正文首图
- 如果仍然没有，则使用默认兜底图

这就是为什么当前有少数老文章封面观感还不够理想。

## 9. 已知问题

### 9.1 封面兜底

当前有少数旧文章没有合适封面，仍然使用默认兜底图，需要后续单独修。

### 9.2 OSS 防盗链

如果本地预览时远程图片不显示，首先检查阿里云 OSS 白名单 Referer 是否包含：

- `http://127.0.0.1:4321/`
- `http://127.0.0.1`
- `http://localhost/`
- `http://localhost:4321/`

而且要确认是对应的 bucket，都已经加了白名单。

### 9.3 英文版

英文结构文件仍在，但英文正文不应在未校对前直接上线。

### 9.4 根目录临时目录

根目录仍残留若干 `.edge-*` 调试目录和个别日志文件，属于之前截图/预览排查过程留下的临时产物，需要后续继续清理。

## 10. 后续建议

建议按这个顺序继续维护：

1. 先清理封面兜底问题
2. 再补发文模板或自动化脚本
3. 然后再做 Vercel 与域名正式接入
4. 最后再重启英文版建设

这样最稳，不会把内容维护、视觉修整、部署和翻译同时搅在一起。
