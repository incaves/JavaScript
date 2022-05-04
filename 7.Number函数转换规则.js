// 1. Number
console.log(Number(101)) // 101  十进制
console.log(Number(011)) // 9 八进制
console.log(Number(0x11)) // 17

// 2.布尔值
console.log(Number(true)) // 1
console.log(Number(false)) // 0

// 3.null
console.log(Number(null)) // 0

// 4.undefined
console.log(Number(undefined)) // NaN

// 5.字符串
console.log(Number('')) // 0
console.log(Number('22')) // 22 按照十进制
console.log(Number('011')) // 11 省略了0
console.log(Number('0011')) // 11
console.log(Number('0x12')) // 18 十六进制转十进制
// 5.1  字符串浮点数
console.log(Number('0.16')) // 0.16
console.log(Number('00.16')) // 0.16
// 5.2 其他内容
console.log(Number('123abc')) // NaN
console.log(Number('abc')) // NaN
