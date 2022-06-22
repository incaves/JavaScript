// 前两项相加 正好是第三项的和
// 1,1,2,3,5,8,13

// 只需要知道输入的n的前面两项 就可以计算出n对应的序列之

function fb(n) {
  if (n === 1 || n === 2) return 1
  return fb(n - 1) + fb(n - 2)
}
console.log(fb(5))
