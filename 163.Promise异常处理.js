let getJson = url => {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = handler
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send() // 发送
    function handler() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(this.response) // 成功
        } else {
          reject(new Error(this.statusText)) // 失败
        }
      }
    }
  })
  return promise
}
getJson('http://localhost:3000/personalized/newsongss') // 错误的地址会执行catch
  .then(res => {
    console.log(res)
  })
  // 这个then方法等价于下方的catch
  .then(undefined, err => {
    console.log(err)
  })
  // 可以使用catch来捕获异常
  .catch(err => {
    console.log(err)
  })
