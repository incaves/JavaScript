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
var per = getJson('http://localhost:3000/personalized/newsong')
var peson = per
  .then(
    res => {
      console.log(res)
      // 等上一个接口成功 才可以调用这个接口
      // 此时这是一个错误的地址
      return getJson('http://localhost:30010/personalized/privatecontent/list') // 返回的也是一个Promise
    }
    //   err => {
    // 这里只负责只负责上一个Promise对象
    // console.log(err)
    //   }
  )
  // 每个then方法 都是为上一个then方法 返回的Promise对象 添加一个明确状态的回调
  .then(
    res => {
      // 成功的话 上一个then返回的结果
      console.log(res) // 打印第二个接口的数据
      return 'abc' // 返回的是一个普通的值 传递给了下一个then
    }
    //   err => {
    // console.log(err)  第二个接口需要在这里捕获 但是很麻烦
    //   }
  )
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err) // 可以在这里捕获异常信息
  })
console.log(peson) // 返回的是一个Promise
console.log(per === peson) // false
