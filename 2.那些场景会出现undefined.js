// 1. 使用一个变量但是没有进行初始化
var a;
console.log(a); // undefined

// 2.获取一个对象中不存在的属性时
var obj = {
  name: 'Jking',
  age: 18,
};
console.log(obj.gender); // undefined

// 3.函数没有返回值(return),默认得到的结果为undefined
function fun() {}
console.log(fun());

// 4.函数定义了多个形参,但是在调用时,传递的实参数量和形惨数量不匹配
function fn(p1, p2, p3) {
  console.log(p1); // 1
  console.log(p2); // 2
  console.log(p3); // undefined
}
fn(1, 2);
