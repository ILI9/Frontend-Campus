// creare attraverso una funzione array 5 cerchi
// ogni cerchio è un oggetto con le seguenti proprietà
/*

creare factory function che pusha nell'array un oggetto

{
    x: Number,
    y: Number,
    radius: Number 
}

in base ai parametri in ingresso

createCircle(x, y, radius) -> pusha oggetto circle nell'array vuoto iniziale 

usare un ciclo for per disegnare tutti i cerchi nel canvas
tutti i cerchi devono esser diversi e in posizioni diverse

*/




function setup() {
    createCanvas(640, 480);
    background(0);

    const size = 30;

   //array vuoto
    var arrayCerchi = [];


    //funz che popola l'array con un oggetto
    function createCircle(x, y, radius, radiu2){
        var circle = {
            x: x,
            y: y,
            radius: radius,
            radiu2: radiu2
        }
        arrayCerchi.push(circle);
    }


    //chiamarla 5 volte.
    for(var i = 0; i<=5; i++){
        createCircle(i*100, i*50, i*15, i*20);
    }

    console.log(arrayCerchi);

    for(var i = 0; i<= 5; i++){
        ellipse(arrayCerchi[i].x, arrayCerchi[i].y, arrayCerchi[i].radius, arrayCerchi[i].radiu2);
    } 
}




