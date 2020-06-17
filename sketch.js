const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world,engine,bob1,bob2,bob3,bob4,bob5,bob6,bob7;

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  

  top1 = new Top(480,80,400,40);
  
	bob1 =  new Bob (375,400,50); 
	bob2 =  new Bob (425,400,50);
	
  
  rope1 = new String (bob1.body,{x:320,y:100});
  rope2 = new  String  (bob2.body,{x:370,y:100});
  
	
  
}


function draw() {
    background(0);
  Engine.update(engine);
  rectMode(CENTER);
  background(100);
  Engine.update(engine);
  rope1.display();
  rope2.display();
  
  top1.display();
  bob1.display();
  bob2.display();
  
  
  


}



