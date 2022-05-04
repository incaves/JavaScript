// 1. 八进制 首位0 剩下的数字 1 - 7
var num1 = 021;
console.log(num1); // 17
var num2 = 079;
console.log(num2); // 79  9不符合

// 2.十六进制 首位必须是 0x 剩下的数字 0 - 9 A - F

var num3 = 0x123;
console.log(num3); // 291
var num4 = 0xaf99;
console.log(num4); // 44953
var num5 = 0xop1 
console.log(num5); // Invalid or unexpected token
