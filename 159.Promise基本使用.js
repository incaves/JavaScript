let promise = new Promise((resolve, reject) => {
  // 使用setTimeout模拟异步编程
  setTimeout(() => {
    let num = Math.random() // 随机数
    num > 0.3 ? resolve('大于0.3') : reject('小于0.3')
  }, 3000)
})
// promise不论成功还是失败都会执行
// 使用Promise.then 处理返回的结果
promise.then(
  res => {
    // resolve执行这里
    console.log(res)
  },
  err => {
    // reject执行这里
    console.log(err)
  }
)
