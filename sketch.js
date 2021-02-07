var background,backgroundimg;
var mouse,mouseShowingImg,mouseCallingani,mouseSearchingimg;
var cat,catSittingImg,catWalkingani,catCaughtimg;



function preload() {
   
backgroundimg=loadImage("images/garden.png");
mouseShowingImg=loadImage("images/mouse1.png");
catSittingImg=loadImage("images/cat1.png");


mouseCallingani=loadAnimation("images/mouse2.png","images/mouse3.png");
catWalkingani=loadAnimation("images/cat2.png","images/cat3.png");

mouseSearchingimg=loadImage("images/mouse4.png");
catCaughtImg=loadImage("images/cat4.png");

}
function setup(){
    createCanvas(1000,800);
   
    background=createSprite(150,300,800,800);
    background.addImage("background",backgroundimg);

    mouse=createSprite(105,540,20,20);
    mouse.addImage("mouseShowing",mouseShowingImg);
    mouse.scale=0.1;
   
    cat=createSprite(540,410,20,20);
    cat.addImage("catSitting",catSittingImg);
    cat.scale=0.1;
}

function draw() {

    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
    
      cat.velocityX=0;
      cat.velocityY=0;
      cat.addImage("catCaught",catCaughtImg);
      cat.x=175;
      cat.y=540;
      cat.changeImage("catCaught");

      mouse.addImage("mouseSearchinga",mouseSearchingimg);
      mouse.changeImage("mouseSearchinga");




    }
    

    drawSprites();


}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
   
    cat.velocityX=-4;
    cat.velocityY=1;
    cat.addAnimation("catWalking",catWalkingani);
    cat.changeAnimation("catWalking");

    mouse.addAnimation("mousecalling",mouseCallingani);
    mouse.changeAnimation("mousecalling");



  }
  

}
