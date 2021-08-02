// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode,pipes,circle,frameCount,key, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize *
*/
let imgPosition,img;
let turPosX = 300;
let turPosY = 300;
function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0)
 image(img,145,155,150,100);
}
function preload() {
  img = loadImage("https://cdn.glitch.com/d125e789-8ed6-42c4-8d94-84907c5535a6%2Fcat%20head.png?v=1627945997503")
}
class Dog{
	constructor(xSpd, ySpd){
		this.x = turPosX;
		this.y = turPosY;
		this.xSpd = 12*xSpd;
		this.ySpd = 12*ySpd;
	}
	
	showSelf(){
		stroke(230, 255, 0);
		fill(230, 255, 0, 135);
		ellipse(this.x, this.y, 10);
	}
}