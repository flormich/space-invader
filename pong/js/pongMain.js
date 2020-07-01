"use strict";

var canvas;
var game;
var anim;
// var BallColor = "blue";

const PLAYER_HEIGHT = 70;
const PLAYER_WIDTH = 6;
const DIAM_BALL = 27;


document.addEventListener('DOMContentLoaded', function () {
     canvas = document.getElementById('canvas');
     //Evénement bouge
     canvas.addEventListener('mousemove', playerMove);
     game = {
         player: {
             y: canvas.height / 2 - PLAYER_HEIGHT / 2,
             score:0
         },
         computer: {
             y: canvas.height / 2 - PLAYER_HEIGHT / 2,
             score:0
         },
         ball: {
             x: canvas.width / 2,
             y: canvas.height / 2,
             r: DIAM_BALL,
             speed: {
                  x:2,
                  y:2
             }
         }
     }
     // draw(); 
     changeColor();
     // play();
     document.querySelector('#start-game').addEventListener('click', play);
     document.querySelector("#stop-game").addEventListener('click', stop);

     computerMove();
});

// document.querySelector('#start-game').addEventListener('click', play);
// document.querySelector("#stop-game").addEventListener('click', stop);

function play(){
     changeColor();

     computerMove();
     ballMove();
     requestAnimationFrame(play);

     // anim = requestAnimationFrame(play);
}

function stop(){
     cancelAnimationFrame(anim);
     // game.ball.x = canvas.width / 2;
     // game.ball.y = canvas.heifht / 2;
     // game.player.y = canvas.height /2 - PLAYER_HEIGHT /2;
     // game.computer.y = canvas.height /2 - PLAYER_HEIGHT / 2;

     //Reset speed
     // game.ball.speed.x = 2;
     // game.ball.speed.y = 2;

     //inot score
     // game.computer.score = 0;
     // game.player.score = 0;

     // document.querySelector('#computer-score').textContent = game.computer.score;
     // document.querySelector('#player-score').textContent = game.player.score;

     draw();
}

function playerMove(event) {
     // Get the mouse location in the canvas
     var canvasLocation = canvas.getBoundingClientRect();
     var mouseLocation = event.clientY - canvasLocation.y;
     game.player.y = mouseLocation - PLAYER_HEIGHT / 2;

     if (mouseLocation < PLAYER_HEIGHT / 2){
          game.player.y = 0;
     } else if (mouseLocation > canvas.height - PLAYER_HEIGHT / 2){
          game.player.y = canvas.height - PLAYER_HEIGHT;
     } else {
          game.player.y = mouseLocation - PLAYER_HEIGHT / 2;
     }
 }

function changeColor (){
     if (game.ball.x > canvas.width / 2){
          var colorBall = "blue";
          draw(colorBall);
     } else {
          var colorBall = "red";
          draw(colorBall);
     }
}

function draw(BallColor) {
     var context = canvas.getContext("2d");
     // var BallColor = "white";

     //Champs arrière
     context.fillStyle = "gray";
     context.fillRect(0, 0, canvas.width, canvas.height);

     //Dessin Ligne centrale
     context.strokeStyle= "white";
     context.beginPath();
     context.moveTo(canvas.width / 2, 0);
     context.lineTo(canvas.width / 2, canvas.height);
     context.stroke();

     //Dessin des Players
     context.fillStyle = 'yellow';
     context.fillRect(5, game.player.y, PLAYER_WIDTH , PLAYER_HEIGHT);
     context.fillRect(canvas.width - PLAYER_WIDTH - 5, game.computer.y, PLAYER_WIDTH, PLAYER_HEIGHT);

     //Dessin de la Ball
     // if (colorBall != ""){    
          context.beginPath();
          context.fillStyle = BallColor;
          context.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI * 2, false);
          context.fill();
     // }
}

function computerMove() {
     game.computer.y += game.ball.speed.y * 0.85;
}

function ballMove() {
     if (game.ball.y + DIAM_BALL > canvas.height || game.ball.y - DIAM_BALL < 0){
          game.ball.speed.y *= -1;
     }

     if (game.ball.x > canvas.width - PLAYER_WIDTH - DIAM_BALL - 5){
          collide(game.computer);
     } else if (game.ball.x < PLAYER_WIDTH + DIAM_BALL + 5) {
          collide(game.player);
     }

     game.ball.x += game.ball.speed.x;
     game.ball.y += game.ball.speed.y;
}

function collide(player){
     if (game.ball.y < player.y || game.ball.y > player.y + PLAYER_HEIGHT){
          // remet la balle au milieu
          game.ball.x = canvas.width / 2;
          game.ball.y = canvas.height /2;
          game.player.y = canvas.height /2 - PLAYER_HEIGHT /2;
          game.computer.y = canvas.height /2 - PLAYER_HEIGHT /2;

          //reset speed
          game.ball.speed.x = 1;
     } else {
          game.ball.speed.x *= -1.05;
          // changeDirection(player.y);
     }

     //reset score
     if (game.ball.x < player.x){
          game.computer.score ++;
          document.querySelector('#computer-score').textContent = game.computer.score;
     } else {
          game.player.score ++;
          document.querySelector('#player-score').textContent = game.player.score;
     }
}

function changeDirection(playerPosition){
     var impact = game.ball.y - playerPosition - PLAYER_HEIGHT /2;
     var ration = 100 / (PLAYER_HEIGHT /2);

     game.ball.speed.y = Math.round(impact * ration / 10);
}

document.addEventListener('DOMContentLoader', function () {
     canvas = document.getElementById('canvas');
});