var life = 3;

reponse = prompt ("Votre vie", life);


if (reponse == 5){
     alert ("bonne r�ponse");
     document.querySelector('#ok').textContent = reponse;
} else {
     alert (reponse + " est une mauvaise r�ponses");
     document.querySelector('#nok').textContent = reponse;
}