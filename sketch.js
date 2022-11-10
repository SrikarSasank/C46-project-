const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg_img
var player1
var player2
var player7
var playerimg

function preload() {
  bg_img = loadImage("./assets/bg.png");
 playerimg = loadImage("./assets/player.png")
}

function setup(){

canvas = createCanvas(1900,1000);
//player1 = new Player(1000,300,700,0,10)
//player2 = new Player(200,300,700,0,10)
//player3 = new Player(400,300,700,0,10)
//player4 = new Player(600,300,700,0,10)
//player5 = new Player(800,300,700,0,10)
//player6 = new Player(1200,300,700,0,10)

p1 = new Main_Plr(1400,500,1300,500,10)
player7 = createSprite(1400,400,10,10)

player7.addImage(playerimg)


}

function draw() {
  background("black");
  player7.x = player7.x+30
player7.velocityY = 1
  image(bg_img,0,0,windowWidth,windowHeight)
  
drawSprites()
 //player1.display()
 //player2.display()
 //player3.display()
 //player4.display()
 //player5.display()
// player6.display()
 //player1.velocity(-2,-3)
 p1.display()
}