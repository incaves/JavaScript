var str = 'abcd'
// 1.字符串的逆序输出 
// 转成以分号分隔的数组在反转在转成字符串
console.log(str.split('').reverse().join(''));

// 2.字符串逆序输出
var arr = Array.from(str).reverse().join('')
console.log(arr);

// 3.字符串逆序输出
var arr1 = [] // 定义一个空数组
// 从数组末尾开始遍历 并且把每一个元素放到数组的开头
for (var i = str.length - 1; i >= 0; i--) {
    arr1.push(str[i])
}
console.log(arr1.join(''));

// 4.字符串逆序输出
// 利用charAt方法:"获取字符串中字符的位置 
function resever(str) {
    var result = ''
    for (var i = str.length; i >= 0; i--) {
        result += str.charAt(i)
    }
    return result
}
console.log(resever(str));