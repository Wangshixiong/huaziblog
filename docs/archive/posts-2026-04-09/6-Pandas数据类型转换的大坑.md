---
date: 2019/03/14
issueTitle: "Pandas数据类型转换的大坑"
description: "**Pandas的数据类型是一个必须要注意的地方！！！**"
image: "/images/Happy.png"
heroImage: "/images/Happy.png"
tags:
  - "Pandas"
categories:
  - "数据分析"
---
<img src="/images/Happy.png" width="800" />

**Pandas的数据类型是一个必须要注意的地方！！！**



----

**数据类型，开始我真的没怎么太注意。。后来真的是掉进了这个大坑。将我埋掉了。**

----

## 问题起源

首先，我要对数据进行去重，再去重之后，在对数据的`call_id`进行计数，最终我发现，我和别人统计的结果有差别。**差了1。**

我是拿到数据，直接导入pandas，然后直接去重。最后掉进了这个大坑。

```python
import pandas as pd
import glob

path = r'C:\Users\admin\Desktop\renshou\data'#路径

filenames = glob.glob(path + "/*.txt")#文件路径

call_data = pd.DataFrame()
list_call_data = []

#用pandas读取所有数据，并连接到一个DataFrame中。
for file_name in filenames:
    filename =open(file_name) 
    df = pd.read_table(filename,sep = ',',header = 0,index_col = False,encoding = 'gbk')
    list_call_data.append(df)
    
call_data = pd.concat(list_call_data)

#根据call_id去重，并保留第一次出现的行
cle_call_data = call_data.drop_duplicates(subset = 'call_id',keep = 'first')

call_data1 = cle_call_data['call_id']
call_data1.count()
output：142034
```

**而同事统计出来是142033。**

**到了这里，我就突然想来了是不是数据类型出了问题。**

最终经过验证，确实是。我将数据导出至CSV，在Excel中去重，果然，count变成了142033。

我对`call_id`进行astype的强制类型转换，抛出了：

```python
ValueError: invalid literal for int() with base 10: '1532862726-371'
```

果然是数据类型问题，但是，由于数据量比较大，我想了各种办法，将这个取出来也没看出有什么问题。看不出他是str类型。实在是，不知道问题出在了哪里。参考网上的解决方法均失败。。。唉。。。

**最终好好学习了一下数据类型转换。**

主要参考文献：

- [多一点](https://www.cnblogs.com/onemorepoint/p/9404753.html#top)
- [pandas index](http://pandas.pydata.org/pandas-docs/stable/genindex.html#S)
- [数据提取](http://bluewhale.cc/2016-08-22/data-extraction-using-python.html)
- [Pandas数据类型转换的几个小技巧](https://segmentfault.com/a/1190000014713098)
