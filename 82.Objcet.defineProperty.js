var person = {
  userName: 'zs',
}
Object.defineProperty(person, 'userName', {
  writable: false, // 是否可修改
})
person.userName = 'ls'
console.log(person.userName) // zs
// -------------
var obj = {
  _age: 19, // 私有属性
}
Object.defineProperty(obj, 'age', {
  // 在访问age属性时会被调用
  get() {
    return this._age
  },
  // 在修改age属性时会被调用
  set(value) {
    if (value >= 18) {
      this._age = value
      console.log('可以访问该属性')
    } else {
      console.log('不可以访问该属性')
    }
  },
})
console.log(obj.age)
obj.age = 20
console.log(obj.age)
obj.age = 10
console.log(obj.age)
