/*
Scrivere una funzione range. 
 -parametri: inizio (unmero intero), fine(numero intero)
 -output: un array di numeri dal numero inizio al numero fine.
 -TDD opzionale.
*/

//Test Driven Development (TDD)
[
    //range(1, 4) === [1,2,3,4]  javaScript ritorna false in questo caso.
    
    (JSON.stringify(range(1, 3)) == JSON.stringify([1,2,3])),
].every(n => n) || console.log('test of range failed');


//crea un array di numeri, dati come parametro un range di numeri.
function range (inizio, fine){
    var numbersArray = [];
    if(inizio < fine){
        for(var i = inizio; i < fine + 1; i++){
            numbersArray.push(i);
        }
        return numbersArray;
    } else {
        console.log('your first parameter is smaller then the second')
    }
}

console.log(range(1, 7));
