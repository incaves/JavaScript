// 触发了函数的提升机制
fun() // 不会报错
function fun() {
  console.log('hello')
}
// ----------
// 作用域
// 一个变量的定义与调用都是在一个固定的范围内的,就是作用域
// 作用域可以分为全局的作用域,局部作用域(函数作用域)和块级作用域
var a = 1 // 全局
function per() {
  var b = 2 // 局部
  if (true) {
    var c = 3 // 块级
  }
}
var name = '张三'
function fn() {
  // 里面可以调用外面
  // 外面不能调用里面
  console.log(name)
}
fn()
