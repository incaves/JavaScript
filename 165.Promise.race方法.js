let promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let num = Math.random()
    if (num > 0.3) {
      resolve('成功了1!')
    } else {
      reject('失败了1')
    }
  }, 3000)
})
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let num = Math.random()
    if (num > 0.3) {
      resolve('成功了2!')
    } else {
      reject('失败了2')
    }
  }, 3000)
})
//  Promise.all( )是等待所有任务结束后才会结束
// Promise.race 只要有一个Promise 执行完成了 不论成功还是失败 整个执行完成 只要有一个任务完成就结束
let p = Promise.race([promise1, promise2])
  .then(function (data) {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
// -----------------
let getJson = function (url) {
  let p = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = handler
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send()
    function handler() {
      if (xhr.readyState === 4) {
        if (xhr.status == 200) {
          resolve(this.response)
        } else {
          reject(new Error(this.statusText))
        }
      }
    }
  })
  return p
}
var promise = getJson('http://localhost:3005/products')
const timeout = new Promise(function (resolve, reject) {
  // 可以利用定时器,对一个接口判断是否超时
  setTimeout(() => reject(new Error('timeout')), 100)
})
Promise.race([promise, timeout])
  .then(value => {
    console.log(value)
  })
  .catch(error => {
    console.log(error)
  })
