for (var i = 0; i < 3; i++) {
  // for循环之行完毕 才会执行里面的定时器
  setTimeout(() => {
    console.log(i) // 3 3 3
  }, 1000)
}
// 因为i是一个全局的变量
// 并且定时器是异步任务 首先会执行
// 如果是let就没问题
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i) // 0 1 2
  }, 1000)
}
