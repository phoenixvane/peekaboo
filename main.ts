input.onButtonPressed(Button.A, function () {
    Start = 1
})
input.onButtonPressed(Button.B, function () {
    Start = 0
})
let Start = 0
Start = 0
basic.forever(function () {
    basic.showNumber(led.brightness())
    if (Start && led.brightness() > 34) {
        music.playMelody("D E D E C5 B - G ", 170)
    }
})
