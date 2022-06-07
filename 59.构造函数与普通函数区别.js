// 1.构造函数的函数名的第一字母通常会大写
function Student() {}
// 2.构造函数函数内可以使用this关键字
function Poing(name) {
  this.name = name
}
// 3.构造函数必须与new关键字配合使用
var po = new Poing('某')
// 4.构造函数的执行过程和普通函数也是不同的

// 构造函数的问题
function Person(userName) {
  this.userName = userName
  this.sayHi = function () {
    console.log(this.username)
  }
}
var p1 = new Person('zhangsan')
var p2 = new Person('lisi')
// 他们的方法都是自身的方法都是独有的 但是功能相同
// 可以把 sayHi 这个方法放到原型上
Person.prototype.sayHi = function () {
  console.log(this.username)
}
console.log(p1.sayHi === p2.sayHi) // false
