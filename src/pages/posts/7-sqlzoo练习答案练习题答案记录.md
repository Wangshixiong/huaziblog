---
date: 2019/03/14
issueTitle: "sqlzoo练习答案练习题答案记录"
description: "这是关于在一个**SQL学习网站的练习题答案记录：SQL教程**"
image: "/images/Happy.png"
heroImage: "/images/Happy.png"
tags:
  - "SQL"
  - "Data analysis"
categories:
  - "数据分析"
---
<img src="/images/Happy.png" width="800" />

这是关于在一个**SQL学习网站的练习题答案记录：[SQL教程](https://sqlzoo.net/wiki/SQL_Tutorial/zh)**



# SQL基础

## 由一些简单的查询开始

这里的默认表格为WORLD表格 。

| name        | continent | area    | population | gdp          |
| ----------- | --------- | ------- | ---------- | ------------ |
| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
| Albania     | Europe    | 28748   | 2831741    | 12960000000  |
| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
| Andorra     | Europe    | 468     | 78115      | 3712000000   |
| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |
| ....        |           |         |            |              |

> name:国家名称   continent:大洲   area:面积    population:人口     gdp:国内生产总值

----

**SQL对大小写不敏感。**

1. **以显示德国德国的人口。**

```sql
SELECT population 
FROM world
WHERE name = 'Germany'
```

2. **查询面积为5,000,000以上平方公里的国家，对每个国家显示她的名字和人均国内生产总值。**（`gdp/population`）

```sql
SELECT name, gdp/population 
FROM world
WHERE area > 5000000
```

3. **查询“Ireland 爱尔兰”,“Iceland 冰岛”,“Denmark 丹麦”的国家名称和人口。**

```sql 
SELECT name, population 
FROM world
WHERE name IN ('Ireland', 'Iceland', 'Denmark');--IN 操作符允许我们在 WHERE 子句中规定多个值
```

4. **面积为200,000及250,000之间的国家名称和该国面积。**

```sql 
SELECT name, area 
FROM world
WHERE area 
BETWEEN 200000 AND 250000;
--操作符 BETWEEN ... AND 会选取介于两个值之间的数据范围。这些值可以是数值、文本或者日期。
```

## SELECT国家名字

| name        | continent |
| ----------- | --------- |
| Afghanistan | Asia      |
| Albania     | Europe    |
| Algeria     | Africa    |
| Andorra     | Europe    |
| Angola      | Africa    |
| ....        |           |

> name:国家名称	continent:大洲

---

**SQL 通配符**

在搜索数据库中的数据时，SQL 通配符可以替代一个或多个字符。

SQL 通配符必须与 LIKE 运算符一起使用。

在 SQL 中，可使用以下通配符：

| 通配符                     | 描述                       |
| -------------------------- | -------------------------- |
| %                          | 替代一个或多个字符         |
| _                          | 仅替代一个字符             |
| [charlist]                 | 字符列中的任何单一字符     |
| [^charlist]或者[!charlist] | 不在字符列中的任何单一字符 |

---

1. **找出以Y为开首的国家**。

```sql
SELECT name 
FROM world
WHERE name LIKE 'Y%'
--LIKE 操作符用于在 WHERE 子句中搜索列中的指定模式。
```

2. **找出以Y为结尾的国家。**

```sql
SELECT name 
FROM world
WHERE name LIKE '%Y'
```

3. **找出包含字母x的所有国家。**

```sql
SELECT name 
FROM world
WHERE name 
LIKE '%x%'
```

4. **找出名字以land结尾的所有国家。**

```sql
SELECT name 
FROM world
WHERE name 
LIKE '%land'
```

5. **查找以C开头，ia结尾的所有国家。**

```sql
SELECT name 
FROM world
WHERE name 
LIKE 'C%ia'
```

6. **找出名字包含双oo的国家**

```sql
SELECT name 
FROM world
WHERE name 
LIKE '%oo%'
```

7. **找出名字包含三个或三个以上a的国家**

```sql
SELECT name 
FROM world
WHERE name 
LIKE '%a%a%a%'
```

8. **找出名字第二个字母为t的国家**

```sql
SELECT name 
FROM world
WHERE name 
LIKE '_t%'
ORDER BY name
```

9. **找出所有国家,其名字都有两个字母 o,被另外两个字母相隔着。**

```sql
SELECT name 
FROM world
WHERE name 
LIKE '%o__o%'
```

10 . **找出名字是4个字母的国家。**

```sql
SELECT name 
FROM world
WHERE name 
LIKE '____'
```

11. **找出首都和国家名字相同的国家。**

```sql
SELECT name
FROM world
WHERE name = capital; --可以加空格
```

12. **“Mexico 墨西哥”的首都是”Mexico City”。找出所有国家名字,其首都是国家名字加上”City”。**

```sql
SELECT name
FROM world
WHERE capital = concat(name,' City');--注意City前面的空格
```

13. **找出所有首都和其国家名字,而首都要有国家名字中出現。**

```sql
SELECT capital,name
FROM world
WHERE capital 
LIKE concat('%',name,'%')
```

14. **找出所有首都和其国家名字,而首都是国家名字的延伸。**
   **你愿显示 Mexico City,因它比其国家名字 Mexico 長。**
   **你不愿显示 Luxembourg,因它的首都和国家名相是相同的。**

```sql
SELECT name,capital
FROM world
WHERE capital 
LIKE concat(name,'%')  --注意审题，国家名字的延伸，那么国家名字应该在最前面。
AND capital != name;--这里也可以用"<>"
```

15. **"Monaco-Ville"是合併國家名字 "Monaco" 和延伸詞"-Ville".**

    **顯示國家名字，及其延伸詞，如首都是國家名字的延伸。**

    **你可以使用SQL函數 [REPLACE](https://sqlzoo.net/wiki/REPLACE) 或 MID。**
```sql
SELECT name,replace(capital, name, '') 
FROM world 
WHERE capital 
LIKE concat(name,'%_')
/*replace函数定义
replace(original-string，search-string，replace-string)
original-string： 被搜索的字符串。可为任意长度。
search-string： 要搜索并被 replace-string 替换的字符串。该字符串的长度不应超过 255 个字节。如果 search-string 是空字符串，则按原样返回原始字符串。
replace-string： 该字符串用于替换 search-string。可为任意长度。如果 replacement-string 是空字符串，则删除出现的所有 search-string。
说明
用字符串表达式3替换字符串表达式1中出现的所有字符串表达式2的匹配项。返回新的字符串。
如果有某个参数为 NULL，此函数返回 NULL。
*/
```

## SQLZOO练习题之SELECT from WORLD Tutorial/zh

**查询世界**

-----

| name        | continent | area    | population | gdp          |
| ----------- | --------- | ------- | ---------- | ------------ |
| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
| Albania     | Europe    | 28748   | 2831741    | 12960000000  |
| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
| Andorra     | Europe    | 468     | 78115      | 3712000000   |
| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |
| ...         |           |         |            |              |

> name:国家名称	continent:大洲	area:面积	population:人口	gdp:国内生产总值
>
> **[表格说明](https://sqlzoo.net/wiki/Read_the_notes_about_this_table.) **

----

1. **查询大于2亿人口的国家。*

```sql
SELECT name 
FROM world
WHERE population>200000000;
```

2. **查询大于2亿人口的国家，及国内生产总值**

```sql
SELECT name,gdp/population
FROM world
WHERE population > 200000000;
```

3. **查询在South America南美洲的国际爱和以百万为单位的人口數**

```sql
SELECT name,population / 1000000
FROM world
WHERE continent = 'South America';--别忘记单引号，代表字符串
```

4. **查询法国，德国，意大利(France, Germany, Italy)的国家名称和人口**

```sql
SELECT name,population
FROM world
WHERE name in ('France', 'Germany', 'Italy')--别忘记单引号，代表字符串
```

5. **查询包含单词“United”的国家**

```sql
SELECT name
FROM world
WHERE name
LIKE '%United%';
```

6. **查询大国（面积大于300万平方公里或者人口大于2.5亿）的名字，面积，人口**

```sql
SELECT name,population,area
FROM world
WHERE area > 3000000 
OR population > 250000000;
```

7. **美国，印度，中国(USA, India, China)是人口又大，同时面积又大的國家。排除这些国家。**

   **顯示以人口或面积为大国的國家，但不能同时面积大且人口多的国家名称，人口，面积。**

```sql
SELECT name,population,area
FROM world
WHERE (area > 3000000 AND population < 250000000)
OR (area < 3000000 AND population > 250000000);
```

8. **查询并显示南美洲国家以百万计人口和10亿计gdp（保留小数点2位）。**

```sql
SELECT name,ROUND(population/1000000,2),ROUND(gdp/1000000000,2)
FROM world
WHERE continent = 'South America';
/*ROUND 函数用于把数值字段舍入为指定的小数位数。
SELECT ROUND(column_name,要保留的位数) FROM table_name*/
```

> [**ROUND() 函数**](http://www.w3school.com.cn/sql/sql_func_round.asp)

9. **查询万亿元国内生产总值国家的人均国内生产总值，四捨五入到最近的$ 1000。**

```sql
SELECT name,ROUND(gdp/population,-3)
FROM world
WHERE gdp > 1000000000000;
```

> 继续使用round函数。因为留一位小数1，不留小数是0，-1就好比153不留3，直接四舍五入150，同样-2就是153，不留53，直接四舍五入200。

10. **对于以N开头的国家，请显示名称 - 但用澳大拉西亚代替大洋洲。**

```sql
SELECT name, 
       CASE WHEN continent='Oceania' THEN 'Australasia'  ELSE continent END
FROM world
WHERE name LIKE 'N%'
```

这里用到了`case`函数首先要注意`case`函数和`name`之间，需要有一个逗号。

> **[SQL Case when 的使用方法](https://www.jianshu.com/p/cbb05073931f):**
>
> Case具有两种格式：简单Case函数和Case搜索函数。
>
> ```sql
> /*简单Case函数*/
> CASE sex
> WHEN '1' THEN '男'
> WHEN '2' THEN '女'
> ELSE '其他' END
> 
> /*Case搜索函数*/
> CASE WHEN sex = '1' THEN '男'
> WHEN sex = '2' THEN '女'
> ELSE '其他' END
> ```
>
> 这两种方式，可以实现相同的功能。简单Case函数的写法相对比较简洁，但是和Case搜索函数相比，功能方面会有些限制，比如写判断式。
> 还有一个需要注意的问题，Case函数只返回第一个符合条件的值，剩下的Case部分将会被自动忽略。

11. **查找国家和大洲，但是用Eurasia代替Europe和Asia; 用America代替在 North America 或者South America或者Caribbean的国家. 且国家名字要以A或者B开头。**

```sql
SELECT name,
      CASE WHEN continent = 'Europe' THEN  'Eurasia'  
           WHEN continent = 'Asia' THEN  'Eurasia'
           WHEN  continent in ('North America','South America','Caribbean') THEN 'America'
           ELSE continent END
FROM world
WHERE name  LIKE 'A%'  OR   name  LIKE  'B%';
```

12. **Put the continents right...**

    - **Oceania becomes Australasia**
    - **Countries in Eurasia and Turkey go to Europe/Asia**
    - **Caribbean islands starting with 'B' go to North America, other Caribbean islands go to South America**

    **Show the name, the original continent and the new continent of all countries.**

```sql
SELECT name, continent, 
		CASE 
		WHEN continent = 'Oceania' THEN 'Australasia'
		WHEN continent IN ('Eurasia', 'Turkey') THEN 'Europe/Asia'
		WHEN continent = 'Caribbean' AND name LIKE 'B%' THEN 'North America'
		WHEN continent = 'Caribbean' THEN 'South America'
		ELSE continent END
FROM world
ORDER BY name;
```

## 查询诺贝尔奖

1. **查询1950年诺贝尔奖的所有资料。**

```sql
SELECT yr, subject, winner
FROM nobel
WHERE yr = 1950;
```

2. **查询1962年谁获得了诺贝尔文学奖(Literature)。**

```sql
SELECT winner
FROM nobel
WHERE yr = 1962  AND subject = 'Literature';
```

3. **查询爱因斯坦”('Albert Einstein') 的获奖年份和奖项**

```sql
SELECT yr,subject
FROM nobel
WHERE winner = 'Albert Einstein';
```

4. **查询2000年及以后的诺贝尔奖和平奖（Peace）获得者**

```sql
SELECT winner
FROM nobel
WHERE yr >= 2000 AND subject = 'Peace';
```

5. **查询1980到1989（包含首尾）的诺贝尔文学奖获得者的所有资料**

```SQL
SELECT yr,subject,winner
FROM nobel
WHERE (yr >= 1980 AND yr <=1989) AND subject = 'Literature';	
```

6. **查询总统获得者的所有细节--Theodore Roosevelt；Woodrow Wilson； Jimmy Carter；**

```sql
SELECT * 
FROM nobel
WHERE winner IN ('Theodore Roosevelt',
                  'Woodrow Wilson',
                  'Jimmy Carter')
```

7. **顯示名字為John 的得獎者。 (注意:外國人名字(First name)在前，姓氏(Last name)在後)**

```SQL
SELECT winner
FROM nobel
WHERE winner LIKE 'John%';
```

8. **顯示1980年物理學(physics)獲獎者，及1984年化學獎(chemistry)獲得者**

```sql
SELECT *
FROM nobel
WHERE   (yr = 1980 AND subject = 'physics') 
		OR 
		(yr = 1984 AND subject = 'chemistry');
```

9. **查看1980年獲獎者，但不包括化學獎(Chemistry)和醫學獎(Medicine)**

```sql
SELECT *
FROM nobel
WHERE   yr = 1980 
		AND 
		subject NOT IN  ('Chemistry','Medicine');
```

| 运算符                     | 语法                                                         |
| -------------------------- | ------------------------------------------------------------ |
| SQL **IN**运算符的语法     | SELECT column_name1，column_name2等 FROM table_name  WHERE column_name1 IN（value1，value2，etc）; |
| SQL **NOT IN**运算符的语法 | SELECT column_name1，column_name2等 FROM table_name  WHERE column_name1 NOT IN（value1，value2，etc）; |

10. **顯示早期的醫學獎(Medicine)得獎者（1910之前，不包括1910），及近年文學獎(Literature)得獎者（2004年以後，包括2004年）。**

```sql
SELECT *
FROM nobel
WHERE 
(yr < 1910 AND subject = 'Medicine')
OR
(yr >= 2004 AND subject = 'Literature');
```
