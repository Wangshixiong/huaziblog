---
date: 2021/11/08
issueTitle: "MySQL安装、输入密码闪退、workbench使用"
description: "1、安装 安装就不细说了，网上一搜一大堆，但是教程推荐这个： wikihow 网站是wikiHOW，很有意思的网站，比百度经验强大很多。"
image: "https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110223927629.png"
heroImage: "https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110223927629.png"
tags:
  - "工具"
---
# 1、安装

安装就不细说了，网上一搜一大堆，但是教程推荐这个：

[wikihow](http://t.cn/RXmj4zF)

网站是wikiHOW，很有意思的网站，比百度经验强大很多。





# 2、输入密码闪退

安装完成后，在开始菜单，打开



![image-20211110223927629](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110223927629.png)

开始程序

界面如下：

![image-20211110223939313](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110223939313.png)

密码

输入你安装的时候所设置的根密码，回车，本该进入程序，这时，你发现程序闪退。

这一般是由于服务没有开启。

如果你是win10 ，就喊一声“你好小娜，打开服务”，win7之类的就在开始菜单搜索服务。

![image-20211110223953144](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110223953144.png)

服务

右击启动，或重新启动。

如果是手动模式，你可以右击属性改为自动。

再去打开**MySQL Command line client**，输入密码，界面如下，即已正常。

![image-20211110224014054](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110224014054.png)

**MySQL命令窗口**

# 3、workbench

首先搜索，workbench，然后在官网下载安装即可。

[workbench](https://dev.mysql.com/downloads/workbench/)

这里有一个问题，如下图：

![image-20211110224031337](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110224031337.png)

workbench

你必须保证安装之前电脑已安装了二者，如果没有安装，点击二者，转到微软官网，下载相应版本安装即可。这个安装很简单。

安装后打开，界面如下：

![image-20211110224047608](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110224047608.png)

**欢迎界面**

单击加号创建新的连接，连接新的数据库。单击矩形框中，直接打开服务器，这里需要输入密码，即你的mysql密码。

![image-20211110224109215](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110224109215.png)

**密码**

在这里有一个问题，如果总是出现improper name等信息，那可能跟上方的问题一样，你的MySQL服务没有开启，去开启，然后在输入密码即可。



![image-20211110224125888](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110224125888.png)

**界面**

箭头部分创建数据库，表等等。右侧输入查询指令，关于SQL的声明等。点击黄色闪电执行相应命令。

当然，在查询之前需要制定数据库：

![image-20211110224144446](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110224144446.png)

**databases**

比如，查看当前所有数据库：



![image-20211110224201022](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110224201022.png)

数据库



我的公众号，基本是自己的学习日志，有些小工具。

![image-20211110224216854](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110224216854.png)
