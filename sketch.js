var fixedrec, movingrec;
var obj1,obj2;


function setup() {
  createCanvas(1200,800);
 fixedrec= createSprite (600,400,50,80);
fixedrec.shapeColor= "blue";
//fixedrec.debug = true;
movingrec=createSprite (400,200,80,30);
movingrec.shapeColor= "blue";
//movingrec.debug=true;
obj1= createSprite (10,20,10,20);
obj2=createSprite   (40,20,20,20);
obj1.ShapeColor="blue";
obj2.Shapecolor="blue";

}

function draw() {
  background(0,0,0);  
 movingrec.x= World.mouseX;
 movingrec.y=World.mouseY;

if(  isTouching (movingrec,obj1 ) ) {
  movingrec.shapeColor = "green";
    
  obj1.shapeColor = "green";
}
else {

  movingrec.shapeColor = "blue";
  obj1.shapeColor = "blue"; 
}  
 

drawSprites();

}
function isTouching  (object1,object2 ) { 
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object1.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {  
   return true;
    } 
  else {
  return false ;
  } 
} 





































