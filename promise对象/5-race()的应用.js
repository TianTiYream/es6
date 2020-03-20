// 有一个为fulfilled状态，返回fulfilled的实例，有一个为rejected状态时，返回rejected的实例
// 返回率先改变状态的实例
const promises = [2, 3, 5, 7, 11, 13].map(function(id) {
  // id === 2时打印reason, 改为id === 11时打印result
  if (id === 2) {
    return new Promise((resolve, reject) => {
      reject(new Error('request timeout'))
    })
  }
  return id
})
Promise.race(promises).then(function(result) {
  console.log(result, 'result')
}).catch(function(reason) {
  console.log('reason', reason)
})