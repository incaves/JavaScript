function getSrtingValue(str) {
    switch (str) {
        case '1':
            console.log('a');
            break;
        case '2':
            console.log('b');
            break;
        case '3':
            console.log('c');
            break;
        case '4':
            console.log('d');
            break;
        default:
            console.log('e');
    }
}
getSrtingValue('2') // b
getSrtingValue('4') // d
// 采用的是严格模式相等 === 
getSrtingValue(3) // e
// 严格模式下比较时相同的(11.js有解释原因)
getSrtingValue(String('3')) // c
// 就变成了字符串对象了 比较的是内存地址
getSrtingValue(new String('3')) // e