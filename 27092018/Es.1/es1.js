
/*
//ES_1


var studente = {
    nome:       'ivan',
    età:        19,
    occhiali:   true
}
var studente2 = {
    nome:       'marco',
    età:        19,
    occhiali:   true
}
var studente3 = {
    nome:       'paolo',
    età:        19,
    occhiali:   true
}

function nome (x){
    return x.nome;
}

// var nomeStudente = nome(studente);

// console.log(nomeStudente);

var students = [studente, studente2, studente3];


function isTrue(x){
    return x===true;
}


[ nome(studente) === 'ivan'].every(isTrue) || console.log('name test failde');

var result = [];

for(i=0; i<students.length; i++){
    result.push(nome(students[i]));
}

console.log(result);

*/



/*

[1,2,3,4,5].map(function(n){
  return n*2;
});


[1,2,3,4,5].filter(function(n){
  return n>2;
});

//test and example

[
  even(4) === true,
  even(5) === false
].every(n => n) || console.log('test of even failed');



function even (n){
  return n % 2 === 0;
}


//qua scriviamo tutti i test. se la nostra funzione li passa vuol dire che è perfettamente a posto
[
  abs(10) === 10,
  abs(9) === 9,
  abs(-10) === 10,
  abs(0) === 0,
].every(n => n) || console.log('test of even failed');



function abs (n){
  return n < 0 ? -n : n;
}

*/

/*scrivere una funzione range. 
 -parametri: inizio (unmero intero), fine(numero intero)

 -output: un array di numeri dal numero inizio al numero fine.

 - tdd opzionale.
*/


[
    //range(1, 4) === [1,2,3,4]  javaScript ritorna false in questo caso.
    
    (JSON.stringify(range(1, 3)) == JSON.stringify([1,2,3])),
    1 === 2
].every(n => n) || console.log('test of range failed');


var numbersArray = [];

function range (inizio, fine){
    if(inizio < fine){
        for(var i = inizio; i < fine + 1; i++){
            numbersArray.push(i);
        }
        return;
    } else {
        console.log('your first parameter is smaller then the second')
    }
}

range(15, 7);

console.log(numbersArray);
