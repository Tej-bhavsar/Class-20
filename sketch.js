var fixed, moving;


function setup() {
  createCanvas(800,400);
  fixed = createSprite(200,200,50,80);
  fixed.shapeColor = "Green";
  fixed.debug = true;
  moving = createSprite(400,200,80,30);
  moving.shapeColor = "blue";
  moving.debug = true;
  moving.velocityX = -3;
fixed.velocityX = 3;
}

function draw() {
  background(255,255,255);  
  //moving.x = World.mouseX;
  //moving.y = World.mouseY;
 // if(moving.x - fixed.x < fixed.width/2 + moving.width/2 && fixed.x - moving.x < fixed.width/2 + moving.width/2 &&
     //fixed.y - moving.y < fixed.height/2 + moving.height/2 &&
    //  moving.y - fixed.y < fixed.height/2 + moving.height/2){
   // moving.shapeColor = "red";
   // fixed.shapeColor = "red";
 // }
 // else{
   // moving.shapeColor = "blue";
  //  fixed.shapeColor = "green";
 // }

  if(moving.x - fixed.x < fixed.width/2 + moving.width/2 && fixed.x - moving.x < fixed.width/2 + moving.width/2)
  {
   moving.velocityX = moving.velocityX*(-1);
   fixed.velocityX = moving.velocityX*(-1);
 }
  drawSprites();
}