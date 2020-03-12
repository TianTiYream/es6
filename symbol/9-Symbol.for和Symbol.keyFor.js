// Symbol.for在全局登记，可相等
let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo')
console.log(s1 === s2) // true

// Symbol.keyFor获取全局登记过的Symbol值
let s4 = Symbol('bar')
let s3 = Symbol.for('bar')
console.log(Symbol.keyFor(s3), Symbol.keyFor(s4)) // bar undefined

// 全局环境不是指在全局环境运行
function foo() {
  // 不在全局环境下运行
  return Symbol.for('bar')
}
const x = foo()
const y = Symbol.for('bar')
console.log(x === y)

// Symbol.for()的这个全局登记特性，可以用在不同的 iframe 或 service worker 中取到同一个值
// 无法演示☆
// iframe = document.createElement('iframe')
// iframe.src = String(window.location)
// document.body.appendChild(iframe)

// iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo') // true

