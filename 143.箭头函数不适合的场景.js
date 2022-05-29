/**
 * 1.
 * 不能使用new操作符创建实例
 * 构造函数就是通过new操作符生成对象实例
 * 而生成对象实例的过程就是通过构造函数给实例绑定this的过程
 * 而箭头函数没有自己的this
 */
let Person = name => {
  this.userName = name
}
let p = new Person('李白') // Person is not a constructor
// 2.没有perototype
console.log(Person.prototype) // undefined

function Incaves(age) {
  this.userAge = age
}
// 3.创建原型使用的是箭头函数
Person.prototype.sayHi = () => {
  console.log(this) // 指向的是window
  console.log(this.userAge)
}
var i = new Incaves('杜甫')
i.sayHi() // undefined
