// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode,Score,dist,push,pop,noFill,pipes,CENTER,createVector,keyIsDown,imageMode,circle,frameCount,key, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize *
*/
let lasers = [];
let laserVel = [];
function updateLasers() {
  for (var i = 0; i < lasers.length; i++) {

    //check bubble collisions
    for (var z = 0; z < dog.length; z++) {
      if (dist(lasers[i].x, lasers[i].y, dog[z].x, dog[z].y) < dogSize / 2) {
        dog[z] = createVector(random(0, width), random(0, height));
        dog[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
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

