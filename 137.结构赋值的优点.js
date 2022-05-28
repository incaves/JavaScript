// 1.交换变量的值
let num1 = 1
let num2 = 2
;[num1, num2] = [num2, num1]
console.log(num1, num2) // 2, 1
// 2.函数可以返回多个值
function test() {
  return [1, 2, 3]
}
let [a, b, c] = test()
console.log(a, b, c) // 1,2,3
// 如果只想接收某一个返回值
let [j] = test()
console.log(j) // 1
let [, k] = test()
console.log(k) // 2
let [, , o] = test()
console.log(o) // 3
// 3.函数返回一个对象
function person() {
  return {
    s1: 1,
    s2: 2,
  }
}
let { s1, s2 } = person()
console.log(s1, s2) // 1 2
