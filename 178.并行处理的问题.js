let getJSON = function (url) {
  let p = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = handler
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send()

    function handler() {
      if (xhr.readyState === 4) {
        if (this.status === 200) {
          resolve(this.response)
        } else {
          reject(new Error(this.statusText))
        }
      }
    }
  })
  //返回Promise对象
  return p
}
async function getAJAX() {
  // try {
  //   let result = await getJSON("http://localhost:3005/products");
  //   let result1 = await getJSON("http://localhost:3005/products");
  //   let result2 = await getJSON("http://localhost:3005/products");
  //   console.log(result, result1, result2);
  //   console.log("clear the loading~"); //通过这一句代码模拟隐藏loading图片
  // } catch (e) {
  //   console.log(e);
  // }
  // 上述的代码 三个接口没有依赖关系
  try {
    let result = getJSON('http://localhost:3005/products')
    let result1 = getJSON('http://localhost:3005/products')
    let result2 = getJSON('http://localhost:3005/products')
    let p = await Promise.all([result, result1, result2]) // 注意是数组
    console.log(p)
    console.log('clear the loading~')
  } catch (e) {
    console.log(e)
  }
}
getAJAX()
