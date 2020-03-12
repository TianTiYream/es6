// Singleton模式是指调用同一个类，任何时候返回的都是同一个实例
// global._foo = {
//   foo: 'world'
// }

// 改变1，依然可以改动global的值
// global[Symbol.for('foo')] = {foo: 'world'}
// 改动2，改变global不会造成影响，但是多次运行mod脚本生成的实例不同
global[Symbol('foo')] = {foo: 'world'}

const a = require('./mod.js')
console.log(a.foo)
