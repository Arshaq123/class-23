const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var box1;
var box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
   

     box1= new Box(200,200,40,40);
     box2= new Box(190,150,40,100);
     Garden= new Ground (200,380,400,10);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   
  
    box1.display();
    box2.display();
    Garden.display();
}

// class - blueprint - we will create a design/template and then create objects for it
