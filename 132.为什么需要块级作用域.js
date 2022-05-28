/**
 * 被大括号里包裹就是一个块级作用域
 */
if (true) {
}
for (var i = 0; i < 10; i++) {}
// 上述都是块级作用域

// ES5 只有全局作用域和函数作用域
// 可能会出现一些问题
// 1.内层变量可能会覆盖外层变量
var tmp = new Date()
function show() {
  console.log(tmp)
  if (false) {
    // 不会执行的区域
    var tmp = 'hello word'
  }
}
show() // undefined
// 因为变量的提升 所以是undefined
// 全部换成let就可以 (let只在其代码块中生效,也不存在变量提升)
let tmp = new Date()
function show() {
  console.log(tmp)
  if (false) {
    // 不会执行的区域
    let tmp = 'hello word'
  }
}
show() // 打印的是当前时间
