// 两种写法
// console.log(typeof ) console.log(typeof ())

// 1.什么时候回返回undefined
console.log(typeof undefined); // undefined
console.log(typeof abc); // 没有声明的变量也是undefined
var sum;
console.log(typeof sum); // 没有值也会返回undefined

// 2.布尔值
var blo = true
console.log(typeof blo); // boolean

// 3.数字
console.log(typeof 55); // number

// 4.字符串
console.log(typeof 'abc'); // string
console.log(typeof ''); // string

// 5.函数
function fun() { }
console.log(typeof fun); // funcation
class fn { }
console.log(typeof fn); // funcation

// 6.对象
var obj = { a: 1 }
console.log(typeof obj); // object

// 7.数组
var arr = []
console.log(typeof arr); // objcet 
// ---发现没办法和对象的做一个区分

// 8.null
console.log(typeof null); // objcet

// typeof ()
var num = 123
console.log(typeof (num + 'hi')); // string
console.log(typeof 3 + 2); // number2
console.log(typeof (3 + 2)); // number
console.log(typeof 6 / 3); // NaN
console.log(typeof (6 / 3)); // number
console.log(typeof num + 'hello'); // numberhello