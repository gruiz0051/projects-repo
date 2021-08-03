// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode,pipes,CENTER,keyIsDown,imageMode,circle,frameCount,key, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize *
*/
let imgPosition;
let score=0;
let started = false;
let cat;
let catX;
let catY;
let catXPos=100;
let catYPos=25;
let dog;
let dogXPos=100;
let dogYPos = 100;
let dogX = Math.floor(Math.random() * 300) + 50;
let dogY = 50;
let diameter = 500;
var xDogChange = 5;
var yDogChange = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  keyPressed();
}

function draw() {
  background(0)
  imageMode(CENTER);
 image(cat,catXPos,catYPos);
  image(dog,dogXPos,dogYPos, diameter,diameter);
  
  fill(0, 255, 255);
  textSize(24);
	text("Score: " + score, 10, 25);
  
  if (!started) {
    catX = windowWidth / 2;
    catY = windowHeight - 100;
    started = true;
  }
  
  dogX += xDogChange;
	dogY += yDogChange;
	if (dogX < diameter/2 || 
      dogX > windowWidth - 0.5*diameter) {
		xDogChange *= -1;
  }
	if (dogY < diameter/2 || 
      dogY > windowHeight - diameter) {
    yDogChange *= -1;
	}
  
  // Detect collision with paddle
  if ((dogX > catX &&
      dogX < catX + catXPos) &&
    (dogY + (diameter/2) >= catY)){
    xDogChange *= -1;
    yDogChange *= -1;
    score++;
  }

}
function preload() {
  cat = loadImage("https://cdn.glitch.com/d125e789-8ed6-42c4-8d94-84907c5535a6%2Fcat%20head.png?v=1627945997503")
  dog = loadImage("https://cdn.glitch.com/d125e789-8ed6-42c4-8d94-84907c5535a6%2Fdog%20head%20(1).png?v=1627949104971")
}                
function keyPressed(){
  if (keyCode === UP_ARROW){
    catY = catY - 5;
  }else if (keyCode === LEFT_ARROW){
    catX = catX - 5;
  }else if (keyCode === DOWN_ARROW){
    catY = catY+5;
  }else if (keyCode === RIGHT_ARROW){
    catX = catX+5;
  }
}

