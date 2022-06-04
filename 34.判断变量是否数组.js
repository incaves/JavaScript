// typeof
var arr = []
console.log(typeof arr) // objcet
// typeof 返回的是objcet
// 不能判断出引用对象是什么类型(返回的都是object)
// --
// 可以使用instanceof
console.log(arr instanceof Array) // true
console.log(arr instanceof Object) // true
// 封装成一个函数
function isArray(value) {
  if (value instanceof Array) {
    return '传递的是Array'
  } else if (value instanceof Object) {
    return '传递是Objcet'
  } else {
    return '传递不是Array也不是Object'
  }
}
console.log(isArray(arr))
