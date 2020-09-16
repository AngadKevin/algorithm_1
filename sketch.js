var rect1,rect2;
var result;
function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "red";

  rect2 = createSprite(400,300,100,100);
  rect2.shapeColor = "red";

}

function draw() {
  background(0); 
  rect2.x = mouseX;
  rect2.y = mouseY;

  result = isTouching(rect1,rect2);
console.log (result);
  drawSprites();
}

