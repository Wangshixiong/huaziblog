---
date: 2025/07/27
issueTitle: "“如果不是AI，我肯定搞不定”：我用Vercel重构个人博客，顺手实现了“图片一键搬家”"
description: "最近又捡起来了我的博客，上次更新还是3年以前了，哈哈。 原来我的博客是使用hexo+github搭建的。 hexo用于生成静态页面， github用于保存静态页面的代码， 再通过阿里云的域名解析到github项目地址。"
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E2%80%9C%E5%A6%82%E6%9E%9C%E4%B8%8D%E6%98%AFAI%EF%BC%8C%E6%88%91%E8%82%AF%E5%AE%9A%E6%90%9E%E4%B8%8D%E5%AE%9A%E2%80%9D%EF%BC%9A%E6%88%91%E7%94%A8Vercel%E9%87%8D%E6%9E%84%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%8C%E9%A1%BA%E6%89%8B%E5%AE%9E%E7%8E%B0%E4%BA%86%E2%80%9C%E5%9B%BE%E7%89%87%E4%B8%80%E9%94%AE%E6%90%AC%E5%AE%B6%E2%80%9D.png"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E2%80%9C%E5%A6%82%E6%9E%9C%E4%B8%8D%E6%98%AFAI%EF%BC%8C%E6%88%91%E8%82%AF%E5%AE%9A%E6%90%9E%E4%B8%8D%E5%AE%9A%E2%80%9D%EF%BC%9A%E6%88%91%E7%94%A8Vercel%E9%87%8D%E6%9E%84%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%8C%E9%A1%BA%E6%89%8B%E5%AE%9E%E7%8E%B0%E4%BA%86%E2%80%9C%E5%9B%BE%E7%89%87%E4%B8%80%E9%94%AE%E6%90%AC%E5%AE%B6%E2%80%9D.png"
tags:
  - "博客"
categories:
  - "工具"
---
<img src="https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E2%80%9C%E5%A6%82%E6%9E%9C%E4%B8%8D%E6%98%AFAI%EF%BC%8C%E6%88%91%E8%82%AF%E5%AE%9A%E6%90%9E%E4%B8%8D%E5%AE%9A%E2%80%9D%EF%BC%9A%E6%88%91%E7%94%A8Vercel%E9%87%8D%E6%9E%84%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%8C%E9%A1%BA%E6%89%8B%E5%AE%9E%E7%8E%B0%E4%BA%86%E2%80%9C%E5%9B%BE%E7%89%87%E4%B8%80%E9%94%AE%E6%90%AC%E5%AE%B6%E2%80%9D.png" width="800" />

最近又捡起来了我的博客，上次更新还是3年以前了，哈哈。

原来我的博客是使用hexo+github搭建的。
hexo用于生成静态页面，
github用于保存静态页面的代码，
再通过阿里云的域名解析到github项目地址。





