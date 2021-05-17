var tom,jerry,garden;
var tomImg,tomImg2,tomImg3,jerryImg,jerryImg2,jerryImg3,jerryImg4,jgardenImg;
var happy;

function preload() 
{
  gardenImg = loadImage("garden.png");

  tomImg = loadImage("cat1.png");
  tomAni2 = loadAnimation("cat2.png","cat3.png");
  tomImg3 = loadImage("cat4.png");

  jerryImg = loadImage("mouse4.png");
  jerryImg2 = loadImage("mouse3.png");
  jerryImg3 = loadImage("mouse1.png");
  jerryImg4 = loadImage("mouse2.png");

  happy = loadSound("happy.mp3");
}

function setup()
{
    createCanvas(1000,1000);
    
    garden = createSprite(500,500);
    garden.addImage("garden",gardenImg);

    tom = createSprite(860,722,400,400);
    tom.addImage("tom",tomImg);
    tom.setCollider("rectangle",tom.x,tom.y,tom.width/2,tom.height);
    tom.scale = 0.2;

    jerry = createSprite(110,722,400,400);
    jerry.addImage("jerry",jerryImg);
    jerry.setCollider("rectangle",jerry.x,jerry.y,jerry.width/2,jerry.height);
    jerry.scale = 0.1;
}

function draw() 
{

    background(255);

    keyPressed();

    if(tom.x - jerry.x < tom.width/2 + jerry.width/2)
    {
      tom.addImage("t3",tomImg3);
      tom.changeImage("t3");
      tom.velocityX = 0;

      jerry.addImage("j3",jerryImg3);
      jerry.changeImage("j3");
  
      happy.play();

    }

    drawSprites();
}


function keyPressed()
{
  jerry.addImage("j2",jerryImg2);
  jerry.changeImage("j2");

  tom.addAnimation("t2",tomAni2);
  tom.changeAnimation("t2");

  tom.velocityX = -3;

}




