const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;

var engine , world , obj1 ;
var obj2 ;

function setup() {
  createCanvas(1200,400);
  
engine = Engine.create ();
world = engine.world ;


box1 = new box (700,320,70,70);
box2 = new box (920,320,70,70);
G1 = new Ground (600,height,1200,10);
bird1 = new Bird(200,100);
pig1 = new Pig (810,350);
log1 = new log (810,260,300,PI/2);

box3 = new box (700,240,70,70);
box4 = new box (920,240,70,70);
pig2 = new Pig (810,220);

log2 = new log (810,180,300,PI/2);
box5 = new box (810,160,70,70);
log3 = new log (760,120,150,PI/7);
log4 = new log (870,120,150,-PI/7);
}

function draw() {
  background("yellow");  
  
Engine.update (engine);

box1.display();
box2.display();
G1.display();
bird1.display();
pig1.display();
log1.display();
log2.display();
pig2.display();
box3.display();
box4.display();
log3.display();
log4.display();
box5.display();

}