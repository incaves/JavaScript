/**
 * 使用构造函数来判断
 */

var arr = []
// arr.__proto__.constructor 拿到的是 Array的原型对象
console.log(arr.__proto__.constructor === Array) // true
console.log(arr.__proto__ == Array.prototype) // true

// 封装成一个函数
function getType(value) {
  var constructor = value.__proto__.constructor
  if (constructor === Array) {
    return 'Array'
  } else if (constructor === Object) {
    return 'Object'
  } else {
    return '!Array-!Object'
  }
}
console.log(getType(arr))
