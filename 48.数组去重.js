// 1.数组遍历
var arr = [1, 2, 3, 2, 1]
function fun(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]) // 不存在
    }
  }
  return result // 返回去重后的数组
}
console.log(fun(arr))
// 2.数组去重
console.log(Array.from(new Set(arr)))
