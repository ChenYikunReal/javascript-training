// 数值 => 字符串
String(1);
String(12.3);
String(12 + 3);
let var1 = 1;
var1.toString();
(123).toString();
(12+3).toString(2);

Number("123");
Number(" ");
Number("");
// NaN
Number("99 88");
Number.parseInt("123");
Number.parseFloat("12.3");

let y = "5";
// 5
let x = + y;
y = "John";
// NaN
x = + y;
