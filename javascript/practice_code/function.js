var num = 1;

function f() {
    return ++num;
}

console.log(num = f());
console.log(num);

// 自调用函数
(function () {
    let x = "Hello!";
})();

// 箭头函数
// ES5
var x = function(x, y) {
    return x * y;
}
// ES6
const x = (x, y) => x * y;

