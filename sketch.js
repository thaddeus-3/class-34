const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
var crane_img;
var bg;
function preload(){
  polygon_img=loadImage("Stone.png");
  crane_img=loadImage("Crane.png");
  bg=loadImage("city.jpg");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

 
  //level one
  block1 = new Block(300,375,30,40);
  block2 = new Block(330,375,30,40);
  block3 = new Block(360,375,30,40);
  block4 = new Block(390,375,30,40);
  block5 = new Block(420,375,30,40);
  block6 = new Block(450,375,30,40);
  //block7 = new Block(480,375,30,40);
  //level two
  block7 = new Block(300,335,30,40)
  block8 = new Block(330,335,30,40);
  block9 = new Block(360,335,30,40);
  block10 = new Block(390,335,30,40);
  block11 = new Block(420,335,30,40);
  block12 = new Block(450,335,30,40);
  
  //level three
  block113 = new Block(300,295,30,40);
  block114 = new Block(330,295,30,40);
  block13 = new Block(360,295,30,40);
  block14 = new Block(390,295,30,40);
  block15 = new Block(420,295,30,40);
  block116 = new Block(450,295,30,40);
  
  //top
  //block16 = new Block(390,255,30,40);
  block17 = new Block(300,255,30,40);
  block18 = new Block(330,255,30,40);
  block19 = new Block(360,255,30,40);
  block20 = new Block(390,255,30,40);
  block21 = new Block(420,255,30,40);
  block22 = new Block(450,255,30,40);
  //set 2 for second stand
  //level one


  //polygon holder with slings
  polygon = Bodies.circle(135,70,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:135,y:70});

}
function draw() {
  background(bg); 
 imageMode(CENTER)
 image(crane_img,50,200,250,450);
  //Engine.update(engine);
  

  ground.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  //block71.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block113.display();
  block114.display();
  block13.display();
  block14.display();
  block15.display();
  block116.display();
  fill("grey");
  //block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill("skyblue");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
