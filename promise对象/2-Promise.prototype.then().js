// then(func1, func2) func1为resolve回调函数，func2为rejected回调函数
// 1. rejected状态
// const p = new Promise((resolve, reject) => {
//   reject('timeout')
// })
// p.then((msg) => {
//   console.log(msg)
// }, (rejection) => {
//   console.log(new Error(rejection))
// })
// 2. resolved状态
const p = new Promise((resolve, reject) => {
  resolve('resolved')
})
p.then((msg) => {
  console.log(msg)
}, (rejection) => {
  console.log(new Error(rejection))
})