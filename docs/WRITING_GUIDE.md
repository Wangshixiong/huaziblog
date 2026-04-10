# 华哥 Notes 发文手册

## 1. 适用范围

这份手册只解决一件事：

- 如何在 Notes 站里新增、修改和发布内容

它不讲 Vercel、域名、GitHub 配置，这些看 `DEPLOY_GUIDE.md`。

## 2. 内容应该放什么

这个仓库只放 Notes 风格内容，建议包括：

- 工具推荐
- 链接分享
- 使用体验
- 简短观察
- 方法论短评

不建议放：

- 系统性教程长文
- 完整系列文章
- 需要长期 SEO 承载的主博客文章

这类内容放 `qianshu.wang`。

## 3. 正式内容目录

中文 Notes 统一放在：

- `src/pages/posts`

旧内容归档放在：

- `docs/archive/posts-2026-04-09`

不要把归档内容再直接搬回正式目录，除非你明确要恢复上线。

## 4. 文件命名规则

建议格式：

- `序号-标题.md`

例如：

- `3-你的标题.md`
- `4-最近在用的一个工具.md`

说明：

- 前缀数字用于保持 notes 顺序和数字路由
- 后半段标题用于可读 slug
- 不建议频繁改文件名

## 5. Frontmatter 推荐模板

```md
---
title: "这里写标题"
date: "2026-04-10"
description: "这里写 1 到 2 句话摘要。"
image: "https://你的图片地址"
heroImage: "https://你的图片地址"
tags:
  - AI编程
  - 工具推荐
categories:
  - 工具推荐
---

正文从这里开始。
```

## 6. 字段说明

- `title`
  页面真实标题，优先使用这个字段。
- `date`
  发布时间，建议统一为 `YYYY-MM-DD`。
- `description`
  首页卡片摘要和 SEO 描述。
- `image`
  首页卡片和分享图的主要图片。
- `heroImage`
  文章页头图，当前建议先和 `image` 保持一致。
- `tags`
  细粒度主题标签。
- `categories`
  粗粒度分类，数量不要太多。

## 7. 图片建议

当前最稳的方式仍然是使用稳定可访问的 OSS 图链。

发文前至少检查：

- 图片地址能直接打开
- 本地预览能显示
- 线上域名已加入 OSS Referer 白名单

建议一篇 Notes 至少有一张主图，不然首页卡片表现会比较弱。

## 8. 本地写作流程

1. 在 `src/pages/posts` 新建 Markdown
2. 填写 frontmatter
3. 启动本地预览
4. 检查首页卡片和文章页
5. 构建通过后再提交

常用命令：

```bash
npm install
npm run dev
npm run build
```

## 9. 发布前检查清单

- 标题是否准确
- 摘要是否像人话
- 图片是否显示
- 首页卡片是否正常
- 页面里 Blog 跳转是否还在
- `npm run build` 是否通过

## 10. Git 提交建议

建议把内容改动和样式改动分开提交。

示例：

- `add note 3`
- `update note 2 cover`
- `refine notes homepage copy`

不要把发文、改样式、改部署混在一个提交里。

