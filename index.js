let firstcardEl = document.getElementById("firstcard-el")
let secondcardEl = document.getElementById("second-el")
let hasBlackJack = false
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let sum = 0;
let messageEl = document.getElementById("message-el")
let startEl= document.getElementById("start-el")


function start(){
    let firstCard = Math.floor(Math.random() * 12) + 1;
    firstcardEl.textContent = firstCard;
    cardsEl.textContent = firstCard;
    sum += firstCardEl;

    secondcardEl.textContent =  Math.floor(Math.random() * 12) + 1

    while (!hasBlackJack) {
        if (sum < 21) {
            messageEl.textContent = "Do you want to draw a new card?"
            while 

        } else if (sum === 21) {
            messageEl.textContent = "Wohoo! You've got Blackjack!"
            hasBlackJack = true;

        } else{
            messageEl.textContent = "You're out of the game!"
            hasBlackJack = true;
        }
    }
    startEl.disabled = true

}