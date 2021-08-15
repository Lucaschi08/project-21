
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let Engine
let world;
var ball
var left;
var right;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(WindowWidth, WindowHeight);
	Engine.run(engine);
	world=engine.world;

	var ball_props={
		isStatic=false,
		restitution: 0.3,
		friction:0
		density:1.2

	}

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(75,375,10,ball_props)
	World.add(world, ball)

	ground=new Ground(width/2,670,width,20);
	right = new Ground(600,600,20,120);
  left = new Ground(1100,600,20,120);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  left.display();
  right.display();


  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05});
	}
}

