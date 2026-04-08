---
date: 2025/05/12
issueTitle: "试了高德+Edgeone Pages 的 MCP 组合拳后，我画出了这份详细的数据流图解"
description: "最近在探索MCP相关的服务生态，然后就发现了腾讯所发布的这个 。让我感觉自己开了挂。使用的过程中又对MCP的数据流研究了下。 1. 从 的案例开始 1.1 案例演示 哈，大家都知道，我前两天在第一次学习 的时候做了一个案例，使用高德地图的MCP服务只做了一个旅游的行程规划。步骤是"
image: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/Snipaste_2025-07-11_23-50-14.png"
heroImage: "https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/Snipaste_2025-07-11_23-50-14.png"
tags:
  - "MCP"
  - "大模型"
categories:
  - "MCP"
---
<img src="https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/Snipaste_2025-07-11_23-50-14.png" width="800" />

最近在探索MCP相关的服务生态，然后就发现了腾讯所发布的这个`Edgeone Pages`。让我感觉自己开了挂。使用的过程中又对MCP的数据流研究了下。

# 1. 从`Edgeone Pages`的案例开始

## 1.1 案例演示

哈，大家都知道，我前两天在第一次学习`MCP`的时候做了一个案例，使用高德地图的MCP服务只做了一个旅游的行程规划。步骤是这样的：
![生成网页内容后手动上传部署](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E5%8E%9F%E6%9C%89%E6%B5%81%E7%A8%8B.png)
这个中间需要我自己手工介入很多步，
但是现在，我可以直接将两个提示词进行合并，借助**高德MCP**和**腾讯的`Edgeone Pages`服务**就可以一步直接得到一个已经部署好的可以公开访问的网页链接。
感觉各种方面，Agent起风了。
**为我的老板出差生成行程规划，并且一键部署网页**。