原来的搭建思路可以查看[hexo-next | 吏部侍郎](https://www.qianshu.wang/posts/a3a69e9b/)；
> https://www.qianshu.wang/posts/a3a69e9b/

因为最近总是听到别人说vercel，所以就想着自己也试试用它来展示博客，想到就开始干了。

# 1. 安装hexo

当然，hexo的安装是非常简单的，但是对于我们非技术人员来说还是有一定的门槛，不过我们参考官网的步骤，基本都可以一次成功，如果失败了，那八成是由于win电脑的各种环境变量问题。

详细的步骤，我们可以[参考hexo官网的详细使用教程](https://hexo.io/zh-cn/docs/)。
>https://hexo.io/zh-cn/docs/

主要是准备好node.js环境和git工具。当然我们也可以首先看下自己有没有安装这两个东西，首先我们可以点击开始菜单，右键选择终端管理员。

![右键打开命令行](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250724225600384.png)

```shell
node --version
// 分别输入
npm --version
```

如果正确输出了版本号那就代表我们已经安装好了（注意版本号是否高于官网推荐的版本）。

当然，AI时代，我们可以让大模型的命令行工具来帮我们执行安装。比如我这里使用了`warp`，大家也可以使用`claude code`或者`Gemini cli`等。

我使用它的主要原因是它被我薅到了羊毛，哈哈。

> warp : https://www.warp.dev/

例如，我今天使用的时候，发现环境没有了，我可以这样输入：

![warp](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250724230436471.png)

![自动执行全局安装](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250724230730218.png)

安装完成后，环境变量就会有它了。

接下来，你可以在你后面想写博客的文件夹，执行下面的命令。

1. 首先，在你想写博客的文件夹，安装shift键，然后点击鼠标右键，打开命令行窗口或者warp窗口。或者你可以cd到这个目录。

2. 在命令行中输入下面的命令：

 ```shell
hexo init
 ```

在这里我就不详细继续说了，大家可以详细阅读官方文档，非常详细。

> 建站：https://hexo.io/zh-cn/docs/setup

```markdown
├── _config.yml #网站的 配置 文件。
├── package.json # 网站的依赖项，如果使用vercel部署，vercel会使用这个东西来安装必要的包。
├── scaffolds # 模版 文件夹。 当您新建文章时，Hexo 会根据 scaffold 来创建文件。
├── source # 资源文件夹。 是存放用户资源的地方。就是后续写博客的地方
|   ├── _drafts # 草稿的文件夹
|   └── _posts # 正式博客的所有文章的文件夹
└── themes # 主题文件夹（当然，最新版本这个东西好像没有什么用了）
```

最新的主题配置方式已经变成了下面图片中的样子：

![官方文档最新主题配置方式](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250724232214476.png)

最新版本hexo的主题安装方式也变成了安装node包。例如我的主题：

![主题配置文件](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250724232440655.png)

如官方文档所属：Hexo 在合并主题配置时，Hexo 配置文件中的 `theme_config` 的优先级最高，其次是 `_config.[theme].yml` 文件。 最后是位于主题目录下的 `_config.yml` 文件。

所以我对于主题的主要修改，都是修改的`_config.butterfly.yml`,他的原始文件当然是从主题的node包中获取的。

就比如，我们安装的话可以执行：

```shell
npm install hexo-theme-butterfly
```

当然，你也可以告诉`warp`你想干什么，让他来帮你做。

关于butterfly的配置，大家可以阅读官方文档：

> Butterfly : https://butterfly.js.org/

在这里我也不详细说了，因为个性化的配置项太多了，我自认为也不可能讲的比官方文档更加清晰。

# 2. 部署到vercel

Vercel是一个云平台，可以很方便的完成我们的部署工作。类似腾讯的Edgeone pages，没有用腾讯的原因主要是在国内想要将域名解析到个人博客，必须要对域名进行**备案**。但是Vercel因为在国外，所以不需要进行备案什么的，相对来说会更加简单。

这个链接里面有一个官方的简版教程：[How to Deploy a Hexo Blog with Vercel](https://vercel.com/guides/deploying-hexo-with-vercel#deploy-hexo-to-vercel)

在这里我把我的部署过程，做一个详细的记录。

1. 首先，我们打开vercel官网，进行登录

> [Login – Vercel](https://vercel.com/login)：https://vercel.com/login

2. 我们打开官网后，选择sign up进行注册。选择个人项目，输入一个英文名字。

   ![选择个人项目](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250725224534204.png)

3. 然后选择，Github登录，这样方便我们后续将仓库，授权到Vercel。

![Github登录](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250725224744131.png)

4. 导入博客仓库，即可完成部署工作。

![部署](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250725225513919.png)

5. 在这里需要注意的一点是，当然选择，仓库的前提是，我们已经将本地初始化完成配置及编辑的博客目录整体上传到了Git。

   - 我们可以先登录Github，创建一个空的项目。
   - 在本地一个空白文件夹，按住shift+鼠标右键，克隆你的仓库到本地。

   ![克隆仓库](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250725225833540.png)

   - 当然，这里你要是不会操作的话，有两个方案，一个是打开任意一个大模型，先告诉他你想做什么，然后让他告诉你需要在GIt中执行的命令。

   - 另一个方案是，直接让Warp这种命令行的大模型工具，帮你完成对应的操作。

     ![打开git窗口](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250725230147896.png)

   - 常用的GIt命令：

   ```shell
   git clone git@github.com:Wangshixiong/cloud-document-converter.git # 克隆命令，clone后面的内容可以换成你在上面复制的仓库地址。
   
   git add .      # 注意这里有个点。在我们编辑完成博客的markdown后，输入这个命令。
   
   git commit -m "git首次提交hexo博客"  # git其实是个版本工具，这个命令，就是告诉git这次我们在这个分支做了什么修改，相当于一个日志记录
   
   git push    # 这个命令，就是直接提交本地的git代码（hexo博客，到git仓库了。
   
   ```

   我们上传到git的时候，只需要上传下面的内容即可（不需要进行hexo编译哈，直接使用hexo init的原始内容（个性化后的代码即可）：

   ![上传git](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250725230707159.png)

6. 然后，我们就可以将这个仓库导入Vercel。

![部署](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250725230853540.png)



当然，在完成部署后，就会进入这个页面：

![部署完成及自定义域名](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250725231117148.png)



具体的自定义域名，我建议大家问大模型即可（因为总是在变化）。

![自定义域名](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250725231610289.png)

在完成上面的内容后，我们基本就完成了所有的博客配置工作。

比如，我的博客：

> [吏部侍郎 - 我见青山多妩媚，料青山见我应如是](https://www.qianshu.wang/)：https://www.qianshu.wang/



# 3. 图片链接自动转换脚本开发

在这里我碰到了一个痛点，**如果是以前，我自己肯定没什么办法解决，然而，感谢AI coding**。

## 3.1 需求从痛点来

之前的时候，我写公众号文章都是使用一个浏览器插件（免费，推荐，[公众号内容编辑器 - Microsoft Edge Addons](https://microsoftedge.microsoft.com/addons/detail/公众号内容编辑器/lnfifinboijcjoalhfiaelocbipmfbje)）在里面配置了微信公众号的图床，这样写公众号就不需要找公共图床了。

![公众号图床配置](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250726211334106.png)

但是，我现在不是在写博客吗，这个图床在我的博客就没有办法访问了，因为它只支持腾讯这个体系下的网站。

然后我就想到了，飞书提供了一个[飞书剪存](https://chromewebstore.google.com/detail/mofcmpgnbnnlcdkfchnggdilcelpgegn)的浏览器插件，我还有一个复制飞书文档为[markdown文件的浏览器插件](https://chromewebstore.google.com/detail/cloud-document-converter/ehkomhhcinhikfddnmklbloahaakploh)，我是不是可以结合起来用。

但是我很快就发现，复制飞书文档为markdown时，**里面图片链接有效时长，只有两个小时**。这就完球了，没办法在我的博客里面使用了。

也许这就是为什么我之前将文章在掘金发布时，掘金会自动将我markdown中的图片链接更换成掘金自己图床链接的原因。

然后，我就想了，如果，**我可以提供我自己的阿里云oss对象存储，是不是也可以实现同样的效果**。

## 3.2 解决方案

想到就干，这里我是用的依然是`Warp`，虽然它只是一个命令行窗口，但是他也支持类似使用claude 4，还支持MCP和Rules。

![Warp](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250726212416490.png)

因为我是后来才发现这两个东西的，捂脸.jpg。所以就没用上，我只用了基础功能。

输入需求：

```markdown
我会提供给你一个markdown文件或者文件夹，这个md文件中包含一些图片，其中图片的链接是临时链接，你需要帮我编写一个python脚本，完成以下任务：
1. 备份markdown文件，然后扫描Markdown文件中的所有图片链接
2. 下载这些图片（支持网络链接和本地文件）
3. 将下载的所有的图片，上传到阿里云OSS，得到阿里云oss的图片链接。
4. 使用阿里云oss的图片链接，对应替换原文件中的原图片链接。
5. 替换完成后，保持Markdown格式不变。

阿里云oss的SDK为：https://help.aliyun.com/zh/oss/developer-reference/2-0-manual-preview-version/?spm=a2c4g.11186623.0.i2#9381f409d00uq
md文件示例为：拆解Lovart：首个AI设计师Agent的工作流有多惊艳？.md
```

它就自己写了个大概300多行的代码，然后自己写了测试文件，并且完成了测试。

在执行时，他会首先生成一个json文件，让我们在里面填写自己阿里云oss的必要信息：

![阿里云配置信息](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250726220300629.png)

| 配置项              | 说明                   | 示例                           |
| ------------------- | ---------------------- | ------------------------------ |
| `access_key_id`     | 阿里云AccessKey ID     | `LTAI4xxx`                     |
| `access_key_secret` | 阿里云AccessKey Secret | `xxx`                          |
| `endpoint`          | OSS访问域名            | `oss-cn-hangzhou.aliyuncs.com` |
| `bucket_name`       | OSS存储桶名称          | `my-images`                    |
| `domain`            | 自定义域名（可选）     | `https://img.example.com`      |
| `upload_folder`     | 上传文件夹前缀         | `images/`                      |
| `image_extensions`  | 支持的图片格式         | `[".jpg", ".png"]`             |
| `max_file_size`     | 最大文件大小（字节）   | `10485760` (10MB)              |
| `timeout`           | 下载超时时间（秒）     | `30`                           |

在我们输入完成后，它就会紧接着继续执行，命令行的输出内容是下面类似的效果：

```shell
✓ 成功连接到OSS bucket: my-bucket
📄 处理文件: C:\Users\YourName\Documents\article.md
📋 已备份: C:\Users\YourName\Documents\article.md.backup
🖼️  找到 5 个图片链接
📥 下载图片: https://example.com/image1.jpg
✓ 上传成功: article_001.jpg -> https://my-bucket.oss-cn-hangzhou.aliyuncs.com/images/article_001.jpg
✓ 已更新链接: https://example.com/image1.jpg -> https://my-bucket.oss-cn-hangzhou.aliyuncs.com/images/article_001.jpg
📥 下载图片: https://example.com/image2.jpg
✓ 上传成功: article_002.jpg -> https://my-bucket.oss-cn-hangzhou.aliyuncs.com/images/article_002.jpg
✓ 已更新链接: https://example.com/image2.jpg -> https://my-bucket.oss-cn-hangzhou.aliyuncs.com/images/article_002.jpg
✓ 文件已更新: C:\Users\YourName\Documents\article.md
✅ 处理完成!
```

下图是最终的效果对比：

![脚本执行效果](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250726220059218.png)





>  **脚本已经开源在**：https://github.com/Wangshixiong/markdown_image_replace.git



大家有需要的话，可以试用。

其实我后续是在想，能不能直接把它集成在[markdown文件的浏览器插件](https://chromewebstore.google.com/detail/cloud-document-converter/ehkomhhcinhikfddnmklbloahaakploh)这个插件里面，这样的话，使用起来会方便很多。



后续，有兴趣的话，欢迎大家与我多多交流。
