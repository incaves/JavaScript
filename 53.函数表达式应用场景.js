/**
 * 关于函数表达式非常典型的应用就是实现了块级作用域
 */
var person = (function () {
  var _name = ''
  return {
    getName: function () {
      return _name
    },
    setName: function (userName) {
      _name = userName
    },
  }
})()
person.setName('zhangsan')
console.log(person.getName())
