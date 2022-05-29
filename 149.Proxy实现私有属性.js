const userInfo = {
  _id: 123, // 一般有下划线的都是私有属性
  age: 12,
  getAllUsers() {
    console.log('获取所有用户的信息')
  },
  getUserById: userId => {
    console.log('根据用户的编号,查询指定的信息' + userId)
  },
  saveUser: userId => {
    console.log('保存用户信息')
  },
}
// 实现只能userInfo才可以访问这个私有属性
const proxy = new Proxy(userInfo, {
  // 读取私有属性
  get(target, prop) {
    // === _id
    if (prop[0] === '_') {
      // 表示是私有属性
      return null // 返回一个null
    }
    // 不是私有属性
    return target[prop]
  },
  // 修改私有属性
  set(target, key, value) {
    console.log('进入了set')
    if (key[0] !== '_') {
      // 不等于 下划线
      return (target[key] = value) // 不是私有属性可以修改
    }
  },
})
// get
console.log(proxy._id) // null
console.log(proxy.age) // 12
// set
proxy._id = 111
console.log(proxy._id) // null
