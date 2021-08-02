// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode,pipes,imageMode,circle,frameCount,key, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize *
*/
let imgPosition;
let cat;
let turPosX = 300;
let turPosY = 300;

function setup() {
  createCanvas(640, 480);
  keyPressed();
}

function draw() {
  background(0)
  imageMode(Center);
 image(cat,width/2,height/2);
}
function preload() {
  cat = loadImage("https://cdn.glitch.com/d125e789-8ed6-42c4-8d94-84907c5535a6%2Fcat%20head.png?v=1627945997503")
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    cat.move(10);
  }else if (keyCode === LEFT_ARROW){
    cat.move(-10);
  }
}