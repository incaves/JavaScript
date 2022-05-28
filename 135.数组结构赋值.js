let arr = [1, 2, 3]
// 以前的写法
let num1 = arr[0]
let num2 = arr[1]
let num3 = arr[2]
console.log(num1, num2, num3) // 1,2,3
// 使用数组结构赋值
let [n1, n2, n3] = arr
console.log(n1, n2, n3) // 1,2,3
// 例子(对象,值,数组)
let arr1 = [
  {
    username: '杜甫',
    age: 19,
  },
  [1, 2],
  7,
]
// [{},[],]
let [{ username, age }, [s1, s2], s3] = arr1
console.log(username, age, s1, s2, s3) // 可以打印
// 如果给到某一个变量
let [JSArray, array, str] = arr1
console.log(JSArray) // { username: '杜甫', age: 19 }
console.log(array) // [1,2]
console.log(str) // 7
// 如果解析不成功会是undefined
let [k1, k2] = [1]
console.log(k1, k2) // 1,undefined
// 不完全结构
let [a1, a2] = [2, 3, 4]
console.log(a1, a2) // 2,3
// 如果指向获取某个
let [, , p3] = [1, 2, 3]
console.log(p3) // 3
