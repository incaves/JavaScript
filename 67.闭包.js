/**
 * 闭包
 * 闭包就是能够读取其他函数内部变量的函数
 */
function outer() {
  // ...
  function inner() {
    // ...
  }
}
// 闭包就是将函数内部和函数外部连接起来的一座桥梁

// 闭包的特点

// 1.函数拥有的外部变量的引用,在函数返回时,该变量仍然处于活跃状态
// 2.闭包作为一个函数返回时，其执行上下文环境不会销毁
function makeFunc() {
  var name = 'Mozilla'
  function displayName() {
    console.log(name) // 使用了外部函数所声明的变量
  }
  return displayName
}

var myFunc = makeFunc()
myFunc()
// -------
function fn() {
  var max = 10
  return function bar(x) {
    if (x > max) {
      console.log(x)
    }
  }
}
var f1 = fn()
f1(11) // 11
