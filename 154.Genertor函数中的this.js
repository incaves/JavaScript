function* Person() {
  yield (this.name = 'zs')
  yield (this.age = 19)
}
// let person = new Person()
// console.log(person) // Person is not a constructor Person不是一个构造函数
let person = {}
let obj = Person.bind(person)()
console.log(obj.next())
