---
date: 2025/10/30
issueTitle: "在Dify工作流里，我为什么“剥夺”了大模型调用工具的能力？"
description: "在生产环境用 ，我们最头疼的就是**大模型的不确定性**。 让 Agent 节点自己调用工具，结果总会有点飘。 今天分享一个能让工作流更稳定、更可控的小技巧： 就是**我们可以将 中的工具作为工具节点直接插入 的工作流中**。 不知道大家有没有注意到我上一篇文章的一个使用方式： "
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%9C%A8Dify%E5%B7%A5%E4%BD%9C%E6%B5%81%E9%87%8C%EF%BC%8C%E6%88%91%E4%B8%BA%E4%BB%80%E4%B9%88%E2%80%9C%E5%89%A5%E5%A4%BA%E2%80%9D%E4%BA%86%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%B0%83%E7%94%A8%E5%B7%A5%E5%85%B7%E7%9A%84%E8%83%BD%E5%8A%9B%EF%BC%9F--%E5%B0%81%E9%9D%A22.jpeg"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%9C%A8Dify%E5%B7%A5%E4%BD%9C%E6%B5%81%E9%87%8C%EF%BC%8C%E6%88%91%E4%B8%BA%E4%BB%80%E4%B9%88%E2%80%9C%E5%89%A5%E5%A4%BA%E2%80%9D%E4%BA%86%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%B0%83%E7%94%A8%E5%B7%A5%E5%85%B7%E7%9A%84%E8%83%BD%E5%8A%9B%EF%BC%9F--%E5%B0%81%E9%9D%A22.jpeg"
tags:
  - "Dify"
categories:
  - "Dify"
---
![在Dify工作流里，我为什么“剥夺”了大模型调用工具的能力？--封面2](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%9C%A8Dify%E5%B7%A5%E4%BD%9C%E6%B5%81%E9%87%8C%EF%BC%8C%E6%88%91%E4%B8%BA%E4%BB%80%E4%B9%88%E2%80%9C%E5%89%A5%E5%A4%BA%E2%80%9D%E4%BA%86%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%B0%83%E7%94%A8%E5%B7%A5%E5%85%B7%E7%9A%84%E8%83%BD%E5%8A%9B%EF%BC%9F--%E5%B0%81%E9%9D%A22.jpeg)

在生产环境用 `Dify`，我们最头疼的就是**大模型的不确定性**。

让 Agent 节点自己调用工具，结果总会有点飘。

今天分享一个能让工作流更稳定、更可控的小技巧：

就是**我们可以将`MCP`中的工具作为工具节点直接插入`dify`的工作流中**。

不知道大家有没有注意到我上一篇文章的一个使用方式：

![edgeone工具](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/edgeone%E5%B7%A5%E5%85%B7.png)

这里我直接将腾讯的`Edgeone-Pages`当做一个工具节点了。大家可以看到它是一个工具，这个实际上是我从`dify`的插件市场下载的一个工具插件，最主要是这玩意儿必须要申请`APIkey`.而且它输出的`text`不是`url`，还需要我从`json`中提取，所以我加了一个模板转换节点。

虽然他的apikey申请起来并不是特别费劲。

但是大家如果之前在其他地方用过腾讯这个网页部署的`mcp`服务的话，应该是知道，他是不需要key的。

![image-20251029231238391](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/edgeone-mcp%E6%9C%8D%E5%8A%A1.png)

所以，比如我们可以直接登录`modelscope`（魔塔社区），开通一下这个服务。

[魔塔社区EdgeOne Pages · MCP](https://www.modelscope.cn/mcp/servers/@TencentEdgeOne/edgeone-pages-mcp)

![image-20251029231518917](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E9%AD%94%E5%A1%94%E7%A4%BE%E5%8C%BA.png)

然后配置到你的dify里面：

![dify-MCP配置](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/dify-mcp%E9%85%8D%E7%BD%AE.png)

接下来，我们就可以直接再工作流里面把MCP中的工具，直接当做工具引用了。

![工作流使用mcp服务](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B7%A5%E4%BD%9C%E6%B5%81%E4%BD%BF%E7%94%A8mcp%E6%9C%8D%E5%8A%A1.png)

大家看下效果：

![删除模板转换](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%88%A0%E9%99%A4%E6%A8%A1%E6%9D%BF%E8%BD%AC%E6%8D%A2.png)

当然，这只是非常简短的一个案例。

给大家说这个小技巧的主要原因是，**我们不必专门写那么多的http请求或者怎样了**。

又或者，以高德地图的MCP为例，他有非常非常多的工具，我们只需要写一个授权凭据（其实就是在URL里面加上Key），我们就可以直接引用这些工具了。

我们不需要使用哪个工具，还专门写个http请求了。

大家可能会说，我感觉要写http请求，调用工具，我直接加一个Agent节点，让大模型调用不就行了。

这个小技巧啥用都没用。

其实不是的。

我们为什么在生产环境等业务场景使用`Dify`这种开源的工作流平台。

**其实，我们就是努力在不确定性中，找确定性**。

这也是为什么MCP都这么方便了，大家还是会自己写工具的原因。

大模型本质上是概率模型，它的结果都是随机的，MVP版本可以使用Agent节点，让他自主调用工具，通过提示词限制它。

但是，我们在实际业务落地的时候，就不能这样了。

**我们要尽可能多的减少变量，以求结果的稳定性**。

**我们剥夺大模型使用工具的能力，是为了更好的达到生产级可用**。

大家可能会说，我变成工具节点，这些参数我也不知道怎么输入啊，格式应该是什么呢？

![高德地图工具.png](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE%E5%B7%A5%E5%85%B7.png)

小技巧又来了。

我们可以把这个MCP配置给`claude code`或者`Trae`等比较厉害的AI IDE或者是某个客户端，比如`chatwise`，`cherry studio`。让他们教我们啊。

![问AI](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/AI%E6%95%99%E6%88%91%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BEmcp%E6%80%8E%E4%B9%88%E7%94%A8.png)

以上，谢谢大家看完我的文章。
