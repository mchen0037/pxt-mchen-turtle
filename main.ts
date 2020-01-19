//% weight=100 color=#4DA3FF icon="\uf437"
namespace turtle {

    export function motorStop(): void {
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }

    export function motorForward(): void {
        pins.analogWritePin(AnalogPin.P1, 600)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, 600)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }

    export function motorBack(): void {
        pins.analogWritePin(AnalogPin.P1, 600)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P2, 600)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }

    export function motorRight(): void {
        pins.analogWritePin(AnalogPin.P1, 600)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, 600)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }

    export function motorLeft(): void {
        pins.analogWritePin(AnalogPin.P1, 600)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P2, 600)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }

    //% blockId=dancingBlock block="go forward %steps|steps"
    //% weight=98 blockGap=8
    export function forward(steps: number): void {
        motorForward()
        basic.pause(500 * steps * steps)
        motorStop()
    }

    //% blockId=backBlock block="go back %steps|steps"
    //% weight=98 blockGap=8
    export function back(steps: number): void {
        motorBack()
        basic.pause(500 * steps)
        motorStop()
    }

    //% blockId=rightTurnDegreesBlock block="turn right by %degrees|degrees"
    //% weight=98 blockGap=8
    export function rightTurnDegrees(degrees: number): void {
        motorRight()
        basic.pause(10 * degrees)
        motorStop()
    }

    //% blockId=rightTurnBlock block="turn right"
    //% weight=98 blockGap=8
    export function rightTurn(): void {
        rightTurnDegrees(90)
    }

    //% blockId=leftTurnDegreesBlock block="turn left by %degrees|degrees"
    //% weight=98 blockGap=8
    export function leftTurnDegrees(degrees: number): void {
        motorLeft()
        basic.pause(10 * degrees)
        motorStop()
    }

    //% blockId=leftTurnBlock block="turn left"
    //% weight=98 blockGap=8
    export function leftTurn(): void {
        leftTurnDegrees(90)
    }

    //% blockId=penUpBlock block="pen up"
    //% weight=98 blockGap=8
    export function penUp(): void {
        pins.servoWritePin(AnalogPin.P12, 0)
    }

    //% blockId=penDownBlock block="pen down"
    //% weight=98 blockGap=8
    export function penDown(): void {
        pins.servoWritePin(AnalogPin.P12, 180)
    }
}
pins.digitalWritePin(DigitalPin.P14, 1)

control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        turtle.motorForward()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        turtle.motorBack()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        turtle.motorLeft()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        turtle.motorRight()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP || control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP || control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP || control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        turtle.motorStop()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        turtle.penUp()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        turtle.penDown()
    }
})
