// 1.函数名称
// 函数声明,函数名称sum是必须的
function sum(num1, num2) {
  return num1 + num2
}
// 没有函数名称的匿名函数表达式
var sum = function (num1, num2) {
  return num1 + num2
}
// 2.函数提升(主要是var关键字)
console.log(add(1, 2)) // 3
console.log(sum(3, 6)) // Uncaught TypeError: sum is not a function
// 函数声明
function add(num1, num2) {
  return num1 + num2
}
// 函数表达式
var sum = function (num1, num2) {
  return num1 + num2
}
