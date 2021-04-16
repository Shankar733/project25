 var paperObject,ground,dustbin

 var line1,line2,line3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
//  World.add(world, ground);
//	ground.shapeColor=color(255,0,0);

	line1=createSprite(600,665,160,20)
	line2=createSprite(515,570,20,200)
	line3=createSprite(685,570,20,200)

	

	ground=new Ground(400,680,800,20);
	dustbin=new Dustbin(600,550,200,250);
	paperObject=new Paper(90,600,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  

  paperObject.display()
  ground.display()
  dustbin.display()
  
  drawSprites();
 
}

function keyPressed(){
	console.log('keyPressed');
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:250,y:-500});
	}

}

