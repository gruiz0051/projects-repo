// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode,pipes,frameCount,key, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize *
*/

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255,0,0)
}
class Cat{
  constructor(){
  this.size = 10;
    this.d = 30;
    this.x = 30;
    this.y = 30;
}

  showSelf(){
		noStroke();
		fill(0);
		ellipse(this.x, this.y, this.d );
  }
}