// 1.---------
var a = 1
function fn1() {
  function fn2() {
    console.log(a) // 向外层作用域查找 函数作用域
  }
  function fn3() {
    var a = 4
    fn2()
  }
  var a = 2 // 找到了这里
  return fn3
}
var fn = fn1()
fn() // 2
// 2.----------
var a = 1
function fn1() {
  function fn3() {
    var a = 4
    fn2()
  }
  var a = 2
  return fn3
}
// fn2在全局环境
function fn2() {
  console.log(a) // 找全局作用域的a
}
var fn = fn1()
fn() // 1
// 3.----------
var a = 1
function fn1() {
  function fn3() {
    function fn2() {
      console.log(a) // 向外查找 fn3作用域
    }
    var a // 声明目前是undefined 还没有赋值 如果赋值了就是该变量的值
    fn2() // 调用
    a = 4 // 赋值
  }
  var a = 2
  return fn3
}
var fn = fn1()
fn() // undefined
// 4.----------
var x = 10
bar() //30
function bar() {
  var x = 30
  function foo() {
    console.log(x) //  自己没有向外查找
  }
  foo()
}
// 5.-----------
var x = 10
bar() //10
function foo() {
  console.log(x)
}
function bar() {
  var x = 30
  foo()
}
// 6.-----------
var x = 10
bar() //30
function bar() {
  var x = 30
  ;(function () {
    // 立即执行函数
    console.log(x)
  })()
}
