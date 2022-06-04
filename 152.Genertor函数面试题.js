function* test(num) {
  // 遇见yield 停止 返回对应的结果 不会受前面的限制 = 7
  let x = 3 * (yield num + 1)
  // yield 可以实现划分阶段
  // 没有传递对应的参数
  // x / 3 = undefined / 3 = NaN
  let y = yield x / 3
  // NaN
  return x + y + num
}
let n = test(6)
// 调用三次
console.log(n.next()) // { value: 7, done: false }
console.log(n.next()) // { value: NaN, done: false }
console.log(n.next()) // { value: NaN, done: true }
// --------------
function* test1(num) {
  // 遇见yield 停止 返回对应的结果 不会受前面的限制 = 7
  let x = 3 * (yield num + 1)
  // 第一次传递进来的3 是 (yield num + 1)的返回结果
  // 3 * 3 = 9
  let y = yield x / 3 // 9 / 3 = 3
  // 第二次传递进来的3 是 yield x / 3 的返回结果
  //  9 + 3 + 6 = 18
  return x + y + num // 18
}
let n1 = test(6)
// 调用三次
console.log(n1.next()) // { value: 7, done: false }
console.log(n1.next(3)) // { value: 3, done: false }
console.log(n1.next(3)) // { value: 18, done: true }
