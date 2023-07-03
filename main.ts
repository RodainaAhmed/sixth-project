let Dice = 0
input.onButtonPressed(Button.A, function () {
    Dice = randint(1, 3)
    if (Dice == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (Dice == 2) {
        basic.showIcon(IconNames.TShirt)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
