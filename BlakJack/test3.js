

/* creazione minigioco */

/* Titolo: blackJack JS - EASY
 * Descrizione: Creazione di blackJack in javascript
 * Regole del blackJack: 
 *    STEP 1: 
 *          il banchiere gira 2 (non un valore indefinito) carte e somma i loro valori con limite di 15.
 *          Se la somma supera il 15 (non 21), il valore è 0.
 *    STEP 2: 
 *          il player gira 2 carte e somma i loro valori con limite di 15.
 *          Se la somma supera il 15 (non 21), il valore è 0.
 *    STEP 3:
 *          Controllo vincitore, chi ha ottenuto il valore più vicino a 15 è il vincitore.
 *          Se il banchiere e il player hanno lo stesso risultato, vince il banchiere 
 *
 

//variable declaration
var newDealer;
var newPlayer;
var dealerCard;

//functin random card from 1 to 10
function rndCard() {
    return Math.floor((Math.random() * 10) + 1);
}



//function dealer, turn up 2 cards. if the value is higher then 15 reset value to 0.
function play(){
    var somma = 0;
    for (var i = 0; i < 2; i++){
        somma += rndCard();
        if (somma > 15){
            somma = 0;
        }
    }
    return somma;
}

//check winner function. the highest card wins. if there is a draw, the dealer win.
function checkWinner(){
    newDealer = play();
    newPlayer = play();
    if(newDealer >= newPlayer){
        console.log('Dealer is the winner');
    }else {
        console.log('The Player win');
    }
}

checkWinner();
*/


/*
    ESERCIZIO ESEGUITO CON ANCHE L'HTML.
*/


function rndCard() {
    return Math.floor((Math.random() * 10) + 1);
}

//gives the right card based of your random number.
function rightCard(Card){
    var newCard = rndCard();
    var value = 0;
    switch (newCard) {
        case 1:
            document.getElementById(Card).src = 'media/deck/one.png';
            value = newCard;
            break;
        case 2:
            document.getElementById(Card).src = 'media/deck/two.png';
            value = newCard;
            break;
        case 3:
            document.getElementById(Card).src = 'media/deck/three.png';
            value = newCard;
            break;
        case 4:
            document.getElementById(Card).src = 'media/deck/four.png';
            value = newCard;
            break;
        case 5:
            document.getElementById(Card).src = 'media/deck/five.png';
            value = newCard;
            break;
        case 6:
            document.getElementById(Card).src = 'media/deck/six.png';
            value = newCard;
            break;
        case 7:
            document.getElementById(Card).src = 'media/deck/seven.png';
            value = newCard;
            break;
        case 8:
            document.getElementById(Card).src = 'media/deck/eight.png';
            value = newCard;
            break;
        case 9:
            document.getElementById(Card).src = 'media/deck/nine.png';
            value = newCard;
            break;
        case 10:
            document.getElementById(Card).src = 'media/deck/ten.png';
            value = newCard;
            break;
    }
    return value;
}


//pressing the turn card button of the dealer or the player, the function return the sum of the two cards. if the sum is higher then 15 the value get 0.
function turnCard(playerOrDealer, firstCard, secondCard, result){
    var value = 0;
    document.getElementById(playerOrDealer).addEventListener('click', function(e){
        //console.log(e.target);
    
       let one = rightCard(firstCard);
       let second = rightCard(secondCard);
       let sum = one + second;
       let playerResult = document.getElementById(result);
    
       if(sum > 15){
           playerResult.innerText = 0;
           value = sum;
       } else {
            playerResult.innerText = sum;
       }
       
    });
    console.log(value);
    return value;
    
}    

//initialize the dealer and player turn card buttons
var dealerTurnCard = turnCard('dealerTurnCard', 'firstCard', 'secondCard', 'dealerResut');
var playerTurnCard = turnCard('playerTurnCard', 'playerFirsCard', 'playerSecondCard', 'playerResult');

//function that checks the winner.
function checkWinner2() {
    document.getElementById('check-winner').addEventListener('click', function(e){
        console.log("GIRO");
        if (dealerTurnCard >= playerTurnCard){
            console.log(dealerTurnCard + 'sono il dealer ed ho vint figlio di puttana');
        } else {
            console.log('iuhuuuuuuu');
        }
    })
}
checkWinner2();