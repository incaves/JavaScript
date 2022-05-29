/**
 * 数据校验
 */
class Person {
  constructor() {
    this.name = ''
    this.age = 19
    return validator(this, personValudators) // 调用
  }
}
// 校验规则
const personValudators = {
  name(val) {
    return typeof val === 'string'
  },
  age(val) {
    return typeof val === 'number' && val > 18
  },
}
// 校验方法
function validator(target, validator) {
  // target = Person
  // validator = personValudators
  return new Proxy(target, validator, {
    _validator: validator,
    set(target, key, value) {
      if (target.hasOwnProperty(key)) {
        // 访问的属性存在
        let vis = this._validator[key] // 根据属性名找到对应的检验方法 进行下面的校验
        // 根据校验规则返回的true或false 进入对应的判断
        if (vis(value)) {
          return Reflect.set(target, key, value)
        } else {
          throw new Error(`这个${key}年龄不符合要求`)
        }
      } else {
        // 访问的属性不存在
        throw new Error(`所访问的${key}不存在`)
      }
    },
  })
}
let person = new Person()
person.name = '张三'
person.age = ''
console.log(person)
