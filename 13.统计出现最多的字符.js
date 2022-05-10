// 统计出现最多的字符
// 实现思路：
// 1.遍历字符串,统计每个字符出现的次数,并存储在对象中
// 2.遍历对象,找出出现次数最多的字符
// 3.返回最多的字符
// 4.实现思路
var str = 'hello world'
var obj = {}
for (var i = 0; i < str.length; i++) {
    var char = str[i]
    if (obj[char]) { // 为true表示存在
        obj[char]++  // 存在就加1
    } else {
        obj[char] = 1 // 不存在就设置为1
    }
}
var max = 0 // 定义一个变量用来存储最多的字符
var maxChar = '' // 定义一个变量用来存储最多的字符
for (var key in obj) {  // 遍历对象
    if (obj[key] > max) {  // 如果当前的值大于最大值
        max = obj[key] // 就把当前值赋值给最大值
        maxChar = key // 就把当前键赋值给最大键
    }
}
console.log(maxChar);  // l
console.log(max);  // 3

// 实现思路
// 1.首先转成数组
// 2.调用数组的sort方法排序
// 3.join方法把数组转成字符串
// 4.然后对字符串进行遍历
// 5.使用字符串的lastIndexOf方法查找最后一次出现的位置
// 6.使用substring方法把字符串截取出来
// 7.返回最多的字符
var str = 'hello world'
var arr = Array.from(str) // 首先转成数组
arr.sort() // 调用数组的sort方法排序
console.log(arr); // d e h l o w r o l l o o r w
var str1 = arr.join('') // 把数组转成字符串
var max = 0 // 定义一个变量用来存储最多的字符
var maxChar = '' // 定义一个变量用来存储最多的字符
for (var i = 0; i < str1.length; i++) {
    var char = str1[i] // 交换
    var index = str1.lastIndexOf(char) // 查找最后一次出现的位置
    if (index > max) { // 如果当前的值大于最大值
        max = index // 就把当前值赋值给最大值
        maxChar = str1.substring(i, index + 1) // 
    }
}
console.log(maxChar);  // l
console.log(max);  // 3