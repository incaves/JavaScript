let { name, age } = {
  name: 'zs',
  age: 12,
}
// 变量的名字和属性的名字必须保持一致,如果不一致会是undefined
console.log(name, age) // zs,12
// 如果想修改变量的名称
let { userName: name1, userAge: age1 } = {
  userName: 'ls',
  userAge: 12,
}
console.log(name1, age1)
// 注意事项
// 1.默认结构
let obj = {
  name2: 'Jack',
  age2: 29,
}
let { name2, age2 = 20 } = obj
// 如果没有默认值 应该是 Jack undefined
// 设置了默认值 Jack 20
// 如果有值 还设置了默认 不采用默认值 Jack 29
console.log(name2, age2)
// 2.嵌套对象结构
let person = {
  arr: ['hello', { msg: 'word' }],
}
// 结构要一致
let {
  // 这里的arr只是一个标识(str,msg才是变量)
  arr: [str, { msg }],
} = person
console.log(str, msg) // hello word

let per = {
  local: {
    start: { x: 20, y: 30 },
  },
}
let {
  // 这里的local只是一个标识 x,y才是变量
  local: {
    start: { x, y },
  },
} = per
console.log(x, y) // 20 30
