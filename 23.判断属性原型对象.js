function Person() {
}
// 给构造函数Person的原型上添加一个属性
Person.prototype.name = '张三'
var person = new Person()
console.log(person.name); // 张三
// 判断一个属性是实例自身的还是原型上的
console.log(person.hasOwnProperty('name')); // false 自身没有
person.name = '李四'
console.log(person.name); // 李四 (自身有覆盖原型上的)
console.log(person.hasOwnProperty('name')); // true 自身有
// 不够严谨 如果不存在返回的也是false 不能确定原型上有没有 
console.log(person.hasOwnProperty('age')); // false 不存在
// 可以利用 in
// 封装一个方法--------
function hasOwnPropertype(obj, name) {
    //  看下属性是不是原型对象上的 是的话返回的是false 取反 为true
    //  in 是否在对象中存在
   return !obj.hasOwnProperty(name) && name in obj 
}
