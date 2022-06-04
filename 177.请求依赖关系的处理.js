/**
 * 例如:
 * 第二个请求,依赖于第一个请求
 */
function sleep(timer, params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params)
    }, timer)
  })
}
async function testa() {
  let reuslt1 = await sleep(2000, '第一次传递')
  let result2 = await sleep(1000, '02' + reuslt1)
  let result3 = await sleep(500, '03' + result2)
  console.log(reuslt1, result2, result3)
}
testa()
