'use strict'
// 必须声明
num = 10
console.log(num) // num is not defined
// 不能删除已经声明的变量
var str = 'abc'
console.log(str)
// delete str

// this指向
function fun() {
  console.log(this) // 如果是严格模式 this指向undefined
}

// new
function Person(name, age) {
  this.name = name
  this.age = age
}
// this还是指向对象实例
var per = new Person('张三', 12)

// 定时器
setTimeout(function () {
  console.log(this) // 还是指向window
})
// 事件绑定的this还是指向调用者
btn.onclick = function () {
  console.log(this)
}
// 不能有重名的参数
function str(a, a) {
  console.log(a + a) // 6
}
// 如果不是严格模式 会进行了覆盖 3 + 3
str(2, 3)
