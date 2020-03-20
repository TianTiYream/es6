// 传入具有Iterator接口的参数，如数组
// 若都为fulfilled状态，返回promise实例数组，若有一个为rejected状态，返回第一个reject的实例
const promises = [2, 3, 5, 7, 11, 13].map(function(id) {
  if (id === 11) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('request timeout')), 2000)
    })
  }
  return id
})
Promise.all(promises).then(function(result) {
  console.log(result, 'result')
}).catch(function(reason) {
  console.log('reason', reason)
})