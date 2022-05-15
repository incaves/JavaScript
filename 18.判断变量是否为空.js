// for in 判断一个变量是不是空对象
// hasOwnProperty 可以判断一个属性是不是自身的(而不是继承或者是原型链上的)
function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false // 表示不是一个空对象
        }
    }
    return true // 表示是一个空对象
}
// 1.空对象
var obj = {}
console.log(isEmpty(obj)); // true

// 2.构造函数
function Person() {
    // this.username = 'zs' false
}
Person.prototype.age = 19 // hasOwnProperty 查询不到 返回的是true
var p = new Person()
console.log(isEmpty(p)); // false

// 3.数组 
var arr = new Array()
// instanceof 用于判断 例如 arr的proptype的原型链上有没有Array
// 必须是个数组 并且 长度等于0
arr instanceof Array && arr.length === 0

// 4.空字符串
var str = ''
str === ''

// 5.是否为0或者是NaN
!(Number(num) && num) === true
// 是否为空
if (!num) { }
!null
!undefined
!''
!0