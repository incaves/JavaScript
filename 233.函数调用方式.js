// 1.普通函数
function fun1() {}
fun1()
fun1.call()
// 2.对象的方法
var o = {
  sayHi: function () {},
}
o.sayHi()
// 3.构造函数
function Stat() {}
new Stat()
// 4.绑定事件
btn.onclick = function () {} // 点击了目标执行的函数
// 5.定时器函数 1s 调用一次
setInterval(function () {}, 1000)(
  // 6.立即执行函数
  function () {
    console.log('自己调用')
  }
)()
