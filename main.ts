input.onButtonPressed(Button.A, function () {
    Start = 1
})
input.onButtonPressed(Button.B, function () {
    Start = 0
})
let Start = 0
Start = 0
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    if (Start && input.lightLevel() > 5) {
        music.playMelody("D E D E C5 B - G ", 170)
    }
})
