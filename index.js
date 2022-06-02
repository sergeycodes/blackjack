//array to store all our values from our cards
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let isGameStarted = false
let message = ""

//gets the elements from the html so that we can change with new data
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

//create a player object that has name and chip value
let player = {
    name: "Serg",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $:" + player.chips


function startGame() {
    if(!isGameStarted){
        isAlive = true
        hasBlackJack = false
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
        isGameStarted = true
    }
}

//renders our game
function renderGame() {

    cardsEl.textContent = "Cards: ";

    //for loop to display all our cards in the array "cards"
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent+= cards[index] + " ";
        
    }

    sumEl.textContent = "Sum: " + sum


    //if-else statememts to find out if the total of the cards is above, equal to, or below 21
    if(sum < 21) {
        message = "Do you want to draw a new card?"

    } else if(sum === 21){
        message = "You got BlackJack!"
        hasBlackJack = true
        isGameStarted = false
    } else {
        message = "You lose :("
        isAlive = false
        isGameStarted = false
    }

    //updates our message on the screen with the results from our if-else statement
    messageEl.textContent = message
}

//draws a new card to the deck
function newCard() {
    if(isAlive && !hasBlackJack){
        let anotherCard = getRandomCard()
        sum += anotherCard
        cards.push(anotherCard)

        renderGame()
    }
}

//generate a random number between 1 and 13 using Math function
function getRandomCard() {
    //if number is 11-13 (jack, queen, or king) we change there value to 10
    let value = Math.floor(Math.random() * 13) + 1

    if(value === 1) {
        return 11
    } else if(value > 10){
        return 10
    }else{ 
        return value
    }
}

