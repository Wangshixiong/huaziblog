# 华哥 Notes 项目说明

## 1. 项目定位

这个仓库是华哥的 Notes 站代码仓库，不再承担长文博客职责。

- 站点地址：`https://www.wenhuateng.top`
- Blog 主站：`https://www.qianshu.wang/`
- GitHub 仓库：`git@github.com:Wangshixiong/huaziblog.git`
- 部署平台：Vercel

当前站点的职责是承接：

- 工具推荐
- 轻量分享
- 灵感记录
- 短评和随手记

不再放系统性长文。长文继续留在 Hexo 博客。

## 2. 文档分工

- `README.md`
  仓库首页展示，只放站点说明、近期内容和文档入口。
- `docs/PROJECT_GUIDE.md`
  项目结构、定位、维护边界。
- `docs/WRITING_GUIDE.md`
  Notes 日常发文规范。
- `docs/DEPLOY_GUIDE.md`
  Git、GitHub、Vercel、域名和发布流程。

## 3. 技术栈

- 框架：Astro
- 样式：Tailwind CSS + 模板原有样式
- 搜索：Pagefind
- 评论：Giscus 代码保留，当前关闭
- 部署：Vercel 自动部署

说明：

- RSS 已移除
- 英文目录结构仍保留，但当前不是正式维护范围

## 4. 关键目录

- `src/pages/posts`
  当前正式 Notes 内容目录。
- `src/pages/posts/[id].astro`
  数字路由入口，支持类似 `/posts/1`。
- `src/pages/about.astro`
  关于页。
- `src/config.ts`
  站点标题、域名、GitHub 仓库、Blog 外链、评论配置。
- `public/images`
  本地静态图片资源。
- `docs/archive/posts-2026-04-09`
  从旧内容中备份出来、已下线的历史文章。
- `docs/superpowers/specs`
  已确认的设计文档。

## 5. 当前内容状态

当前正式在线内容是 Notes，而不是 Blog。

已完成：

- 站点定位改为 Notes
- 顶部导航可从 Notes 跳到 Blog
- 历史旧文已从正式目录移出并归档
- 导入了新的试水文章
- RSS 页面和入口已删除

当前正式文章目录中的内容：

- `src/pages/posts/1-cc-switch.md`
- `src/pages/posts/2-qiushi-skill.md`

## 6. 维护原则

这个仓库后面按下面原则维护：

- 放短内容，不放长文
- 改站点信息优先看 `src/config.ts`
- 调整导航先看 `src/components/Header`
- 旧内容不要直接删，先归档到 `docs/archive/`
- 发文和样式修改分开提交

## 7. Git 规范

统一约定：

- Git 远程仓库优先使用 SSH
- 不使用 HTTPS 作为长期 remote 标准

当前仓库标准 remote 应该是：

```bash
git@github.com:Wangshixiong/huaziblog.git
```

如果发现 remote 是 HTTPS，建议切回 SSH：

```bash
git remote set-url origin git@github.com:Wangshixiong/huaziblog.git
```

## 8. 与 Blog 的关系

两套站点分工如下：

- `qianshu.wang`：Blog，放系统性长文
- `wenhuateng.top`：Notes，放轻内容和随手记

当前只要求：

- Notes 能跳到 Blog

Blog 回链 Notes 可以后面再改，不依赖这个仓库。

