// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode,translate,rotate,triangle,dist,distance,size,radians,catColor,force, heading,boostColor,Score,Health,catVel,cat,p5,dog,dogSize,dogVelocity,updatePlayer,updateDog,updateLasers,push,pop,noFill,pipes,CENTER,createVector,keyIsDown,imageMode,circle,frameCount,key, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize *
*/
let dog;
let dogVel;
let dogSize;
let lasers = [];
let laserVel = [];
let cat;
let size;
let heading;
let catVel;
let force;
let boostColor;
let touch;
let catColor;
let Score;
let Health;
let catImg;
let dogImg;


function preload() {
 catImg = loadImage("https://cdn.glitch.com/d125e789-8ed6-42c4-8d94-84907c5535a6%2Fcat%20head.png?v=1627945997503")
 dogImg = loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2FUntitled.png?v=1628061819866")
}


function setup() {
  createCanvas(400, 400);
  cat=createVector(width/2,height/2)
  catVel=createVector(0,0);
  force=createVector(0,0);
  size = 5;
  heading = 0;
  boostColor = color(0, 255, 0);
  catColor = color(255);
  Score  =  0;
  Health = 200;
  dog = [];
  dogVel = [];
  dogSize = 500;
  
  
  
  for(var i = 0;i < 5;i++){
    dog.push(createVector( random ( 0,width ) ,random ( 0,height ) ) );
  dogVel.push( p5.Vector.random2D().mult(random(0.25,2.25)));
}
}
function draw() {
  background(0);

  updatePlayer();
  updateBubbles();
  updateLasers();
  

}



function updateBubbles(){
  touch = false;
for(var i = 0;i < dog.length;i++){
 push();
  
  //bubble collisions 
  if(dist(dog[i].x,dog[i].y,cat.x,cat.y) <dogSize/2 ){
  touch = true;
    console.log(touch);
  }
  //update bb locations
  dog[i].add(dogVel[i]);
 
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
  stroke(225);
  image(dogImg,dog[i].x,dog[i].y,dogSize);
  pop();
}
  if(touch == true){
  catColor= color(255,0,0);
    Health --;
  }else{
  catColor = color(255);
  }

}
function updateLasers() {
  for (var i = 0; i < lasers.length; i++) {

    //check bubble collisions
    for (var z = 0; z < dog.length; z++) {
      if (dist(lasers[i].x, lasers[i].y, dog[z].x, dog[z].y) < dogSize / 2) {
        dog[z] = createVector(random(0, width), random(0, height));
        dogVel[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
        Score ++;
      }
    }
    lasers[i].add(laserVel[i]);

    push();
    stroke(132, 112, 255);
    //point(lasers[i].x,lasers[i].y);

    line(lasers[i].x, lasers[i].y, lasers[i].x + laserVel[i].x * 4, lasers[i].y + laserVel[i].y * 4)

    pop();
  }
}

function keyPressed() {                  
  //console.log (keyCode); 
  if (keyCode == 32) {  
    //laserSound.play();
    lasers.push(createVector(cat.x, cat.y));
    laserVel.push(p5.Vector.fromAngle(radians(heading)).mult(7));


  }
}
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
    force=p5.Vector.fromAngle(radians(heading));
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
  //image(catImg,width/2,height/2);
  translate( cat.x , cat.y);
  rotate(radians(heading));
  //flame stuff
  
  fill(boostColor)
  image(catImg,-size+2,size*0.7,-size*3.5,size/7,size*-.7,-size*.7);
  //triangle(catImg,-size+2,size*.7,-size*3.5,size/7,size*-.7,-size*.7);
  //health
  

  fill(catColor);
  image(catImg,-size+2,size*0.7,-size*3.5,size/7,size*-.7,-size*7);
  //triangle(catImg,-size+1, -size+1, size+1, 0, -size+1, size+1);
  pop();
  fill(255);
  //text(Health,cat.x-10,cat.y+25)
 
  fill(255);
  text(Score,25,25);

}