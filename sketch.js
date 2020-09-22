//Global Variables
var jungle;
var monkey,mimage;
var stoneg,sim;
var fruitg,bim;
var score,time;
var play=1;
var over=0;
var ground,inground;
var gamestate=1;
var scene,sceneimage;

function preload(){
  
  mimage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  sim=loadImage("stone.png");
  
  bim=loadImage("banana.png");

  sceneimage=loadImage("jungle.png");
}

function setup() {
  createCanvas(600,300);
  scene=createSprite(100,100,200,50);
  scene.addImage(sceneimage);
  scene.scale=3;

  ground=createSprite(300,300,600,1);
  
  monkey = createSprite(50,240,50,50);
  monkey.addAnimation("mimage1",mimage);
  monkey.scale=0.2;
  monkey.collide(ground);

  fruitg=new Group();
  stoneg=new Group();
  
}


function draw(){
 background(55); 
  
 if(gamestate===1){
   scene.velocityX=-5;
   if(scene.x<0){
     scene.x=scene.width/1.5;
   }
  monkeyf();
  stonef();
  fruitf();
   
   time=Math.ceil(World.frameCount/World.frameRate);

 }
 
 
  
  if(gamestate==0){
    time=0;
    fill("yellow");
    stroke("yellow");
   // rect(45,5,110,30);
    monkey.velocityY=0;
    scene.velocityX=0;
  }
  drawSprites();

  stroke("black");
  textSize(20);
 text("TIME: "+ time,45,20);
}

function monkeyf(){
  
   if(keyDown("space") && monkey.y > 200){
      monkey.velocityY = -20 ;
    }
  
   
  if(fruitg.isTouching(monkey)){
  fruitg.destroyEach();
  score=score+20;
  }
  
   if(monkey.isTouching(stoneg)){
    fruitg.setVelocityXEach(0);
    fruitg.setVelocityYEach(0);
    
    stoneg.setVelocityXEach(0);
    stoneg.setVelocityYEach(0);
    
    stoneg.setLifetimeEach(-1);
     fruitg.setLifetimeEach(-1);
     
    gamestate=0;
  }
  
    monkey.velocityY = monkey.velocityY + 0.8;
 if(keyDown("space")==false) {
  monkey.collide(ground);
  
}

}

function fruitf(){
  
  background("yellow");
  
  text("TIME: "+ time,45,20);
  
  if(World.frameCount%150==0){
    
var banana=createSprite(650,random (260,90));
banana.addImage("Banana",bim);
banana.scale=0.1;
banana.velocityX=-4;

fruitg.add(banana);
fruitg.setLifetimeEach(120);
  
  }
  
}

function stonef(){
if(World.frameCount%100==0){
  
  var stone=createSprite(650,280);
  stone.addImage("Stone",sim);
  stone.scale=0.19;
  stone.velocityX=-8;

 stoneg.add(stone);
 stoneg.setLifetimeEach(80);
 
}
  }
