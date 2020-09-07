
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var world, engine, gamestate, lives;
var launcher1, slingshot,ground1, ground2;
var box2, box3, box4, box5, box01,box1, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	lives = 5;
	gamestate = "onsling";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 launcher1 = new Launcher(100 ,420);
	 slingshot = new Sling(launcher1.body,{x:100, y:420});	
	 ground1 = new Ground(510, 365);
	 ground2 = new Ground(900, 245);
	//obstacle1

	//ground lvl
	box1 = new Box(510, 325);
	box2 =new Box(540,325);
	box3 = new Box(570, 325);
	box4 = new Box(480, 325);
	box5 = new Box(450, 325);
	box6 = new Box(420, 325);
	box7 = new Box(600, 325);
	
	//lvl2
	box8 = new Box(450, 295);
	box9 = new Box(480, 295);
	box10 = new Box(510, 295);
	box11 = new Box(540, 295);
	box12 = new Box(570, 295);

	//lvl3
	box13 = new Box(480, 265);
	box14 = new Box(510, 265);
	box15 = new Box(540, 265);

	//lvl4
	box16 = new Box(510, 235);


	//obstacle2

	//ground lvl
	box01 = new Box(900, 215);
	box02 =new Box(900,215);
	box03 = new Box(900, 215);
	box04 = new Box(900, 215);
	box05 = new Box(900, 215);
	box06 = new Box(900, 215);
	box07 = new Box(900, 215);
	
	//lvl2
	box08 = new Box(900, 185);
	box09 = new Box(900, 185);
	box010 = new Box(900, 185);
	box011 = new Box(900, 185);
	box012 = new Box(900, 185);

	//lvl3
	box013 = new Box(900, 155);
	box014 = new Box(900, 155);
	box015 = new Box(900, 155);

	//lvl4
	box016 = new Box(900, 125);

	Engine.run(engine);
  
}


function draw() {
  background("blue");
//   console.log(slingshot.bodyA);
//   console.log(mouseY);

  launcher1.display();
  slingshot.display();
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  
  box01.display();
  box02.display();
  box03.display();
  box04.display();
  box05.display();
  box06.display();
  box07.display();
  box08.display();
  box09.display();
  box010.display();
  box011.display();
  box012.display();
  box013.display();
  box014.display();
  box015.display();
  box016.display();
	
  textSize(42);
  text(lives+" Lives left", 500, 40);

  if(lives === 0){
	  textSize(42);
	  text("Game Over", 500,90);
  }

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32 && gamestate === "launched" && lives>0){
		gamestate = "onsling";
		Matter.Body.setPosition(launcher1.body,{x:100, y:420});
		Matter.Body.setVelocity(launcher1.body, {x:0, y:0});
		slingshot.attach(launcher1.body);
		lives -=1;
	}
}

function mouseDragged(){
    if(gamestate !== "launched"){
   		Matter.Body.setPosition(launcher1.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gamestate = "launched"
}
