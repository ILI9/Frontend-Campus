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
    createCanvas(800, 600);
    background(0);

    const size = 30;

    var emptyArray = [];

    function yourCircle(x, y, radius1, radius2){
        var cerhioILI = {
            x       : x,
            y       : y,
            radius1 : radius1,
            radius2 : radius2,
        }
        return emptyArray.push(cerhioILI);
    }

    for(var i = 0; i<= 5; i++){
        if (i < 3) {
            yourCircle(i * 30, i * 30, i * 25, i * 25);    
        } else {
            yourCircle(i * 100, i * 20, i * 22, i * 22);    
        }
        ellipse(emptyArray[i].x, emptyArray[i].y, emptyArray[i].radius1, emptyArray[i].radius2);
    }
}



