// 1 * 2 * 3 = 6
function recursive(n) {
  if (n == 1) {
    return 1
  }
  return n * recursive(n - 1)
}
console.log(recursive(3))
// 详细思路
// 例如 如果输入的是3
// 首先进入判断 3 == 1 不等于
// 进入 return
// 3 * recursive(3 - 1)
// return 的就是 3 * recursive(2)
// 再次进入这个函数
// 首先进入判断 2 == 1 不等于
// 进入 return
// 3 * recursive(2 - 1)
// return 的就是 3 * recursive(1)
// 再次进入这个函数
// 首先进入判断 1 == 1 等于
// 直接return 1
// return 3 * recursive(2)
