// new操作符创建构造函数具体做了三件事
// 1.创建一个空对象 var Person = {}
// 2.创建的实例per.__proto__ 指向 Person.prototype
// 3.改变this指向 Person.call(per)
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.sayHi = function () {
  console.log('原型上的方法')
}
function New() {
  var obj = {}
  // 让实例对象的__proto__指向Person的原型对象
  obj.__proto__ = Person.prototype
  // 让构造函数的this指向obj 并把参数传递过去
  Person.apply(obj, arguments)
  return obj
}
New('张三', 20) // { name: '张三', age: 20 }
New().sayHi() // 原型上的方法
