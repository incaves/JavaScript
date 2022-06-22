// 4.通过原型来解决构造函数方法每次创建的问题
function Person() {}
Person.prototype.userName = 'zs'
Person.prototype.userAge = 19
Person.prototype.getName = function () {
  console.log(this.userName)
}
var p1 = new Person()
p1.getName()
var p2 = new Person()
p2.getName()
console.log(p1.getName === p2.getName) // true 公用了一个方法
// 5.通过构造函数和原型进行结合
function Establish(userName, userAge) {
  this.userName = userName
  this.userAge = userAge
}
Establish.prototype.getName = function () {
  console.log(this.userName)
}
var per1 = new Establish('李白', 10)
var per2 = new Establish('杜甫', 20)
console.log(per1.getName === per2.getName) // true
