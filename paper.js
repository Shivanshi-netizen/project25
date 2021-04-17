class Paper
{
     constructor(x,y)
    { this.x= x;
      this.y=y;  
      this.paperWidth= 50;
      this.paperHeight= 50;

      this.image=loadImage("dustbingreen.png");

      var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0,
        'density':1.2,
    }
    this.body = Bodies.circle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    rect(0, 0, this.width, this.height);
    pop();
  }
}

