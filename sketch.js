const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var polygon;
var chain;
var gameState = "onsling";

function setup() {
  var canvas = createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  wall1 = new Ground(500,395,1000,10);
  wall2 = new Ground(995,200,10,400);
  wall3 = new Ground(500,4,1000,10);


  ground1 = new Ground(410,350,360,10);
  ground2 = new Ground(770,210,270,10);

  // level one
  block1 = new Box(285,315,20,40);
  block2 = new Box(326,315,20,40);
  block3 = new Box(367,315,20,40);
  block4 = new Box(408,315,20,40);
  block5 = new Box(449,315,20,40);
  block6 = new Box(490,315,20,40);
  block7 = new Box(531,315,20,40);

  // level two
  block8 = new Box1(326,275,20,40);
  block9 = new Box1(367,275,20,40);
  block10 = new Box1(408,275,20,40);
  block11 = new Box1(449,275,20,40);
  block12 = new Box1(490,275,20,40);

  // level three
  block13 = new Box2(367,240,20,40);
  block14 = new Box2(408,240,20,40);
  block15 = new Box2(449,240,20,40);

  // level four
  block16 = new Box3(408,195,20,40);

  // tower 2 level 1
  block17 = new Box(685,195,20,40);
  block18 = new Box(726,195,20,40);
  block19 = new Box(767,195,20,40);
  block20 = new Box(808,195,20,40);
  block21 = new Box(849,195,20,40);

  // level three
  block22 = new Box2(726,150,20,40);
  block23 = new Box2(767,150,20,40);
  block24 = new Box2(808,150,20,40);

  block25 = new Box1(767,120,20,40);

  polygon = new Ball(50,100,10);

  chain = new Slingshot(polygon.body,{x: 90,y: 160});


}

function draw() {
  background("lightBlue");  
  Engine.update(engine);

  //level one
  wall1.display();
  wall2.display();
  wall3.display(); 

  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //level two
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  // level three
  block13.display();
  block14.display();
  block15.display();

  // level four
  block16.display();
  
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();
  
  polygon.display();
  
  chain.display();

  drawSprites();
}

function mouseDragged (){
  if(gameState !== "launched"){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
  }
}

function mouseReleased(){
  chain.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    chain.attach(polygon.body);
  }
}
