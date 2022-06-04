function Person(name, age) {
  this.name = name
}
//在对象的原型上添加age属性
Person.prototype.age = 21
var p = new Person('zhangsan')
console.log(p.hasOwnProperty('name')) //true
console.log(p.hasOwnProperty('age')) //false
// 返回true 表示是自身的
// 返回false 表示不是自身的,是原型链上的(也有可能不存在)

// 可以利用 for in
for (var p in Person) {
  if (Person.hasOwnProperty(p)) {
  }
}
