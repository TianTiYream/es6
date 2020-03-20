// const promise = new Promise(function(resolve, reject) {
//   if (/*异步操作成功 */) {
//     resolve(value)
//   } else {
//     reject(error)
//   }
// })

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     console.log(resolve, ms, 'done')
//   })
// }
// timeout(100).then(value => {
//   console.log(value)
// })

// Promise新建后就会立即执行
let promise = new Promise(function(resolve, reject) {
  console.log('Promise')
  resolve()
})
promise.then(function() {
  console.log('resolved.')
})
console.log('Hi!')
