// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode,pipes,CENTER,keyIsDown,imageMode,circle,frameCount,key, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize *
*/
let imgPosition;
let cat;
let catX=300;
let catY= 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  keyPressed();
}

function draw() {
  background(0)
  imageMode(CENTER);
 image(cat,catX,catY,100,100);
}
function preload() {
  cat = loadImage("https://cdn.glitch.com/d125e789-8ed6-42c4-8d94-84907c5535a6%2Fcat%20head.png?v=1627945997503")
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    catY = catY - 5;
  }else if (keyCode === LEFT_ARROW){
    catX = catX - 5;
  }else if (keyCode === DOWN_ARROW){
    catY = catY+5;
  }else if (keyIsDown === RIGHT_ARROW){
    catX = catX+5;
  }
}
/*
if (keyIsDown(UP_ARROW)) {
    frogY -= frogSpeed;
  } else if (keyIsDown(LEFT_ARROW)) {
    frogX -= frogSpeed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    frogX += frogSpeed;
  } else if (keyIsDown(DOWN_ARROW)) {
    frogY += frogSpeed;
  } */