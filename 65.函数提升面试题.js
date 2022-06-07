function v() {
  var a = 1 // 变量提升但赋值操作不会提升
  function a() {} //
  //
  console.log(a)
}
v() // 1
// --------------
function fn() {
  console.log(typeof foo) // function
  var foo = 'hello'
  function foo() {
    return 'abc'
  }
  console.log(typeof foo) // string
}
fn()
// --------------
function foo() {
  var a = 1
  function b() {
    a = 10 // 全局的
    return
    function a() {}
  }
  // a = 1
  b()
  console.log(a) // 作用域可以找到a
}
foo() //1
