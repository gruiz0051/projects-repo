// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode,rotate,translate,push,p5,radians,touch,push,pop,noFill,pipes,CENTER,createVector,keyIsDown,imageMode,circle,frameCount,key, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize *
*/
var cat;
var size;
var heading;
var catVel;
var force;
var boostColor;
var touch;
var catColor;
var Score;
var Health;

function updatePlayer() {
  boostColor = color(0)
  //move and rotate player 
    
    if( keyIsDown(LEFT_ARROW)){
    heading -= 6;
    }
    if( keyIsDown(RIGHT_ARROW)){
    heading+= 6;
    }
    if(keyIsDown(UP_ARROW)){
    force= p5.Vector.fromAngle(radians(heading));
    catVel.add(force.mult(0.2));
      boostColor = color(0, 255, 0);
    }
  
  //contain player
  if(cat.x > 400){
    cat.x = 0
     }
  if(cat.x < 0){
    cat.x = 400
     }
 if(cat.y > 400){
     cat.y = 0
     }
 if(cat.y < 0){
   cat.y = 400 
     }


  
  //update player location
	catVel.mult(0.978);
  cat.add(catVel);
  //draw the player
  push();
  translate(cat.x , cat.y);
  rotate(radians(heading));
  //flame stuff
  
  fill(boostColor)
  cat(-size+2,size*.7,-size*3.5,size/7,size*-.7,-size*.7);
  //health
  

  fill(catColor);
  cat(-size+1, -size+1, size+1, 0, -size+1, size+1);
  pop();
  fill(255);
  text(Health,cat.x-10,cat.y+25)
 
  fill(255);
  text(Score,25,25);

}