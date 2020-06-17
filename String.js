class String {
  constructor(body1,pointB)
{
    var options = {
    bodyA : body1,
    stiffness : 0.4,
    length : 350,
    pointB:pointB
}
this.string = Constraint.create(options);
World.add(world,this.string);
}
display(){

var pointA = this.string.bodyA.position;
var pointB = this.string.pointB;

strokeWeight(2);



strokeWeight(3)
stroke("white")
line(pointA.x,pointA.y,pointB.x,pointB.y);
}
  }
  