```markdown
# 任务：生成老板北京-上海当日高铁往返行程的HTML代码，使用高德MCP服务和EdgeonePage服务。

## 扮演角色

你是一位**精通信息可视化和前端开发的行政助理/差旅规划专家**，并能**对接和利用MCP（出行相关服务）**获取实时或预测数据。

## 核心目标

为我的老板创建一份北京⇌上海当日高铁往返行程单的**HTML代码**。这段代码渲染后需呈现为一个**极简、视觉清晰、重点突出**的页面，**所有关键信息适合在A4纸张上打印并一目了然**。
行程内容需**整合MCP服务的查询结果**（交通、天气）进行优化，包括**基于整体行程最优推荐出发时间**和**各路段预估时长**。

## 关键行程信息 (用于填充HTML内容)

*   **谁：** 老板
*   **何时：** 2025年4月15日 (周四)
*   **出发基准：** 计划早上从 北京 **庄胜广场** 出发（**请根据MCP数据和会议时间，推荐一个最优且合理的出发时间**）
*   **目的地：** 上海 **中国农业银行软件开发中心** (*地址：上海市浦东新区世纪大道XXXX号* - 请确认并填入详细地址)
*   **核心活动：** 13:00 - 16:00 会议 (**请确保行程安排能准时到达**)
*   **交通偏好：** 高铁 (**商务舱**)；市内交通 (**出租车/网约车**)
*   **要求：** 当日往返，行程含必要缓冲时间 (基于MCP路况预测)，用餐简单快捷。

## HTML输出要求 (A4单页视觉优化版)

1.  **最终输出：** **必须直接提供HTML代码块**。样式可以通过内联CSS或`<style>`块定义。
2.  **视觉风格 (通过HTML/CSS实现):**
    *   **简洁布局:** 结构清晰，逻辑流畅。
    *   **信息层级:** 使用视觉强调手段（如**加粗**）突出关键信息。恰当运用 **Unicode Emoji 图标** (如：📅 🏢 🚗 🚄 ⏰ ☀️ 🌦️ 🧥 ❗ 💼 💳 📱 ☔️ ➡️ ✅) 增强可读性。少量运用**醒目颜色**（如红色）标示最高优先级提醒 (比如 `❗`)。
    *   **A4打印优化:** 确保生成的页面布局紧凑，适合标准A4纵向打印，内容不溢出，字体大小适中 (如 10-12pt)，视觉上留有舒适边距感。
3.  **内容结构 (请按此结构组织生成代码):**
    *   **【顶部概要】:** 一个**醒目、居中或靠左的单行标题**，内容为：`📅 2025-04-15 (周四) | 北京 <=> 上海 (高铁当日往返) | 核心：农行软件中心会议`。其后应有一个**清晰的视觉分隔**（如下划线或空白区域）。
    *   **【时间轴核心表】:** (必需)
        *   呈现为一个**结构化的表格**，包含清晰的列标题：**时间 (预估)** | **活动/交通 (含图标 & 预估时长)** | **地点/详情 (关键点需突出)** | **备注/提醒 (含MCP预测)**。
        *   表格内容需覆盖从北京出发到返回的全程细节：交通接驳、高铁信息（**需包含MCP推荐的最优车次、明确标注商务舱**）、会议、用餐、必要的缓冲时间。
        *   **地点和关键信息**（如车次、地址）应被**视觉强调**。
        *   **市内交通**需注明起终点和**基于MCP预测的预估耗时**（包含在“活动/交通”列）。
        *   重要的**时间节点和提醒**（如“提前进站”）应**醒目展示**。
        *   **清晰标注每个行程段的【预估时长】**（基于MCP数据计算）。
    *   **【关键提醒】:** (组织为几个清晰的列表或区块)
        *   使用**视觉分隔**与上方表格区分开。
        *   **☀️ 天气 & 着装 (基于MCP服务查询结果):**
            *   并列展示北京和上海的**预测气温范围**和**天气状况** (提示如图标 🌦️?)。
            *   提供**着装建议** (例如：商务正装 + 轻便外套?)，并**高亮提醒**关键物品 (如：**根据天气预报，确认是否带伞!**)。
        *   **✅ 必带 Checklist:**
            *   以**清单形式**列出，使用**复选框样式标记** (`[ ]`) 或 ✅ 图标。
            *   必须包含并**突出显示**：**身份证**、手机 & 充电宝、**高铁票 (电子/App)**、会议文件/电脑、名片、支付方式 (信用卡/App)。
        *   **⚠️ 重要提示:**
            *   列出关键注意事项，**高亮强调**最紧急的项：如 **❗ 立即根据推荐预订往返高铁商务舱!**
            *   其他提醒包括：市内交通已按MCP预估，但仍需**预留充足时间**（尤其返程高峰）、关注高铁**实时动态**（12306 App）、保持手机畅通。
4.  **MCP服务整合体现：** 需**根据MCP服务的实际查询结果**（交通路况、天气预报、高铁时刻等）**计算并填充**HTML代码中的**预估时间**、**预估时长 `(约 XX 分钟/小时)`**、**天气描述 `[天气]`**、推荐的**最优高铁车次 `[GXXX]`**、以及基于此推荐的**最优从庄胜广场出发时间**。占位符 `[...]` 表示需要填充的数据。

**请基于以上所有优化后的信息和要求，生成最终的HTML代码。**
```
![调用高德服务，获取信息](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E8%B0%83%E7%94%A8%E9%AB%98%E5%BE%B7.png)

![数据准备完成，准备生成html](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E5%87%86%E5%A4%87%E5%AE%8C%E6%88%90%EF%BC%8C%E7%94%9F%E6%88%90%E4%BB%A3%E7%A0%81.png)

![HTML生成及部署](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90%E5%8F%8A%E9%83%A8%E7%BD%B2.png)
大家可以看到，他显示使用高德地图获得了必要的信息，最后整合，使用腾讯的`Edgeone Pages`直接完成了部署，并且返回给了我网页的链接。
![一键部署](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E7%BD%91%E9%A1%B5.png)

> 结果展示：https://mcp.edgeone.site/share/IVcze4EgaioBLQW2Kk3K5

## 1.2 完成以上场景实验的环境准备工作 

实现以上场景，需要做以下准备工作。

> 运行环境配置--Node.js安装。
> 在Cursor中进行MCP服务配置。

### 1.2.1 Node.js安装

首先，大家需要下载`Node.js`，下载链接是：https://nodejs.org/zh-cn，点击左侧下方绿色的按钮下载即可，安装时，一路选择默认点下一步即可，当然，安装路径你可以调整。
![下载](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/nodejs.png)
在安装完成以后，大家在开始菜单，右击，选择**终端管理员**（命令行powershell）。输入以下命令：

```cmd
 node -v
v22.14.0
npx -v
10.9.2
```

如果输出结果正常输出了版本号，则代表我们环境安装好了。

### 1.2.2 Cursor中Edgeone Page的MCP配置

