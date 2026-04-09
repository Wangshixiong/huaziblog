---
date: 2019/03/15
issueTitle: "Python常见错误"
description: "python常见错误 pandas读取文件报错"
image: "/images/Happy.png"
heroImage: "/images/Happy.png"
tags:
  - "python"
  - "Data analysis"
---
<img src="/images/Happy.png" width="800" />

## python常见错误

### pandas读取文件报错



#### 文件不存在

```python
import pandas as pd
path = r'C:\Users\admin\Desktop\data\19\190103am9'
data = pd.DataFrame(pd.read_excel(path))
```

运行报错如下：

> FileNotFoundError: [Errno 2] No such file or directory:'C:\\Users\\admin\\Desktop\\data\\19\\中国人寿190103am9'

文件不存在那肯定是路径的问题。去看路径，哎，好像没问题啊，都是对的。

但是仔细看几遍，你就会发现，**文件路径的最终文件名没有加后缀。**

改成：

`path = r'C:\Users\admin\Desktop\data\19\190103am9.xlsx'`

成功。
