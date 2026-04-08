---
date: 2019/03/07
issueTitle: "SQL的学习"
description: "***SQL的学习之路，主要参考资料是：*** SQL必知必会 W3school的SQL简介"
image: "https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-99088ca1862965fb.png"
heroImage: "https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-99088ca1862965fb.png"
tags:
  - "Data analysis"
  - "SQL"
categories:
  - "数据分析"
---
***SQL的学习之路，主要参考资料是：***

[SQL必知必会](http://www.forta.com/books/)
[W3school的SQL简介](http://www.w3school.com.cn/sql/sql_intro.asp)



------

*右击，新标签页即可打开原图*

------

操作使用的数据库为Access及MySQL。

数据采用的是[SQL必知必会中的数据](http://www.forta.com/books/0672336073/)

（最下方可以下载数据）。其有5个表，表的关系如下：

![表的关系](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-99088ca1862965fb.png)

看不清的图片：右击新标签页打开即可。

## SQL基础

**![基础](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-222314eb1f925db6.png)**

## 检索数据

**![检索数据](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-c1c028d7564d3da8.png)**

## 排序检索数据

**![排序检索数据](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-c693e117d6abcc60.png)**

## 过滤数据

**![过滤数据](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-51aeffe488410f0a.png)**

## 高级过滤

**![高级过滤](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-c270a132adb7e1d8.png)**

## 通配符过滤

**![通配符过滤](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-9e7cba4ab00b6321.png)**

## 创建计算字段

**![创建计算字段](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-b2f793a6d398268a.png)**

## 函数特性

**![函数特性](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-f9ba72858e528097.png)**

## 函数

**![函数](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-74c41fb49ee70c67.png)**

## 汇总数据

**![汇总数据](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-df74f29143b75438.png)**

## 分组数据

**![分组数据](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-a693680c78b33f85.png)**

------

***以上测试均在Access数据库中进行，以下于MySQL中进行，通过workbench（版本6.3）操作。***

------

## 子查询

**这里说白了就是select语句嵌套，如`select * from （select cust_name from customers）`**

**![子查询](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-d014cba6ca420003.png)**

## 联结

*[笛卡尔积](https://zh.wikipedia.org/wiki/%E7%AC%9B%E5%8D%A1%E5%84%BF%E7%A7%AF)*

![联结](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-90c8c6da8719925a.png)

## 高级联结

![高级联结](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-f451dda80331d3da.png)

***如果3个以上的表，那怎样联结？***

1. 3个

~~~sql 
 use test;
 select cust_name,cust_contact
 from (customers 
 inner join orders
 on customers.cust_id = orders.cust_id)
 inner join orderitems 
 on orderitems.order_num = orders.order_num;
~~~

语法可以概括为：

***`FROM (表1 INNER JOIN 表2 ON 表1.字段号=表2.字段号) INNER JOIN 表3 ON 表1.字段号=表3.字段号`***

2. 同理，4个表可以概括为：

***`FROM ((表1 INNER JOIN 表2 ON 表1.字段号=表2.字段号) INNER JOIN 表3 ON 表1.字段号=表3.字段号) INNER JOIN 表4 ON Member.字段号=表4.字段号`***

## 组合查询

![组合查询](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-2f00deb32b8b47bb.png)

****
 *如果代码块阅读困难，可移步[博客园](http://www.cnblogs.com/sunshinewang/p/6789419.html)*
****

***关于规则中列顺序，前后必须一致。***否则会出现如下情况：

```SQL
 1 use test; 
 2 select cust_name ,cust_email,cust_contact
 3 from customers
 4 where cust_state in ('IL','IN','MI')
 5 union all
 6 select cust_name,cust_contact,cust_email
 7 from customers
 8 where cust_name = 'Fun4All'
```

返回结果为：

![返回结果](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-8056401714986ffe.png)

列的顺序一致，才会返回正确结果

```SQL
 1 use test;
 2 select cust_name ,cust_email,cust_contact
 3 from customers
 4 where cust_state in ('IL','IN','MI')
 5 union all
 6 select cust_name,cust_email,cust_contact
 7 from customers8 where cust_name = 'Fun4All'
```


结果：

![返回结果](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-322eef5f933e81f2.png)

## 插入数据

***INSERT SELECT:***

它可以将SELCET语句结果插入表中，在***某种意义上可以完成表的复制***。
如：

```SQL
 1 USE test;#使用数据库test 
 2 CREATE TABLE CustNew 
 3 ( 
 4 cust_id  char(10)   NOT NULL ,
 5 cust_name  char(50)   NOT NULL ,
 6 cust_address  char(50)  NULL , 
 7 cust_city  char(50)  NULL ,
 8 cust_state  char(5)  NULL , 
 9 cust_zip  char(10)  NULL ,
10 cust_country  char(50)  NULL ,
11 cust_contact  char(50)  NULL ,
12 cust_email  char(255)  NULL 
13 );#创新新表 
14 INSERT INTO CustNew
15 (
16 cust_id,
17 cust_name,
18 cust_address,
19 cust_city,
20 cust_state,
21 cust_zip,
22 cust_country,
23 cust_contact,
24 cust_email
25 )
26 SELECT 
27 cust_id,
28 cust_name,
29 cust_address,
30 cust_city,
31 cust_state,
32 cust_zip,
33 cust_country,
34 cust_contact,
35 cust_email
36 FROM customers;#将customers表的数据插入新表alter
37 SELECT * FROM CustNew;
```

返回结果如下：
 ![结果](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-96aaf2720fa79e88.png)

 而如果反过来用，大概就是：

```SQL
 insert into
 customers 
 （列1，列2，......）
 select
 列1，列2，.....
 from custnew
```

即可完成将表custnew中的数据全部插入customers，这也完成了一条insert插入多条数据。

***通常，一条INSERT 语句，只能插入一行数据，要插入多行，就必须执行多个INSERT，但是， INSERT SELECT 是个例外。***

以上方法的复制，实际上是重新在数据库中创建了一个新表。

***SELECT INTO：***

这种方法，可以在SQL语句运行中创建一个表，并将一个表复制到这个全新的表。

***我们可以在实验新的SQL语句前，用其进行复制，这样就不影响到实际数据。***
如：

```SQL
 USE test;#使用数据库
 CREATE TABLE Cucopy as
 SELECT * FROM customers;#复制
 SELECT * FROM Cucopy;
```

 返回结果，与上表一致。

![插入](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-45f6e82846597d13.png)

## 更新和删除

![更新和删除](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-c9a8f39f57480ec5.png)



## 创建和操纵表

这里中点说一下创建表时，指定默认值的问题。一般来说，创建表时，我们需要指定列的数据类型、是否NULL列。关于NULL值具体说明请看下图。

默认值要是用的好，可以省却我们很多时间。

因其经常用于指定默认日期，这里以日期为例。

首先，在MySQL中内建的日期函数：

| 函数                                                         | 描述                                |
| ------------------------------------------------------------ | ----------------------------------- |
| [NOW()](http://www.w3school.com.cn/sql/func_now.asp)         | 返回当前的日期和时间                |
| [CURDATE()](http://www.w3school.com.cn/sql/func_curdate.asp) | 返回当前的日期                      |
| [CURTIME()](http://www.w3school.com.cn/sql/func_curtime.asp) | 返回当前的时间                      |
| [DATE()](http://www.w3school.com.cn/sql/func_date.asp)       | 提取日期或日期/时间表达式的日期部分 |
| [EXTRACT()](http://www.w3school.com.cn/sql/func_extract.asp) | 返回日期/时间按的单独部分           |
| [DATE_ADD()](http://www.w3school.com.cn/sql/func_date_add.asp) | 给日期添加指定的时间间隔            |
| [DATE_SUB()](http://www.w3school.com.cn/sql/func_date_sub.asp) | 从日期减去指定的时间间隔            |
| [DATEDIFF()](http://www.w3school.com.cn/sql/func_datediff_mysql.asp) | 返回两个日期之间的天数              |
| [DATE_FORMAT()](http://www.w3school.com.cn/sql/func_date_format.asp) | 用不同的格式显示日期/时间           |

创建数据库t2,插入表。如下：

```SQL
 CREATE DATABASE t2;
 USE t2;
 CREATE TABLE test
 (
 id int(5) NOT NULL,noedate timestamp NOT NULL DEFAULT 
 current_timestamp()
 );```

调用如下：

​```SQL
 USE t2;
 INSERT INTO test(id)values(1);
 SELET * FROM test;
```

返回结果：

![返回结果](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-06833413f120003a.png)

以下SQL不合法：

- `time_d time NOT NULL DEFAULT CURTIME(), `
- `date_e date NOT NULL DEFAULT CURDATE(),`
- `datetime_f datetime NOT NULL DEFAULT NOW(),` 


- DATETIME类型：NOW()函数以'YYYY-MM-DD HH:MM:SS'返回当前的日期时间，可以直接存到DATETIME字段中。不支持使用系统默认值。 
- DATE类型：CURDATE()以'YYYY-MM-DD'的格式返回今天的日期，可以直接存到DATE字段中。不支持使用系统默认值。 
- TIME类型：CURTIME()以'HH:MM:SS'的格式返回当前的时间，可以直接存到TIME字段中。不支持使用系统默认值。 
  常见错误：

```Sql
CREATE TABLE dnt_forums
(
 aa int NOT NULL DEFAULT (''), 
 bb date NOT NULL DEFAULT (getdate()), 
 cc char(50) NOT NULL DEFAULT (null) 
）；
```


+ aa 是 int 类型，默认值也得是整型，并且default后边不要（）括号 。
+ bb date类型不支持使用系统默认值，改成timestamp，能过now()取系统时间 。
+ cc 已经不允许为空（not null）所以不能默认为 null ，可以改成空字符串 。
  修改：

```SQL
 CREATE TABLE dnt_forums
 (
  aa int NOT NULL DEFAULT 2,
 bb timestamp NOT NULL DEFAULT now(),
 cc char(50) NOT NULL DEFAULT ''
 ); 
```

这个日期问题，依然有很多不太明白的地方，以后学习过程碰到继续解决。
主要参考：

[脚本之家](http://www.jb51.net/article/33570.htm)、[博客](http://blog.csdn.net/justdb/article/details/7965490)

![创建和操纵表](https://wenhuatengimg.oss-cn-beijing.aliyuncs.com/Blog/2151277-3e42c57a43b77707.png)

重命名表：

`RENAME TABLE cucopy1 TO hi;`


 删除表：

`DROP TABLE hi;`



>  **待续**