这里主要介绍在`Cursor`中的配置方式，我是`win11`，所以下面的适用于`win`电脑。
`Cursor`的下载及安装，我在这里就不再说了，大家可以去搜索下直接下载安装，这个开始有免费的使用时间，后面会收费。
当然大家也可以选择使用VScode，在里面下载Cline插件。配置方法类似。
![Cursor的MCP设置](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/Cursor%E9%85%8D%E7%BD%AE%E8%BF%87%E7%A8%8B1.png)
打开`mcp.json`这个配置文件后，在里面输入如下配置：
```json
{
  "mcpServers": {
    // ... 可能存在的其他 MCP 服务器配置 ...

    "edgeone-pages-mcp-server": { // 服务器的唯一标识名 (可自定义)
      "command": "cmd.exe",      // Windows 下的命令执行器
      "args": [
        "/c",                  // cmd.exe 参数，表示执行完命令后关闭窗口
        "npx",                 // 使用 npx 来运行包命令
        "edgeone-pages-mcp"    // 要执行的 EdgeOne Pages MCP 服务器命令
      ]
      // "command": "npx", // macOS/Linux 可能更简洁
      // "args": ["edgeone-pages-mcp"]
    }
  }
}
```
 **注意:** `command` 和 `args` 可能因操作系统而异。上述配置适用于 Windows。macOS 或 Linux 可能直接使用 `npx` 作为 `command`。

接下来，我们以相同的方式，再次打开**终端管理员**（命令行powershell），输入以下命令：

```cmd
npm install -g edgeone-pages-mcp
```

等待安装完成以后，我们去点击`Enabled`，进行启动。
![启动](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1.png)
在这里要注意一点，就是高德服务我用的是SSE（高德的配置查看上一篇文章不止出行规划即可)，所以可能会断掉，断了以后，我们点击重置按钮即可。就是中间那个。

> PS:如果上面的配置方案不好使，大家在腾讯元宝上搜搜排查下错误，win的环境真是让人头疼。
> 可能确实和你没什么关系，苦笑.jpg。

# 2.大模型怎么实现和MCP服务交互呢？

上面的案例中，我们使用了**高德地图的MCP服务**和**腾讯的`Edgeone Pages`服务**。
大家可能知道原来在MCP没出来以前，大模型使用工具的方式是使用`Function call`。但是在上面的案例中，明显是没有用到`Function call`的。
那大模型是如何知道有哪些MCP服务可用？
如何知道调用MCP服务的顺序？
如何知道怎么样和MCP服务进行交互的呢？
带着这几个问题，我们研究下。

从上面的案例来看我猜测数据的流转是以下的形式：

![MCP数据流](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/Untitled-6.svg)

1.  **用户发起请求:**
    用户向 AI Agent (如 Cursor/Cline 中的 LLM) 提出包含使用 MCP 服务意图的请求（例如：“用高德查天气并用 EdgeOne Pages 部署网页”）。

2.  **客户端 (Client) 打包上下文:**
    *   MCP 客户端（Cursor/Cline）获取当前已启用且可用的 MCP 服务器列表。
    *   从每个 MCP 服务器获取其提供的能力描述（包括 **工具 Tools**, **资源 Resources**, **提示 Prompts**）。
    *   将这些能力描述、用户的原始请求、以及可能相关的聊天历史等信息，打包成一个丰富上下文的 **系统提示词 (System Prompt)**。

3.  **发送给大模型 (LLM):**
    客户端将这个包含 MCP 能力描述的系统提示词和用户请求一起发送给配置好的大模型（如 claude3.7，DeepSeekv3等）。

4.  **大模型 (LLM) 决策与规划:**
    *   LLM 解析系统提示词，理解当前可用的 MCP 工具及其使用方法。
    *   根据用户请求，LLM 决定需要调用哪些 MCP 工具，以及调用的顺序和参数。
    *   LLM 生成响应，其中可能包含：
        *   给用户看的自然语言回复。
        *   指示客户端调用特定 MCP 工具的**结构化指令** (例如，使用 `<use_mcp_tool>` 标签)。

5.  **客户端 (Client) 执行 MCP 调用:**
    *   客户端解析 LLM 的响应，提取出 MCP 调用指令。
    *   根据指令，客户端向对应的 MCP 服务器发送调用请求（携带必要的参数）。

6.  **MCP 服务器执行:**
    MCP 服务器接收请求，执行相应的操作（如调用高德 API、执行部署命令）。

7.  **MCP 服务器返回结果:**
    MCP 服务器将执行结果返回给客户端。

8.  **客户端 (Client) 再次打包:**
    客户端将 MCP 工具的执行结果整合到上下文中。

