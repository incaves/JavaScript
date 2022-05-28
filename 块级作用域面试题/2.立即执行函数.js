// 创建了一个私有作用域 不会污染全局 但比较麻烦
;(function test() {
  var tmp = 'hello'
  console.log(tmp)
})()
// 有了块级作用域
{
  // 也不会污染全局 而且更方便
  let tmp = 'hello'
  console.log(tmp)
}

let tem = 'hello'
console.log(tem)
// 两者互不影响
{
  console.log(tem) // 如果在上面会报错 let不存在变量提升
  let tem = 'hello'
  // console.log(tem)
}
