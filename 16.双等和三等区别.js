// 1. 双等运算符在比较时 会进行隐式类型的转换 再进行值的比较(比较的是值)
// 1. 三等运算符在比较时 会优先比较数据类型 如果数据类型相同的话 再进行比较 如果不相同直接放回false(比较的是内存地址)
console.log(1 === '1'); // false
console.log('hello' === new String('hello')); // false
console.log(1 === true); // false
// 2. NaN 任何值都和NaN不相等
console.log(NaN === NaN); // false

// 3.undefined和null
console.log(undefined === undefined); // true
console.log(null === null); // true
console.log(undefined === null); // false

// 4.三等比较的是内存地址
var a = []
var b = a
console.log(a === b); // true
var c = []
console.log(a === c); // false
console.log(new String('hello') === new String('hello')); // false

// 双等运算符 会做隐式类型转换 
console.log(1 == '1'); // true
console.log(undefined == null); // true
console.log(1 == true); // true
console.log('1' == true); // true