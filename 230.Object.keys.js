/**
 * Objec.keys 用于获取对象自身所有的属性
 */
var obj = {
  id: 1,
  pname: '小米',
  price: 2000,
  num: 2,
}
// 效果类似于 for in

// 并且放到一个数组里面
var result = Object.keys(obj)
console.log(result instanceof Array) // true
console.log(result) // [ 'id', 'pname', 'price', 'num' ]
result.forEach(item => {
  console.log(item) // id pname price num
})
