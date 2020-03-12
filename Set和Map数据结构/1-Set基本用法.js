// Set构造函数可传入具有Iterable方法的参数，例如数组
// Set构造函数生成的Set结构数据不重复，可用于去重
let s = new Set([1, 2, 2, 3])
// 数组去重
console.log(s, [...s], s.size)
// 字符串去重
console.log([...new Set('abcgdcandc')].join(''))

// Set加入数据时判断算法与===类似，区别为NaN与自身相等
let a = NaN
let b = NaN
s.add(a)
s.add(b)
console.log(s, s.size)

// 两个空对象不同
s.add({})
console.log(s, s.size)
s.add({})
console.log(s, s.size)