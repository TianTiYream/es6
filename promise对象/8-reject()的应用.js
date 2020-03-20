// 返回一个的Promise实例，与`resolve()`不同，参数都会传给该实例的reject()方法，执行后状态为rejected

// const obj = {
//   then: () => {
//     console.log(new Error('timeout'))
//   }
// }
// Promise.reject(obj)

const msg = new Error('timeout')
Promise.reject(msg)
