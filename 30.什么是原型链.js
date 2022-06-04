var A = function () {}
var a = new A()
console.log(a.__proto__ === A.prototype) // true
console.log(a.__proto__.__proto__ === A.prototype.__proto__) // true
console.log(A.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
