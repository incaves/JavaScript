/**
 * 生成器函数
 * 也提供异步编程解决方案
 * 可以执行一会儿暂停一会儿 可以分为若干个阶段
 * yield = 暂停执行
 * next = 继续执行
 */
// 创建 *
// 如果第一次进入需传递值 go(string) 正常接收
function* go(str) {
  console.log(1) // 1
  // yield 实现的就是划分阶段
  // 遇到yield就停止了 返回yield后面的数据 执行next()
  // 如果需要继续执行 需要在执行next()
  // done 为 false 表示还没有执行完成
  let a = yield str
  // 继续执行
  console.log(2) // 2
  // 暂停执行 这里的a就是传递过来的值
  // 返回值 done = false
  let b = yield a
  // 继续执行
  console.log(3) // 3
  // 没有传递值 返回的是undefined(如果有值,就是传递过来的值)
  // 执行完成 done = ture 执行完成了
  return b
}
// 返回的是一个迭代器
let it = go('a')
let r1 = it.next() // 调用 next
console.log(r1)
// 输出结果: 1 value: 'a', done: false
// -
// 继续执行
let r2 = it.next('b的值')
console.log(r2)
// { value: 'b的值', done: false }
// 继续执行
let r3 = it.next()
console.log(r3)
// { value: undefined, done: true }
