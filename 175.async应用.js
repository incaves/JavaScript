function sleep(secound) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.random()
      if (num > 0.5) {
        resolve('成功')
      } else {
        reject('失败')
      }
    }, secound)
  })
}
async function test() {
  let result = await sleep(3000)
  return result
}
test()
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
console.log('同步任务')
