// 改动1
// const FOO_KEY = Symbol.for('foo')

// 改动2
const FOO_KEY= Symbol('foo')

function A() {
  this.foo = 'hello'
}
// if (!global._foo) {
//   global._foo = new A()
// }

// module.exports = global._foo

// 改动1
if (!global[FOO_KEY]) {
  global[FOO_KEY] = new A()
}

module.exports = global[FOO_KEY]