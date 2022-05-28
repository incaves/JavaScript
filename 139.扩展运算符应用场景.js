// 1.代替数组中的apply方法
// 求数组中的最大值
let arr = [1, 3, 4, 5, 7, 10]
let max = arr[0]
for (let index = 0; index < arr.length; index++) {
  if (arr[index] > max) {
    max = arr[index]
  }
}
console.log(max) // 10
// 另一种方法
console.log(Math.max.apply(null, arr)) // 10
// 扩展运算符的方法
console.log(Math.max(...arr)) // 10

// 2.方便参数传递
function test(num1, num2) {
  return num1 + num2
}
let arr1 = [23, 12]
// 如果传递的是一个数组
console.log(test(arr1[0], arr1[1])) // 35
console.log(test(...arr1)) // 35
// --
// rest的形式不是扩展运算符
function person(array, ...items) {
  console.log(array) // [ 12, 12 ]
  console.log(items) // [ 10,13 ]
  // 把接收到的数据添加到array中
  array.push(...items)
  // 如果没有加 ... 会是 [ 12, 12, [ 10, 13 ] ]
  // 加了 [ 12, 12, 10, 13 ]
  console.log(array)
}
let array = [12, 12]
person(array, 10, 13)
