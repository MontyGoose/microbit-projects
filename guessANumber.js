//set up variables
let guess: number // current guess
let highNumber: number
let lowNumber: number
let guessed: boolean  // have we guessed it yet?

// Initialise all the variables
start()

// Backgroup loop
basic.forever(() => {
    // if we've not got the right number
    while (!(guessed)) {
        
        //new guess
        guess = newGuess(highNumber, lowNumber)
        basic.showNumber(guess)

        //too high - press A
        input.onButtonPressed(Button.A, () => {
            highNumber = guess
        })

        //too low - press B
        input.onButtonPressed(Button.B, () => {
            lowNumber = guess
        })

        // just right - press both
        input.onButtonPressed(Button.AB, () => {
            guessed = true
        })
    }

    // we've got it ..
    while ((guessed)) {
        //show a smiley
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            # . . . #
            . # # # .
            `)
        
        // shake to restart
        input.onShake(() => {
            start()
        })
    }

})

// work out a new guess based on range
function newGuess(high: number, low: number) {
    return ((high - low) / 2) + low
}

// initialise all variables and show start message
function start() {
    guessed = false
    lowNumber = 0
    highNumber = 10
    basic.showString("Start")
}

