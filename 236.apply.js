
var obj = { x: 1 }

function fun(arr) {
    console.log(this);
    console.log(arr);
}
// 可以调用函数
fun.apply() 
// 改变this指向
fun.apply(obj)
// 传递参数(数组形式)
fun.apply(obj, ['res'])
// 主要作用
var arr = [1, 2, 77, 12, 11]
// console.log(Math.max.apply(null,arr));
console.log(Math.max.apply(Math,arr));