9.  **循环或结束:**
    *   **如果任务未完成**（例如，还需要调用下一个 MCP 工具或需要用户确认），客户端将包含 MCP 结果的新上下文再次发送给 LLM，重复步骤 4-8。
    *   **如果任务完成**，LLM 生成最终的回复给用户。

接下来我们配置环境，然后进行一下验证：

> - 运行环境配置--Node.js安装。
> - AIgateway注册及准备
> -vscode下载及cline安装（cline是一个类似Cursor的AI编程的插件）。
## 2.1 AIgateway注册及准备

首先我们打开赛博菩萨进行注册：

> **AIgatway地址**：https://dash.cloudflare.com/70f8722de0f4baec0f4d86130189b2dc/ai/ai-gateway
> **操作文档**：https://developers.cloudflare.com/ai-gateway/

![注册赛博菩萨](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E6%B3%A8%E5%86%8C%E8%B5%9B%E5%8D%9A%E8%8F%A9%E8%90%A8.jpg)

向下滑动左侧导航栏找到AIgateway，创建网关和API。

 ![找到AIgateway](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E6%89%BE%E5%88%B0AIgateway.jpg)

![创建网关](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E5%88%9B%E5%BB%BA%E7%88%B1%E4%BD%A0%E7%BD%91%E5%85%B3.jpg)

![创建API](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E9%80%89%E6%8B%A9api.jpg)
这个时候，我们获取到了一个模型的API访问地址，这个地址会让我们在本地请求时，数据经过AIgateway，从而保存日志。

## 2.2 vscode下载及cline安装

vscode的下载，在浏览器搜索后，进行下载（https://code.visualstudio.com/download）。
不过大家可以找下国内镜像版本，比如清华大学的镜像。
安装完成vscode以后，打开插件市场，下载安装cline。
![下载及安装cline](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/cline.jpg)
安装及配置MCP服务：
![点击MCP服务](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/MCP%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AE.png)
![点击自行安装](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E8%87%AA%E8%A1%8C%E5%AE%89%E8%A3%85.png)
点击下方的`configure MCP Servers`打开`cline_mcp_settings.json`。输入如下配置：
```json
    "edgeone-pages-mcp-server": {
      "disabled": false,
      "timeout": 60,
      "command": "node",
      "args": [
        "D:\\mcp\\node_modules\\edgeone-pages-mcp\\dist\\index.js"
      ],
      "transportType": "stdio"
    }
```
我这个配置可能不具备参考价值，因为环境的各种问题，我自己调整了太多内容。门槛多少有点高。
大家可以试试官网提供的配置：
```json
{
  "mcpServers": {
    "edgeone-pages-mcp-server": {
      "command": "npx",
      "args": ["edgeone-pages-mcp"]
    }
  }
}
```
> 官网：https://edgeone.cloud.tencent.com/pages/document/173172415568367616

完成后Ctrl+S记得保存。
接着安装`edgeone pages`。
```cmd
npm install -g edgeone-pages-mcp
```
如果没有报错，那我们就可以去点击重置或者开关按钮，多点几下，小绿灯亮了就可以使用了。
![edgeone Pages 服务开启](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/MCp%E5%BC%80%E5%90%AF.png)
好了，现在我们去找一个可以国内访问的，可以免费薅羊毛的大模型`openrouter`，先注册，然后申请key，并且复制模型ID。
打开`https://openrouter.ai/settings/keys`，注册登录以后，选择右上角头像位置的keys。
![选择创建key](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/openrouterkey.png)
![创建key](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E5%88%9B%E5%BB%BAopenrouterkey.png)

接下来，我们配置模型。打开设置，按照下图的方式将`openrouter`获取的秘钥、模型ID（记得选择带free的模型）和AIgateway获取的连接，填入对应位置。
![cline模型配置](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/cline%E6%A8%A1%E5%9E%8B%E9%85%8D%E7%BD%AE.png)

这样，我们所有的实验准备都完成了就。

## 2.3 实验开始

首先我们在cline中输入提示词：

```markdown
查一下北京天安门广场的经纬度和明天（2025年4月11日）的天气。
然后生成一个可以用来表达爱意的网站，网站的中央写着，我在（天安门的经纬度）等你。
下方是明天的日期和天气。
最后将网站进行部署。
```

开始运行。然后我们可以在AIgateway中看到第一次请求的日志。
![第一次请求的日志](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9A%84%E8%AF%B7%E6%B1%82%E5%86%85%E5%AE%B9.png)

