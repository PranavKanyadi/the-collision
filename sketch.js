var mov,sta


function setup() {
  createCanvas(800,400);
  mov=createSprite(400, 200, 50, 50);
  sta=createSprite(200,200,40,80);
  o1=createSprite(100,100,40,80);
  o2=createSprite(500,40,30,30);
  o3=createSprite(700,300,20,20);
  o4=createSprite(600,200,30,30);
  o5=createSprite(550,150,10,10);
  mov.shapeColor="green";
  sta.shapeColor="green";
  o1.shapeColor="green";
  o2.shapeColor="green";
  o3.shapeColor="green";
  o4.shapeColor="green";
  o5.shapeColor="green";
}

function draw() {
  background("black");  
  mov.x=mouseX;
  mov.y=mouseY;
  if(touch(mov,sta)){
    mov.shapeColor="red";
  sta.shapeColor="red";
    
  }
 

  else if(touch(mov,o1)){
    mov.shapeColor="red";
    o1.shapeColor="red";

  }

  else if(touch(mov,o2)){
    mov.shapeColor="red";
    o2.shapeColor="red";
  }
  else if(touch(mov,o3)){
    mov.shapeColor="red";
    o3.shapeColor="red";
  }
  else if(touch(mov,o4)){
    mov.shapeColor="red";
    o4.shapeColor="red";
  }
  else if(touch(mov,o5)){
    mov.shapeColor="red";
    o5.shapeColor="red";
  }
  else{
    mov.shapeColor="green";
    sta.shapeColor="green";
    o1.shapeColor="green";
    o2.shapeColor="green";
    o3.shapeColor="green";
    o4.shapeColor="green";
    o5.shapeColor="green";
  }
  drawSprites();
}


function touch(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 && object2.x-object1.x<object2.width/2+object1.width/2 &&object1.y-object2.y<object2.height/2+object1.height/2  && object2.y-object1.y<object2.height/2+object1.height/2 ){
    return true;

  }

  else{
   return false;
  }
}
