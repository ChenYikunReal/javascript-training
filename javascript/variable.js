// 数值常量
const var1 = 1;
const var2 = 2e3;
const var3 = 3.14;
console.log(var1);
console.log(var2);
console.log(var3);
console.log();

// 数值变量 弱类型语言
let var4 = 1;
console.log(var4);
var4 = 1.23;
console.log(var4);
console.log();

// 字符串 单引号双引号都可以
const var5 = "Sam";
console.log(var5);
const var6 = 'Sam';
console.log(var6);
console.log();

// 数组变量
let var7 = [1, 2, 3, 4, 5];
console.log(var7);
console.log();

// 直接定义对象 JSON字符串 类似于Python字典
let var8 = {"id": 1, "name": "Sam", grade: 100};
console.log(var8);
console.log();

// 函数对象
let var9 = function (a, b) {
    return a + b;
}
console.log(var9);
console.log(var9(1, 2))
console.log();

// 表达式对象值为结果
let var10 = 3 + 4 * 5;
console.log(var10);
console.log();

// 连续定义变量
let var11 = 1, var12 = 2;
console.log(var11);
console.log(var12);
// 连续赋值
var11 = var12 = 3;
console.log(var11);
console.log(var12);
console.log();

// 不能定义同名let变量 node编译报错
// let var11 = 1;
