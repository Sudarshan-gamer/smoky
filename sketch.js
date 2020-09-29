const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var car;
var bullet;
var wall,thickness;
var bullet,speed,weight;
function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

   
    thickness = random(22,83);
    
    weight = random(30,52);

    speed = random(223,321);

    wall = createSprite(1200,200,thickness,height/2);

    wall.shapeColor = color(80,80,80);
    
    }
   
function draw(){
    background(0);
    
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

 

 if(hascollided(bullet,wall))
 {
   bullet.velocityX = 0;

   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){
    wall.shapeColor = color(255,0,0);
}
if(damage<10){
    wall.shapeColor = color(0,255,0);
}
 
 }

}
 function hascollided (lbullet,lwall)
 {
 bulletrightedge = lbullet.x + lbullet.width;
 wallleftedge = lwall.x;

if(bulletrightedge>=wallleftedge)
 {
    return true
} 
    return false;
}

