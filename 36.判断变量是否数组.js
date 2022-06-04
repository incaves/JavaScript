/**
 * toSting()
 * 每个引用类型间接的继承了Objcet的方法
 * 不同类型的toSting()方法返回的类型也不同
 */
var arr = [1, 2, 3]

var obj = {
  name: 'zs',
}
console.log(Object.prototype.toString.call(arr)) // [object Array]
console.log(Object.prototype.toString.call(obj)) // [object Object]
// 为什么不直接调用toSting方法呢?
console.log(arr.toString()) // 1,2,3 转成了字符串 进行了重写操作 所以不能直接调用(调用了自身上的,没有去原型上查找)
// -- 把数组自身的toSting()删除掉
delete Array.prototype.toString
console.log(arr.toString()) // [object Array]
// 去原型上查找了发现Array被删除掉了使用的是Object.prototype的toSting()方法
