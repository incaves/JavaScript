// 获取数组中最多的元素
var arr = [1, 2, 3, 2, 1, 1]
function fun(arr) {
  var result = {} // key - value
  for (var i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) {
      result[arr[i]] = 1 // 不存在就等于1
    } else {
      result[arr[i]]++ // 存在的基础上又存在 + 1
    }
  }
  var keys = Object.keys(arr)
  var maxNum = 0 // 次数
  var maxElement
  for (var i = 0; i < keys.length; i++) {
    if (result[keys[i]] > maxNum) {
      maxNum = result[i] // 存储的是最大的值
      maxElement = keys[i]
    }
  }
  return `出现最多的元素是${maxElement},出现了${maxNum}次`
}
console.log(fun(arr))
