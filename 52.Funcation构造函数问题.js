var fun = new Function('sum1', 'sum2', 'return sum1+sum2')

// 1.在一个频繁循环或者频繁调用使用Function构造函数是非常消耗性能的(每次都要new创建一个构造函数)

// 2.并不遵循典型的作用域

var a = 12
function fun() {
  var a = 11
  return new Function('return a') // 会作为顶级函数执行(访问不到fun的局部变量,只能访问到全局变量)
}
console.log(fun()()) // 打印的是12
