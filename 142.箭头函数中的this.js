// 1.直接返回对象的情况
// 如果这样返回箭头函数变成了代码块
// 需要加一对小括号 或者把值 包裹到 return {} 才可以
let fun = (id, name) => ({
  //   return {id: id, userName: name,}
  id: id,
  userName: name,
})
console.log(1, 'zs') // 1 zs
// 2.箭头函数中this的问题
let person = {
  userName: '杜甫',
  getName() {
    // 传统方式
    console.log(this.userName)
  },
  getName1() {
    setTimeout(function () {
      console.log(this.userName)
    }, 1000)
  },
  getName2() {
    setTimeout(() => {
      console.log(this.userName)
    }, 1000)
  },
}
person.getName() // 杜甫
// undefined(setTimeout中的this指向的是window而不是person对象)
// 可以在外层作用域保存this let that = this
person.getName1()
// 如果是箭头函数的方式不会出现undefined
// 因为箭头函数本身没有this,如果使用了this是使用的外层作用域的this
person.getName2() // 杜甫
// 体验
let per = {
  userName: '李白',
  getUserName: () => {
    console.log(this) // 指向的是window
    console.log(this.userName)
  },
}
per.getUserName() // undefined
let per1 = {
  userName: '王维',
  getMyName() {
    return () => {
      console.log(this) // per1
      console.log(this.userName)
    }
  },
}
per1.getMyName()() // 王维
/**
 * 由于箭头函数没有自己的this
  不能使用call apply bind改变this的指向
 */
let adder = {
  base: 1,
  add: function (a) {
    let f = v => v + this.base
    let b = {
      base: 3,
    }
    return f.call(b, a) //没有改变
  },
}
console.log(adder.add(1)) // 2
