const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

 
function preload() {
    backgroundImg = loadImage("Pinko.jpg");
}

function setup(){
    var canvas = createCanvas(680,700);
    engine = Engine.create();
    world = engine.world;




    ground = new Ground(600,height,1200,20);
    ground1 = new Div(600,height,10,500);
    ground2 = new Div(500,height,10,500);
    ground3 = new Div(400,height,10,500);
    ground4 = new Div(300,height,10,500);
    ground5 = new Div(200,height,10,500);
    ground6 = new Div(100,height,10,500);

    plinko1=new Plinko(200,200,80)

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  

  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  plinko1.display();
}
