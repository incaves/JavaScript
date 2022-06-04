ajax('/api/api.json').then(
  res => {
    // 表示第一个请求成功后 请求第二个
    // 又构成了一个回调地狱的问题
    ajax('/api/user.json').then(res => {})
    // 这种不是正确的方法
    // 使用的是链式调用的方式解决回调地狱的问题
  },
  err => {
    console.log(err)
  }
)
