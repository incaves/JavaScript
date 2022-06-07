/**
 * arguments 是函数的一个内置局部变量
 * 类型数组的结构
 */
function fun(num1, num2, num3) {
  console.log(arguments[0]) // 1
  console.log(arguments[1]) // 2
  console.log(arguments[2]) // undefined
  console.log(arguments.length) // 2 根据实参而不是形参
  arguments[0] = 9
  console.log(num1) // 9 会影响性参
  arguments[1] = 7
  console.log(num2) // 7
  num2 = 8
  console.log(arguments[1]) // 8 也会影响
  arguments[2] = 10
  console.log(num3) // undefined 不会收到影响
  num3 = 10
  console.log(arguments[2]) // 10 会收到影响
  console.log(arguments.length) // 2 虽然修改了 但是不会影响 根据实参
}
// arguments的值是又实惨来决定的
fun(1, 2)
