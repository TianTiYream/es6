// 魔术字符串是指代码中频繁出现的强耦合字符串
// 消除魔术字符串有利于代码维护
// function getArea(shape, options) {
//   let area = 0
//   switch(shape) {
//     case 'Triangle':
//       area = .5 * options.width * options.height
//       break
//   }
//   return area
// }
// 魔术字符串
// let area1 = getArea('Triangle', {width: 100, height: 100})
// console.log(area1)

// 改进
// let shapeType = {
//   triangle: 'Triangle'
// }
// 改进2，triangle只要求唯一值不要求具体值，可使用symbol类型
let shapeType = {
  triangle: Symbol()
}
function getArea(shape, options) {
  let area = 0
  switch(shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height
      break
  }
  return area
}
let area2 = getArea(shapeType.triangle, {width: 100, height: 100})
console.log(area2)