// Symbol类型值可传参添加描述，获取时必须显式转为字符串
// es2019增加Symbol.prototype.description方法，可直接获取描述
let s1 = Symbol('my foo')
console.log(s1.description) // 'my foo' node可能暂不支持，谷歌浏览器支持
console.log(s1.toString())