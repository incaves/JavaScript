// 可能会出现名称冲突的问题
// 可以使用Symbol 表示独一无二的值
// let obj = {num: 10,}
// let obj = {name: 'zs',}
// --------
let s = Symbol('s')
console.log(typeof s) // symbol
let s1 = Symbol('s1')
console.log(s) //  Symbol()
console.log(s1) // Symbol()
// 区分不了那个是谁 可以加字符串进行描述(只是用于区分)
// Symbol('s') Symbol('s1')
// --------
// 如果两个都是 Symbol('s') Symbol('s')
// 也是false 字符串只是用于区分
console.log(s == s1) // false
// --------
let obj = {}
let mySymbol = Symbol()
obj[mySymbol] = 'hello'
console.log(obj[mySymbol]) // hello
// ---------
