// 函数声明 存在变量提升
fun()
function fun() {
  // 函数也有有提升
  console.log('hello')
}
// 函数表达式声明的函数不会有提升
foo() // foo is not a function
var foo = function () {
  console.log('hello')
}
// 相当于
var foo
foo() // 相当于调用了一个变量 他是一个变量 不能这样调用
function(){}
// ---------
function foo() {
  function bar() {
    return 3
  }
  return bar()
  function bar() { // 存在函数提升 都会到最上层 后者覆盖前者
    return 9
  }
}
console.log(foo()) // 9
// -----------
var a = true;
foo();
function foo() {
  // var a; 
  if (a) {
    var a = 20; // 这里存在变量提升
  // a = 20
  }
  console.log(a); // 所以是undefined
}