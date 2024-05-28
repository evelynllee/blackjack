let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let startEl = document.getElementById("start-el");
let standEl = document.getElementById("stand-el");
let hitEl = document.getElementById("hit-el");
let firstCardEl = document.getElementById("firstCard-el");
let secondCardEl = document.getElementById("secondCard-el");
let dealersSumEl= document.getElementById("dealersSum-el");
let dealersFirstEl= document.getElementById("dealersFirst-el");
let dealersSecondEl= document.getElementById("dealersSecond-el");
let hitCardEl = document.getElementById("hitCard-el")
let dealersHitCardEl = document.getElementById("dealersHitCard-el")

hitCardEl.style.display = 'none';

// dealer 
let dealerCard1 = Math.floor(Math.random() * 10) + 1;
let dealerCard2 = Math.floor(Math.random() * 10) + 1;

// user's cards
let first = Math.floor(Math.random() * 10) + 1;
let second = Math.floor(Math.random() * 10) + 1;


let sum = 0;
let dealerSum = dealerCard1+dealerCard2;
let hasBlackJack = false;
let bust = false;

standEl.style.display = 'none';
hitEl.style.display = 'none';


function start(){
    sum = first+second;

    firstCardEl.textContent = first
    secondCardEl.textContent = second
    dealersFirstEl.textContent = dealerCard1;


    standEl.style.display = 'block';
    hitEl.style.display = 'block';
    sumEl.style.display = 'block';
    firstCardEl.style.display = 'block';
    secondCardEl.style.display = 'block';
    dealersFirstEl.style.display = 'block';

    startEl.style.display = 'none';

    standEl.disabled = false;
    hitEl.disabled = false; 

    gameplay();

}

startEl.addEventListener('click', start)

function gameplay() {
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        messageEl.textContent = "Stand or hit?"

    } else if (sum === 21) {
        messageEl.textContent = "Wohoo! You've got Blackjack!"
        standEl.disabled = true;
        hitEl.disabled = true;

    } else{
        messageEl.textContent = "BUST"
        standEl.disabled = true;
        hitEl.disabled = true;
        dealersFirstEl.style.display = 'none';

    }
}


function stand(){
    standEl.style.display = 'none';
    hitEl.style.display = 'none';

    dealersSecondEl.textContent = dealerCard2;
    dealersSumEl.textContent = "Dealer's Sum: " + dealerSum;
    dealersSecondEl.style.display = 'block';
    dealersSumEl.style.display = 'block';


    if (dealerSum < 17){
        while (dealerSum < 17){
            dealerNew();
        }
    } else {
        if (dealerSum > 21){
        messageEl.textContent = ("The dealer's sum is: " + dealerSum + ". Dealer busted, you win!");
        } else if (dealerSum > sum){
            messageEl.textContent = ("The dealer's sum is: " + dealerSum + ". You lose!");
        } else if (dealerSum == sum){
            messageEl.textContent = ("The dealer's sum is: " + dealerSum + ". It's a push!");
        } else {
            messageEl.textContent = ("The dealer's sum is: " + dealerSum + " You win!");
        }
    }
    standEl.disabled = true;
    hitEl.disabled = true;

}

standEl.addEventListener('click', stand);

function hit(){

    hitCard = Math.floor(Math.random() * 10) + 1; 
    hitCardEl.textContent = "New Card: " + hitCard;
    hitCardEl.style.display = 'block';
    sum += hitCard;

    gameplay();


}

hitEl.addEventListener('click', hit)

function dealerNew(){
    let dealerNewCard = Math.floor(Math.random() * 10) + 1; 
    dealersHitCardEl.textContent = "New Card: " + dealerNewCard;
    dealersHitCardEl.style.display = 'block';
    dealerSum += dealerNewCard;
    dealersSumEl.textContent = "Dealer's Sum: " + dealerSum;

}