// 1. 参数是一个Promise实例，原封不动返回
const p1 = new Promise((resolve, reject) => {
  // reject(new Error('timeout'))
  resolve('123')
})

let p1_1 = Promise.resolve(p1)
console.log(p1_1)

// 2. 不传参数，返回resolved状态(fulfilled)的Promise实例

const p2 = Promise.resolve()
console.log(p2)

// 3. 传一个非tenable对象或非对象，返回一个resolved状态的Promise实例，参数传给该实例的resolve()方法
const p3 = Promise.resolve('lilili')
p3.then((msg) => {
  console.log(msg)
})

// 4. 传一个thenable对象，返回一个Promise实例，并且立即执行参数对象的then()方法，变成resolved状态
const obj = {
  then: () => {
    console.log('thenable')
  }
}
let p4 = Promise.resolve(obj)