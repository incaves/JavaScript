// parseFloat 将字符串转换成浮点数
// 没有第二个参数 没有进制的概念

// 1. 忽略空格
console.log(parseFloat(' 2.3')); // 2.3

// 2. 有字符 前置
console.log(parseFloat('abc12')); // NaN

// 3.字符在后面 后置
console.log(parseFloat('12abc'));  // 12

// 4.小数点比较多 只保留一位
console.log(parseFloat('12.1.2')); // 12.1