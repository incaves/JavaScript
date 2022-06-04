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
getJson('http://localhost:3000/personalized/newsong').then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
