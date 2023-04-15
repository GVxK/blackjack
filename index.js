
let cards = [] // [] = array
let isAlive = false //boolean, condition 
let blackjack = false
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let newGameEl = document.getElementById("newgame-el")
newGameEl.disabled = false
let drawCardEl = document.getElementById("drawcard-el")
drawCardEl.disabled = true
let message = ""
let firstCard = 0
let secondCard = 0
let playerEl = document.getElementById("player-el")
let player = {
    name: vxk,
    chips: 190
}
playerEl.textContent = player.name + ": $" + player.chips
//New game button
function newGame() {    
    let firstCard = getRandomCard()
        if (firstCard === 1) {
            firstCard = 11
        } 
    let secondCard = getRandomCard()
     if (firstCard === 11  && secondCard === 11) {
        secondCard = 1
     }
    cards = [firstCard, secondCard] 
    sum = cards[0] + cards[1]

    renderGame()
}
//Game system 
function renderGame() {
    if (sum > 21) {
            isAlive = false
            newGameEl.disabled = false
            drawCardEl.disabled = true
            message = "Oh no! You lost"
        } else if (sum === 21) {
            isAlive = false
            newGameEl.disabled = false
            drawCardEl.disabled = true
            blackjack = true
            message = "Blackjack!"
        } else {
            isAlive = true
            newGameEl.disabled = true
            drawCardEl.disabled = false
            message = "Draw another card?"            
        }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    
    cardsEl.textContent = "Cards: "
        
    for (let i = 0; i < cards.length; i++){
            cardsEl.textContent += cards[i] + " "
        }
    
    }

//New Card button
function drawCard() {
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderGame()
}

//Random card function
function getRandomCard() {
    let randomCard = Math.floor(Math.random()*14)+1
    if (randomCard === 11) {
        return getAce()
    } else if (randomCard === 1) {
        return getAce()
    } else if (randomCard > 11) {
        return 10
    } else {
        return randomCard
    }
}
 
//Ace if
function getAce() {
    let ace = 11
    if ( sum + ace > 21) {
        return 1
    } else if ( sum + ace <= 21) {
        return 11
    }
}

  
