var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;


var bg;

var astronaut1,astronaut1Anim;
var astronaut2,astronaut2Anim;
var astronaut3,astronaut3Anim;
var astronaut4,astronaut4Anim;
var cars = [astronaut1,astronaut2,astronaut3,astronaut4];

function preload(){
  astronaut1Anim = loadAnimation("./Assets/Images/running 2.png","./Assets/Images/Running 3.png","./Assets/Images/Running.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  astronaut1 = createSprite(400,400);
  astronaut1.addAnimation("jwefjhe", astronaut1Anim);

  astronaut2 = createSprite(400,400);
  astronaut2.addAnimation("jwefjhe", astronaut1Anim);

  astronaut3 = createSprite(400,400);
  astronaut3.addAnimation("jwefjhe", astronaut1Anim);

  astronaut4 = createSprite(400,400);
  astronaut4.addAnimation("jwefjhe", astronaut1Anim);


  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
