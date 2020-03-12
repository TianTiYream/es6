// Symbol唯一，作为属性名不会被覆盖
let mySymbol = Symbol()

// 第一种写法
let a = {}
a[mySymbol] = 'Hello'

// 第二种写法
// let a = {
//   [mySymbol]: 'Hello'
// }

// 第三种写法
// let a = {}
// Object.defineProperty(a, mySymbol, {value: 'Hello'})

// 以上写法都可得到同样结果
console.log(a[mySymbol])

// 注：
// 1.Symbol作为对象属性，不能使用.
// 2.Symbol用第二种写法时要加上[]，如 [mySymbol]