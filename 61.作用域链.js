var userName = 'zhangsan'
function fn() {
  console.log(userName) // 自己查找不到 就像上一层的作用域查找
}
fn() //zhangsan
/**
 * 在查找`userName`这个变量的时候,现在函数的作用域中进行查找,没有找到,再去全局作用域中查找
 * 这是一个往外层查找的过程,即顺着一条链条从下往上查找变量
 * 这个链条,称之为作用域链
 */
