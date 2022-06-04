/**
 * 其作用就是将一个值，快速的转换成`Promise`对象
 */
//
Promise.resolve('abc').then(res => {
  console.log(res) // abc
})
// 等价于
new Promise((resolve, reject) => {
  resolve('abc')
})
/**
 * `Promise.reject()`方法，该方法创建一个失败的`Promise`对象
 */
Promise.reject(new Error('rejected')).catch(error => {
  console.log(error)
})
// 等价于
new Promise((resolve, reject) => {
  reject('报错信息')
})
