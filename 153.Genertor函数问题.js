function* test() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
  return 6
}
// 循环遍历 不用一直调用next()
for (let v of test()) {
  console.log(v) // 1,2,3,4,5 不包含返回的结果
}
// ---
function* person1() {
  yield 'a'
  yield 'b'
}
function* person2() {
  yield 'x'
  yield* person1() // 等价于在这里又使用框一次 for of
  yield 'y'
}
for (let s of person2()) {
  console.log(s) // 只打印了 x,y
  // 发现一个Genertor中 调用不了另一个Genertor
  // 如果要调用另一个 需要在前加上 yield*
}
function* person3() {
  yield [1, 2, 3, 4, 5]
}
let r = test()
console.log(r.next())
// { value: 1, done: false }
console.log(r.next())
// { value: 2, done: false }
// 如果不加这个 * 返回整个数组
// -------
function* test1() {
  yield 1 // 第三
  yield 2 // 第四
  return 'test'
}
function test2() {
    yield 3; // 第一
    // return的value返回到了这里
    let value = yield * test1() // 第二
    console.log('value=', value); // 第四
    yield 4; // 第五
}
let it4 = test2()
console.log(it4.next()); // 3 false
console.log(it4.next()); // 1 false
console.log(it4.next()); // 2 false
console.log(it4.next()); // value = test  4  false 
console.log(it4.next()); // undefined  true