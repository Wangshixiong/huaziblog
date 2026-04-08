---
date: 2025/08/23
issueTitle: "我用AI开发Dify工具，意外发现一个“邪修”法门：让它自己对答案"
description: "1. 引子 最近在做了一个邮件通知的小助手，这个dify工作流非常非常的简单，如下图所示，一个Agent的mcp查询节点，一个格式转换节点，一个邮件发送节点。 但是碰到了一个问题，就是受限于内部模型的能力，在react模式下调用mcp服务进行查询时，**如果查询的数据量一旦超过1"
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B0%81%E9%9D%A2%E5%9B%BE.png"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B0%81%E9%9D%A2%E5%9B%BE.png"
tags:
  - "AI编程"
categories:
  - "AI编程"
---
<img src="https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B0%81%E9%9D%A2%E5%9B%BE.png" width="800" />

# 1. 引子

最近在做了一个邮件通知的小助手，这个dify工作流非常非常的简单，如下图所示，一个Agent的mcp查询节点，一个格式转换节点，一个邮件发送节点。

![邮件通知助手](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823172846376.png)

但是碰到了一个问题，就是受限于内部模型的能力，在react模式下调用mcp服务进行查询时，**如果查询的数据量一旦超过10条，直接就会缺失非常多的数据**。

但是如果使用其他模型，则不会出现这种问题。

所以最初，是想着下一个版本的优化，将Agent查询节点修改为http请求。又要有个但是，出现的问题是，不知道是什么原因，在内部使用这个http请求节点的时候，永远都是网络不通，而其实服务器和这个查询服务的地址是特意开通了的，使用代码访问就完全没问题。

所以最后的的方案就是继续让开发同志搞一个查询工具出来（因为之前碰到过邮件插件不好使的时候，开发同学也是这么干的）。

但是我感觉这事儿，根源还是得让运维同志解决。哈哈。

当然，这个点，也是我们今天这个事儿的起源。

后来开发同学实在是有点忙，而我呢，又着急用，所以就让开发同学给我个案例（邮件的那个）我看看复杂不，能用AI干不，我一看，这不是`Python`嘛，还就一个文件，AI应该比较擅长啊。

所以我就让AI搞了一个。所以这事儿本身发展顺序是这样子的：

我需要一个Http查询工具----->开发忙不过来---->我就寻思自己试试，看看案例不复杂----让AI写了一个--->测试发现服务器和本地网络不通---->到家继续研究就在电脑上部署了一个dify--->测试---ok通过。

哈哈，我还画了个图。当然中间开发也帮我了不少。

![缘起1](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E7%BC%98%E8%B5%B71.png)

**自己研究**

![家里解决](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%AE%B6%E9%87%8C%E8%A7%A3%E5%86%B3.png)

其实这事儿本身也不复杂，主要我想说的是，我在这个过程中，又发现了一个更好使用AI的IDE的小窍门，但是其实也不新鲜，不过只是另一个思路的扩展。

接下来内容主要是依次记录：**本地dify如何安装，查询工具的开发，测试中问题的解决**。

所以大家可以跳着看。



# 2. 本地安装dify

