/**
 * 作用域:全局,局部
 * 函数内部可以使用全局
 * 全局不能使用函数内部
 */
// ----当函数执行完毕,本作用域的局部变量会被销毁
// - 闭包:一个作用域可以访问另一个作用域中的局部变量
// fn这个函数作用域 访问了fun作用域中的局部变量
function fun() {
  var num = 10
  function fn() {
    // 此时这个fn函数就是闭包
    console.log(num) // 访问外部作用域的变量
  }
  fn()
}
fun()
