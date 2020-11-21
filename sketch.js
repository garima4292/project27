
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1,bob1,bob2,bob3,bob4,bob5,bob6;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bob1 = new BOB(210,400);
	bob2 = new BOB(270,400);
	bob3 = new BOB(330,400);
	bob4 = new BOB(390,400);
	bob5 = new BOB(450,400);
	bob6 = new BOB(510,400);

	roof1 = new ROOF(365,200);

	rope1=new ROPE(bob1.body,roof1.body,-150,0);
	rope2=new ROPE(bob2.body,roof1.body,-90,0);
	rope3=new ROPE(bob3.body,roof1.body,-35,0);
	rope4=new ROPE(bob4.body,roof1.body,25,0);
	rope5=new ROPE(bob5.body,roof1.body,90,0);
	rope6=new ROPE(bob6.body,roof1.body,150,0);
  
}


function draw() {

  background("aquamarine");
  Engine.update(engine);
 
  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0});
		
	}	
}


