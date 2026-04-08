---
date: 2019/03/06
issueTitle: "numpy统计函数和布尔型数组"
description: "统计函数 **可以通过numpy的统计函数对整个数组或者某个轴向的数据进项统计计算。**"
image: "/images/Happy.png"
heroImage: "/images/Happy.png"
tags:
  - "python"
---
<img src="/images/Happy.png" width="800" />

## 统计函数

**可以通过numpy的统计函数对整个数组或者某个轴向的数据进项统计计算。**



所谓的轴向，其实就是n维向量的某一维。或者说某一行，某一列。

> `sum`对数组（向量）中全部或某个轴向的元素求和，长度为0，则`sum`为0.
> `mean`算数平均数，作用范围同`sum`，长度为0，结果为NaN。

```python
In [1]: import numpy as np

In [2]: x = np.arange(9).reshape(3,3)#二维

In [3]: x
Out[3]:
array([[0, 1, 2],
       [3, 4, 5],
       [6, 7, 8]])

In [4]: x.sum()
Out[4]: 36

In [5]: np.sum(x[0])
Out[5]: 3

In [6]: np.sum(x[:,0])
Out[6]: 9

In [7]: x.mean()
Out[7]: 4.0

In [8]: np.mean(x[0])
Out[8]: 1.0

In [9]: np.mean(x[:,1])
Out[9]: 4.0

In [10]: y = np.arange(18).reshape(2,3,3)#三维                         
                                                                
In [11]: y                                                        
Out[11]:                                                          
array([[[ 0,  1,  2],                                             
        [ 3,  4,  5],                                             
        [ 6,  7,  8]],                                            
                                                                  
       [[ 9, 10, 11],                                             
        [12, 13, 14],                                             
        [15, 16, 17]]])                                           
                                                                  
In [12]: np.sum(y)                                                
Out[12]: 153                                                      
                                                                  
In [13]: np.mean(y)                                               
Out[13]: 8.5                                                      
                                                                  
In [14]: np.sum(y[0])                                             
Out[14]: 36                                                       
                                                                  
In [15]: np.sum(y[:,0])                                           
Out[15]: 33                                                       
                                                                  
```

可以发现，**`sum，mean`不但能作为数组的实例方法调用，还可以作为Numpy函数调用。**

另外，`numpy`的`mean`,`sum`函数还可以接受一个`axis`参数，用于计算该轴向的参数值，咳咳，敲黑板，重点来了，什么轴向？

```python
In [21]: x  #2维
Out[21]:
array([[0, 1, 2],
       [3, 4, 5],
       [6, 7, 8]])

In [22]: x.sum(axis=0)
Out[22]: array([ 9, 12, 15])

In [23]: x.sum(axis=1)
Out[23]: array([ 3, 12, 21])
In [24]: y  #3维                              
Out[24]:                                
array([[[ 0,  1,  2],                   
        [ 3,  4,  5],                   
        [ 6,  7,  8]],                  
                                        
       [[ 9, 10, 11],                   
        [12, 13, 14],                   
        [15, 16, 17]]])                 
                                        
In [25]: y.sum(axis=0)                  
Out[25]:                                
array([[ 9, 11, 13],                    
       [15, 17, 19],                    
       [21, 23, 25]])                   
                                        
In [26]: y.sum(axis=1)                  
Out[26]:                                
array([[ 9, 12, 15],                    
       [36, 39, 42]])                   
                                        
In [27]: y.sum(axis=2)                  
Out[27]:                                
array([[ 3, 12, 21],                    
       [30, 39, 48]])                   
                                        
In [28]: y.sum(axis=3) 
ValueError: 'axis' entry is out of bounds    

```

经过试验，可以发现，

**没有`axis`参数表示全部相加，`axis＝0`表示按列相加，`axis＝1`表示按照行的方向相加。** `axis = 2`，也是行相加，不过代表的是2维程度的相加。

另外，输入`axis = 3`，返回了错误，这说明，**`axis`参数的维度总是比数组低一层。**  

另外，`axis`还可以接受一个元组。

```python
In [30]: x.sum(axis=(0,1))
Out[30]: 36

In [30]: x.sum(axis=(0,1))
Out[30]: 36

In [31]: y.sum(axis=(0,1))
Out[31]: array([45, 51, 57])

In [32]: y.sum(axis=(0,1,2))
Out[32]: 153

In [33]: y.sum(axis=(1,2,0))
Out[33]: 153
```

可以发现，输入元组，实现了行和列的先后相加，拿x来说，

**`axis=(0,1)`代表了先进行列相加，再将列相加的结果进行行相加**，

所以最后的结果和全部求和的结果是一致的。

而且，结果与其顺序是没有关系的。

> `std、var` 分别为标准差和方差，自由度是可以进行调整的（默认为n）
> `min、max` 最小值最大值
> `argmin、argmax` 最小值，最大值索引
> `cumsum` 所有元素的累计和
> `cumprod` 所有元素的累计积

**以上这些函数，也可以接受参数`axis`，并且用法和上方的`mean,sum`基本一致。**

但是`argmin、argmax、cumsum、cumprod`不接受元组。

自由度这一点有待进一步确定。

#### 结合布尔型数组

以上这些方法还可以结合布尔型数组来使用。因为，在这些方法中，布尔值会被强制转换为0和1。

因此，`sum`可以对向量中的True值进行计数。如：

```python
In [39]: k = np.random.randn(50)

In [40]: np.sum(k > 0)
Out[40]: 27
```

除此外，对于布尔型数组，还有两个特别有用的方法：`any,all`。

> `any`用于测试数组（向量）中是否存在True。
> `all`用于确定数组中是否全是True。

```python
In [41]: arr = np.random.randn(10)

In [42]: arr
Out[42]:
array([-0.77695399, -1.04211228,  0.85516427, -0.04749936, -1.32314252,
       -0.59968117,  1.93582735,  0.08567928, -1.10820476,  1.2410364 ])

In [43]: arr1 = arr>0

In [44]: arr1
Out[44]: array([False, False,  True, False, False, False,  True,  True, False,  True], dtype=bool)

In [45]: arr1.any()
Out[45]: True

In [46]: arr1.all()
Out[46]: False
```
