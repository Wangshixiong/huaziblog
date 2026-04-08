---
date: 2026/01/24
issueTitle: "遇事不决问AI的含金量：看我如何一句话把Python脚本打包成EXE"
description: "给业务人员（比如家里那位）写Python脚本，最头疼的往往不是代码本身，而是**交付**。 你让人家装Python、配pip、安依赖包，这事儿基本就黄了。**最好的交付方式，永远是给对方一个双击就能用的 .exe 文件。** 但是，我完全不知道行不行的通，行得通的话，应该怎么做。"
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%96%87%E7%AB%A0%E5%B0%81%E9%9D%A2%E5%9B%BE.png"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%96%87%E7%AB%A0%E5%B0%81%E9%9D%A2%E5%9B%BE.png"
tags:
  - "AI编程"
  - "Trae"
  - "Python"
  - "工具技巧"
categories:
  - "AI效率工具"
---
![](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%96%87%E7%AB%A0%E5%B0%81%E9%9D%A2%E5%9B%BE.png)
给业务人员（比如家里那位）写Python脚本，最头疼的往往不是代码本身，而是**交付**。

你让人家装Python、配pip、安依赖包，这事儿基本就黄了。**最好的交付方式，永远是给对方一个双击就能用的 .exe 文件。**

但是，我完全不知道行不行的通，行得通的话，应该怎么做。

**遇事不决，可问AI**。

![遇事不决 问AI](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E9%81%87%E4%BA%8B%E4%B8%8D%E5%86%B3%E9%97%AEAI.png)

于是，我就问AI能不能把python环境，python包统一打包成一个exe应用，直接点击就能使用。

![遇事不决，可问AI](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E9%81%87%E4%BA%8B%E4%B8%8D%E5%86%B3%E5%8F%AF%E9%97%AEAI.png)

果然可以。

然后我就开始使用`trae`（字节跳动的AI写代码的软件），来帮我打包。

命令很简单：

`使用PyInstaller将当前目录下的python脚本打包为直接点击即可使用，无需配置各种环境的exe应用`

![打包exe](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%88%90%E5%8A%9F%E6%89%93%E5%8C%85exe.png)

ok，一次成功。

![从问题到可复用](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E4%BB%8E%E9%97%AE%E9%A2%98%E5%88%B0%E5%8F%AF%E5%A4%8D%E7%94%A8.png)

既然流程跑通了，这事儿我也不会只做一次，我就寻思得把这次成功的“过程”固化下来，变成可复用的资产。

所以我进一步搞了一个 **Skill（技能）**。你可以理解为我给AI写了一份“标准作业程序（SOP）”。

**只要有具体的操作步骤，就可以搞成skill。**

继续使用`trae`创建：

```markdown
使用skill-creater，将 `https://github.com/pyinstaller/pyinstaller` 集成到一个打包的skill中-新的skill命名为python-to-exe，
skill接收一个Python的脚本或者是一个Python的项目的地址，只要用户输入将这个脚本打包或者是将这个 Python脚本打包，就会执行这个skill，
执行这个skill的时候，首先我们判断是不是Python脚本或者是python项目。
如果不是就给用户提示，如果是那我们就接着执行。
校验本地是否已经安装了pyinstaller，如果没有安装那我们就执行安装命令先安装它，如果连Python环境都没有，那我们就先安装Python环境再安装它。
安装完成以后我们执行打包。
如果用户没有给出一个icon，那我们就根据这个Python脚本或者是Python项目的具体作用自己去设计一个icon，最后进行打包输出打包结果
```
skill-creater（这是anthropic的官方创建skill的skill，后面我找机会说下skill）。

然后skill就创建成功了。后续使用就非常顺畅了。

所以我又将我的且慢—E大语录下载脚本，也进行了打包。

只是因为这个包含了Playwright浏览器，所以高达200M。但对于非技术人员来说，**“不用配环境、点开即用”的收益，远大于“下载200M文件”的代价**

![且慢社区爬虫打包](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E4%B8%94%E6%85%A2%E7%A4%BE%E5%8C%BA%E7%88%AC%E8%99%AB%E6%89%93%E5%8C%85.png)

这个事儿虽小，但体现的正是 **AI-First 思维**。

以前面对“交付代码给小白”这个场景，我们只有两个选项：要么费劲教对方配环境，要么自己手写复杂的打包脚本。

遇事不决，可问AI。

让他给我们方案，我们去验证和选择。

![AI-First思维](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/AI-First%E6%80%9D%E7%BB%B4.png)