### 2.3.1 客户端第一次请求大模型的日志

我们将它复制出来，在vscode新建一个文件，粘贴进去。我们可以看到一个巨长的系统提示词（**PS我觉得这个提示词太长了，占用了太多的上下文**，感受到了token哗哗的流）：

![巨长的系统提示词](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E5%B7%A8%E9%95%BF%E7%9A%84%E7%B3%BB%E7%BB%9F%E6%8F%90%E7%A4%BA%E8%AF%8D.png)

然后，我们`ctrl+f`搜索MCP，可以看到有104处提到了MCP，我们把相关部分拿出来翻译一下（特别是 `use_mcp_tool` 和 `access_mcp_resource` 两个核心标签：

```markdown
## use_mcp_tool（使用MCP工具）
Description: Request to use a tool provided by a connected MCP server. Each MCP server can provide multiple tools with different capabilities. Tools have defined input schemas that specify required and optional parameters.
描述： 请求使用已连接的 MCP 服务器提供的工具。每个 MCP 服务器可以提供具有不同功能的多个工具。工具定义了指定必需和可选参数的输入模式。
Parameters:
参数：
server_name: (required) The name of the MCP server providing the tool
server_name：（必需）提供工具的 MCP 服务器的名称
tool_name: (required) The name of the tool to execute
tool_name：（必需）要执行的工具的名称
arguments: (required) A JSON object containing the tool's input parameters, following the tool's input schema
arguments：（必需）一个 JSON 对象，包含工具的输入参数，遵循工具的输入模式
Usage:
用法：
<use_mcp_tool><server_name>server name here</server_name><tool_name>tool name here</tool_name><arguments>{"param1": "value1","param2": "value2"}</arguments></use_mcp_tool>
<use_mcp_tool><server_name>在此输入服务器名称</server_name><tool_name>在此输入工具名称</tool_name><arguments>{"param1": "value1","param2": "value2"}</arguments></use_mcp_tool>
## access_mcp_resource（访问MCP资源）
Description: Request to access a resource provided by a connected MCP server. Resources represent data sources that can be used as context, such as files, API responses, or system information.
描述： 请求访问已连接的 MCP 服务器提供的资源。资源代表可用作上下文的数据源，例如文件、API 响应或系统信息。
Parameters:
参数：
server_name: (required) The name of the MCP server providing the resource
server_name：（必需）提供资源的 MCP 服务器的名称
uri: (required) The URI identifying the specific resource to access
uri：（必需）标识要访问的特定资源的 URI
Usage:
用法：
<access_mcp_resource><server_name>server name here</server_name><uri>resource URI here</uri></access_mcp_resource>
<access_mcp_resource><server_name>在此输入服务器名称</server_name><uri>在此输入资源 URI</uri></access_mcp_resource>
```

当然还有很多其他的内容，太多了，我就不一一进行说明了。

但是从上面翻译后的内容以及下面的图我们可以看出，客户端其实将高德地图的mcp服务各个工具的使用方式，使用说明，请求方式都送给大模型了。

当然还包括用户user，也就是我的提示词，我没有截出。

![经纬度转换](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E7%BB%8F%E7%BA%AC%E5%BA%A6%E8%BD%AC%E6%8D%A2.png)

### 2.3.2 大模型的第一次响应结果

现在，我们看一下大模型的响应结果。这里我对`content`进行了一些调整，方便可以看到全部内容。

可以看到，大模型给客户端（cline）返回以下内容：

> 1. 客户端cline应该**显示的内容**。
> 2. 客户端cline下一步应该调用的**mcp工具名称**。
> 3. 客户端cline调用mcp工具时所需要**输入的请求参数**。

![第一次请求大模型响应结果](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%93%8D%E5%BA%94%E7%BB%93%E6%9E%9C.png)

### 2.3.3 客户端开始打包

客户端cline在调用完工具后，又一次开始调用大模型，将MCP工具的响应结果（具体地址等相关信息）+用户提示词+系统提示词给到大模型。

![大模型返回下一次需要调用天气的mcp](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%BF%94%E5%9B%9E%E8%8E%B7%E5%8F%96%E5%A4%A9%E6%B0%94%E7%9A%84%E5%8F%82%E6%95%B0%E3%80%82.png)

可以看到，大模型告诉客户端cline，你下一步需要使用`maps_weather`工具了并且将请求参数给到了客户端。

### 2.3.4 开始循环调用大模型和MCP工具

