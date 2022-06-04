/**
 * async:表示函数中有异步操作
 * await必须出现在 async 函数内部,不能单独使用
 * await: 表示紧跟在后面的表达式需要等待结果
 * 一般情况下await后面跟的是一个耗时的操作或者一个异步的操作
 * 返回的也是一个Promise对象
 */
async function test() {
  let result = await Math.random()
  return result
}
test()
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
