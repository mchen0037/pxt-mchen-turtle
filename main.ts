//% weight=100 color=#4DA3FF icon="\uf437"
namespace turtle {

    export function motorStop(): void {
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(500)
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

    export function motorLeft(): void {
        pins.analogWritePin(AnalogPin.P1, 600)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, 600)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }

    export function motorRight(): void {
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
        basic.pause(100 * steps)
        motorStop()
    }

    //% blockId=backBlock block="go back %steps|steps"
    //% weight=98 blockGap=8
    export function back(steps: number): void {
        motorBack()
        basic.pause(100 * steps)
        motorStop()
    }

    //% blockId=rightTurnDegreesBlock block="turn right by %degrees|degrees"
    //% weight=98 blockGap=8
    export function rightTurnDegrees(degrees: number): void {
        motorRight()
        // after some testing, found that 1 second turn yields ~100 degrees.
        basic.pause(1000 * (degrees - 20) / 100)
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
        basic.pause(1000 * (degrees - 20) / 100)
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
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P12, 0)
        basic.pause(500)
    }

    //% blockId=penDownBlock block="pen down"
    //% weight=98 blockGap=8
    export function penDown(): void {
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P12, 90)
        basic.pause(500)
    }
}
pins.digitalWritePin(DigitalPin.P14, 1)
let uartData = ""
let connected = 0
bluetooth.startUartService()
basic.showString("hi")

bluetooth.onBluetoothDisconnected(function () {
    connected = 0
    basic.showIcon(IconNames.Sad)
})

bluetooth.onBluetoothConnected(function () {
    connected = 1
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
    while (connected == 1) {
        uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Colon))
        if (uartData == "up") {
            turtle.motorForward()
        } else if (uartData == "down") {
            turtle.motorBack()
        } else if (uartData == "left") {
            turtle.motorLeft()
        } else if (uartData == "right") {
            turtle.motorRight()
        } else if (uartData == "stop") {
            turtle.motorStop()
        } else if (uartData == "pDown") {
            turtle.penDown()
        } else if (uartData == "pUp") {
            turtle.penUp()
        } else {

        }
    }
})

input.onButtonPressed(Button.AB, function () {
    if (isPenDown == true) {
        turtle.penUp();
    }
    else {
        turtle.penDown();
    }
    isPenDown = !isPenDown;
})

let isPenDown = true;
turtle.penDown();

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
