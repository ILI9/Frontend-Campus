// let select = document.getElementById("orderSelect");

// select.addEventListener('change', function(){
//     alert(document.getElementById('orderSelect').value);
//     console.log(this);
// });
document.addEventListener("DOMContentLoaded", function(event) {


    var tiroA = 0,
        tiroB = 0,
        vittoriaConsA = 0,
        vittoriaConsB = 0,
        playerA = 0,
        playerB = 0;

    function getValue(value) {    
        return Math.round((Math.random() * value) + 1);
    }

    function playerA_Play(typeOfDice) {
        if (tiroA <= tiroB) {
            console.log("Lancio di A");


            playerA = getValue(typeOfDice);
            console.log(playerA);
            tiroA++;
            checkWinner();
        }
    }
    function playerB_Play(typeOfDice) {
        if (tiroB <= tiroA) {
            console.log("Lancio di B");
            playerB = getValue(typeOfDice);
            console.log(playerB);
            tiroB++;
            checkWinner();
        }
    }
    function checkWinner() {
        if (tiroA == tiroB) {
            if (playerA > playerB) {
                vittoriaConsA++;
                vittoriaConsB = 0;
                checkStreak(true);
            } else if (playerB > playerA) {
                vittoriaConsB++;
                vittoriaConsA = 0;
                checkStreak(false);
            } else {
                console.log("C'è stato un Pareggio");
                vittoriaConsA = 0;
                vittoriaConsB = 0;
            }
        }
    }
    function checkStreak(playerWinner) {
        if (playerWinner && vittoriaConsA != 2) {
            console.log("Ha vinto il player A.");
        } else if (!playerWinner && vittoriaConsB != 2) {
            console.log("Ha vinto il player B.");
        } else if (vittoriaConsA == 2) {
            vittoriaConsB++;
            vittoriaConsA = 0;
            console.log("Ha vinto il player B.");
        } else if (vittoriaConsB == 2) {
            vittoriaConsA++;
            vittoriaConsB = 0;
            console.log("Ha vinto il player A.");
        }
    }

    //function that stop animation
    function stopAnimation(){
        setTimeout(function(){
            document.getElementById("dado").classList.remove("animation");
        }, 3500);
    }

    //function that take dado element and run it on click 
    var dadoAnimation = function() {
        var p = document.getElementsByClassName("playBtn");

        for(var i = 0; i < p.length; i++){
            console.log();
            p[i].addEventListener('click', function(event){
                var dado = document.getElementById("dado").classList.add("animation");
                // launching right function
                console.log(this.getAttribute("data-player"));
                switch (this.getAttribute("data-player")) {
                    case "player01":
                        var typeOfDice = document.querySelector('[name="playerADice"]:checked').value;
                        console.log(typeOfDice);
                        playerA_Play(typeOfDice);
                    break;
                    case "player02":
                        var typeOfDice = document.querySelector('[name="playerBDice"]:checked').value;
                        console.log(typeOfDice);
                        playerB_Play(typeOfDice);
                        break;
                
                    default:
                        break;
                }

                stopAnimation();
            })
        }

    };

    dadoAnimation();

});