function test() {
  let num = 5
  if (true) {
    let num = 10
  }
  console.log(num)
}
test() // 5 let不存在变量提升,而且let只在其自己的代码块中生效
// ---------------------------

if (true) {
  let b = 20
  console.log(b)
  if (true) {
    let c = 30
    console.log(c)
  }
  console.log(c)
} // 20 c is not defined