![打包天气查询结果+提示词](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E5%B7%A5%E5%85%B7%E7%BB%93%E6%9E%9C%EF%BC%8C%E4%B8%8B%E9%9D%A2%E8%A6%81%E5%81%9A%E7%9A%84%E5%86%85%E5%AE%B9%EF%BC%8C%E6%89%93%E5%8C%85%E5%8F%91%E7%BB%99%E6%A8%A1%E5%9E%8B.png)

大模型收到以后，开始执行后面的步骤，输出HTML的相关代码。

![输出html代码](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E8%BE%93%E5%87%BAhtml%E4%BB%A3%E7%A0%81.png)

客户端在收到HTML代码以后，得到用户的确认，再一次调用大模型，告诉LLM，代码已经输出完成，下一步要做什么。

![返回请求部署MCP工具和请求参数（html代码）](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E4%BD%BF%E7%94%A8%E9%83%A8%E7%BD%B2%E5%B7%A5%E5%85%B7.png)

紧接着，客户端，又一次开始执行调用腾讯`Edgeonepage`的MCP工具，执行成功以后，将成功结果告诉LLM，让LLM判断下面还要做什么。

![部署结果通知大模型](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E9%83%A8%E7%BD%B2%E7%BB%93%E6%9E%9C%E9%80%9A%E7%9F%A5%E5%A4%A7%E6%A8%A1%E5%9E%8B.png)

最后大模型告诉客户端，任务都执行完了，你可以通知用户啦。
![爱的约定](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/%E7%88%B1%E7%9A%84%E7%BA%A6%E5%AE%9A.gif)

> **爱的约定**：https://mcp.edgeone.site/share/NHHkSrWfpN1_3eipPK47m

### 2.3.5 一个总结

可以看到，对于这次的需求来说，**客户端是在一步步的调用工具**（这可能是因为最开始我这边因为高德服务断了重连了一次）。

因为我们在最开始的案例是可以看到，它调用高德MCP时，是一次性调用了所有的，最后将结果打包送给大模型后，才开始执行代码生成和html网页部署的。

但是，**它还是在按照步骤执行，获取到所有的信息以后，才会执行下一步**。

从上面对日志的分析来看，MCP协议的数据流基本符合我们最开始的猜测。
![MCP数据流--再给大家看一次](https://wenhua-image.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/EdgeonePage/Untitled-6.svg)

>  **客户端是一个核心的协调者**，类似项目经理。
>  **LLM是大脑**，是管项目经理的PMO制定规则的。
>  **MCP是四肢**，是项目团队中的运营，实施，开发。
>  **`System Prompt`**，是客户端和LLM的桥梁。

# 3. 未来趋势

在这几个场景的研究中，最让我痛苦的是环境的配置问题，也就是`studio`模式。个人觉得，现在的`npm`方式实在是太傻了，对我们这种非开发者太不友好。因此我在想未来`MCP`生态的发展，可能会是以下几个方向：

1、**云化趋势 (Cloud):**类似现在**高德SSE**的方式，基本不需要我去配置什么命令，例如`npx`、`node`、`cmd.exe`中的任何一种，只需要我输入一个key即可。

2、可能会出现类似**MCP工具商店**的东西，但是不是cline这种，需要各种命令执行的典型开发风格。而是就像现在安装浏览器插件或手机 App 的应用市场一样。

3、**小模型的结构化输出**：其实在公司内部，也在探索大模型落地，因此让开发老师研究了下，写了个MCP工具，将保后（贷后）管理系统的部分接口进行了封装，在工作流中进行使用，发现小模型类似32B这种，表现不是很好。我考虑主要原因是因为32B模型返回的参数等相关内容出错的概率会相对来说大一些，所以**后续较小参数模型，可能在调用和使用工具的能力方面**，会进一步提升。

4、**多模态集成方向**：处理图像、音频、视频等相关数据。

5、`System Prompt`的精炼，或者其他方式的出现，这次的实验真的让我看到了token的大量消耗，就上面这两个案例，我开始在Deepseek官网的api实验时，就花了0.5元。大家知道官网很便宜的。

对了上面的腾讯Edgeone Pages，是可以一键自动化建网站的，我这里没有演示，大家如果有兴趣可以去试试。

**日新月异**
MCP我才研究了个开头，A2A协议也出来了。
谷歌的Agent2Agent，解决了智能体之间的协作与通信，像是“两个大脑”之间的对话。
而小A的MCP协议，解决了智能体如何使用工具，让大脑和身体更加协调了。
