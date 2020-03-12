// Symbol函数可以接收一个字符串参数，表示标记，在使用时便于区分
let s1 = Symbol('foo')
let s2 = Symbol('bar')
console.log(s1, s2)

// 如果参数为其他数据类型，会调用其类型的toString()方法
let obj = {
  toString() {
    return 'abc'
  }
}
let s5 = Symbol(obj)
console.log(s5)

// 但即使接收的参数相同，值也不相等
let s3 = Symbol('foo')
let s4 = Symbol('foo')
console.log(s3 === s4)

