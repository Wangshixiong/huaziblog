# 华哥 Notes 部署手册

## 1. 当前部署现状

- 仓库：`git@github.com:Wangshixiong/huaziblog.git`
- 生产站点：`https://www.wenhuateng.top`
- Blog 外链：`https://www.qianshu.wang/`
- 部署平台：Vercel

当前模式是：

- 推送到 GitHub `main`
- Vercel 自动拉取并部署

## 2. Git 约定

统一使用 SSH。

标准 remote：

```bash
git@github.com:Wangshixiong/huaziblog.git
```

检查 remote：

```bash
git remote -v
```

如果不是 SSH，改成 SSH：

```bash
git remote set-url origin git@github.com:Wangshixiong/huaziblog.git
```

## 3. 日常发布流程

```bash
git status
npm run build
git add .
git commit -m "说明本次改动"
git push origin main
```

如果本地 `origin` 还不是 SSH，也可以显式推：

```bash
git push git@github.com:Wangshixiong/huaziblog.git main
```

## 4. Vercel 相关

这个项目在 Vercel 上已经接好。

常规情况下你不需要手动部署，只要：

- 代码推到 `main`
- 等待 Vercel 自动发布

如果需要核查部署问题，优先检查：

- GitHub 最新提交是否已推送
- Vercel 对应项目是否成功构建
- 域名是否仍绑定在当前项目

## 5. 域名和 DNS

当前 Notes 使用：

- `wenhuateng.top`
- `www.wenhuateng.top`

如果后续不换域名，现有配置继续保持即可。

如果后续切成子域名，例如 `notes.qianshu.wang`，则需要同步修改：

- Vercel 域名绑定
- DNS 记录
- `src/config.ts` 中的 `homePage`

## 6. 站点配置同步点

修改域名或站点身份时，重点看：

- `src/config.ts`
- Vercel Domains
- GitHub 仓库 remote

当前评论系统关闭，不需要作为发布必查项。

## 7. 已知注意点

- RSS 已删除，不需要再检查 RSS 地址
- 英文目录结构仍在，但不是正式发布重点
- 构建时有两个旧的 CSS minify warning，目前不影响产物
- `public/images/Happy.png` 已纳入版本控制，头像不会再因为 `.gitignore` 丢失

## 8. 出问题先查什么

### 8.1 页面已改但线上没更新

先查：

- `git push` 是否成功
- Vercel 是否构建成功

### 8.2 图片不显示

先查：

- 图片地址是否有效
- OSS 白名单是否放行当前域名

### 8.3 域名访问异常

先查：

- Vercel 域名绑定是否还在
- DNS 是否指向 Vercel
- HTTPS 证书是否已签发

