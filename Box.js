class box {

constructor (x,y,width,height){

    var option = {
        restitution: 0.8,
        density: 1,
        friction: 3,
      }

  this.body = Bodies.rectangle(x,y,width,height,option);
  
  this.width = width;
  this.height = height;
    World.add(world,this.body);

}

display (){

var angle = this.body.angle

push();

rotate (angle)

translate (this.body.position.x ,this.body.position.y)
fill ("orange")
stroke ("black")
strokeWeight("3")
rectMode (CENTER)
rect ( 0,0,this.width, this.height );

pop();

}

}