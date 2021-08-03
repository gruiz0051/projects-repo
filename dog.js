// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode,touch,push,pop,noFill,pipes,CENTER,createVector,keyIsDown,imageMode,circle,frameCount,key, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize *
*/
//bubble variables
  var dog;
  var dogVelocity;
	var dogSize;
function updateDog(){
  touch = false;
for(var i = 0;i < dog.length;i++){
 push();
  
  //bubble collisions 
  if(dist(dog[i].x,bb[i].y,p.x,p.y) <dogSize/2 ){
  touch = true;
    console.log(touch);
  }
  //update bb locations
  dog[i].add(dogVelocity[i]);
 
  //contain bb
  //contain player
  if(dog[i].x > width+dogSize/2){
    dog[i].x = 0
     }
  if(dog[i].x < -dogSize/2){
    dog[i].x = 400
     }
 if(dog[i].y > height+dogSize/2){
    dog[i].y = 0
     }
 if(dog[i].y < -dogSize/2){
   dog[i].y = 400 
     }
  
  fill(132,112,255,45)
  stroke(255);
  ellipse(dog[i].x,dog[i].y,dogSize);
  pop();
}
  if(touch == true){
  catColor= color(255,0,0);
    Health --;
  }else{
  catColor = color(255);
  }

}
