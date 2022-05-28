// 普通函数
let Person = function (a, b) {
  return a + b
}
console.log(Person(2, 3)) // 5

// 箭头函数
let person = (a, b) => {
  return a + b
}
console.log(person(2, 3)) // 5

// 如果只传递一个参数 可以省略小括号

let per = a => {
  return a / 3
}
console.log(per(9)) // 3

// 如果 执行的代码只有一条语句可以省略return
let p = a => a / 3
console.log(p(12)) // 4
