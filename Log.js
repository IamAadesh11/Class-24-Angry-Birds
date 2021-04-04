class log {

    constructor (x,y,height,angle){
    
        var option = {
            restitution: 0.8,
            density: 1,
            friction: 3,  
        }
    
      this.body = Bodies.rectangle(x,y,20,height,option);
      
    
      this.width = 20;
      this.height = height;

      
      Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    
    }
    
    display (){
    
    var angle = this.body.angle
    var po = this.body.position 
   
    
    push();
    
   
    
    translate (po.x ,po.y)
    rotate (angle)

    fill ("orange")
    stroke ("black")
    strokeWeight ("3") 
    rectMode (CENTER)
    rect ( 0,0,this.width, this.height );
    
    pop();
    
    }
    
    }