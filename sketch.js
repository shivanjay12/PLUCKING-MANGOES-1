const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var dground, tree, treeing;
var boy, boyimg 
var stones;
var mango1, mango2, mango3, nango4, mangos5;

function preload(){
	treeing=loadImage("tree.png");
	boyimg=loadImage("boy.png");
}



function setup() { 
	createCanvas (1000, 650);

engine = Engine.create();
world = engine.world;

dground=new Ground();
stones= new Stone(100, 460,23);
 mango1=new Mango(600, 290, 34);
mango2=new Mango(855,325,35);
mango3=new Mango(670, 260,35);
 mango4=new Mango(730,200,35);
mango5=new Mango(710,320,36); 

attach=new Throw(stones.body,{x:100,y:465});

tree=createSprite(775,368);
tree.addImage(treeing);
tree.scale-2.42;

boy=createSprite(160,550);
boy.addImage(boyimg);
boy.scale=0.125;

Engine.run(engine);
}

function draw() {
 rectMode(CENTER);
 background("grey");

fill("black");
 textSize(18);

detectCollision(stones, mango1);
detectCollision(stones, mango2);
detectCollision(stones,mango3);
detectCollision(stones, mango4); 
detectCollision(stones, mango5);
	

drawSprites();

stones.display();
dground.display();
mango1.display();
mango2.display();
mango3.display();
mango4. display();
mango5.display();
}
function mouseDragged(){

	Matter.Body.setPosition(stones.body, {x:mouseX,y: mouseY});
}
	function mouseReleased(){
	attach.fly();
	}

	function detectCollision(stone,mango){
		mangoBodyPosition=mango.body.position
		mangoBodyPosition=stone.body.position

		var distance=dist(stone.body.position.x, stone.body.position.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<-mango1.r+stones.r){
		
			Matter.Body.setStatic(mango1.body,false)
		}
	}
function keyPressed(){
	if(keyCode===32){
		Matter.body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}

}
	