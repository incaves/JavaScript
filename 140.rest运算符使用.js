// 1.当三个点 出现在形参上 或者 赋值号(=)的左侧就是rest
// 2.当三个点 出现在实参上 或者 赋值号(=)的右侧就是扩展运算符
// 扩展运算符是将数组分割成独立的序列
// rest是将序列合并成数组

// rest基本使用
function add(...items) {
  console.log(items) // [ 1, 2, 3, 4 ] 数组形式
  let sum = 0
  items.forEach(item => {
    sum += item
  })
  return sum
}
console.log(add(1, 2, 3, 4)) // 10
// 和结构赋值配合使用
let arr = [1, 2, 3, 4, 5]
let [arr1, ...arr2] = arr
console.log(arr1) // 1
console.log(arr2) // [2,3,4,5]
// 使用数组的方法
function sortFun(...values) {
  // 转成数组并进行排序(使用argument(类似于数组的结构)需要转换成数组)
  Array.prototype.slice.call(arguments).sort() 
  // 使用rest方法可以直接自动转换成数组
  values.sort()
}
sortFun(212, 21, 22, 1)
// rest之后不能在有参数了
function person(a, ...b,c) {
  console.log(a) // 1
    console.log(b) // [2,3,4,5]
    console.log(c); // 报错
}
person(1, 2, 3, 4, 5)