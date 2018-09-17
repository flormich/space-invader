keystate = {};
nbrmissile = {};
touche = {};

window.addEventListener('keydown', (e) => {
    keystate[e.key] = true;
});
window.addEventListener('keyup', (e) => {
    keystate[e.key] = false;
});


function run() {
    affectKey();
    sortieVaisseau();
    pressMissileGauche(event);
    // pressMissileGauche2(event);
    pressMissileDroit(event);
}


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
setInterval(run, 15);

// function pressMissileGauche(event) {
//     var i = 0;
//     if (keystate[" "] || keystate['5']) {
//         i += 1;
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
//         console.log("je suis ici" + i);
//     }
// }
// }

function pressMissileGauche(event) {
    // for (var i = 1; i < 6; i = i + 2) {
        if (keystate[" "] || keystate['5']) {
            if (missile1.display == "none") {
                missile1.vais.width = 5;
                missile1.display = "block";
                missile1.left = vaisseau.left;
                missile1.top = vaisseau.top;
                missile1.startAnimation(moveMissile, 15);
            }
        // }
    }
}

function pressMissileGauche2(event) {
    // for (var i = 1; i < 6; i = i + 2) {
        if (keystate[" "] || keystate['5']) {
            if ((missile3.display == "none") && (missile1.top == 100)) {
                missile3.vais.width = 5;
                missile3.display = "block";
                missile3.left = vaisseau.left;
                missile3.top = vaisseau.top;
                missile3.startAnimation(moveMissile, 15);
            }

        // }
    }
}


function pressMissileDroit(event) {
    // for (var i = 2; i <= 6; i = i + 2) {
        if (keystate[" "] || keystate['5']) {
            if ((missile2.display == "none") && (missile1.top == vaisseau.top + 500)) {
                missile2.vais.width = 5;
                missile2.display = "block";
                missile2.left = vaisseau.left + vaisseau.vais.width - 10;
                missile2.top = vaisseau.top;
                missile2.startAnimation(moveMissile, 15);
            }
            pressMissileGauche(event);
        // }
    }
}


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
            }, 700);
        }
    }
};