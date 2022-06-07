// 1.对参数的个数进行判断
// 例如:这个函数必须传递三个参数,如果没有传递三个参数返回一个报错信息
function fn(num1, num2, num3) {
  if (arguments.length !== 3) {
    throw new Error('希望传递三个参数,你值传递了' + arguments.length)
  }
}
fn(1, 2, 3)
// 2.对任意个数参数的处理
// 例如:使用传递过来的字符进行分割
function fun(sep) {
  // 转换成真正的数组(后面的1表示除了第一个不会被包含,因为是分隔符的标识)
  var arr = Array.prototype.slice.call(arguments, 1) // arr中只有字母 没有第一个字符
  return arr.join(sep)
}
console.log(fun('-', 'a', 'b', 'c')) // a-b-c
// 3.模拟函数的重载
// 函数的重载指的是在函数名称相同的情况下,函数的形参的类型不同或者是个数不同
function overloading(num1, num2) {
  return num1 + num2
}
function overloading(num1, num2, num3) {
  return num1 + num2 + num3
}
// 第二个函数会覆盖掉第一个 1 + 2 + undefined = NaN
console.log(overloading(1, 2)) // NaN
console.log(overloading(1, 2, 3)) // 6
function overloading() {
  //将arguments对象转换成数组
  var arr = Array.prototype.slice.call(arguments)
  // console.log(arr);  // [1,2]
  //调用数组中的reduce方法完成数据的计算
  return arr.reduce(function (pre, currentValue) {
    return pre + currentValue
  })
}
console.log(overloading(1, 2)) // 3
console.log(overloading(1, 2, 3)) // 6
console.log(overloading(1, 2, 3, 4, 5)) // 15
