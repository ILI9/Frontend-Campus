//popola direttamente un altro array in base alle indicazioni della nostra funzione.
[1,2,3,4,5].map(function(n){
  return n*2;
});


//Filtra gli array in base alle indicazioni della nostra funzione.
[1,2,3,4,5].filter(function(n){
  return n>2;
});


//TDD. tutti i test che servono per testare il corretto funzionamento della functin.
[
  even(4) === true,
  even(5) === false
].every(n => n) || console.log('test of even failed');

//funzione numeri pari
function even (n){
  return n % 2 === 0;
}


//Test driven developement. qua scriviamo tutti i test. se la nostra funzione li passa vuol dire che è perfettamente a posto.
[
  abs(10) === 10,
  abs(9) === 9,
  abs(-10) === 10,
  abs(0) === 0,
].every(n => n) || console.log('test of even failed');

//funzine valore assoluto
function abs (n){
  return n < 0 ? -n : n;
}
