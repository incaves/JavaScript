// 1.通过字面量创建(一次只能创建一个对象,写死了,不灵活)
var obj1 = {
  name: 'zs',
  age: 19,
  getName() {
    console.log(this.name)
  },
}
obj1.getName()
// 2.通过工厂模式来创建对象(可以一次创建多个对象)
// 只能创建Object类型的,不容易区分是什么类型
function createUser(name, age) {
  var o = new Object()
  o.name = name
  o.age = age
  o.getName = function () {
    console.log(this.name)
  }
  return o
}
var user1 = createUser('杜甫', 19)
var user2 = createUser('李白', 29)
console.log(typeof user1) // object
// 3.通过构造函数创建对象
// 如果多次创建基本数据类型没问题,但是复杂数据类型会占用内存
function Person(name, age) {
  this.name = name
  this.age = age
  // 每次创建一个新的实例,就会重新创建一个次
  this.getName = function () {
    console.log(this.name)
  }
}
var per1 = new Person('杜甫', 19)
var per2 = new Person('李白', 20)
