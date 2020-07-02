var life = 3;

reponse = prompt ("Votre vie", life);


if (reponse == 5){
     alert ("bonne réponse");
     document.querySelector('#ok').textContent = reponse;
} else {
     alert (reponse + " est une mauvaise réponses");
     document.querySelector('#nok').textContent = reponse;
}