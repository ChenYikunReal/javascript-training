# JavaScript学习记录

基于Node.js<br/><br/>
![在这里插入图片描述](https://github.com/ChenYikunReal/node_training/blob/master/images/js-background.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)

## variable.js输出结果
```text
1
2000
3.14

1
1.23

Sam
Sam

[ 1, 2, 3, 4, 5 ]

{ id: 1, name: 'Sam', grade: 100 }
1
Sam

[Function: var9]
3

23

1
2
3
3

undefined

null

true false
false
```

## JavaScript关键词
| 关键词 | 关键词 | 关键词 | 关键词 |
|:---:|:---:|:---:|:---:|
|abstract | else | instanceof | super|
|boolean | enum | int | switch|
|break | export | interface | synchronized|
|byte | extends | let | this|
|case | false | long | throw|
|catch | final | native | throws|
|char | finally | new | transient|
|class | float | null | true|
|const | for | package | try|
|continue | function | private | typeof|
|debugger | goto | protected | var|
|default | if | public | void|
|delete | implements | return | volatile|
|do | import | short | while|
|double | in | static | with|

## JavaScript语句标识符
|语句 | 描述|
|:---:|:---:|
|break 	|用于跳出循环|
|catch 	|语句块，在 try 语句块执行出错时执行 catch 语句块|
|continue 	|跳过循环中的一个迭代|
|do ... while 	|执行一个语句块，在条件语句为 true 时继续执行该语句块|
|for 	|在条件语句为 true 时，可以将代码块执行指定的次数|
|for ... in 	|用于遍历数组或者对象的属性(对数组或者对象的属性进行循环操作)|
|function 	|定义一个函数|
|if ... else 	|用于基于不同的条件来执行不同的动作|
|return 	|退出函数|
|switch 	|用于基于不同的条件来执行不同的动作|
|throw 	|抛出(生成)错误 |
|try 	|实现错误处理，与 catch 一同使用|
|var 	|声明一个变量|
|while |	当条件语句为 true 时，执行语句块。|

## JavaScript对象
JavaScript对象是变量的容器 => JavaScript对象是键值对的容器。

JavaScript对象类似于：
- PHP 中的关联数组
- Python 中的字典
- C 语言中的哈希表
- Java 中的哈希映射
- Ruby 和 Perl 中的哈希表

## string-function.js输出结果
```text
C
-
69

ABC123

A

true

2
38
2

37
1

1

null
[ '123', index: 0, input: '123', groups: undefined ]
[ '123' ]

123123123

123DE, FGHIJK ^LMNO---PQRSTUVW**$@XYZA123aaa
ABCDE, FGHIJK ^LMNO---PQRSTUVW**$@XYZA123aaa

38

LMNO---PQRSTUVW**$@XYZA123aaa
LMNO---

[ 'ABCDE, FGHIJK ^LMNO---PQRSTUVW', '', '$@XYZA123aaa' ]
[ 'ABCDE, FGHIJK ^LMNO---PQRSTUVW', '$@XYZA123aaa' ]
[ 'ABCDE, FGHIJK ^LMNO---PQRSTUVW**$@XYZA123aaa' ]

true
false

LMNO---PQRSTUVW**$@XYZA123aaa
LMNO---

LMNO---PQRSTUVW**$@XYZA123aaa
LMNO---

abcde, fghijk ^lmno---pqrstuvw**$@xyza123aaa

ABCDE, FGHIJK ^LMNO---PQRSTUVW**$@XYZA123AAA

abcde, fghijk ^lmno---pqrstuvw**$@xyza123aaa

123
7b
true
false
true

ABCDE, FGHIJK ^LMNO---PQRSTUVW**$@XYZA123AAA

44
ABCDE, FGHIJK ^LMNO---PQRSTUVW**$@XYZA123aaa
44
8
123
3
true

false
```

## JavaScript比较运算符
- ==emsp;->emsp;不绝对等于
- ===emsp;->emsp;绝对等于(值和类型均相等)
- !=emsp;->emsp;绝对不等于
- !==emsp;->emsp;不绝对等于(值和类型有一个不相等，或两个都不相等)
