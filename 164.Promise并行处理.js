let promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let num = Math.random()
    if (num > 0.3) {
      resolve('成功了!')
    } else {
      reject('失败了1')
    }
  }, 3000)
})
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let num = Math.random()
    if (num > 0.3) {
      resolve('成功了!')
    } else {
      reject('失败了2')
    }
  }, 3000)
})
Promise.all([promise1, promise2]).then(function (data) {
  console.log(data)
})
// -----------------------
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
// Promise.all 接收的是一个数组
// 数组中的每个元素都是Promise
//
Promise.all([
  getJson('http://localhost:3005/products'),
  getJson('http://localhost:3005/cart'),
  // 如果想有一个请求失败了,不影响其他的,可以单独用catch捕获(这里表示成功,执行then)返回的是undefined(前提是什么都不写)
  getJson('http://localhost:3005/ddd').catch(() => {}), // 强行返回真 执行then
])
  .then(response => {
    // 所有成功才表示成功,如果有一个失败,就全部失败
    console.log(response)
    // 返回的也是一个数组
  })
  .catch(err => {
    console.log(err)
  })
