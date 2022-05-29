/**
 * Proxy代理
 * 在访问某个对象,需先通过拦截层
 */
// 第一个参数表示 要拦截的对象
// 第二个参数表示 拦截的行为,规则
// let proxy = new Proxy(target, handler)

// get 方法用于拦截 读取的操作

let Student = {
  userName: '张三',
}
let p = new Proxy(Student, {
  // get方法负责读取的规则
  // target表示 Student这个对象
  // property 表示对象的属性
  get(target, property) {
    if (property in target) {
      return target[property] // 值存在的话可以访问
    } else {
      return new Error(`访问的属性${property},是不存在的喔`)
    }
  },
})
console.log(Student.userName) // 张三
console.log(Student.userAge) // undefined
// 返回的是undefined 不存在
// 但是希望 可以给一个提示 可以使用到Proxy
console.log(p.userName) // 张三
console.log(p.userAge) // 访问的属性userAge,是不存在的喔
// --------------
let Student1 = {
  userName: '张三',
  userAge: 20,
}
//
let proxy1 = new Proxy(Student, {
  // set方法负责修改的规则
  // obj 拦截的对象
  // prop 操作属性的名称
  // value属性的值
  set(obj, prop, value) {
    console.log(obj)
    console.log(prop)
    console.log(value)
    if (prop === 'userAge') {
      if (!Number.isInteger(value)) {
        // 不是整数
        throw new Error('年龄必须是整数!')
      }
      if (value > 60) throw new Error('年龄超出范围!')
    }
  },
})
console.log(proxy1.userName)
// proxy.userAge = 12.6  年龄必须是整数!
// proxy.userAge = 99 年龄超出范围!
console.log(proxy1.userAge)
