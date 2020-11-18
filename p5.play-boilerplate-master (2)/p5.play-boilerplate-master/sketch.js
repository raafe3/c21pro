var bullet,wall,speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  speed = random (220,321);
  weight = random (30,52);
  thickness=random(22,83);
wall=createSprite(1200,200,thickness,height/2);
bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
 if(hascollided(bullet,wall))
 {
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
   if(damage>10){
     wall.shapeColor="red";
   }
   if(damage<10){
     wall.shapeColor="green";
   }
 }
  drawSprites();
}
function hascollided(B,W){
bulletrightEadge=B.x+B.width
wallleftEadge=W.x
if(bulletrightEadge>=wallleftEadge){
  return true
}
else {
  return false
}
}