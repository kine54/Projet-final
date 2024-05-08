'use strict'
/*console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent="Contact Number"


///document.querySelector(".number").textContent="lo"

//si la chaine est vide on doit mettre value exmple

document.querySelector('.guess').value= 13*/

let secretNumber = Math.trunc(Math.random()*20)+1;
//;document.querySelector('.number').textContent=numberr

let score = 20;
let scoreEleve = 0;

 const autrMessage =function(message){
 document.querySelector('.message').textContent= message
 };


document.querySelector(".check").addEventListener('click',function(){
const guess  = Number( document.querySelector('.guess').value) 
 
//  console.log(guess, typeof guess)
   
 if(!guess){
        //document.querySelector('.message').textContent="Entrer un nombre Superieur à 0"
        autrMessage('Entrer un nombre\nSuperieur à 0')
    }
    else if(guess === secretNumber){ 
   // document.querySelector('.message').textContent="c'est le bon numero"
   autrMessage("c'est le bon numero")
    document.querySelector('.number').textContent=secretNumber
    
    document.querySelector('body').style.backgroundColor="#60b347"
    document.querySelector('.number').style.width="30rem"
    
    if(score >scoreEleve){
        scoreEleve = score
        document.querySelector('.highscore').textContent=scoreEleve
    }
    }
   
    //quand le guess est faux
    else if(guess !== secretNumber){
        if(score >0){
            // document.querySelector('.message').textContent=
            // guess > secretNumber? "le nombre est eleve": "le nombre est petit"
            autrMessage(guess > secretNumber? "le nombre est eleve": "le nombre est petit")
            score--
            document.querySelector('.score').textContent= score 
               }else{
                  // document.querySelector('.message').textContent="Tu as perdu la partie"
                   autrMessage("Tu as perdu la partie")
               }
            document.querySelector('body').style.backgroundColor="#FF0000"
    }
});
   
  // Quand le guess est elevé 

    // else if(guess > secretNumber){
    //     if(score >0){
    //  document.querySelector('.message').textContent="le nombre est eleve"
    //  score--
    //  document.querySelector('.score').textContent= score 
    //     }else{
    //         document.querySelector('.message').textContent="Tu as perdu la partie"
    //     }
    //  document.querySelector('body').style.backgroundColor="#FF0000"
    // }
    
    //quand le guess est petit

    // else if(guess < secretNumber){
    //     if(score >1){
    //         document.querySelector('.message').textContent="le nombre est petit"
    //         score--
    //         document.querySelector('.score').textContent= score 
    //            }else{
    //                document.querySelector('.message').textContent="Tu as perdu la partie"
    //            }
    //       document.querySelector('body').style.backgroundColor="#00F"     
    // }
   



document.querySelector('.again').addEventListener('click', function(){
   score = 20;
   secretNumber = Math.trunc(Math.random()*20)+1
  // document.querySelector('.message').textContent="Start guessing...."
  autrMessage('Start guessing....')
   document.querySelector('.score').textContent=score
   document.querySelector('.number').textContent="?"
   document.querySelector('.guess').value=""
   document.querySelector('body').style.backgroundColor="#222"
    document.querySelector('.number').style.width="15rem"
    document.querySelector('.highscore').textContent=0
});