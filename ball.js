class Ball{
    constructor(x, y,r) {
        var options = {
          
            'friction':0.005,
            'density':1,
            isStatic: false
        }
    
        this.body = Bodies.circle(x, y,r/2,options)
        
        this.r = r;
      
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("purple");
        ellipse(0, 0, this.r,this.r);
        pop();
      }
}