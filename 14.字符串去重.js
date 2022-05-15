// 1.去除字符中重复的字符
// includes() 方法用于判断数组中是否包含指定的元素,如果是返回true,否则返回false
var arr = 'hello worlllld'
var arr1 = Array.from(arr)
var newArr = []
for (var i = 0; i < arr1.length; i++) {
    var item = arr[i]
    if (!newArr.includes(item)) {
        newArr.push(item)
    }
}
console.log(newArr.join(''));

// 2.字符串去重
function strUn(arr) {
    var json = {}
    var result = []
    for (var i = 0; i < arr.length; i++) {
        var char = arr[i]
        if (!json[char]) { // false
            json[char] = true // 起到标识的作用
            result.push(char) // 不存在就放入数组
        }
    }
    return result.join('')
}
console.log(strUn(arr));

// 3.字符串去重
const set = new Set(arr);
console.log([...set].join(''));

// 4.字符串去重
function unique(arr) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i]
        if (result.indexOf(item) === -1) {
            result.push(item)
        }
    }
    return result.join('')
}
console.log(unique(arr));