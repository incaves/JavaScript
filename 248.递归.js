/**
 * 函数内部自己调用自己,这个函数就是递归函数
 */
// 递归容易发生栈溢出的错误(跟循环一样)
var num = 1
function fn() {
  console.log('打印6句话')
  if (num == 6) {
    return // 递归里必须加退出条件
  }
  num++
  fn()
}
fn()
