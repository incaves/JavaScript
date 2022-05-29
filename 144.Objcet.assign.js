// 需求一:将一个对象里的属性拷贝给另外一个对象
let obj1 = { name: '李白' }
let obj2 = { age: 21 }
let obj3 = {} // 拷贝给obj3
// 传统方式
for (let key in obj1) {
  obj3[key] = obj1[key]
}
for (let key in obj2) {
  obj3[key] = obj2[key]
}
console.log(obj3) // { name: '李白', age: 21 }
// 使用Objcet.assign
let target = { a: 1, b: 2 }
let soure = { c: 3, d: 4 }
let soure1 = { e: 5, f: 6 }
// 参数一 拷贝到那里
// 参数二 谁被拷贝
Object.assign(target, soure, soure1)
console.log(target)
// Objcet.assign是浅拷贝(拷贝了属性的值)
let obj4 = {
  name: '李白',
  address: {
    city: '邯郸',
  },
}
let obj5 = {}
Object.assign(obj5, obj4)
console.log(obj5)
obj5.address.city = '青岛'
// 都发生了改变
console.log('obj5', obj5.address.city) // 青岛
console.log('obj4', obj5.address.city) // 青岛
