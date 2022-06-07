// 方法的调用
var obj = {
  userName: '张三',
  sayHi: function () {
    return this.userName
  },
  sayHll: function (name) {
    this.userName = name
    return this
  },
}
console.log(obj.sayHi())
console.log(obj['sayHi']())
// 返回的是一个this 形成链式调用
console.log(obj.sayHll('李四').sayHi())
// 构造函数
function Person(name) {
  this.userName = name
}
Person.prototype.getUserName = function () {
  return this.userName
}
var person = new Person('杜甫')
// 调用原型上的方法
console.log(person.getUserName())
// call apply
function sum(num1, num2) {
  console.log(this) // obj
  return num1 + num2
}
var obj = {
  x: 0,
}
console.log(sum.call(obj, 3, 4))
console.log(sum.apply(obj, [3, 7]))
