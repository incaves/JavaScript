function Person(name, age) {
    // this.name = name
    // this.age = age
    // 没有写return 但是为什么会被打印出来?
    // 因为this的关系
    // console.log(this); 指向 Person {}
    // 等同于
    var Person = {}
    Person.name = name
    Person.age = age
    // 发现只打印了 Person {} 没有输出name和age的值
    // 构造函数如果没有加return 默认返回的是 return this
    return Person // 打印结果
}
// console.log(new Person('zs',20));
var per = new Person('张三', 19)
console.log(p);
// new操作符创建构造函数具体做了三件事
// 1.创建一个空对象 var Person = {}
// 2.创建的实例per.__proto__ 指向 Person.prototype
// 3.改变this指向 Person.call(per)