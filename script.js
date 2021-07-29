// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions. 
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let backgroundColor,ball;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  ball = new Ball();
  
}

function draw() {
  background(backgroundColor);
  ball.moveSelf();
  ball.showSelf();
}
class Ball{
  constructor(){
    this.x = 100;
    this.y = 10;
    this.velocity = 1;
    this.accerlartion=0.5;
    this.size = 20;
  }
 moveSelf(){
   this.y += this.velocity;
   //this.velocity += this.accerlartion;
   if(this.y > height - this.size/2){
     this.velocity *= -1;
   }else{
     this.velocity += this.accerlartion;
   }
 }
  showSelf(){
    fill(0);
    ellipse(this.x,this.y,20,20)
    
  }
}