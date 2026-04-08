---
date: 2025/11/16
issueTitle: "Dify知识库图文混排到底应该怎么做，两种主流方案，一次讲清！"
description: "如果你想在使用 知识库的实现下面的**图文混排**效果，那你非常有必要读一下这篇文章。 我发现，目前实现这样的图文混排效果应该是有两种方案： **使用图床或者直接将word文件导入知识库**。 大家用知识库多的话，或者大模型多的话，可能都知道大模型其实非常擅长理解markdown"
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B0%81%E9%9D%A2%E5%9B%BE1.jpg"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B0%81%E9%9D%A2%E5%9B%BE1.jpg"
tags:
  - "Dify"
categories:
  - "Dify"
---
![Dify知识库图文混排到底应该怎么做，两种主流方案，一次讲清！](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B0%81%E9%9D%A2%E5%9B%BE1.jpg)

如果你想在使用`dify`知识库的实现下面的**图文混排**效果，那你非常有必要读一下这篇文章。

![图文混排](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%9B%BE%E6%96%87%E6%B7%B7%E6%8E%92.png)

我发现，目前实现这样的图文混排效果应该是有两种方案：

**使用图床或者直接将word文件导入知识库**。

大家用知识库多的话，或者大模型多的话，可能都知道大模型其实非常擅长理解markdown文件，图床就是markdown中的图像在网络上存储的位置。

而word导入知识库以后，word中的图片会被`dify`的知识库解析，然后存储到`dify`所在的服务器。

上面的这两种方案，其实本质上的原理，都是**使用的`dify`的前端是支持markdown渲染**的。因此，markdown的图片渲染也是支持的。

下面实验的`dify`版本是1.9.2，win11环境，docker启动。

## markdown图床

使用markdown图床的方式，实现知识库答案的图文混排。

前几天，我们怕了E大很多的文章，这里我们就以E大的文章为例。

如果大家看了之前的文章的话：

