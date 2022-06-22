// 1.普通函数
function fun1() {
  console.log(this) // 指向window
}
fun1() // 完整写法是 window.fun1()
// 2.对象写法
var o = {
  sayHi: function () {
    console.log(this) // o
  },
}
o.sayHi() // 指向调用者
// 3.构造函数
function Person() {
  console.log(this) // 指向实例对象 per
}
// 4.原型
Person.prototype.sing = function () {
  console.log(this) // 指向实例对象 per
}
var per = new Person()
// 5.绑定事件
btn.onclick = function () {
  console.log(this) // 指向的点击的元素 HTMLButtonElement
}
// 6.定时器
setTimeout(function () {
  console.log(this) // 指向 window
}, 1000)(
  // 7.立即执行函数
  function () {
    console.log(this) // windows
  }
)()
