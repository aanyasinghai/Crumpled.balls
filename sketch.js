
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1,box2,box3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	

	paper = new Paper(130,600,50,50);

	box1 = new Box(500,680,220,20);
	box2 = new Box(400,650,20,70);
	box3 = new Box(600,650,20,70);
	
	ground = new Ground(350,700,800,20);

	Engine.run(engine);
}

function draw() {
  background(0);
  
  //Engine.update(engine);

  ground.display();

  paper.display();

  box1.display();
  box2.display();
  box3.display();


}

function keyPressed(){
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}