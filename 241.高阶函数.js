/**
 * 高级函数
 */
// 接收函数作为参数传递
function fn(a, b, callback) {
  console.log(a + b)
  callback && callback() // 函数存在的话 执行后者
}
fn(2, 4, function () {
  console.log('高阶函数')
})
// 将函数作为返回值返回
function fun() {
  var num = 10
  return function () {
    console.log(num)
  }
}
var f = fun()
f()
