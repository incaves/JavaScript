// const 专门用来声明常量(一旦声明就不能被修改的值)
// 1.不能被修改
const arr = 12
arr = 13
console.log(arr) // Assignment to constant variable.
const ls;
ls = 12
console.log(ls); // 也会报错(要立即初始化,不能在后面进行操作)
// 2.不存在变量提升
console.log(a) // 报错
const a = 12
// 3.只在声明的块级作用域中生效
if (true) {
  const pi = 12
}
console.log(pi) // 报错
// 4.不允许重复声明
const vi = 12
const vi = 12
