---
date: 2021/06/06
issueTitle: "hexo-next"
description: "**安装--美化--问题集锦** 网上的教程多试7.0版本以下的，因为7.0版本已经继承了很多插件功能，因此我尝试按照别人的教程试一次，报错，而且还是查不到原因的报错，没办法了，只能自己阅读配置文件的注释，自行更改。在此，记录一下。"
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/leanhexo.jpg"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/leanhexo.jpg"
tags:
  - "hexo"
categories:
  - "工具"
---
**安装--美化--问题集锦**

网上的教程多试7.0版本以下的，因为7.0版本已经继承了很多插件功能，因此我尝试按照别人的教程试一次，报错，而且还是查不到原因的报错，没办法了，只能自己阅读配置文件的注释，自行更改。在此，记录一下。



# 报错

## hexo命令报错

```ERROR Cannot find module 'hexo' from 'F:\Hexoblog'
ERROR Cannot find module 'hexo' from 'F:\Hexoblog'
ERROR Local hexo loading failed in F:\Hexoblog
ERROR Try running: 'rm -rf node_modules && npm install --force'
```

研究发现，是环境变量的问题，需要将hexo加入环境变量，其一般路径为

`F:\Hexoblog\node_modules\.bin`注意后面的.bin；

开始我是全局安装，但是一直不知道那里出来问题，后来干脆全部卸载

然后在f盘打开cmd，进行安装，

```npm uninstall -g hexo-cli
npm uninstall -g hexo-cli

npm install hexo-cli
```

最后将`F:\Hexoblog\node_modules\.bin`加入环境变量，解决！



## hexo deploy时出现的警告：LF will be replaced by CRLF



```csharp
git config --global core.autocrlf false //禁用自动转换
```

