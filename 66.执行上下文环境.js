// 全局执行上下文(浏览器创建的)

// 函数上下文(每个函数创建都会被创建)

// eval上下文

// 执行上下文栈(调用栈) 先进后出
function fn1() {
  fn2()
  console.log(1)
}
function fn2() {
  fn3()
  console.log(2)
}
function fn3() {
  console.log(3)
}
fn1() // 3 2 1
// 放入到执行栈中
// 代码执行前创建全局执行上下文
ECStack = [globalContext]
// f1调用
ECStack.push('f1 functionContext')
// f1又调用了f2，f2执行完毕之前无法console 1
ECStack.push('f2 functionContext')
// f2又调用了f3，f3执行完毕之前无法console 2
ECStack.push('f3 functionContext')
// f3执行完毕，输出3并出栈
ECStack.pop()
// f2执行完毕，输出2并出栈
ECStack.pop()
// f1执行完毕，输出1并出栈
ECStack.pop()
// 此时执行栈中只剩下一个全局执行上下文
