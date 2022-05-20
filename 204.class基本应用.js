// 传统
function Person1(name, age) {
    this.name = name
    this.age = age
}
var p1 = new Person1('Jack',12)
// 类
class Person2{
    // 构造器一般完成属性值的赋值
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getShow() {
        console.log(this.name,this.age);
    }
}
var p2 = new Person2('Tom', 18)
p2.getShow()