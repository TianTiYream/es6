// 属性：size，表示成员数量
// 操作方法: add(value), delete(value), has(value), clear()
let s = new Set()
// add(value)返回加入值的Set数据结构
s.add(1).add(2).add(2)
console.log(s.add(1), s)
// delete(value)返回是否删除成功
console.log(s.delete(2), s.size)
console.log(s.delete(3), s.size)

let set = new Set()
set.add('width')
set.add('height')
if (set.has('width')) {
  console.log('has width')
}

// Array.from()可以将Set结构转化为数组
// 另一种去重方法
function dedupe(array) {
  return Array.from(new Set(array))
}
console.log(dedupe([1,2,2,3,4,3,1]))