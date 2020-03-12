// symbol属性用getOwnPropertySymbols获取
// const obj = {}
// let a = Symbol('a')
// let b = Symbol('b')
// obj[a] = 'Hello'
// obj[b] = 'World'
// const objectSymbols = Object.getOwnPropertySymbols(obj)
// console.log(objectSymbols)

// 对比
// const obj = {}
// const foo = Symbol('foo')
// obj[foo] = 'bar'
// for (let i in obj) {
//   console.log(i)
// }
// console.log(Object.getOwnPropertyNames(obj), 'getOwnPropertyNames')
// console.log(Object.getOwnPropertySymbols(obj), 'getOwnPropertySymbols')

// 另一个API,Reflect.ownKeys会返回所有类型键名，包括Symbol型
// const obj = {
//   [Symbol('a')]: 'Hello',
//   enum: 2,
//   noenum: 3
// }
// console.log(Reflect.ownKeys(obj), 'ReflectKey')

// 由于Symbol属性不能被常规方法遍历到，所以可用于定义非私有的用于内部的方法
let size = Symbol('size')
class Collection {
  constructor() {
    this[size] = 0
  }
  add(item) {
    this[this[size]] = item
    this[size]++
  }
  static sizeOf(instance) {
    return instance[size]
  }
}
let x = new Collection()
console.log(Collection.sizeOf(x), 'xSize')

x.add('foo')
console.log(Collection.sizeOf(x), 'xSize2')

console.log(Object.keys(x))
console.log(Object.getOwnPropertyNames(x))
console.log(Object.getOwnPropertySymbols(x))
