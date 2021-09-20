const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;
var ball;
var blowerMouth;
var blower;




function setup() {
  createCanvas(800,400); 

  engine = Engine.create();
  world = engine.world;

  //ball = new Ball(200,100,20);
  blowerMouth = new BlowerMouth(350,270,150,20);
  //blowerMouth.mouseClicked(blow);
  blower = new Blower(490,250,150,90);


  var button = createButton("Click to Blow");
   button.position(width / 2 , height - 100);
   button.class("blowButton");
   button.mousePressed(blow);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  Engine.update(engine); 



 // ball.display();
   fill("Brown");
  blower.display();
  fill("Brown");
  blowerMouth.display();

 
 
  drawSprites();
}



function blow(){
 
 Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
  
}