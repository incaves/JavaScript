var name = 'zs'
console.log(name);
let age = 18
console.log(age);

// 1.let声明的变量只在其代码块中生效
for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4 
}
console.log(i); // 5

for (let j = 0; j < 5; j++) {
    console.log(j); // 0 1 2 3 4
}
console.log(j); // 报错