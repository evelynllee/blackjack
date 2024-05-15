let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!")
} else if (sum > 21) {
    console.log("You're out of the game!")
}