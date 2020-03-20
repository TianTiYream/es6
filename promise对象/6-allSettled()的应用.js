// 所有异步操作都结束之后，无论状态是fulfilled还是rejected才会执行后面的操作
// 用于不关心异步操作结果，只关心操作是否结束的场景
// node 暂不能运行 ES2020引入
const promises = [1, 2, 3, 4].map((id) => {
  if (id === 3) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { reject(new Error('timeout'))}, 1000)
    })
  }
  return id
})

Promise.allSettled(promises).then((result) => {
  console.log('done')
})