推荐大家从这个链接学习dify：[快速入门 | langgenius/dify | Zread](https://zread.ai/langgenius/dify/2-quick-start)

> https://zread.ai/langgenius/dify/2-quick-start

![zread](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823093108966.png)

我这里是win11系统，从网上搜了很多教程，第一步我看都是**安装适用于 Linux 的 Windows 子系统`wsl`**。

理了一下逻辑，是因为安装dify需要安装`docker`环境。而在win上安装`docker`又需要安装`wsl`。

当然，这段大家可以跳过。

这里简单搜了一下**什么是wsl和docker**。

> *WSL（Windows Subsystem for Linux，Windows 子系统 for Linux）是微软开发的一项核心功能，它允许在 **不安装虚拟机、不重启系统** 的前提下，在 Windows 操作系统中直接运行完整的 Linux 发行版（如 Ubuntu、Debian、CentOS 等）。*
>
> *简单来说，WSL 相当于在 Windows 内核上 “开辟了一块专属区域”，让 Linux 系统能与 Windows 共享硬件资源（CPU、内存、磁盘），同时实现两者的文件互通、命令行协同（比如在 Windows 的 `cmd` 中直接调用 Linux 的 `bash` 命令）*。

> *Docker 本质是基于 **Linux 内核特性**（如 Namespace 命名空间、Cgroups 控制组、UnionFS 联合文件系统）实现的 “容器化技术”—— 它的核心组件（Docker Engine、容器运行时）必须运行在 Linux 环境中，无法直接在 Windows 内核上工作*。

所以结果很明显了。

>- **WSL 是基础**：为 Docker 提供了 “原生 Linux 环境”，解决了 Docker 对 Linux 内核的依赖；
>- **Docker 是应用**：借助 WSL 2 的轻量级、高性能、深度集成特性，实现了在 Windows 上的高效运行；



下面是dify的详细安装过程。

## wsl安装

1. 在win11的搜索窗口搜索`wsl`。

![wsl](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823090906385.png)

2. 点击打开后，进入命令行界面点击回车，输入安装命令，就开始安装了。

```powershell
wsl --install
```

3. 我们在确认下wsl的安装状态。

```shell
(base) PS C:\Users\30284> wsl --status
默认分发: docker-desktop
默认版本: 2
```

4. 这一步要在搜索栏直接搜索**启用或关闭Windows功能**。正常的路径应该是在控制面板--程序。选择**适用于 Linux 的 Windows 子系统**，然后确定。

![启用或关闭功能](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823091648648.png)

![启用linux功能](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823091744961.png)

重启后，会出现这个界面：

![wsl工作界面](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823101138190.png)

## docker安装

我们打开官网：https://www.docker.com/products/docker-desktop/，选择deskertop中的win版本。接下来没什么特别特殊的按照默认直接安装即可。

![docker官网](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823093304375.png)

系统会要求重启，我们就和wsl要求的重启一起进行，直接重启。

然后我们验证下：

```shell
(base) PS C:\Users\30284> docker --version
Docker version 28.3.2, build 578ccf6
```

## 安装git

这个也没有什么特别特殊的，直接安装即可。安装这个的目的是为了把dify的代码拉取到本地，**当然你也可以不安装git，直接下载zip包也行**。

> https://git-scm.com/book/zh/v2/起步-安装-Git

## 安装dify

前面几步都是准备工作，进入正题。

可以直接拉取代码:

```powershell
git clone git@github.com:langgenius/dify.git
```

也可以直接到这里下载zip包：

> https://github.com/langgenius/dify/#

![dify-github](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823095143750.png)

然后我们进入docker目录。

![工作目录](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823095505451.png)

安装shift，点击右键，打开命令行或者powershell。

运行：

```powershell
cp .env.example .env
```

就是把他复制成另一个名字的文件，这个是环境变量。

![复制环境变量](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823095650808.png)

然后我们运行：

```powershell
docker compose up -d
```

开始等待，，这里就需要看你的网速了。要下载2-3g的东西。

![compose运行](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823101639528.png)

![启动](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823101702612.png)

首次启动：

需要使用浏览器访问默认地址：

> http://localhost

但是第一次一般都会让你设置管理员账号：

> http://localhost/install

随意设置下，但是可千万别忘记了。

![管理员账号密码](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823102034067.png)

ok，我们登录就进来啦。

![安装完成](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823102117777.png)

# 3. dify配置

配置模型，配置必要的插件。

![设置](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823130148640.png)

![选择modashequ](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823130252415.png)

这里选择modashequ主要是因为他最近每天提供2000次调用qwen系列模型的机会。

![modashequ](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823130620745.png)

在本地添加modashequ的令牌和连接。

> API Base：https://api-inference.modelscope.cn/v1/

![modashequ配置](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823130936630.png)

很好，可以正常调用。

![kimik2](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823131407174.png)

# 4. 自定义工具的开发

其实我这里本身是tapd这个腾讯出的项目管理平台的使用。而tapd原来其实就提供api，而在今年大概4-5月份的时候，又新增了tapd的MCP服务。

所以我们开发这个自定义工具，并不是从0开始，我们可以参考下mcp中的描述，来大概了解接口的调用逻辑，然后写一下我们的需求。

## 梳理接口调用逻辑

![简版调用逻辑](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E7%AE%80%E7%89%88%E8%B0%83%E7%94%A8%E9%80%BB%E8%BE%91.png)

这样就简单了，为了保证这个工具的长久可用，所以，里面的一些自定义字段和字段的映射关系还是通过接口查询实时更新比较好，毕竟硬编码导致后面不可用。

## 编写需求

这里因为需求内容比较长我就只放了一张图片。请大家主要关注思路。

![需求内容](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823223416063.png)

## 开始开发

这里我们使用的AI IDE是Trae的国内版本。因为据说kimi k2的版本能力不错，这个东西也是个小东西，所以我就想验证一下。

我们先做一些准备工作：

1. 下载安装trae，没有什么特殊的，正常安装。

> 安装trae：https://www.trae.cn/

2. 配置tapd的mcp：

> 参考教程：https://cnb.cool/tapd_mcp/mcp-server-tapd

![mcp配置](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823225304355.png)

接下来，我们选择build with mcp这个智能体直接开始即可（这里其实单独建一个智能体比较合适，但是我这不是一个项目，就是个单独的小工具，我就没搞）。

```mariadb
任务：完成 tapd需求文档完善版本.md 中的开发任务。
参考代码： tapd_tools 。
本次任务所有代码均在 tapd_better_tools 中完成。
```

等待开发完成后，将我们的tapd的api和apikey都输入到开发的代码中。

## 最重要的小窍门

接下来，就是我今天说的小窍门了。可以快速得到可以使用的工具（大概用了不到半小时）。

那就是让它：

**自行测试api的结果和MCP服务的结果进行对比。以MCP服务的结果为准**。然后来确认代码问题，自行修复。

![小窍门](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B0%8F%E7%AA%8D%E9%97%A8.png)

但是，在这一步的时候，我的建议是分步骤执行：

> 1. 让k2先写一个测试脚本，你给他一个固定的入参，然后你来手动启动工具服务和测试脚本，获取数据。
> 2. 再使用相同的入参，使用mcp服务获取数据。
> 3. 让k2比对两个的数据结果差异。
> 4. 肯定会有问题，那么，让他找原因，并修复吧。

接下来，我们开始配置dify。

## dify新增自定义工具

将生成的openapi的json复制到schema中。就可以出现4，接下来，我们在3中填入鉴权（user:key，然后转换为basic64即可），然后点击4进行测试。

![新增自定义工具](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/image-20250823234020982.png)

在这里进行测试的时候，我碰到了这个错误：

`Reached maximum retries (3) for URL http://localhost:50007/v1/stories/query`

后，经过搜索，发现根本原因是docker本身的网络和电脑本地的网络是不通的，所以不能使用`localhost`，需要使用具体的ipv4的网络地址。

> Docker中的Dify无法通过localhost访问宿主机上运行的服务。需要将openapi.json中的服务器URL修改为宿主机的实际IP地址

```shell
ipconfig #在命令行中输入这个命令，查看实际的ipv4地址，替换上面 URL中的localhost。
```



好啦，这就是所有内容了。本次主要是记录这个过程。

**AI编程为什么让我这个产品沉迷呢，因为他能得到快速的正反馈。**

**学习让学霸沉迷，是不是也是因为这个原因呢。**
