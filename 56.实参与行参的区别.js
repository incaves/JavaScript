// 1.参数的传递是单向的 只能实参传递给形参
// 形参
function sum(num1, num2) {
  return num1 + num2
}
sum(1, 2) //实参

// 2.实参如果是基本数据类型,实际上是把实参的值复制了一份给了形参

// 在函数执行之后 形参释放，而实参中的值不会发生变化
var person1 = 20
function fn(obj) {
  obj.age = 29
}
fn(person1)
console.log(person1) // 20 没有被修改
// 3.实参如果是引用数据类型,实际上是把实惨的值的内存地址给了形参

// 即实参与形参都指向了相同的内存地址,此时形参可以修改实参的值
var person2 = { age: 20 }
function fun(obj) {
  obj.age = 29
}
fun(person2)
console.log(person2.age) // 29 被修改了
// 4.可以不调用形参
function add() {
  console.log(arguments)
}
add(1, 2, 3, 4, 5) // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
