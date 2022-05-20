/**
 * filter 返回的是一个新数组 不会改变原来的数组
 * 会将满足条件的返回 
 * 如果没有满足条件 返回的是一个空数组
 */

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 过滤掉为奇数的数字
let result = arr.filter(item => {
    return item % 2 !== 0
})
// result是新数组 
console.log(result); // 1,3,5,7,9

// 过滤到 性别是男 年龄大于16岁
var arr1 = [
    { gender: "男", age: 15 },
    { gender: "女", age: 15 },
    { gender: "男", age: 17 }
]
// 可以简写
let result1 = arr1.filter(item => item.gender == '男' && item.age > 16)
console.log(result1);