class Resortera {
    constructor(bodyA,bodyB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:5
    }
    this.sling1 = loadImage ("sling1.png");
    this.sling2 = loadImage("sling2.png");
    this.sling3 = loadImage ("sling3.png");
    this.bodyB= bodyB;
    this.resortera = Constraint.create(options);
    World.add(world,this.resortera);
        
    }
    fly(){
        this.resortera.bodyA = null;
    }
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling1.bodyA){
            var pointA = this.sling1.bodyA.position;
            var pointB = this.bodyB;
            push();
            stroke(48,22,8);
            if(pointA.x<220){
               strokeWeight(7);
               line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
               line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
               image(this.sling3,pointA.x-30,pointA.y-10,15,30);
               

            }
            else{
                strokeWeight(3);
               line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
               line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
               image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
            pop();
        }
       
    }

}