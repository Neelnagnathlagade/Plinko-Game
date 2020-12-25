const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events=Matter.Events;

var particles
var divisions

var particles=[]
var divisions=[]
var plinko=[]
var divisionHeight=300;

var ground;




function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,height,width,20)

  for(var k=0;k <=width; k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}

for(var u=75;u<=width;u=u+50){
plinko.push(new Plinko(u,75))
}

for(var u=50;u<=width-10;u=u+50){
  plinko.push(new Plinko(u,175))
  }

  for(var u=75;u<=width;u=u+50){
    plinko.push(new Plinko(u,275))
    }

    for(var u=50;u<=width-10;u=u+50){
      plinko.push(new Plinko(u,375))
      }
    
    

 
  //particles=new Particles();
 // divisions=new Division();
  



}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

  for(var u=0;u<plinko.length;u++){
    plinko[u].display();
  }

 


  ground.display();
  
  
  

  drawSprites();
}