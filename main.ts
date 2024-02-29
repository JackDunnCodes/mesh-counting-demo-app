input.onButtonPressed(Button.A, function () {
    broadcasting = 100
})
input.onButtonPressed(Button.B, function () {
    Rx = 1
    display = "Rx"
})
// Tap & hold icon, and shake to debug
input.onGesture(Gesture.Shake, function () {
    if (input.logoIsPressed()) {
        if (debug == 0) {
            serial.redirectToUSB()
            mesh.enableDebug()
            debug = 1
            music.play(music.stringPlayable("C D F G - - - - ", 1200), music.PlaybackMode.UntilDone)
        } else {
            music.play(music.stringPlayable("C5 - - B - - - - ", 1200), music.PlaybackMode.UntilDone)
        }
    } else {
        music.play(music.stringPlayable("- - - - - - - A ", 2500), music.PlaybackMode.UntilDone)
    }
})
let temp = ""
let display = ""
let Rx = 0
let debug = 0
let broadcasting = 0
broadcasting = -1
debug = 0
Rx = 0
basic.showIcon(IconNames.Asleep)
mesh.initRadio()
basic.showIcon(IconNames.Happy)
loops.everyInterval(1000, function () {
    if (broadcasting != -1) {
        broadcasting += 1
        display = convertToText(broadcasting)
        mesh.sendText(convertToText(broadcasting))
    } else if (Rx == 1) {
        temp = mesh.recv()
        if (temp != "") {
            display = temp
        }
    }
    basic.showString(display)
})
basic.forever(function () {
	
})
