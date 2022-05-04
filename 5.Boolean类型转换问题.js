/**
 * true false
 * 最多用于判断
 */

// 1.String 除了空字符串 其余都是true
console.log(Boolean('')); // false
console.log(Boolean('abc')); // true

// 2.Number 除了0和NaN是false 其余都是true
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(101)); // true

// 3.Objcet
// 除了null是false 其余都是true
console.log(Boolean(null)); // false

var obj = {};
console.log(Boolean(obj)); // true

var fun = function () {};
console.log(Boolean(fun)); // true
