var fixedRect,movingRect; 

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,30,80);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="red";
  movingRect.debug=true;

fixedRect.velocityY=+5;
movingRect.velocityY=-5;
}
 

function draw() {
  background(0,0,0); 
  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;
  
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) 
    { 
      movingRect.velocityX = movingRect.velocityX * (-1);
       fixedRect.velocityX = fixedRect.velocityX * (-1); 
      } 
      if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
        && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
        { movingRect.velocityY = movingRect.velocityY * (-1);
           fixedRect.velocityY = fixedRect.velocityY * (-1); 
          }
  drawSprites();
}