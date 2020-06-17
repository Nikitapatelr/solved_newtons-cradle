class Bob {
  constructor(x,y,radius) {
    var options ={
      
        restitution:1,
        //isStatic:false,
        friction:0.3,
       
    }
    this.body = Bodies.circle(x,y,radius/2,options);
    this.radius = radius;

    World.add(world, this.body);
  }  

  display() {
    var pos =this.body.position;
    stroke(255);
    strokeWeight(4)
    fill("silver");
    ellipse(pos.x,pos.y,this.radius);
  }
}