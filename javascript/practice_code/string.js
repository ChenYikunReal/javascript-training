var carname = "Volvo XC60";
var carname = 'Volvo XC60';

var character = carname[7];

var answer = "It's alright";
var answer = "He is called 'Johnny'";
var answer = 'He is called "Johnny"';

var x = 'It\'s alright';
var y = "He is called \"Johnny\"";

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

// 字符串也可以被定义为对象
var x = "John";
var y = new String("John");
typeof x // 返回 String
typeof y // 返回 Object
// 不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用
var x = "John";
var y = new String("John");
console.log(x === y) // 结果为 false，因为 x 是字符串，y 是对象
