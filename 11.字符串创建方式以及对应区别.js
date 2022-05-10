/**
 * 字符串的创建方式以及优优缺点
 */

// 1.字面量
var str = 'abc'

// 2.Sting() 会进行转换
console.log(String(121));

// 3.new String() 创建了一个对象实例 构造函数
// 返回的是string的实例  获取的是一个字符串对象
var r = new String()


// 区别 字面量和 String方法创建的字符串 比较的是值
// 而new String创建的对象比较的是内存地址
var str1 = 'hello'
var str2 = String('hello')
console.log(str1 === str2); // true
var str3 = new String('hello')
var str4 = new String('hello')
// 没有指向同一个地址
console.log(str3 === str4); // false

// new String() indexOf substring 可以直接调用原型链的方法
'hello'.indexOf()
// 为什么可以调用呢?
// 因为JavaScript 会把这些基本的字符串包装成字符串对象 就可以调用这些方法了