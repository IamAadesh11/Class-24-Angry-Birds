class Bird {

constructor (x,y){

    var option = {
        restitution: 0.8
      }

  this.body = Bodies.rectangle(x,y,50,50,option);
  

  this.width = 50;
  this.height = 50;
    World.add(world,this.body);

}

display (){

var angle = this.body.angle
var pos = this.body.position 
pos.x = mouseX 
pos.y = mouseY 

push();

rotate (angle)

translate (pos.x ,pos.y)
fill ("red")
stroke ("black")
strokeWeight ("3") 
rectMode (CENTER)
rect ( 0,0,this.width, this.height );

pop();

}

}