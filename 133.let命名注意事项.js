// 1.不存在变量提升
console.log(num) // 报错 var存在变量提升
let num = 2

// 2.暂时性死区
var str = 123 // 全局变量
if (true) {
  num = 222 // 绑定到了局部变量中
  let num // 局部变量
} // 会报错
// 被绑定了到 num = 222 块级作用域中 加上变量提升 所以会报错

// 3.不允许重复声明
// var 会后者覆盖前者
var ar = 1
var ar = 2
// let会报错
let arr = 1
let arr = 2
// 这种声明方式也不被允许
var ac = 1
let ac = 2
// 形参和声明的变量一致 也是会报错的
function test(num) {
  let num = 2
  console.log(num) // 报错
}
test(1)
