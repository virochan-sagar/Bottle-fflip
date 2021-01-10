var background1,backgroundimg,brushimg,bucketimg,soapimg,showerimg,bottleimg,handwashimg;

var obstraclesgroup;

var bottle1;

var invisibleground;

var score=0;

function preload(){
  backgroundimg=loadImage("tiles.jpg");
  brushimg=loadImage("brush rack.png");
  bucketimg=loadImage("bucket.png");
  soapimg=loadImage("soap image.png");
  showerimg=loadImage("bathtub2.png");
  bottleimg=loadImage("bottle1.png");
  handwashimg=loadImage("handwash.png")
}
function setup() {
  createCanvas(1600,800);
  background1=createSprite(width/2, height, width, 50);
  //background1.addImage(backgroundimg);
  background1.x=background1.width/2;
  //background1.velocityX=-6;
  //background1.scale=6;
  obstraclesgroup=new Group();
   bottle1=createSprite(150,400,50,50);
  bottle1.addImage(bottleimg);
  bottle1.scale=0.2;

  invisibleground=createSprite(width/2,400,width,5);
  invisibleground.visible=false
}

function draw() {
  background(255,255,255);
  if(background1.x<0){
    background1.x=background1.width/2;
   
  }  
  score=score+Math.round(getFrameRate()/60)
  textSize(18);
  text("score= "+score,width-300,40);
  bucketimg.scale=0.01;
  obstracles();

if(keyDown("space")){
  bottle1.velocityY=-2;
  bottle1.velocityX=0;
}
bottle1.velocityY=bottle1.velocityY+0.5;
bottle1.collide(invisibleground);
if(bottle1.isTouching(obstraclesgroup)){
  bottle1.velocityY=0;
  
}
  drawSprites();
}
function obstracles(){
  if(frameCount%100===0){
    var obstacle=createSprite(width,400,50,50);
    obstacle.velocityX=-4;
    var rand=Math.round(random(1,4));
    if(rand===1){

      obstacle.addImage(brushimg);

    }
    else if(rand===2){
      obstacle.addImage(bucketimg);

    }
    else if(rand===3){
      obstacle.addImage(soapimg);
    }
    else if(rand===4){
      obstacle.addImage(showerimg);
    }
    else{
      obstacle.addImage(handwashimg);
    }
obstraclesgroup.add(obstacle);
obstacle.depth=bottle1.depth
bottle1.depth=bottle1.depth+1
  }
  
}


