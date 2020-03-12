// symbol值可以显式转换为字符串，但不能隐式转换
let s1 = Symbol('foo')
// console.log(s1 + 'my sky') // 隐式转换
console.log(s1.toString()) // 显式转换1
console.log(String(s1)) // 显式转换2

// symbol值可以转换为布尔值
let s2 = Symbol('foo')
console.log(Boolean(s2))
console.log(!s2)

// symbol值不能与其他类型进行运算
// console.log(s2 + 'is my symbol')
// console.log(`${s2} is my symbol`)

// symbol值不能转换为数值型
let s3 = Symbol('my symbol')
// console.log(Number(s3))
// console.log(s3 + 2)