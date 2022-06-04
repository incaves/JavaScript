/**
 * JavaScript 语言对异步编程的实现，就是回调函数
 * 所谓回调函数,就是把任务的第二段单独写在一个函数里面,等到重新执行这个任务的时候,就直接调用这个函数
 * 它的英语名字 callback,直译过来就是重新调用
 */
fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err
  console.log(data)
})
/**
 * Promise对象
 * 回调函数处理异步本身没有什么问题,但很容易进行嵌套
 */
fs.readFile(fileA, function (err, data) {
  fs.readFile(fileB, function (err, data) {
    // ...
  })
})
// 而Promise的出现就是为了解决这种问题
readFile(fileA)
  .then(function (data) {
    console.log(data.toString())
  })
  .then(function () {
    return readFile(fileB)
  })
  .then(function (data) {
    console.log(data.toString())
  })
  .catch(function (err) {
    console.log(err)
  })
/**
 * Generator函数,就是一个封装的异步任务,或者说是异步任务的容器
 * 异步操作需要暂停的地方,都用到yield语句
 */
function* main() {
  let result = yield request('http://xxx.com/api')
  let resp = JSON.parse(result)
  console.log(resp.value)
}
function request(url) {
  makeAjaxCall(url, function (response) {
    it.next(response)
  })
}

let it = main()
it.next()
