class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,60,options);
        this.radius = 60;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        fill("black")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y+70,200,200);
    }
}