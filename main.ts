//% weight=100 color=#4DA3FF icon="\uf437"
namespace turtle {

  //% blockId=dancingBlock block="go forward %steps|steps"
  //% weight=98 blockGap=8
  export function forward(steps: number): void {
    basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)

  }

  //% blockId=backBlock block="go back %steps|steps"
  //% weight=98 blockGap=8
  export function back(steps: number): void {
    basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)

  }

  //% blockId=rightTurnDegreesBlock block="turn right by %degrees|degrees"
  //% weight=98 blockGap=8
  export function rightTurnDegrees(degrees: number): void {
    basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
  }

  //% blockId=rightTurnBlock block="turn right"
  //% weight=98 blockGap=8
  export function rightTurn(): void {
    rightTurnDegrees(90)
  }

  //% blockId=leftTurnDegreesBlock block="turn left by %degrees|degrees"
  //% weight=98 blockGap=8
  export function leftTurnDegrees(degrees: number): void {
    basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)

  }

  //% blockId=leftTurnBlock block="turn left"
  //% weight=98 blockGap=8
  export function leftTurn(degrees: number): void {
    basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
  }

  //% blockId=penUpBlock block="penUp"
  //% weight=98 blockGap=8
  export function penUp(): void {
    basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)

  }

  //% blockId=penDownBlock block="penDown"
  //% weight=98 blockGap=8
  export function penDown(): void {
    basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)

  }

}
