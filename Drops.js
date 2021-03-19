class Drops{

    constructor(x,y){
        var options = {
            
            "friction":0.0010,
            "restitution":0.1
        }
        this.body = Bodies.circle(x,y,6,options);
        this.radius = 6;
        World.add(world,this.body);



    }

    updateFunction(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,500), y:random(0,500)})
        }
    }
   

        displayDrop(){
            fill("blue")
            ellipseMode(CENTER);
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        }


    







}