// 等待所有同步任务执行完成,才会执行Promise中的任务
console.log('start') // 同步
setTimeout(() => {
  // 异步
  console.log('setTimeout')
}, 0)
Promise.resolve()
  // 注意:没有异步的任务
  .then(() => {
    console.log('promise1')
  })
  .then(() => {
    console.log('promise2')
  })
  .then(() => {
    console.log('promise3')
  })
console.log('end') // 异步
// start end promise1 promise2 promise3 promise4 setTimeout
// 为什么setTimeout最后执行?
// setTimeout是宏任务 先进入任务队列进行排队
// Promise.then是一个微任务 是立即执行
