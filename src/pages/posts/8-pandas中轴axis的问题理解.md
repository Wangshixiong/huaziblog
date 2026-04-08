---
date: 2019/03/15
issueTitle: "pandas中轴axis的问题理解"
description: "在学习删除方法 时，碰到了，也突然想明白了，轴是什么意思。"
image: "https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-de17a1655283a433.png"
heroImage: "https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-de17a1655283a433.png"
tags:
  - "Data analysis"
  - "硕士期间"
  - "python"
  - "Pandas"
categories:
  - "数据分析"
---
在学习删除方法`drop`时，碰到了，也突然想明白了，轴是什么意思。



引入：

```python

import numpy as np
from pandas import Series,DataFrame#导入包
obj = Series(np.arange(5),index = ['a','b','c','d','e'])#创建Series  obj
obj
Out[2]: 
a    0
b    1
c    2
d    3
e    4
dtype: int32

new_obj = obj.drop('c')#删除'c'
new_obj
Out[5]: 
a    0
b    1
d    3
e    4
dtype: int32

obj
Out[6]: 
a    0
b    1
c    2
d    3
e    4
dtype: int32

obj.drop(['b','d'])#删除'b','d'
Out[7]: 
a    0
c    2
e    4
dtype: int32

data = DataFrame(np.arange(25).reshape(5,5),index = ['bj','tj','heb','sjz','sh'],columns=['one','two','three','four','five'])#创建DataFrame
data
Out[9]: 
     one  two  three  four  five
bj     0    1      2     3     4
tj     5    6      7     8     9
heb   10   11     12    13    14
sjz   15   16     17    18    19
sh    20   21     22    23    24

data.drop(['bj','tj'])#删除某行
Out[10]: 
     one  two  three  four  five
heb   10   11     12    13    14
sjz   15   16     17    18    19
sh    20   21     22    23    24

data.drop('one',axis=1)#删除列
Out[11]: 
     two  three  four  five
bj     1      2     3     4
tj     6      7     8     9
heb   11     12    13    14
sjz   16     17    18    19
sh    21     22    23    24
```
可已注意到的是，在上方使用`drop`时，删除列特意指明了`axis=1`. 而在查看drop的文档时，发现默认参数是`axis =0 `，这说明：
- `axis = 0`代表的是行。
- `axis = 1`代表的是列。
  这样想就明白了。但是接着问题来了，

```python
data
Out[29]: 
lie   one  two  three  four  five
city                             
bj      0    1      2     3     4
tj      5    6      7     8     9
heb    10   11     12    13    14
sjz    15   16     17    18    19
sh     20   21     22    23    24

data.mean(axis = 0)#求列平均
Out[30]: 
lie
one      10.0
two      11.0
three    12.0
four     13.0
five     14.0
dtype: float64

data.mean(axis = 1)#求行平均
Out[31]: 
city
bj      2.0
tj      7.0
heb    12.0
sjz    17.0
sh     22.0
dtype: float64
```
其实，我是有点蒙的，如果向上面那样理解的话。
发现问题了吗？
在`drop`中使用`axis=1`实际上是删掉了一列，而在`mean`中实际上是计算的行平均值，而不是列的平均值。
蒙了。嗯，看了Stackoverflow中的解释，大概是明白了。现记录如下。

**实际上axis = 1，指的是沿着行求所有列的平均值，代表了横轴，那axis = 0，就是沿着列求所有行的平均值，代表了纵轴。**

![示意图](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-de17a1655283a433.png)

那这样的话，`drop`就是沿着`'two'`的方向删除对应的轴标签为`axis = 1`的值。

又想到了numpy，pandas是以numpy为基础构造的库，因此，它保留了对于axis使用的方式。

参考：[[What does axis in pandas mean?](https://stackoverflow.com/questions/22149584/what-does-axis-in-pandas-mean)](https://stackoverflow.com/questions/22149584/what-does-axis-in-pandas-mean)
