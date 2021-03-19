const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops=[]
var totalDrops=90

var walk1,walk2,walk3,walk4,walk5,walk6,walk7,walk8;

var thunderCreatedFrame=0;
var thunder, thunder1,thunder2,thunder3,thunder4;


function preload(){

    walking = loadAnimation("images/walk/walking_1.png","images/walk/walking_2.png","images/walk/walking_3.png","images/walk/walking_4.png","images/walk/walking_5.png","images/walk/walking_6.png","images/walk/walking_7.png","images/walk/walking_8.png",)

    
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    
}

function setup(){
    createCanvas(500,750);

    engine = Engine.create();
    world = engine.world;

    if(frameCount % 100 === 0){

        for(var i=0; i<totalDrops; i++){
            drops.push(new Drops(random(0,500), random(0,500)));
        }

    }

    man = createSprite(220,500)
    man.addAnimation("walking",walking)
    man.scale=0.5;
   
    umbrella = new Umbrella(235,390);
    
}

function draw(){
    Engine.update(engine);
    background("black")

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    
    for(var i = 0; i<totalDrops; i++){
        drops[i].displayDrop();
        drops[i].updateFunction()
       
        
    }


    drawSprites();
    
}   

