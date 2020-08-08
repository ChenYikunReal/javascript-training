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
- ==&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;->&emsp;不绝对等于
- ===&nbsp;&nbsp;&nbsp;->&emsp;绝对等于(值和类型均相等)
- !=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;->&emsp;绝对不等于
- !==&nbsp;&nbsp;&nbsp;&nbsp;->&emsp;不绝对等于(值和类型有一个不相等，或两个都不相等)

## JavaScript循环结构for...in
其实没啥可说的，很简单，就是java的增强for循环而已。
```java
int[] nums = {1, 2, 3, 4, 5, 6};

for (int i : nums) {
    // ...
}
```
```javascript
let nums = [1, 2, 3, 4, 5, 6];

for (let i in nums) {
    // ...
}
```

## JavaScript数据类型
- 6种不同的数据类型：
    - string
    - number
    - boolean
    - object
    - function
    - symbol
- 3种对象类型：
    - Object
    - Date
    Array
- 2个不包含任何值的数据类型：
    - null
    - undefined

## JavaScript类型转换
|原始值 | 转换为数字 | 转换为字符串 | 转换为布尔值 |
|:---:|:---:|:---:|:---:|
|false | `0` | "false" | false| 
|true | `1` | "true" | true| 
|0 | 0 | "0" | `false`| 
|1 | 1 | "1" | true| 
|"0" | 0 | "0" | `true`| 
|"000" | `0` | "000" | `true`| 
|"1" | 1 | "1" | true| 
|NaN | NaN | `"NaN"` | `false`| 
|Infinity | Infinity | `"Infinity"` | `true`| 
|-Infinity | -Infinity | `"-Infinity"` | `true`| 
|"" | `0` | "" | `false`| 
|"20" | 20 | "20" | `true`| 
|"JavaScript" | `NaN` | "JavaScript" | `true`| 
|[] | `0` | `""` | `true`| 
|[20] | `20` | `"20"` | `true`| 
|[10,20] | `NaN` | `"10,20"` | `true`| 
|["JavaScript"] | `NaN` | `"JavaScript"` | `true`| 
|["JavaScript","HTML"] | `NaN` | `"JavaScript,HTML"` | `true`| 
|function(){} | `NaN` | `"function(){}"` | `true`| 
|{} | `NaN` | `"[object Object]"` | `true`| 
|null | `0` | `"null"` | `false`| 
|undefined | `NaN` | `"undefined"` | `false`|

## JavaScript正则表达式修饰符
正则表达式修饰符可以在全局搜索中不区分大小写:

|修饰符 | 描述|
|:---:|:---:|
|i | 执行对大小写不敏感的匹配|
|g | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）|
|m | 执行多行匹配|

## JavaScript正则表达式模式

方括号用于查找某个范围内的字符：

|表达式 | 描述 |
|:---:|:---:|
|[abc] | 查找方括号之间的任何字符|
|[0-9] | 查找任何从 0 至 9 的数字|
|(x&#124;y) | 查找任何以&#124;分隔的选项|

元字符是拥有特殊含义的字符：

|元字符 | 描述|
|:---:|:---:|
|\d | 查找数字|
|\s | 查找空白字符|
|\b | 匹配单词边界|
|\uxxxx | 查找以十六进制数xxxx规定的Unicode字符|

量词:

|量词 | 描述|
|:---:|:---:|
|n+ | 匹配任何包含至少一个 n 的字符串|
|n* | 匹配任何包含零个或多个 n 的字符串|
|n? | 匹配任何包含零个或一个 n 的字符串|

## JavaScript异常
当JavaScript引擎执行JavaScript代码时，可能发生各种错误：
- 可能是语法错误，通常是程序员造成的编码错误或错别字
- 可能是拼写错误或语言中缺少的功能（可能由于浏览器差异）
- 可能是由于来自服务器或用户的错误输出而导致的错误
- 可能是由于许多其他不可预知的因素

当错误发生时，JavaScript引擎通常会停止，并生成一个错误消息，即JavaScript抛出一个错误。

