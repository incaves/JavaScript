// 1.如果目标对象与同源对象有同名属性,那么后面的属性会覆盖前面的属性
let obj1 = {
  a: 1,
  b: 2,
}
let obj2 = {
  b: 3, // 同名
  c: 4,
}
Object.assign(obj2, obj1) // 后者覆盖前者 obj1的值覆盖了obj2的
console.log(obj2) // a:1  b:2 c:4

// 2.不可枚举的属性不会被复制

let obj3 = {}
Object.defineProperty(obj3, 'b', {
  enumerable: false, // 不可枚举
  value: 'word',
})
let obj4 = {
  a: 'hello',
}
Object.assign(obj4, obj3)
// b没有拷贝过来
console.log(obj4) // { a: 'hello' }
