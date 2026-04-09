---
date: 2019/03/06
issueTitle: "python"
description: "pyecharts安装地图包"
image: "https://s1.ax1x.com/2018/08/21/P48u36.png"
heroImage: "https://s1.ax1x.com/2018/08/21/P48u36.png"
tags:
  - "python"
---
### pyecharts安装地图包



```python
pip install echarts-countries-pypkg
```

报错`Unknown or unsupported command 'install'`

这可能是因为我最近装了很多的环境导致的冲突，比如php，java环境等等。

解决方法：

```python
pip.exe install echarts-countries-pypkg
```

参考：[pip命令提示unknow or unsupported command install解决方法](https://blog.csdn.net/qq_36854407/article/details/79314344)

### 连接两个表

```python
gg_commu_data = pd.merge(gg_data,way_commu_data,on = 'call_id',how = 'left')
```

报错

`ValueError: You are trying to merge on int64 and object columns. If you wish to proceed you should use pd.concat`

这是，主键数据类型不同，一个是int，一个是对象。解决方法，更改数据类型。



### 合并两个列为一列

1. **两列数据类型一样**

   1. 直接合并

   `way_commu_data['new'] = way_commu_data['business_name'] + way_commu_data['inter_idx']`

   2. 加符号

   `way_commu_data['new'] = way_commu_data['business_name'] +"|" + way_commu_data['inter_idx'].map(str)`

2. **数据类型不同**

*如果某一列是非str类型的数据，那么我们需要用到map(str)将那一列数据类型做转换 。*

`dataframe["newColumn"] = dataframe["age"].map(str) + dataframe["phone"] + dataframe["address”] `

3. **在某一列中加入字符串。**

[这里采用格式化字符串的形式。](https://blog.csdn.net/sscc_learning/article/details/76993816)

![方法](https://s1.ax1x.com/2018/08/21/P48u36.png)

4. **用一列的非空值填充另一列对应的空值**

`way_commu_data.loc[way_commu_data['business_name_new'].isnull(),'business_name_new']=way_commu_data[way_commu_data['business_name_new'].isnull()]['inter_idx']`



### 报错

#### 提取包含某些字符的字段报错

```python
#找出target中包含字符1的列
y = test[test['target'].str.contains('1')]
```

报错：`ValueError: cannot index with vector containing NA / NaN values`

 解决方法：

```python
#找出target中包含字符1的列
y = test[test['target'].str.contains('1', case=False, na=False)]


#If first line failed still is possible replace NaNs in condition in str.contains by parameter na=False:

mask = dframe.Product.str.contains(word, case=False, na=False)
#Or try omit inplace=True and assign back:
dframe['Product'] = dframe['Product'].fillna('')
```

参考：

1.[stack](https://stackoverflow.com/questions/48862235/python-valueerror-cannot-index-with-vector-containing-na-nan-values)

2.[csdn](https://blog.csdn.net/Guo_ya_nan/article/details/81021158)

6. [**pandas.DataFrame中删除包涵特定字符串所在的行**](https://blog.csdn.net/htbeker/article/details/79645651)
7. [**Pandas to_json() 中文乱码,转化为json数组**](https://blog.csdn.net/fontthrone/article/details/75212825)

### PPT动态图实现方案

将pyecharts的图生成html文件。

命令：`wordcloud.render()`

### 文件读取

#### 读取txt文件时，报错

```python
filename3 = 'C:/Users/admin/Desktop/commu_data3.txt'
#设置分隔符为','，第一行为列名（列索引），设定不使用第一列作为行索引
commu3 = pd.DataFrame(pd.read_table(filename3,sep = ',',header = 0,index_col = False,encoding = 'gbk'))
```

`ParserError: Error tokenizing data. C error: Expected 21 fields in line 3, saw 22`

看他的意思是，底层的C代码不能解析数据，**采用以下方案，将解析引擎设置为python。**

```python
filename3 = 'C:/Users/admin/Desktop/commu_data3.txt'
#设置分隔符为','，第一行为列名（列索引），设定不使用第一列作为行索引
commu3 = pd.DataFrame(pd.read_table(filename3,sep = ',',header = 0,index_col = False,encoding = 'gbk',engine = 'python'))
```

#### 文件夹批量读取glob

[glob官方文档](https://docs.python.org/3.5/library/glob.html#module-glob)

```python
import glob
import pandas as pd 

path = r'F:\公司文档\项目文档\中国人寿\数据\7月份数据\call_data'

filenames = glob.glob(path + "/*.txt")
frame = pd.DataFrame()
list_call_data = []

#用pandas读取所有数据，并连接到一个DataFrame中。
for file_name in filenames:
    filename =open(file_name) 
    df = pd.read_table(filename,sep = ',',header = 0,index_col = False,encoding = 'gbk')
    list_call_data.append(df)
    
frame = pd.concat(list_call_data)

path = r'F:\公司文档\项目文档\中国人寿\数据\7月份数据\call_data'
```

[参考1](https://dataquestion.com/question/3526)

[参考2](https://blog.csdn.net/LZGS_4/article/details/50371030)

[参考3](https://blog.csdn.net/Sunshine_in_Moon/article/details/50246773)

### pandas输出文件

[pandas文档json写入](http://pandas.pydata.org/pandas-docs/stable/io.html#writing-json)
