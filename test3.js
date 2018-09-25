

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
 */

//dichiarazione delle variabili
var randomOneToTen = function() {return Math.floor((Math.random() * 10) + 1);};  //servono
var banchiere;
var player;

//la funzione gira due volte le carte. controlla che non superino il valore massimo 15, altrimenti lo porta a 0.
var giraCarte = function(){
    var primoGiro = randomOneToTen();
    var secondoGiro = randomOneToTen();
    var valoreCarte;
    if(primoGiro + secondoGiro <= 15){
        valoreCarte = primoGiro + secondoGiro;
        return "il valore delle carte è " + valoreCarte;
    }else{
        valoreCarte = 0;
    }
}

//la fuzione permette di giocare e confronta chi tra il giocatore ed il banco vince
var gioca = function(){
    banchiere = giraCarte();
    player = giraCarte(); 
    if(banchiere >= player){
        console.log("il banco vince"); 
    }else {
        console.log("il PLAYER VINCE");
    };
}
