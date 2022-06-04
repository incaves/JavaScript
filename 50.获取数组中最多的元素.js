var arr = [1, 2, 3, 3, 2, 2, 1, 1, 1, 1]
function fun(arr) {
  var result = {}
  var maxNum = 0
  var maxElement = null
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i] // 保存每个值
    result[val] === undefined ? (result[val] = 1) : result[val]++
    if (result[val] > maxNum) {
      maxNum = result[val]
      maxElement = val
    }
  }
  return `出现最多的元素是${maxElement},出现了${maxNum}次`
}
console.log(fun(arr))
