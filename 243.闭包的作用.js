/**
 * 闭包的作用
 * -------延伸了变量的作用范围------
 * 这里 f 可以使用另一个作用域中的变量
 */
// 使用fn外层的作用域访问 num变量
function fn() {
  var num = 10 // 不会被销毁
  //   function fun() {
  //     console.log(num)
  //   }
  //   return fun()
  // 简写 返回一个匿名函数
  return function () {
    console.log(num)
  }
}
var f = fn() // f存储的是一个fun函数
// 调用了才会被销毁
f() // 一个作用域 访问了另一个作用域的变量就是闭包
// 类似于(复杂写法)
var f = function fun() {
  console.log(num)
}
// 类似于(简写)
var f = function () {
  console.log(num)
}
