# Blog / Notes 拆分设计

日期：2026-04-09

## 目标

保留现有的 Hexo 站点 `qianshu.wang` 作为长文博客；把当前 Astro/Vercel 站点改造成独立的 `notes` 站，用来承载轻量分享内容。

## 已确认决策

1. `qianshu.wang` 继续保持现有风格和内容结构，不做改版。
2. 当前 Astro 站点不再作为主博客，而是改为 `notes` 站。
3. 当前 Astro 站点里已有的 `posts` 内容先在仓库内完整备份，再做清理。
4. 第一篇导入到 `notes` 的内容，使用 `cc-switch.md` 作为试水文章。
5. `blog` 和 `notes` 两个站点都要在一级导航里互相放链接。

## 内容定位

### Blog

- 域名：`qianshu.wang`
- 技术栈：Hexo
- 内容类型：技术长文、系统化文章、较完整的思考沉淀

### Notes

- 域名：当前 Astro/Vercel 站点，后续定位为 `notes`
- 技术栈：Astro
- 内容类型：轻分享、工具推荐、链接摘录、短感想、简短记录

## 备份策略

当前 Astro 站点下的 `src/pages/posts` 内容，不做直接永久删除，而是先移动到仓库内归档目录。

这样做的目的：

- 当前 `notes` 站可以立刻清爽下来
- 原有内容仍然可以随时回看或恢复
- 如果以后需要再迁回 Blog，也有明确的归档位置

建议备份目录：

- `docs/archive/posts-2026-04-09/`

## 第一阶段范围

第一轮只做下面这些事情：

1. 备份当前 Astro 站点所有已有文章
2. 保留现有站点外壳、样式基础和部署方式
3. 导入 `F:\我的笔记本\Obsidian\Blog\公众号文章\草稿\【7】cc-switch\cc-switch.md`
4. 把这篇内容适配成 `notes` 风格的首篇文章

## 导航设计

两个站点要明确互相导流：

- Blog 站增加指向 Notes 的入口
- Notes 站增加指向 Blog 的入口

对当前 Astro `notes` 站来说，顶部导航至少增加一个：

- `Blog` -> `https://www.qianshu.wang/`

## 风险点

1. 当前 Astro 模板里仍有一些“博客 / 周刊”语义，后续需要统一成 `notes` 语言。
2. 导入的 `cc-switch.md` 可能需要补 frontmatter 或调整格式，才能更适合当前模板。
3. 导入文章里的配图可能依赖外链地址，导入后要检查是否正常显示。

## 实施顺序

1. 归档当前 Astro 文章
2. 调整 `notes` 站的文案和导航
3. 导入 `cc-switch.md`
4. 本地构建验证
5. 推送仓库，触发 Vercel 自动部署
