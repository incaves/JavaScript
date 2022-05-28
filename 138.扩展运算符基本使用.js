// ...
// 将一个数组转为用逗号分隔的参数序列

// 将两个数组合并成一个数组
// 1.传统
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [].concat(arr1, arr2)
console.log(arr3) // [ 1, 2, 3, 4, 5, 6 ]
// 2.扩展运算符
let arr4 = [...arr1, ...arr2]
console.log(arr4) // [ 1, 2, 3, 4, 5, 6 ]
