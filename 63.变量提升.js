// 变量的声明会被提升,而赋值不会被提升
var str = 'hello world'
;(function () {
  console.log(str) // undefined
  var str = 'hello vue'
})()
// 等同于下方的代码
var str = 'hello world'
;(function () {
  var str //变量的声明得到提升
  console.log(str)
  str = 'hello vue' // 变量的赋值没有得到提升
})()(
  // 所以打印的是undefined
  // ---------
  function () {
    console.log(str)
    str = 'hello vue' // 会产生提升的变量 必须是以var关键字声明的变量
  }
)() // str is not defined
// ---------
function foo() {
  var a = 1
  // var b;
  console.log(a) //1
  console.log(b) //undefined
  var b = 2
  // b = 2
}
foo()
//等同于下方代码
function foo() {
  var a
  var b
  a = 1
  console.log(a) // 1
  console.log(b) // undefined
  b = 2
}
foo()
