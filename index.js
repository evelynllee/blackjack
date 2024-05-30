// buttons
let startEl = document.getElementById("start-el");
let standEl = document.getElementById("stand-el");
let hitEl = document.getElementById("hit-el");

let messageEl = document.getElementById("message-el"); 
let usersCardsEl = document.getElementById("title-el");

// users cards
let sumEl = document.getElementById("sum-el");
let firstCardEl = document.getElementById("firstCard-el");
let secondCardEl = document.getElementById("secondCard-el");
let hitCardEl = document.getElementById("hitCard-el");


// dealers cards
let dealersSumEl= document.getElementById("dealersSum-el");
let dealersFirstEl= document.getElementById("dealersFirst-el");
let dealersSecondEl= document.getElementById("dealersSecond-el");
let dealersHitCardEl = document.getElementById("dealersHit-el")


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
let lessSeventeen = true;

standEl.style.display = 'none';
hitEl.style.display = 'none';


function start(){
    sum = first+second;

    firstCardEl.textContent = first
    secondCardEl.textContent = second
    dealersFirstEl.textContent = dealerCard1;

    standEl.style.display = 'block';
    firstCardEl.style.display = 'block';
    secondCardEl.style.display = 'block';
    dealersFirstEl.style.display = 'block';

    startEl.style.display = 'none';

    hitEl.style.display = 'block';
    sumEl.style.display = 'block';
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

    } else {
        messageEl.textContent = "BUST"
        standEl.style.display = 'none';
        hitEl.style.display = 'none';
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
        messageEl.textContent = ("dealer sum is under 17, picking a new card...");
        
        setTimeout(() => {
            dealerNew();
        }, 1000); 
    } else {
        updateDealerResult();
    }
    
    standEl.disabled = true;
    hitEl.disabled = true;

}

standEl.addEventListener('click', stand);

function updateDealerResult() {
    if (dealerSum > 21) {
        messageEl.textContent = "The dealer's sum is: " + dealerSum + ". Dealer busted, you win!";
    } else if (dealerSum > sum) {
        messageEl.textContent = "The dealer's sum is: " + dealerSum + ". You lose!";
    } else if (dealerSum == sum) {
        messageEl.textContent = "The dealer's sum is: " + dealerSum + ". It's a push!";
    } else {
        messageEl.textContent = "The dealer's sum is: " + dealerSum + ". You win!";
    }
}


function hit(){

    let hitCard = Math.floor(Math.random() * 10) + 1; 
    hitCardEl.textContent = "New Card: " + hitCard;
    hitCardEl.style.display = 'block';
    sum += hitCard;

    gameplay();


}

hitEl.addEventListener('click', hit)

function dealerNew() {
    while (dealerSum < 17) {
        let dealerNewCard = Math.floor(Math.random() * 10) + 1;
        dealerSum += dealerNewCard;
        dealersHitCardEl.textContent += dealerNewCard + " ";
        dealersHitCardEl.style.display = 'block';
    }
    dealersSumEl.textContent = "Dealer's Sum: " + dealerSum; // Update the sum after all cards are drawn
    updateDealerResult();
}