参考：[dev_winner](https://www.jianshu.com/p/783f7736e77e)



## NexT v6.0+ 背景动画Canvas_nest设置无效的解决方案

[NexT v6.0+ 背景动画Canvas_nest设置无效的解决方案](https://blog.csdn.net/weixin_39345384/article/details/80544660)

## `hexo g`报错

```git
ERROR Process failed: _posts/hexo-next.md
YAMLException: can not read a block mapping entry; a multiline key may not be an implicit key at line 4, column 1:
```

**解决方案：**[查看新建要上传地md文件，tags或者其他，与后面内容是不是有一个空格。](https://segmentfault.com/q/1010000009341531) 

# 美化

## 文章末尾添加版权说明

版权声明默认使用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议，可以根据自身需要修改 `licence` 字段变更协议。 

```g
creative_commons:
  license: by-nc-sa
  sidebar: false#此处改成true，会在侧边显示
  post: true #文章底部显示
  language: zh-CN#语言
```

##  实现Follow me on GitHub

```
#next主题配置文件
github_banner:
  enable: true
  permalink: https://github.com/wangshixiong
  title: Follow me on GitHub
```

## 阅读次数统计

首先，注册[LeanCloud](https://leancloud.cn/)账号，注册方法如下：

![leancloud](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/leanhexo.jpg)

**创建`class`**

![创建class](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/leanhexo1.jpg)

**最后就可以拿到相关的ID和key；**

![ID](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/leanhexo3.jpg)

`Valine`同时支持阅读次数统计和评论相关功能；打开，并将ID和key输入即可；

![valine配置](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/%E8%AF%84%E8%AE%BAhexo.jpg)

## 添加评论功能

Next 支持多款评论系统：

- [Disqus](https://disqus.com/)：欧美 UI 风格，支持 Tweet、Facebook 等国外社交软件的三方登陆和一键分享。 [Demo](https://blog.disqus.com/disqus-welcomes-the-spruce)
- [gitment](https://github.com/imsun/gitment)：必须用 github 账号登陆才能评论，支持 Markdown 语法，与 github issues 页面风格一致 [Demo](https://imsun.github.io/gitment/)
- [Valine](https://valine.js.org/)：支持匿名评论，支持 Markdown 语法，界面简洁美观
- [畅言](http://changyan.kuaizhan.com/)：国产评论系统，可区分热评和最新评论，论坛贴吧风
- [来必力](https://www.livere.com/)：支持插入图片和 GIF，支持国内外多种社交媒体的三方登陆 [Demo](https://www.livere.com/city-demo)

博客的评论系统不需要太过复杂的功能，我的要求是一定要轻量级，足够简洁美观，并且支持 Markdown 语法，首选 Valine 和 gitment，这两个评论系统都是由国内个人开发的，在此向开发者致敬。

### gitment

**记录在NexT主题中添加gitalk评论系统的步骤。**

gitalk：一个基于 Github Issue 和 Preact 开发的评论插件
详情Demo可见：<https://gitalk.github.io/>

**1. Register Application**

在GitHub上注册新应用，[链接](https://github.com/settings/applications/new)



**2. 参数说明：**
`Application name： # 应用名称，随意`
`Homepage URL： # 网站URL，如`https://asdfv1929.github.io
`Application description` # 描述，随意
`Authorization callback URL：# 网站URL，`https://asdfv1929.github.io`

**3.`Client ID`和`Client Secret`在后面的配置中需要用到，到时复制粘贴即可。**

```
gitalk:
  enable: true
  githubID: github帐号  # 例：asdfv1929   
  repo: 仓库名称   # 例：asdfv1929.github.io
  ClientID: Client ID
  ClientSecret: Client Secret
  adminUser: github帐号 #指定可初始化评论账户
  distractionFreeMode: true
```

[Hexo NexT主题中集成gitalk评论系统](https://asdfv1929.github.io/2018/01/20/gitalk/)

[Hexo NexT使用Gitalk未找到相关的Issues进行评论Error:Validation Failed](https://liujunzhou.top/2018/8/10/gitalk-error/#%E4%BD%BF%E7%94%A8Github%E8%B4%A6%E6%88%B7%E7%99%BB%E9%99%86%E8%AF%84%E8%AE%BA%E5%8C%BA%E6%97%B6%E4%BC%9A%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5%E6%88%96%E8%80%85404%E6%8A%A5%E9%94%99)

### Valine

Next 已经内置了 Valine 组件，在主题配置文件中开启评论功能即可，同时，由于 Valine 是基于 Leancloud 提供后端服务的，所以需要填写 LeanCloud 的 App ID 和 App Key。 

```
themes\next\_config.yml
valine:
  enable: true
  appid:  ***<app_id***
  appkey: ***<app_key>***
  notify: false  # 收到新评论是否邮件通知
  verify: false  # 是否开启验证码
  placeholder:  # 默认填充文字
  avatar: mm  # 设置默认评论列表
  guest_info: nick,mail  # 评论区头部表单
  pageSize: 10  # 每页评论数
  visitor: true  # 同时开启文章阅读次数统计
```

详细参考文献：[yearito](http://yearito.cn/posts/hexo-advanced-settings.html)

## 代码高亮

```
#next配置文件
# Code Highlight theme
# Available values: normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: normal#这里更改，共有5种。

```

## 搜索功能

先安装插件：

```
$ npm install hexo-generator-searchdb --save
```

然后在next配置文件中找到：

```
local_search:
  enable: true#改为true
  # If auto, trigger search by changing input.
  # If manual, trigger search by pressing enter key or search button.
  trigger: auto
  # Show top n results per article, show all results by setting to -1
  top_n_per_article: 1
  # Unescape html strings to the readable one.
  unescape: false
```

## 站点运行时间

**在站点底部显示站点已运行时间。**

修改`thems\next\layout\_custom\custom.swig`

```
{# 页脚站点运行时间统计 #}
{% if theme.footer.ages.enable %}
  <script src="https://cdn.jsdelivr.net/npm/moment@2.22.2/moment.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/moment-precise-range-plugin@1.3.0/moment-precise-range.min.js"></script>
  <script>
    function timer() {
      var ages = moment.preciseDiff(moment(),moment({{ theme.footer.ages.birthday }},"YYYYMMDD"));
      ages = ages.replace(/years?/, "年");
      ages = ages.replace(/months?/, "月");
      ages = ages.replace(/days?/, "天");
      ages = ages.replace(/hours?/, "小时");
      ages = ages.replace(/minutes?/, "分");
      ages = ages.replace(/seconds?/, "秒");
      ages = ages.replace(/\d+/g, '<span style="color:{{ theme.footer.ages.color }}">$&</span>');
      div.innerHTML = `{{ __('footer.age')}} ${ages}`;
    }
    var div = document.createElement("div");
    //插入到copyright之后
    var copyright = document.querySelector(".copyright");
    document.querySelector(".footer-inner").insertBefore(div, copyright.nextSibling);
    timer();
    setInterval("timer()",1000)
  </script>
{% endif %}
```

如果 custom.swig 文件不存在，需要新建一个，并且需要手动新建并在布局页面中`themes\next\layout\_layout.swig`末尾引入：

```
     ...
      {% include '_third-party/exturl.swig' %}
      {% include '_third-party/bookmark.swig' %}
      {% include '_third-party/copy-code.swig' %}

+     {% include '_custom/custom.swig' %}
    </body>
  </html>
```

修改主题配置文件`themes\next\_config.yml`：

```
  footer:
    ...
+   ages:
+     # site running time
+     enable: true
+     # birthday of your site
+     birthday: 20181001#这里的birthday要根据你的时间自行更改。
+     # color of number
+     color: "#1890ff"
```

然后补全对应文案`themes\next\languages\zh-Hans.yml：

```
  footer:
    powered: "由 %s 强力驱动"
    theme: 主题
+   age: 我已在此等候你
```

刷新浏览器即可生效。



日期统计计算功能由 [moment](https://momentjs.com/) 和 [moment-precise-range](https://github.com/codebox/moment-precise-range) 提供，也可用原生 JS Date 对象来实现。



# 文章永久链接配置

站点配置文件`_config.yml` 中修改为：

```json
url: http://www.wenhuateng.top/ #站点域名
permalink: :year/:month/:day/:title/ 
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
```



## 安装及卸载hexo插件

```
hexo安装xxx插件

npm install xxx –save

hexo卸载xxx插件

npm uninstall xxx

```

# 部署至Github

## 阿里云域名解析

首先，需要添加两条域名解析，解析的地址是你在Github所创建的分支连接；

**第一条：**

![解析1](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/%E8%A7%A3%E6%9E%90%E5%9F%9F%E5%90%8D1.jpg)



**第二条：**

![解析2](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/%E8%A7%A3%E6%9E%90%E5%9F%9F%E5%90%8D2.jpg)



最终生成两条：

![解析3](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/%E8%A7%A3%E6%9E%90%E5%9F%9F%E5%90%8D3.jpg)



## github配置

![github](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/github%E8%A7%A3%E6%9E%90.png)

## 配置ssh

在命令行（`Gitbash`）输入

```
ssh-keygen -t rsa -C "Github上你注册的邮箱地址"
```

冒号后边就输入空格，`y/n `输入`y `

输入共计三次回车，即可得到秘钥；

一般而言，秘钥本地地址为：`C:\Users\admin\.ssh`

用文本编辑器打开，并复制所有内容，打开`GitHub 点击Setting  ---> SSH and GPG keys  ---> New SSHkey`

![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/ssh3.jpg)

**保存即可；**

## 修改本地配置文件

修改hexo配置文件**_config.yml**，在最后添加以下内容：

![本地地址](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6%E5%9C%B0%E5%9D%80.jpg)



最后在本地Hexo里的文件，找到source文件夹，在里面先创建个文本文档，输入你购买的域名，保存后重命名为CNAME，去掉后缀。

内容为你的阿里云域名；

![CNAME](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2/hexo/CNME.jpg)

参考：

[使用github-hexo-域名绑定（阿里云）搭建个人博客_狍子的情书的博客-程序员宅基地](https://www.cxyzjd.com/article/qq_38148394/79998012)

[[超级详细Hexo+GitHub+阿里云域名的博客搭建教程](https://segmentfault.com/a/1190000021979631)

# 使用阿里云oss自动存储图片

> **本篇主要参考**
>
> [Picgo使用手册](https://picgo.github.io/PicGo-Doc/zh/guide/#%E5%BA%94%E7%94%A8%E6%A6%82%E8%BF%B0)
>
> [阿里云 OSS + PicGo 博客图床超详细配置教程！](https://dlonng.com/posts/ailyun-oss)

## Picgo下载及安装

1. 打开官网，点击此处：

   ![打开应用](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211109224213319.png)

2. 点击`latest`

   ![image-20211109224346499](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211109224346499.png)

3. 下拉页面，点击.exe文件开始下载；

   ![image-20211109224512835](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211109224512835.png)

## 踩的坑

按照相关教程配置后一直报错，后发现是因为阿里云的存储地址配置错误导致；报错：`requesterror： getaddrinfo`

![image-20211109225005210](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/%E5%AD%98%E5%82%A8%E8%B7%AF%E5%BE%84.png)

```json
{
  "accessKeyId": "",
  "accessKeySecret": "",
  "bucket": "", // 存储空间名
  "area": "", // 存储区域代号
  "path": "", // 自定义存储路径
  "customUrl": "" // 自定义域名，注意要加http://或者https://
}
```

![image-20211109225142860](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211109225142860.png)



点击你所创建的bucket，进入后，点击左侧概览：

![image-20211109225408298](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211109225408298.png)



**[重点参考博客](http://yearito.cn/),在此，对博主进行崇高的敬意。**



### 报错

使用过程经常报错，错误内容如下：

![picgo报错](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/picgo%E6%8A%A5%E9%94%99.jpg)

初步解决办法：

![picgo报错解决](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/picgo%E6%8A%A5%E9%94%99%E8%A7%A3%E5%86%B3.jpg)

打开CMD，win+R，输入`%appdata%`，

找到`data.json`

![image-20211121123938990](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211121123938990.png)

删除。这个里面存储的是图床的相关信息。

然后重新启动`picgo`即可。
