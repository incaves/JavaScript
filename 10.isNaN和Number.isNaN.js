/**
 * 任何涉及到NaN操作的内容都会返回NaN  Not a number
 * NaN与任何值都是不相等的(和本身对比也是不相等的)
 * 二者的区别
 */
console.log(NaN === NaN); // false
// 可以转换成数字返回false 不能转换成数字返回true  会对数据进行类型转换
console.log(isNaN(123));  // false  
console.log(isNaN('abc')); // true
console.log(isNaN(true));  // false
console.log(isNaN(false)); // false
console.log(isNaN(null));  // false
console.log(isNaN(undefined)); // true
console.log(isNaN(NaN)); // true
// 相同点
// isNaN 可能存在误导性 不容易理解 而且感觉不是专门用来对NaN来使用的方法

// 相比而言 Number.isNaN 只有是NaN的时候 才会返回true 而且不会对数据进行类型转换
console.log(Number.isNaN(123)); // false

console.log(Number.isNaN(NaN)); // true




