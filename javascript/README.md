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

## JavaScript保留字

- implements
- interface
- ~~let~~
- package
- private
- protected
- public
- static
- yield
- [链接](https://www.runoob.com/js/js-reserved.html)

"use strict";

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

强调：
- NaN的数据类型是number
- 数组(Array)的数据类型是object
- 日期(Date)的数据类型为object
- null的数据类型是object
- 未定义变量的数据类型为undefined


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

## JavaScript变量提升
- JavaScript中，函数及变量的声明都将被提升到函数的最顶部
- JavaScript中，变量可以在使用后声明，也就是变量可以先使用再声明
- JavaScript中，变量初始化不会提升
- var行，let不行
- 尽管有变量提升机制，但通常我们在每个作用域开始前声明这些变量

## JavaScript操作符typeof
```javascript
typeof "John"                 // 返回 string
typeof 3.14                   // 返回 number
typeof NaN                    // 返回 number
typeof false                  // 返回 boolean
typeof [1,2,3,4]              // 返回 object
typeof {name:'John', age:34}  // 返回 object
typeof new Date()             // 返回 object
typeof function () {}         // 返回 function
typeof myCar                  // 返回 undefined (如果 myCar 没有声明)
typeof null                   // 返回 object
```

## JavaScript属性constructor
```text
"John".constructor                 // 返回函数 String()  { [native code] }
(3.14).constructor                 // 返回函数 Number()  { [native code] }
false.constructor                  // 返回函数 Boolean() { [native code] }
[1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
{name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
new Date().constructor             // 返回函数 Date()    { [native code] }
function(){}.constructor           // 返回函数 Function(){ [native code] } 
```

## JavaScript关键字this
面向对象语言中this表示当前对象的一个引用，但在JavaScript中this不是固定不变的，它会随着执行环境的改变而改变：
- 在方法中，this 表示该方法所属的对象
- 如果单独使用，this表示全局对象
- 在函数中，this表示全局对象
- 在函数中，在严格模式下，this是未定义的(undefined)
- 在事件中，this表示接收事件的元素
- 类似call()和apply()方法可以将this引用到任何对象

## JavaScriptのnull+undefined
![在这里插入图片描述](https://github.com/ChenYikunReal/node_training/blob/master/images/null-undefined.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)

## JavaScript严格模式
- 严格模式下不能使用未声明的变量
- 严格模式通过在脚本或函数的头部添加`"use strict";`表达式来声明
- 在函数内部声明是局部作用域时，只在函数内使用严格模式
- 为什么使用严格模式:
    - 消除语法的一些不合理和不严谨之处，减少一些怪异行为
    - 消除代码运行的一些不安全之处，保证代码运行的安全
    - 提高编译器效率，增加运行速度
    - 为未来新版本的Javascript做好铺垫
- `"use strict"指令只允许出现在脚本或函数的开头`

## JavaScript变量作用域
ES6之前只有：
- 全局变量(在函数外声明的变量)
- 函数内的局部变量(在函数内声明的变量)
ES6新增：
- 块级作用域变量(`let`)

```javascript
var x = 10;
// 这里输出 x 为 10
{ 
    var x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 2
```
```javascript
var x = 10;
// 这里输出 x 为 10
{ 
    let x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 10
```

### 辨析`var`和`let`
- 使用`var`关键字声明的全局作用域变量`属于`window对象
- 使用`let`关键字声明的全局作用域变量`不属于`window对象
- 使用`var`关键字声明的变量在任何地方都可以修改
- 在相同的作用域或块级作用域中，不能使用`let`关键字来重置`var`关键字声明的变量
- 在相同的作用域或块级作用域中，不能使用`let`关键字来重置`let`关键字声明的变量
- 在相同的作用域或块级作用域中，不能使用`var`关键字来重置`let`关键字声明的变量
- `let`关键字在不同作用域，或不同块级作用域中是可以重新声明赋值的

## JavaScript关键词const
都说const定义的是常量，但还是有些说法的。
### 辨析`const`和`var`：
- 相似点
    - 二者都是块级作用域
    - 都不能和它所在作用域内的其他变量或函数拥有相同的名称
- 不同点
    - `const`声明的常量必须初始化，而`let`声明的变量不用
    - `const`定义常量的值不能通过再赋值修改，也不能再次声明。而`let`定义的变量值可以修改
### const的本质
const定义的变量并非常量，并非不可变，它定义了一个常量引用一个值。<br/>
使用const定义的对象或者数组，其实元素是可变的。<br/>
但是我们不能对常量对象重新赋值。

## JavaScript关键词void
void()仅仅是代表不返回任何值，但是括号内的表达式还是要运行。

```html
<!--阻止链接跳转，URL不会有任何变化-->
<a href="javascript:void(0)" rel="nofollow ugc">点击此处</a>

<!--虽然阻止了链接跳转，但URL尾部会多个#，改变了当前URL。（# 主要用于配合 location.hash）-->
<a href="#" rel="nofollow ugc">点击此处</a>

<!--同理，# 可以的话，? 也能达到阻止页面跳转的效果，但也相同的改变了URL。（? 主要用于配合 location.search）-->
<a href="?" rel="nofollow ugc">点击此处</a>

<!--Chrome 中即使 javascript:0; 也没变化，firefox中会变成一个字符串0-->
<a href="javascript:0" rel="nofollow ugc">点击此处</a>
```

## JavaScript异步编程
![在这里插入图片描述](https://github.com/ChenYikunReal/node_training/blob/master/images/js-async.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)
<br/><br/>
异步的通俗解释 => 异步就是从主线程发射一个子线程来完成任务

### 异步编程的使用时机
在前端编程中（甚至后端有时也是这样），我们在处理一些简短、快速的操作时，例如计算 1 + 1 的结果，往往在主线程中就可以完成。主线程作为一个线程，不能够同时接受多方面的请求。所以，当一个事件没有结束时，界面将无法处理其他请求。<br/>
现在有一个按钮，如果我们设置它的 onclick 事件为一个死循环，那么当这个按钮按下，整个网页将失去响应。<br/>
为了避免这种情况的发生，我们常常用子线程来完成一些可能消耗时间足够长以至于被用户察觉的事情，比如读取一个大文件或者发出一个网络请求。因为子线程独立于主线程，所以即使出现阻塞也不会影响主线程的运行。但是子线程有一个局限：一旦发射了以后就会与主线程失去同步，我们无法确定它的结束，如果结束之后需要处理一些事情，比如处理来自服务器的信息，我们是无法将它合并到主线程中去的。<br/>
为了解决这个问题，JavaScript 中的异步操作函数往往通过回调函数来实现异步任务的结果处理。

### 异步编程与回调函数
说到异步编程，就不能不提回调函数。

回调函数就是一个函数，它是在我们启动一个异步任务的时候就告诉它：等你完成了这个任务之后要干什么。这样一来主线程几乎不用关心异步任务的状态了，他自己会善始善终。

```javascript
setTimeout(function () {
    document.getElementById("demo").innerHTML="Test!";
}, 3000);
```
setTimeout()双参数：
1. 回调函数对象
2. 等待的毫秒数

### Promise相关Q&A
- Q: then、catch 和 finally 序列能否顺序颠倒？<br/>
A: 可以，效果完全一样。但不建议这样做，最好按 then-catch-finally 的顺序编写程序。
- Q: 除了 then 块以外，其它两种块能否多次使用？<br/>
A: 可以，finally 与 then 一样会按顺序执行，但是 catch 块只会执行第一个，除非 catch 块里有异常。所以最好只安排一个 catch 和 finally 块。
- Q: then 块如何中断？<br/>
A: then 块默认会向下顺序执行，return 是不能中断的，可以通过 throw 来跳转至 catch 实现中断。
- Q: 什么时候适合用 Promise 而不是传统回调函数？<br/>
A: 当需要多次顺序执行异步操作的时候，例如，如果想通过异步方法先后检测用户名和密码，需要先异步检测用户名，然后再异步检测密码的情况下就很适合 Promise。
- Q: Promise 是一种将异步转换为同步的方法吗？<br/>
A: 完全不是。Promise 只不过是一种更良好的编程风格。
- Q: 什么时候我们需要再写一个 then 而不是在当前的 then 接着编程？<br/>
A: 当你又需要调用一个异步任务的时候。

## JavaScript函数
1. 分号是用来分隔可执行JavaScript语句。由于函数声明不是一个可执行语句，所以不以分号结束。
2. 闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。直观的说就是形成一个不销毁的栈环境。
3. 因为函数也有提升机制(类似于变量提升机制)，所以函数可以在声明之前调用。

## JavaScript全局变量与window对象属性的差别
1. 全局变量不能通过`delete`操作符删除；而`window`属性上定义的变量可以通过`delete`删除
2. 访问未声明的变量会抛出错误，但是通过查询`window`对象，可以知道某个可能未声明的变量是否存在
3. 有些自执行函数里面的变量，想要外部也访问到的话，在`window`对象上直接定义属性

## JavaScript的Navigator注意事项
来自`navigator`对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：
- navigator数据可被浏览器使用者更改
- 一些浏览器对测试站点会识别错误
- 浏览器无法报告晚于浏览器发布的新操作系统

## JavaScript弹窗
- 警告框：`window.alert("sometext");`
- 确认框：`window.confirm("sometext");`
- 提示框：`window.prompt("sometext","defaultvalue");`

## JavaScript计时
- setInterval() : 间隔指定的毫秒数不停地执行指定的代码<br/>`window.setInterval("javascript function",milliseconds);`
- setTimeout() : 在指定的毫秒数后执行指定代码<br/>`window.setTimeout("javascript function", milliseconds);`
- clearInterval() : 停止setInterval()方法执行的函数代码<br/>`window.clearInterval(intervalVariable)`

## JavaScript资料补充[菜鸟教程]
- [JavaScript使用误区小结](https://www.runoob.com/js/js-mistakes.html)
- [JavaScript代码规范](https://www.runoob.com/js/js-conventions.html)
- [JavaScript实例](https://www.runoob.com/js/js-examples.html)
- [JavaScript参考手册](https://www.runoob.com/jsref/jsref-tutorial.html)