[从被 Trae 气到崩溃，到用 Gemini 一次跑通，终于爬下了孟岩和E大的全部理财干货](https://mp.weixin.qq.com/s/xAkWj1k-lc4pvP-upxU23A)

可能看到了我爬取得markdown文档图片是在本地电脑上存储的，在markdown中的引用方式如下：

![markdown命名](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/markdown%E5%91%BD%E5%90%8D.png)

所以我们首先要将它上传到一个图床，这里我实验吗，所以直接用的自己的阿里云oss。

如果大家在公司内部使用的话，可能需要自建一个图床，因此**相对来说图床的方案会有服务器，所以成本会高一些**。

![阿里云oss图床地址](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E9%98%BF%E9%87%8C%E4%BA%91oss%E5%9B%BE%E5%BA%8A%E5%9C%B0%E5%9D%80.png)

接下来我们开始建立知识库：

![导入知识库](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%AF%BC%E5%85%A5%E7%9F%A5%E8%AF%86%E5%BA%93.png)

选择分块逻辑：

![分块](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%88%86%E5%9D%97.png)

这里大家可以看到我在markdown文本中，将每个主题相同的大块使用##这种二级标题符号进行了隔离，所以我们在`dify`知识库建立的时候，分隔符可以选择##。

![分块逻辑和预览](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%88%86%E5%9D%97%E9%80%BB%E8%BE%91%E5%92%8C%E9%A2%84%E8%A7%88.png)

这里大家需要特别注意一点，就是你的**分块长度不能太短，不然可能会导致图片的URL地址被截断**，直接导致后续知识库的输出就无法输出完整地URL，当然，也就没办法实现图文混排了。

下面我们做一下召回测试，大家可以看到是可以召回图片的：

![召回测试](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%8F%AC%E5%9B%9E%E6%B5%8B%E8%AF%95.png)

这里我开始其实是碰到了一个问题的，就是图片无法加载，只显示了图片链接，后来看浏览器控制台，发现图片访问`403forbidden`了。

我就抓紧回忆了下，我在阿里云`oss`的bucket里面开启了白名单 `Referer`，没有将本地的`http://localhost/`加入白名单，后来改掉以后就正常了。

ok，下面我们开始测试，配置一个简单地chatflow：

![markdown图文混排测试](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/markdown%E5%9B%BE%E6%96%87%E6%B7%B7%E6%8E%92%E6%B5%8B%E8%AF%95.png)

提示词很简单是：

```markdown
### 角色
你是一个严谨、专业的问答助手。你的唯一任务是基于下面提供的“知识库检索结果”来回答“用户问题”。

### 核心规则
1.  **内容来源**：你的回答必须**严格且完全**基于“知识库检索结果”中的信息。
2.  **禁止编造**：严禁使用任何“知识库检索结果”之外的信息。如果“知识库检索结果”为空，或内容与“用户问题”完全无关，你**必须**直接回答：“抱歉，我没有找到相关信息。”
3.  **图片处理（关键指令）**：
    * **检测**：在生成回答前，必须检查“知识库检索结果”的文本中是否包含图片链接（如 `http://.../img.jpg` 或 `https://.../image.png`）。
    * **嵌入**：如果检测到图片链接，你**必须**在回答中，将该图片以 Markdown 格式 (`![图片描述](图片链接)`) 插入到最相关的文本段落旁边，实现图文并茂的效果。
    * **格式**：确保图片始终以 `![alt text](url)` 的 Markdown 格式返回。
4.  **结构化输出（新要求）**：
    * **条理**：回答应条理清晰，尽可能使用有序列表（1., 2., 3.）或无序列表（-）来组织步骤或多个要点。
    * **高亮**：对回答中的关键概念、术语、重要数据或结论性句子，使用**加粗**进行重点标记。
---
* **知识库检索结果**：{{#context#}}
```

效果如下，非常完美：

![md图床知识库回答](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/md%E5%9B%BE%E5%BA%8A%E7%9F%A5%E8%AF%86%E5%BA%93%E5%9B%9E%E7%AD%94.png)

这是llm的答案结构：

```json
"text": "根据提供的知识库检索结果，**网格1.0的主要缺点**是：\n\n- **在一波强势上涨中，盈利不足**。例如，在2015年底到2016年底的一波接近**80%的暴涨**中，网格1.0的每一格投入只赚了**5%～8%**。虽然所有投入都赚钱且后续下跌都躲过了，但这种策略会导致投资者在看到品种价格大幅上涨（如从0.4涨到0.8）后，对自己在最低位买入却仅赚取微小利润就卖出的操作感到**极度不满意**。\n\n![示例图片](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/bc64276f1281652a7cdcc43127337501.png)\n\n![示例图片](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/e98459d58447196c2f9a919eab54ba73.png)\n\n**核心问题**是网格1.0无法充分捕获大趋势行情中的利润，因此在强势单边上涨市场中表现不佳。这也促使了网格2.0版本的开发，通过子策略组合来优化这一问题.
```

### 总结一下Markdown + 图床

**核心收益**是：

- **灵活性高**：知识库源文件（Markdown）和图片资源（图床）是分离的，未来无论迁移到哪个系统，都非常方便。
- **方便管理**：图片资源集中在图床（如 OSS）管理，查找、替换都很方便。

但是**缺点**也很明显：

- **成本**：需要额外的图床服务器或对象存储服务费用。
- **运维**：需要处理图床的访问权限、白名单（就像我遇到的 Referer 问题），甚至要多维护一个系统。

## word混排方案

word混排方案和md图床方案的差别就是，知识库我们上传的是word。

word知识库上传时，我们选择分隔符是\n\n，我这里将md格式导出为word以后，特意在每个章节中间加了两个分隔符。

![word两个换行符](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/word%E4%B8%A4%E4%B8%AA%E6%8D%A2%E8%A1%8C%E7%AC%A6.png)

大家可以看到预览时，这里也有一个相对的文件地址：

![图片相对地址](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%9B%BE%E7%89%87%E7%9B%B8%E5%AF%B9%E5%9C%B0%E5%9D%80.png)

大家可以看到，图片也可以被渲染出来：

![word图片召回测试](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/word%E5%9B%BE%E7%89%87%E5%8F%AC%E5%9B%9E%E6%B5%8B%E8%AF%95.png)

那这个图片是在哪里存储呢？看这个地址，我就知道他一定在本地，那到底在哪里呢。

我们问问`Trae`（或者任何一个AI 的IDE或者`Claude code`），让他来看看代码，帮我们找找答案。

下面这个提示词时经过Trae优化的。

```markdown
针对在本地使用Docker启动的Dify系统中，当向知识库上传Word文档后，文档中包含的图片文件的存储位置及知识库引用方式进行深入分析。请详细说明以下内容：
1) 图片文件在Docker容器内及宿主机上的具体存储路径结构；
2) 系统内部对图片资源的引用机制，包括但不限于数据库记录方式、URL生成规则及访问权限控制；
3) 图片资源在知识库检索和展示过程中的调用流程；
4) 相关配置文件中与图片存储相关的关键参数说明。请提供具体的路径示例、引用格式样例及必要的技术细节，以清晰展示Dify系统处理Word文档中图片资源的完整机制。
```

Trae的答案：

![word图片存储地址](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/word%E5%9B%BE%E7%89%87%E5%AD%98%E5%82%A8%E5%9C%B0%E5%9D%80.png)

我们去目录下看看，果然是：

![果然是图片](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%9E%9C%E7%84%B6%E6%98%AF%E5%9B%BE%E7%89%87.png)

![展示过程](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E5%B1%95%E7%A4%BA%E8%BF%87%E7%A8%8B.png)

那其他格式的文档会进行存储吗？

我们也问问，这是trae分析代码的答案，看来是不会了。只有word。

![替他格式文档会解析图片存储吗](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/%E6%9B%BF%E4%BB%96%E6%A0%BC%E5%BC%8F%E6%96%87%E6%A1%A3%E4%BC%9A%E8%A7%A3%E6%9E%90%E5%9B%BE%E7%89%87%E5%AD%98%E5%82%A8%E5%90%97.png)

ok我们将`chatflow`中的知识库切换为word的知识库。试一下。

很棒，也成功了：

![word图文混排测试](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/word%E5%9B%BE%E6%96%87%E6%B7%B7%E6%8E%92%E6%B5%8B%E8%AF%95.png)

这是LLM的答案：

```json
"text": "根据知识库检索结果，网格2.0的“留利润”子策略做法如下：\n\n**核心思想**：在每一次网格卖出操作中，将**利润部分留下**。由于这部分是0成本，因此可以无限期持有，不受市场短期波动影响，并有望获得长期收益。\n\n**具体做法（基础版本）**：\n1.  以初始价格（例如1元）买入一定金额（例如10000元）的品种，获得相应份额（例如10000份）。\n2.  当价格上涨至网格卖出点位（例如1.05元）时，执行卖出操作。\n3.  卖出时，**仅卖出收回本金所需的部分份额**，将利润对应的份额留下。\n    *   **举例说明**：1元买入10000元（10000份），在1.05元卖出时，卖出价值10000元的9524份，剩下的476份（即5%的利润）**永不卖出**，或仅在品种达到极度高估时才考虑卖出。\n    *   ![图片描述](/files/cad2594f-0da5-4148-ae78-cf2d3a36bbcc/file-preview?timestamp=1763220469&nonce=f54aabad39232554bb59e5ff659ecab4&sign=Dlu1LYRKokOj7BZkBFZaK4B2APHi9-2P9wQqAyptRbg=)\n\n**策略的进化（高级版本）**：\n你还可以选择**留下多于利润的本金**，实现更强的长期持仓效果。\n*   **举例说明（留双份利润）**：同样在1.05元卖出时，不仅可以留下5%的利润，还可以额外留下5%的本金。即卖出9048份（价值9500元），将500元利润与500元本金对应的份额留下，这部分**长期持有**或极度高估时再卖。\n*   ![图片描述](/files/93dd7685-c395-4cc6-998b-7ea399bab9cf/file-preview?timestamp=1763220469&nonce=e4df11f32e6adea3dfc29990c695962b&sign=U7x_KDEHYvBUK0IxjjPu_xr7KzRREucTINJVMYu7sE4=)\n\n**策略优势**：\n这种方法利用了**金融心理学**中的“心理账户”概念，将利润部分视为“免费得到”的资产，有助于**减少情绪化交易**，并能够享受到指数型品种**长期上涨**带来的收益。"
```

### word方案总结

所以word方案总结下来，就是成本短期相对低一些，不需要单独的图床服务器，图片存储在 `dify` 的 Docker 卷中，开箱即用。

但是基本上无法迁移，而且图片还无法管理，因为图片都是完全的系统生成的名字。

## 最后

所以，到底怎么选择呢，一张表给大家总结下：

| 维度           | Markdown + 图床方案               | Word 导入方案                    |
| -------------- | --------------------------------- | -------------------------------- |
| **部署成本**   | **中**（需要额外图床服务）        | **低**（无额外服务）             |
| **操作便捷性** | **中**（需要上传图片到图床）      | **高**（写完 Word 直接上传）     |
| **长期管理**   | **高**（图片资源独立，易于维护）  | **低**（图片存储黑盒，不易管理） |
| **数据迁移性** | **高**（标准 Markdown，通用性强） | **极低**（图片链接与系统强绑定） |
| **推荐场景**   | 公司生产环境、长期项目、多人协作  | 个人实验、快速原型、临时项目     |

这样看起来，大家是不是立刻知道如何选择了，所以：

- **想快速验证、不在乎以后？** 那就用 Word 方案，省时省力。
- **但凡是公司用，考虑长期维护？** 那图床这个服务器和服务运维的投入，我认为是绕不过去的坎。

希望这个对比能帮你省下纠结的时间。



以上，谢谢大家看我的文章，如果对大家有用的话，请大家一键三连！！！
