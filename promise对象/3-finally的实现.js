// finallly的模拟
Promise.prototype.finally1 = function(callback) {
  let P = this.constructor
  return this.then(
    value => P.resolve(callback()).then(() => {
      console.log(value, 'value')
    }),
    reason => P.resolve(callback()).then(() => {throw reason})
  )
}
// 查看打印顺序，先打印123，再打印 2 'value'，所以finally的回调函数在promise内部的resolve及reject方法之前执行
Promise.resolve(2).then(() => {}, () => {})
Promise.resolve(2).finally1(() => {
  console.log('123')
})

