var obj = {
  name: 'tom',
  sex: 'male',
  hobby: {
    major: 'football',
    other: 'paint'
  }
}
// 递归
var constantize = (obj) => {
  Object.freeze(obj)
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === 'object') {
      constantize(obj[key])
    }
  })
}
constantize(obj)
obj.hobby.other = 'eat'
console.log(obj,'obj') // 冻结之后不会报错，但改变值无效
