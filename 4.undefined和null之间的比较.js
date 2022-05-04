/**
 * 相同点
 */
// 1.只有一个唯一的字面值
undefined, null;
// 2.转换为布尔值都是false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
// 3.如果都转为对象 都会抛出一个TypeError的错误

// 4.undefined是 派生与 null的 在非严格模式下 true
console.log(undefined == null); // true 非严格模式下
console.log(undefined === null); // false 严格模式

/**
 * 不同点
 */
// 1.null是关键字 undefined其实是个全局变量(挂载到了window是)

// 2.typeof  null 返回的是 Objcet undefined返回undefined
console.log(typeof null); // objcet
console.log(typeof undefined); // undefined

// 3.数值转换时
console.log(undefined + 1); // undefined不能参加运算 结果为 NaN
console.log(null + 1); // null会转换为0 可以参与运算
