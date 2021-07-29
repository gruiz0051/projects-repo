// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions. 
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let backgroundColor,balls;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  balls = [];
  for (let i = 0; i < 100; i++) {
    balls.push(new Ball());
  }
  
}

function draw() {
  background(backgroundColor);
  for(let ball of balls){
  ball.moveSelf();
  ball.showSelf();
  }
}

class Ball {
  constructor() {
    this.size = random(10, 20);
    // Make sure the ball fits fully onto the canvas.
    this.x = random(this.size/2, width-this.size/2);
    // At least some starting height.
    this.y = random(height-100);
    this.velocity = random(2);
    this.acceleration = random(1);
  }
  moveSelf() {
    // Increase y by velocity every moveSelf();
    this.y += this.velocity;
    
    // When at bottom edge, reverse the direction.
    if (this.y >= height - this.size/2) {
      //this.velocity *= -1;
      // Giving the bounce up a little less energy.
      // Multiplying by a little less every bounce.
      // this.velocity *= -0.97;
      // Subtracting 1 every bounce.
      this.velocity *= -1;
      if (this.velocity < -1) {
        this.velocity +=1;
      } else {
        this.velocity = 0;
      }
    } else if (this.velocity <= 10) {
        // Add constant Acceleration to velocity every moveSelf();
        this.velocity += this.acceleration;
    }
  }
  showSelf() {
    fill(0);
    ellipse(this.x,this.y,this.size,this.size);
  }
}