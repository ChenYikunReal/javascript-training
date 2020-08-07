let sentence = "ABCDE, FGHIJK ^LMNO---PQRSTUVW**$@XYZA123aaa";
let var1 = "ABC", var2 = "123", var3 = "   123  ";

// charAt() => 返回指定索引位置的字符
console.log(sentence.charAt(2));
// 直接使用索引访问数组的方式也可以起到类似的效果
console.log(sentence[20]);
// charCodeAt() => 返回指定索引位置字符的Unicode值
console.log(sentence.charCodeAt(4));
console.log();

// concat() => 连接两个或多个字符串，返回连接后的字符串
console.log(var1.concat(var2));
console.log();

// fromCharCode() => 将 Unicode 转换为字符串
console.log(String.fromCharCode(65));
console.log();

// includes() => 查找字符串中是否包含指定的子字符串
console.log(sentence.includes("AB"));
console.log();

// indexOf() => 返回字符串中检索指定字符第一次出现的位置
console.log(sentence.indexOf("C"));
console.log(sentence.indexOf("1"));
// 跟着第一个走
console.log(sentence.indexOf("CD"));
console.log();

// lastIndexOf() => 返回字符串中检索指定字符最后一次出现的位置
console.log(sentence.lastIndexOf("A"));
console.log(sentence.lastIndexOf("B"));
console.log();

// localeCompare() => 用本地特定的顺序来比较两个字符串
// 如果stringObject小于target，则localeCompare()返回小于0的数。如果stringObject大于target，则该方法返回大于0的数。如果两个字符串相等，或根据本地排序规则没有区别，该方法返回0。
console.log(var1.localeCompare(var2));
console.log();

// match() => 找到一个或多个正则表达式的匹配
// 匹配成功则返回一个数组，该数组的第0个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本
// 验证失败返回null
console.log(var2.match("sss"));
// 验证数字 => [ '123', index: 0, input: '123', groups: undefined ]
console.log(var2.match("^[0-9]*$"));
// [ '123' ]
console.log(var2.match(/^[0-9]*$/g));
console.log();

// repeat() => 复制字符串指定次数，并将它们连接在一起返回
console.log(var2.repeat(3));
console.log();

// replace() => 替换与正则表达式匹配的子串
console.log(sentence.replace("ABC", "123"));
// 不影响原字符串
console.log(sentence);
console.log();

// search() => 检索与正则表达式相匹配的值
console.log(sentence.search("[0-9]"));
console.log();

// slice() => 提取字符串的片断，并在新的字符串中返回被提取的部分
// 后面的全都要
console.log(sentence.slice(15));
// 左闭右开
console.log(sentence.slice(15, 22));
console.log();

// split() => 把字符串分割为子字符串数组
console.log(sentence.split("*"));
console.log(sentence.split("\*\*"));
console.log(sentence.split("****"));
console.log();

// startsWith() => 查看字符串是否以指定的子字符串开头
console.log(sentence.startsWith("A"));
console.log(sentence.startsWith("Ab"));
console.log();

// substr() => 从起始索引号提取字符串中指定数目的字符
// 注意slice()需要的是始末index，substr()需要的是始index和长度
console.log(sentence.substr(15));
console.log(sentence.substr(15, 7));
console.log();

// substring() => 提取字符串中两个指定的索引号之间的字符
console.log(sentence.substring(15));
console.log(sentence.substring(15, 22));
console.log();

// toLocaleLowerCase() => 根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
console.log(sentence.toLocaleLowerCase());
console.log();

// toLocaleUpperCase() => 根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
console.log(sentence.toLocaleUpperCase());
console.log();

// toLowerCase() => 把字符串转换为小写
console.log(sentence.toLowerCase());
console.log();

// toString() => 返回字符串对象值
let num = 123;
console.log(num.toString());
// 进制radix加上
console.log(num.toString(16));
console.log(num == var2);
console.log(num === var2);
console.log(num.toString() === var2);
console.log();

// toUpperCase() => 把字符串转换为大写
console.log(sentence.toUpperCase());
console.log();

// trim() => 移除字符串首尾空白
console.log(sentence.length);
console.log(sentence.trim());
// 只管首尾
console.log(sentence.trim().length);
console.log(var3.length);
console.log(var3.trim());
// 只管首尾
console.log(var3.trim().length);
console.log(var3.trim() == num);
console.log();

// valueOf() => 返回某个字符串对象的原始值
console.log(var2.valueOf() === num);
