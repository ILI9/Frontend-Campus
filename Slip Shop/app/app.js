"use strict";

document.addEventListener("DOMContentLoaded", function(event) {

  
var event = new Event('end-fetch');

fetch('file.json')
 .then(function(response) {
   return response.json();
 })
 .then(function(myJson) {
  //  console.log(JSON.stringify(myJson));

   document.addEventListener('end-fetch', function(e){

     var persons = [];
     var cell = document.querySelectorAll('.col');

    // for(var i = 0; i < myJson.productList.persons.length; i++) {
    //      persons.push(myJson.productList.persons[i].name); 
    // }
    // console.log(persons);
    console.log(myJson.productList[0].name);

    
    // for (var i = 0; i < persons.length; i++){
    //   //create a new DIV
    //   var newDiv = document.createElement("div");
    //   // console.log(Number.isInteger((i+1) / 6));
      
    //   if (!Number.isInteger(i / 6)) {
    //     newDiv.className = 'riga';
    //     //populating Div with persons array
    //     newDiv.innerHTML = persons[i];
    //     //append  the child to the Div room.
    //     document.querySelector('.room').appendChild(newDiv);
    //   } else {
    //     newDiv.className = 'room';
    //     var newRoom = document.querySelector('.wrapper').appendChild(newDiv);
    //     var myDiv = document.createElement("div");

    //     myDiv.innerHTML = persons[i];
        
    //     myDiv.className = 'riga';
    //     newRoom.appendChild(myDiv);

    //   }
    // }
   }, false);

   document.dispatchEvent(event);

 });
});