// Symbol唯一性可用于定义常量
const COLOR_RED = Symbol()
const COLOR_GREEN = Symbol()

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_RED
    case COLOR_GREEN:
      return COLOR_GREEN
    default:
      throw new Error('undefined color')
  }
}

console.log(getComplement(COLOR_GREEN))