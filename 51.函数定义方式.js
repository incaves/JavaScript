// 1.函数声明
function sum(num1, num2) {
  return num1 + num2
}
sum(2, 3)
// 2.函数表达式(匿名函数)
var res = function (sum1, sum2) {
  return sum1 + sum2
}
console.log(res(1, 2)) // 3
// 3.funcation构造函数
var fun = new Function('sum1', 'sum2', 'return sum1+sum2')
console.log(fun(2, 3)) // 5
