# 部署手册

## 1. 适用范围

这份手册只处理这些事情：

- Git 提交与推送
- GitHub 仓库
- Vercel 部署
- 自定义域名
- 评论系统启用
- 常见部署故障排查

它不负责教你写文章。发文请看 `WRITING_GUIDE.md`。

## 2. 当前部署现状

当前站点目标域名是：

- `https://www.wenhuateng.top`

当前仓库配置目标是：

- GitHub 仓库：`Wangshixiong/huaziblog`

当前评论状态：

- Giscus 代码还在
- 但配置关闭，页面不会显示评论区

## 3. Git 基本流程

### 3.1 查看状态

```bash
git status
```

### 3.2 提交改动

```bash
git add .
git commit -m "这里写清楚本次修改内容"
```

提交信息建议写清楚，例如：

- `add post 57`
- `update site config`
- `fix broken cover images`
- `add project guide and deploy guide`

不要长期写成：

- `update`
- `fix`
- `123`

### 3.3 推送到 GitHub

如果远程已经配置好：

```bash
git push
```

如果要明确推送到 SSH 仓库：

```bash
git push git@github.com:Wangshixiong/huaziblog.git main
```

## 4. 推荐远程配置

建议最终把 `origin` 指向你自己的仓库，而不是继续指向 `tw93/Weekly`。

建议目标：

- `git@github.com:Wangshixiong/huaziblog.git`

这样后面 `git push` 不容易推错地方。

如果你确认要改，可以执行：

```bash
git remote set-url origin git@github.com:Wangshixiong/huaziblog.git
```

## 5. Vercel 接入流程

### 5.1 导入仓库

在 Vercel 里：

1. 登录账号
2. 新建项目
3. 选择 GitHub 仓库 `Wangshixiong/huaziblog`

### 5.2 构建配置

通常 Astro 会自动识别。

如果要手填，建议：

- Build Command: `npm run build`
- Output Directory: `dist`

### 5.3 环境要求

当前这个项目主要是静态博客，通常不依赖复杂服务端变量。

如果后面启用评论、统计、第三方 API，再按需补环境变量。

## 6. 域名绑定流程

你的目标域名是：

- `www.wenhuateng.top`

一般流程：

1. 在 Vercel 项目里添加自定义域名
2. 按 Vercel 提示去域名服务商配置 DNS
3. 等待证书签发完成

建议优先绑定：

- `www.wenhuateng.top`

然后再决定是否把裸域：

- `wenhuateng.top`

重定向到 `www`

## 7. 域名与站点配置同步

绑定成功后，确保这些地方保持一致：

- `src/config.ts` 里的 `homePage`
- `src/config.ts` 里的 `blogPage`
- Vercel 项目域名配置
- 分享图和 favicon 的引用地址

如果域名不一致，常见问题有：

- 分享链接域名不对
- RSS 域名不对
- SEO 元信息域名不对

## 8. 评论系统启用方法

当前评论配置在：

- `src/config.ts`

字段是：

- `GISCUS_CONFIG`

目前之所以不显示评论区，是因为配置里用了禁用占位值。

如果要重新开启：

1. 准备一个公开 GitHub 仓库
2. 开启 Discussions
3. 去 [giscus.app](https://giscus.app/) 生成配置
4. 把以下字段填回去：
   - `repo`
   - `repoId`
   - `category`
   - `categoryId`

## 9. OSS 图片相关注意事项

如果部署后图片不显示，不要先怀疑代码，先查 OSS 防盗链。

要检查两件事：

1. 图片是不是在正确的 bucket
2. bucket 白名单 Referer 是否包含真实线上域名

至少要包含：

- `https://www.wenhuateng.top/`
- 如果裸域也访问，就再加 `https://wenhuateng.top/`

本地调试时还要放行：

- `http://127.0.0.1:4321/`
- `http://localhost:4321/`

## 10. 发布前最小检查

每次准备推线上前，建议做这几步：

1. `npm run build`
2. 打开首页检查
3. 打开一篇最新文章检查
4. 打开关于页检查
5. 检查封面图
6. 检查 RSS 是否可访问
7. 再推 GitHub

## 11. 常见故障

### 11.1 本地能看，线上看不到图片

通常是：

- OSS 防盗链没放行线上域名

### 11.2 文章打开 404

通常是：

- 文件名改了
- 路由没跟上
- 部署没用最新提交

### 11.3 评论区不显示

通常是：

- `GISCUS_CONFIG` 仍是关闭状态
- repoId / categoryId 配错

### 11.4 RSS 内容不对

通常是：

- `src/pages/rss.xml.js` 还残留旧站配置

## 12. 当前不建议马上做的事

这几个事情建议不要混在同一轮一起做：

- 一边迁文章一边大改样式
- 一边补英文版一边部署正式域名
- 一边清 OSS 图片一边改评论系统

最稳顺序是：

1. 内容稳定
2. 构建稳定
3. 部署稳定
4. 再做附加能力

## 13. 最短部署路径

如果你只是想把当前博客推上去，最短路径是：

1. 本地改内容
2. `npm run build`
3. `git add .`
4. `git commit -m "说明本次改动"`
5. `git push git@github.com:Wangshixiong/huaziblog.git main`
6. 让 Vercel 自动拉取部署

这就是当前最实用的上线流程。
