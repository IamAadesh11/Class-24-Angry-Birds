class Pig {

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
    var posi = this.body.position 
   
    
    push();
    
    rotate (angle)
    
    translate (posi.x ,posi.y)
    fill ("green")
    stroke ("black")
    strokeWeight ("3") 
    rect ( 0,0,this.width, this.height );
    
    pop();
    
    }
    
    }