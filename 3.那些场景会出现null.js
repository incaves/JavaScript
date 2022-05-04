// null表示的是一个空指针的对象
console.log(typeof null); // objcet

// 1.定义变量时,可以初始化为null
var num = null;

// 2.无法获取指定的DOM元素 会是null
var main = document.querySelector('#main');
console.log(main); // main

// 3.通过正则表达式进行匹配,如果没有匹配成功,获取的也是null
const regex = /[A-Z]/; // 正则
const strText = 'hello china';
console.log(strText.match(regex)); // null
