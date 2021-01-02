var mov,sta


function setup() {
  createCanvas(800,400);
  mov=createSprite(400, 200, 50, 50);
  sta=createSprite(200,200,40,80);
  mov.shapeColor="green";
  sta.shapeColor="green";
}

function draw() {
  background("black");  
  mov.x=mouseX;
  mov.y=mouseY;
  if(mov.x-sta.x<sta.width/2+mov.width/2 && sta.x-mov.x<sta.width/2+mov.width/2 &&mov.y-sta.y<sta.height/2+mov.height/2  && sta.y-mov.y<sta.height/2+mov.height/2 ){
    mov.shapeColor="red";
  sta.shapeColor="red";

  }

  else{
    mov.shapeColor="green";
  sta.shapeColor="green";
  }
  drawSprites();
}