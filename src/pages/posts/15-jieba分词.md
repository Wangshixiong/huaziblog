---
date: 2021/11/08
issueTitle: "jieba分词"
description: "昨天，做的那个数据分析报告用到了 分词。但是只是借用了别人的部分代码。具体函数代表什么还不太明白。今天去官网研究了下....."
image: "https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110224246094.png"
heroImage: "https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110224246094.png"
tags:
  - "python"
---
昨天，做的那个数据分析报告用到了`jieba`分词。但是只是借用了别人的部分代码。具体函数代表什么还不太明白。今天去官网研究了下.....



# jieba官网简介

“结巴”中文分词：做最好的 Python 中文分词组件

`"Jieba" (Chinese for "to stutter") Chinese text segmentation: built to be the best Python Chinese word segmentation module.`

支持三种分词模式：

精确模式，试图将句子最精确地切开，适合文本分析；
全模式，把句子中所有的可以成词的词语都扫描出来, 速度非常快，但是不能解决歧义；
搜索引擎模式，在精确模式的基础上，对长词再次切分，提高召回率，适合用于搜索引擎分词。
支持繁体分词

支持自定义词典

MIT 授权协议

## 安装

``` python
pip install jieba
```
# 分词

`jieba.cut` 方法接受三个输入参数: 需要分词的字符串；cut_all 参数用来控制是否采用全模式；HMM 参数用来控制是否使用 HMM 模型
`jieba.cut_for_search` 方法接受两个参数：需要分词的字符串；是否使用 HMM 模型。该方法适合用于搜索引擎构建倒排索引的分词，粒度比较细

待分词的字符串可以是 unicode 或 UTF-8 字符串、GBK 字符串。注意：不建议直接输入 GBK 字符串，可能无法预料地错误解码成 UTF-8
`jieba.cut `以及` jieba.cut_for_search `返回的结构都是一个可迭代的 generator，可以使用 for 循环来获得分词后得到的每一个词语(unicode)，

或者用`jieba.lcut` 以及` jieba.lcut_for_search `直接返回 list

`jieba.Tokenizer(dictionary=DEFAULT_DICT) `新建自定义分词器，可用于同时使用不同词典。jieba.dt 为默认分词器，所有全局分词相关函数都是该分词器的映射。

# 官网实例

所以大概明白了生成词云需要的cut方法的具体参数都代表什么。

``` python
import jieba as jb
str_li = jb.cut("我来到北京清华大学",cut_all=True) # 全模式
print(str_li)
<generator object Tokenizer.cut at 0x00000298C3987FC0> # 可以看到返回了一个生成器。

FullMode = 'Full mode :' + '/'.join(str_li) #全模式（不能解决歧义）
print(FullMode)

str_li = jb.cut("我来到北京清华大学",cut_all=False) # 精确模式
AccMode = 'AccurateMode: ' + '/'.join(str_li)
print(AccMode)

AccurateMode: 我/来到/北京/清华大学 #精确模式（适用于文本分析）

str_li = jb.cut("我来到北京清华大学") #默认
DefMode = 'DefaultMode: ' + '/'.join(str_li)
print(DefMode)

DefaultMode: 我/来到/北京/清华大学 # 我们可以看到，默认是精确模式

long_sen = jb.cut_for_search("小明硕士毕业于中国科学院计算所，后在日本京都大学深造")# 搜索引擎模式
Long = 'search:'+','.join(long_sen)
print(Long)

search:小明,硕士,毕业,于,中国,科学,学院,科学院,中国科学院,计算,计算所,，,后,在,日本,京都,大学,日本京都大学,深造

# 最后统一对比一下：

print(FullMode)
print(AccMode)
print(DefMode)
print(Long)

Full mode :我/来到/北京/清华/清华大学/华大/大学
AccurateMode: 我/来到/北京/清华大学
DefaultMode: 他/来到/了/网易/杭研/大厦
search:小明,硕士,毕业,于,中国,科学,学院,科学院,中国科学院,计算,计算所,，,后,在,日本,京都,大学,日本京都大学,深造

```

对于基本的词云及词频分析来说已经足够了，词典什么的情感分析，下次研究。

下面试着对以前.......（long long ago）喜欢的一本小说（极品公子）做个词云分析。

``` python
import jieba as jb
import matplotlib.pyplot as plt
from wordcloud import WordCloud

text = open(r'C:\Users\sunshine\Desktop\极品公子.txt',encoding = 'utf-8').read()
text_f = jb.cut(text)

text_s = " ".join(text_f)
boy_cloud = WordCloud().generate(text_s)
plt.imshow(boy_cloud)
plt.axis("off")
plt.show()
```

![无间道](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/image-20211110224246094.png)

可以发现，毫无疑问，叶无道是主角。

[jeiba地址](https://github.com/fxsjy/jieba)
