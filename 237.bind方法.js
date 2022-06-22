var obj = { x: 1 }

function fun(n1,n2) {
    console.log(this)
    console.log(n1 + n2);
}
// bind 不会自己调用方法
fun.bind()
// 改变this指向
fun.bind(obj)
// 会产生一个新的函数
var f = fun.bind(obj)
f()
// 和call方法传递的方式一样
var f = fun.bind(obj,3,9)
f()