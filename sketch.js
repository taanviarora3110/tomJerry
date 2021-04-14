var canvas,bg;
var tom,jerry;
var tom1Img,tom2Img,tom3Img,tom4Img;
var jerry1Img,jerry2Img,jerry3Img,jerry4Img;

function preload() {
    //load the images here
    bg=loadImage("garden.png");
    tom1Img=loadImage("cat1.png");
    tom2Img=loadImage("cat2.png");
    tom3Img=loadImage("cat3.png");
    tom4Img=loadImage("cat4.png");
    jerry1Img=loadImage("mouse1.png");
    jerry2Img=loadImage("mouse2.png");
    jerry3Img=loadImage("mouse3.png");
    jerry4Img=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

 tom=createSprite(870,600);
 tom.addAnimation("tomSleeping", tom1Img);
 tom.scale=0.2;

 jerry=createSprite(200,600);
 jerry.addAnimation("jerryStanding", jerry1Img);
 jerry.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width/2))
{
    tom.velocityX=0;
tom.addAnimation("tomLastImg",tom4Img);
tom.x=300;
tom.scale=0.2;
tom.changeAnimation("tomLastImg");
jerry.addAnimation("jerryLastImg",jerry4Img);

jerry.scale=0.15;
jerry.changeAnimation("jerryLastImg");
}
keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown("left")) {
tom.velocityX=-5;
tom.addAnimation("tomRunning",tom2Img);
tom.changeAnimation("tomRunning");

jerry.addAnimation("jerryTeasing",jerry2Img);
jerry.frameDelay=25;
jerry.changeAnimation("jerryTeasing");
}
}









