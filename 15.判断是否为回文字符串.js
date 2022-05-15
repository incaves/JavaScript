// 1.思路 遍历字符串 从前往后 在从后往前 逐个比较 遇到不一样的直接返回false
function fun(str) {
    str = str.split('') // 变成数组
    // 进行遍历
    var start = 0 // 首位
    var end = str.length - 1 // 末尾
    while (start < end) { // 循环的条件
        if (str[start] == str[end]) { // 第一位和最后一位相等
            start++; // 进行下一位
            end--; // 进行下一位
        } else {
            return false // 直接返回false
        }
    }
    return true
}
console.log(fun('abcba')); // true
// 2.
function fn(str) {
    // 转换成数组 在逆序 然后在转成字符串
    var res = str.split('').reverse('').join('')
    // 和传递过来的字符串进行比较
    return res === str
}
console.log(fn('abcba')); // true