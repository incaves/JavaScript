var arr = [1, 2, 3, 4]

// 1.for循环
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// 参数一:每个元素
// 参数二:索引值
// 参数三:数组本身

// 2.forEach() 不会返回新数组 而只是想用数组做一些事情
arr.forEach((item, index, arrary) => {
     console.log(item, index, arrary);
})
 
// 3.map 返回的是一个新数组 不会改变原来的数组
// 如果没有返回 会返回undefined
let result = arr.map((item, index, arrary) => {
    return item * item
})
console.log(arr); // 没有发生变化
console.log(result);

// 两个方法的共同点和不同的
// 对数组进行遍历 看数组中是否有满足条件的 
// 如果有满足条件的就返回true 否则返回false
// 1.some 只要有一个满足条件 不会在看后面的元素
// 判断数组中是否有大于6的元素
var arr1 = [1, 7, 3, 4, 5, 6]
var result1 = arr1.some((item, index, arrary) => {
    return item > 6
})
console.log(result1); // true
// 2.every 每个元素是否都满足条件 如果都满足条件才会返回true
// 判断数组中是否所有都大于6
var result2 = arr1.every((item, index, arrary) => {
    return item > 6
})
console.log(result2); // false

// find()
// 查找数组中第一个满足条件的值 不会看后面的了
// 如果都不满足返回undefined
var result3 = arr1.find((item, index, arrary) => {
    return item > 6
})
console.log(result3); // 7