var o = { x: 1 }
// 1.可以调用函数
function fun(num1, num2) {
  console.log(this) // 目前指向window
  console.log(num1 + num2)
}
fun.call()
// 2.可以改变this指向
fun.call(o) // 指向o这个对象
fun.call(o, 1, 2) // 也可以传递参数
// --------------
// 也可以实现继承
function Father(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
}
function Son(name, age, sex) {
  // 把Father的this改为Son的this 实现继承
  Father.call(this, name, age, sex)
}
var son = new Son('张三', 12, '女')
console.log(son)
