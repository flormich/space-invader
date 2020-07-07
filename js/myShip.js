keystate = {};
nbrmissile = {};
touche = {};

window.addEventListener('keydown', (e) => {
    keystate[e.key] = true;
});
window.addEventListener('keyup', (e) => {
    keystate[e.key] = false;
});


// Activation du vaisseau
function run() {
    affectKey();
    sortieVaisseau();
    // pressMissileGauche();
    // pressMissileGauche(event);
    pressMissileGauche();
    // pressMissileGauche2();
    // pressMissileDroit();
    // krachShip();
}

// Affectation des cl�s
function affectKey() {
    // console.log(keystate);
    if (keystate['ArrowLeft']) {
        vaisseau.left -= dis_dep;
    }
    if (keystate['ArrowRight']) {
        vaisseau.left += dis_dep;
    }
    if (keystate['ArrowUp']) {
        vaisseau.top -= dis_dep;
    }
    if (keystate['ArrowDown']) {
        vaisseau.top += dis_dep;
    }
}
setInterval(run, 60);

// function pressMissileGauche(event) {
//     // var i = 0;
//     if (keystate[" "] || keystate['5']) {
//         var i = 1;
//         if (i < 10) {
//             var step = setInterval(function () {
//                 if (i < 10) {
//                     if (missile[i].display == "none") {
//                         missile[i].vais.width = 5;
//                         missile[i].display = "block";
//                         missile[i].left = vaisseau.left;
//                         missile[i].top = vaisseau.top + 15;
//                         missile[i].startAnimation(moveMissile, 15);
//                         i++;
//                     }
//                     step();
//                 }
//             }, 1500);
//         }
//     }
// }

// Fonction missile
function pressMissileGauche() {
    if (keystate[" "] || keystate['5']) {
        console.log ("Vaisseau = " + vaisseau.top);
        // for (i=0; i<5; i++){
        //     var missile = "missile" + i;
        //     console.log (missile);
            if ((missile1.display == "none")) {
                console.log ('Lancement missile 1');
                console.log (missile2.top);
                console.log ("\n");

                missile1.vais.width = 5;
                missile1.display = "block";
                missile1.left = vaisseau.left;
                missile1.top = vaisseau.top;
                missile1.startAnimation(moveMissile, 12);
            } else
            if (missile1.top <= (vaisseau.top - 50) && (missile2.display == "none")){
                console.log ("Lancement missile : 2");
                console.log (missile1.top);
                console.log ("\n");

                missile2.vais.width = 5;
                missile2.display = "block";
                missile2.left = vaisseau.left + vaisseau.vais.width - 10,
                missile2.top = vaisseau.top;
                missile2.startAnimation(moveMissile, 12);
            } else
            if (missile1.top <= (vaisseau.top - 100) && (missile3.display == "none")) {
                console.log ('Lancement missile 3');
                console.log (missile1.top);
                console.log ("\n");

                missile3.vais.width = 5;
                missile3.display = "block";
                missile3.left = vaisseau.left;
                missile3.top = vaisseau.top;
                missile3.startAnimation(moveMissile, 12);
            } else
            if (missile1.top <= (vaisseau.top - 150) && (missile4.display == "none")){
                console.log ("Lancement missile : 4");
                console.log (missile1.top);
                console.log ("\n");

                missile4.vais.width = 5;
                missile4.display = "block";
                missile4.left = vaisseau.left + vaisseau.vais.width - 10,
                missile4.top = vaisseau.top;
                missile4.startAnimation(moveMissile, 12);
            // } else
            // if (missile1.top <= (vaisseau.top - 200) && (missile5.display == "none")) {
            //     console.log ('Lancement missile 5');
            //     console.log (missile1.top);
            //     console.log ("\n");

            //     missile5.vais.width = 5;
            //     missile5.display = "block";
            //     missile5.left = vaisseau.left;
            //     missile5.top = vaisseau.top;
            //     missile5.startAnimation(moveMissile, 12);
            }
        // }
    }
}
 
// Fonction mouvement des missiles
function moveMissile(missile) {
    missile.top -= 7;
    if (missile.top < -0) {
        missile.stopAnimation();
        missile.display = "none";
    }
    for (var i = 1; i < 16; i++) {
        var ennemy = window["ennemy" + i];
        if (ennemy.display == "none") continue;
        if (missile.checkCollision(ennemy)) {
            missile.stopAnimation();
            missile.display = "none";
            ennemy.stopAnimation();
            ennemy.display = "none";
            explosion.vais.width = 60;
            explosion.display = "block"
            explosion.left = ennemy.left;
            explosion.top = ennemy.top;
 
            var explo_diss = setInterval(function () {
                explosion.display = "none";
                {
                    clearInterval(explo_diss);
                }
            }, 650);
        }
    }
};

// Fonction krach ship
function krachShip(ennemy) {
    // ennemy.top -= 7;
    // if (ennemy.top < -0) {
    //     ennemy.stopAnimation();
    //     ennemy.display = "none";
    // }
    for (var i = 1; i < 16; i++) {
        var ennemy = window["ennemy" + i];
        if (ennemy.display == "none") continue;
        if (ennemy.checkCollision(vaisseau)) {
            ennemy.stopAnimation();
            // missile.display = "none";
            // ennemy.stopAnimation();
            vaisseau.display = "none";
            ennemy.display = "none";
            explodeShip.vais.width = 60;
            explodeShip.display = "block"
            explodeShip.left = ennemy.left;
            explodeShip.top = ennemy.top;
 
            var explo_diss = setInterval(function () {
                explodeShip.display = "none";
                {
                    clearInterval(explo_diss);
                }
            }, 650);
        }
    }
    return;

    // console.log (explodeShip.left+ );
};
// console.log (explodeShip.top);
// console.log (explodeShip.left);