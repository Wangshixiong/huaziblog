# 吏部侍郎

基于 `tw93/Weekly` 改造的个人博客，当前内容以中文为主，主题框架为 Astro。

## 快速入口

- 在线地址：[https://www.wenhuateng.top](https://www.wenhuateng.top)
- 详细项目说明：[`docs/PROJECT_GUIDE.md`](docs/PROJECT_GUIDE.md)
- 站点基础配置：`src/config.ts`
- 中文文章目录：`src/pages/posts`
- 关于页：`src/pages/about.astro`

## 常用命令

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 当前状态

- 中文博客已完成迁移并可正常构建
- 评论系统代码仍保留，但当前关闭
- 英文内容目录仍保留框架，但正文翻译已暂停，未上线

## 维护建议

- 新文章优先直接写入 `src/pages/posts`
- 站点信息统一修改 `src/config.ts`
- 大改前先提交 git，避免把内容迁移和样式试验混在一起
