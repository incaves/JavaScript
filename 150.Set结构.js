/**
 * Set成员必须是唯一的
 * 类似数组的结构
 */
let s = new Set()
s.add(1)
s.add(2)
s.add(3)
s.add(3) // 添加了但是没有发生变化 也没报错
console.log(s) // 1,2,3
console.log(s.size) // 3
console.log(s.delete(3)) // true
console.log(s.has(3)) // false 表示不存在
// 删除所有
// s.clear()
console.log(s.size) // 0
// 需要转成真正的数组
let array = Array.from(s)
console.log(array instanceof Array) // true
// 数组去重
let arr = [1, 2, 3, 2, 1]
let y = new Set(arr)
console.log(Array.from(s)) // 1,2,3
