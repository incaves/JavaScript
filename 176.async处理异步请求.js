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
async function test() {
  // 使用try catch进行捕获异常
  try {
    let result = await getJson('http://localhost:3000/personalized/newsong')
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
test()
