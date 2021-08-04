// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode,translate,rotate,p5,dist,distance,size,radians,catColor,force, heading,boostColor,Score,catVel,cat,dog,dogSize,dogVelocity,updatePlayer,updateDog,updateLasers,push,pop,CENTER,createVector,keyIsDown,imageMode,circle,frameCount,key, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize *
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
let touch;
let Score;
let catImg;
let dogImg;

function preload() {
  catImg = loadImage(
    "https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fcat%20head%20(1).png?v=1628115693478"
  );
  dogImg = loadImage(
    "https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2FUntitled.png?v=1628061819866"
  );
}

function setup() {
  createCanvas(400, 400);
  cat = createVector(width / 2, height / 2);
  catVel = createVector(0, 0);
  force = createVector(0, 0);
  size = 10;
  heading = 0;
  Score = 0;
  dog = [];
  dogVel = [];
  dogSize = 500;

  for (var i = 0; i < 5; i++) {
    dog.push(createVector(random(0, width), random(0, height)));
    dogVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
  }
}
function draw() {
  background(0);

  updatePlayer();
  updateBubbles();
  updateLasers();
}

function updateBubbles() {
  touch = false;
  for (var i = 0; i < dog.length; i++) {
    push();

    //dog to cat collisions
    if (dist(dog[i].x, dog[i].y, cat.x, cat.y) < dogSize / 3) {
      touch = true;
      console.log(touch);
    }

    dog[i].add(dogVel[i]);

    if (dog[i].x > width + dogSize / 2) {
      dog[i].x = 0;
    }
    if (dog[i].x < -dogSize / 2) {
      dog[i].x = 400;
    }
    if (dog[i].y > height + dogSize / 2) {
      dog[i].y = 0;
    }
    if (dog[i].y < -dogSize / 2) {
      dog[i].y = 400;
    }

    image(dogImg, dog[i].x, dog[i].y, dogSize);
    pop();
  }
}
function updateLasers() {
  for (var i = 0; i < lasers.length; i++) {
    //checks collisions
    for (var z = 0; z < dog.length; z++) {
      if (dist(lasers[i].x, lasers[i].y, dog[z].x, dog[z].y) < dogSize / 30) {
        dog[z] = createVector(random(0, width), random(0, height));
        dogVel[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
        Score++;
      }
    }
    lasers[i].add(laserVel[i]);

    push();
    stroke(132, 112, 255);
    //point(lasers[i].x,lasers[i].y);

    line(
      lasers[i].x,
      lasers[i].y,
      lasers[i].x + laserVel[i].x * 4,
      lasers[i].y + laserVel[i].y * 4
    );

    pop();
  }
}

function keyPressed() {
  if (keyCode == 32) {
    lasers.push(createVector(cat.x, cat.y));
    laserVel.push(p5.Vector.fromAngle(radians(heading)).mult(7));
  }
}
function updatePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    heading -= 6;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    heading += 6;
  }
  if (keyIsDown(UP_ARROW)) {
    force = p5.Vector.fromAngle(radians(heading));
    catVel.add(force.mult(0.2));
  }

  //contain player
  if (cat.x > 400) {
    cat.x = 0;
  }
  if (cat.x < 0) {
    cat.x = 400;
  }
  if (cat.y > 400) {
    cat.y = 0;
  }
  if (cat.y < 0) {
    cat.y = 400;
  }

  //updates player location
  catVel.mult(0.978);
  cat.add(catVel);
  //draws the player and lets it move
  push();
  translate(cat.x, cat.y);
  rotate(radians(heading));
  // draws the cat
  imageMode(CENTER);
  image(catImg, size / 2, size / 2);
  //draws the cat again
  imageMode(CENTER);
  image(catImg, size / 2, size / 2);
  //makes the score go in the corner
  pop();
  fill(255);
  text(Score, 25, 25);
}
