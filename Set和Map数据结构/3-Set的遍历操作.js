// 扩展运算符与Set结合实现数组去重
let arr = [1, 2, 3, 2, 1]
console.log([...new Set(arr)])

// 数组的filter和map间接用于Set，可以实现取两个Set的并集、交集、差集，set的key与value相同
let set1 = new Set([1, 2, 3, 4])
let set2 = new Set([2, 4, 1, 5])
// 交集
let both = new Set([...set1].filter((value) => {
  return set2.has(value)
}))
console.log(both, 'both')
// 并集
let all = new Set([...set1, ...set2])
console.log(all, 'all')
// 差集
let diff = new Set([...set1].filter(item => !set2.has(item)))
console.log(diff, 'diff')

// 映入到原来的结构
let set3 = new Set([1, 2, 3])
// 1. 扩展运算符
let newSet3 = new Set([...set3].map(item => item * 2))
console.log(newSet3, 'newSet3')
// 2. Array.from(set)
let newSet4 = new Set(Array.from(set3).map(item => item * 3))
console.log(newSet4)