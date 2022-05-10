// parseInt() 可以将字符串转换成📄
// 参数 parseInt(string,进制)
// 第二个参数可以不填 默认是十进制

// 1.如果填写的字符串转换不了整数 返回NaN
console.log(parseInt('abc')); // NaN
console.log(parseInt('abc123')); // NaN
console.log(parseInt('12abc')); // 12
// 2.前置匹配
// f满足 但是g不满足十六进制的条件 后面全部省略
// f = 15
console.log('fg123', 16); // 15

// 3.算数运算符也会执行 因为它当作了字符串
console.log(parseInt('5 / 2')); // 5
// 如果没有 单引 / 双引 可以正常执行
console.log(parseInt(2 * 2)); // 4

// 4.浮点数的处理
// 会忽略小数点后的数直接取整
console.log(parseInt('12.89')); // 12

// 5.和map函数进行配合时注意的点

var arr = ['1', '2', '3', '4']
var result = arr.map(parseInt)
console.log(result); // 1 NaN NaN NaN
// 为什么是NaN呢?
// 上面的代码等价于下方
var result = arr.map((val, index) => {
    return parseInt(val, index)
})
// 第一次进入  val = '1'  index = 0  parseInt第二个参数如果是0 把本身原封不动的返回
// 第二次进入  val = '2'  index = 1  parseInt的进制取值是 2 ～ 36  所以返回NaN
// 第三次进入  val = '3'  index = 2  在范围内 但是二进制只有 0和1 所以返回NaN
// 第四次进入  val = '4'  index = 3  3进制无法对 4进行处理 所有返回NaN

// 必须要明确指定!
var result = arr.map((val, index) => {
    return parseInt(val, 10)
})