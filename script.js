// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions. 
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */
let bird;

function Bird(){
  this.y = height/2;
  this.x = 64;
  
  this.gravity = 1;
  this.velocity=0;
  
  this.show = function(){
    fill(255);
    ellipse(this.x,this.y,32,32);
  }
  
  this.update=function(){
    this.velocity += this.gravity;
    this.y += this.velocity;
    
    if(this.y > height){
      this.y=height;
      this.velocity=0;
    }
    if(this.y < height){
      this.y=height;
      this.velocity=0;
    }
  }
}

function setup() {
  createCanvas(400,600);
  bird = new Bird();
  
}

function draw() {
  background(0);
  bird.update();
  bird.show();
}  