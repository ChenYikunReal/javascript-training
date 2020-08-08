let txt = "";

function message() {
    try {
        adddlert("Welcome guest!");
    } catch (err) {
        txt = "本页有一个错误。\n";
        txt += "错误描述：" + err.message + "\n";
        txt += "点击确定继续。\n";
        console.log(txt);
    }
}


function finallyFunction() {
    let message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if(x == "") {
            throw "值是空的";
        }
        if(isNaN(x)) {
            throw "值不是一个数字";
        }
        x = Number(x);
        if(x > 10) {
            throw "太大";
        }
        if(x < 5) {
            throw "太小";
        }
    }
    catch (err) {
        message.innerHTML = "错误: " + err + ".";
    }
    finally {
        document.getElementById("demo").value = "";
    }
}


function throwFunction() {
    let message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if(x == "") {
            throw "值为空";
        }
        if(isNaN(x)) {
            throw "不是数字";
        }
        x = Number(x);
        if(x < 5) {
            throw "太小";
        }
        if(x > 10) {
            throw "太大";
        }
    }
    catch (err) {
        message.innerHTML = "错误: " + err;
    }
}

message();
finallyFunction();
throwFunction();
