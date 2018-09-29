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

//test driven development
[ nome(studente) === 'ivan'].every(isTrue) || console.log('name test failde');

var result = [];

for(i=0; i<students.length; i++){
    result.push(nome(students[i]));
}

console.log(result);
