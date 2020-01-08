//% weight=100 color=#4DA3FF icon="\uf437"
namespace lame {

  //% blockId=dancingBlock block="dancing %steps"
  //% weight=98 blockGap=8
  export function dancing(steps: number): void {
    basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
  }

}
