// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode,floor,updateBullDog,translate,rotate,p5,dist,distance,size,radians,catColor,force, heading,boostColor,Score,catVel,cat,dog,dogSize,dogVelocity,updatePlayer,updateItems,updateDog,updateLasers,push,pop,CENTER,createVector,keyIsDown,imageMode,circle,frameCount,key, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize *
*/
let dog;
let dogVel;
let dogSize;
let items;
let itemsVel;
let itemsSize;
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
let dogImg=[];
let itemsImg=[];

function preload() {
  itemsImg[0] = loadImage(
    "https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-paw.png?v=1628204980130"
  );
  itemsImg[1] = loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-beef.png?v=1628206490731");
   itemsImg[2]= loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-bells.png?v=1628206493107");
  itemsImg[3] = loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-chicken.png?v=1628206497309");
  itemsImg[4] = loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-feather-whip.png?v=1628206500981");
  itemsImg [5] = loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-fur-ball.png?v=1628206505320");
  itemsImg[6] = loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-golden-catnip.png?v=1628206511372");
  itemsImg[7] = loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-golden-claw.png?v=1628206515199");
  itemsImg [8] = loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-tuna.png?v=1628206520920");
  itemsImg[9] = loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-yarn.png?v=1628206526209");

  catImg = loadImage(
    "https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-cat.png?v=1628119192338"
  );
  dogImg[0] = loadImage(
    "https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-chihuahua.png?v=1628119285299"
  );
  dogImg[1] = loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-french-bulldog.png?v=1628202303100");
  
  
  dogImg[2]= loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-rottweiler.png?v=1628202853963");

  dogImg[3]= loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-poodle%20(1).png?v=1628203327100");
   
  dogImg[4] = loadImage("https://cdn.glitch.com/79734bfa-f2b6-44e5-8e37-8d5047523bc8%2Fpixel-great-dane.png?v=1628203417931");
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
  dogSize = 35;
  //r = floor(random(0, dogImg.length));
  items = [];
  itemsVel = [];
  itemsSize = 25;

  
// declares the vector(direction) they are going 
  for (var i = 0; i < 5; i++) {
    dog.push(createVector(random(0, width), random(0, height)));
    dogVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
  }
  for (var j = 0; j < 10; j++) {
    items.push(createVector(random(0, width), random(0, height)));
    itemsVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
  }
}
  

  function draw() {
    background(0);

    updatePlayer();
    updateDogs();
    updateLasers();
    updateItems();
  }

  function updateDogs() {
    touch = false;
    for (var i = 0; i < dog.length; i++) {
      push();

      //dog to cat collisions
      if (dist(dog[i].x, dog[i].y, cat.x, cat.y) < dogSize / 2) {
        touch = true;
        console.log(touch);
      }

      dog[i].add(dogVel[i]);
      
      //restricts the characters to the canvas size

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

      image(dogImg[i], dog[i].x, dog[i].y, dogSize);
      pop();
    }
  }
  function updateItems() {
    touch = false;
    for (var j = 0; j < items.length; j++) {
      push();

      items[j].add(itemsVel[j]);
// makes items stay inside 
      if (items[j].x > width + itemsSize / 2) {
        items[j].x = 0;
      }
      if (items[j].x < -itemsSize / 2) {
        items[j].x = 400;
      }
      if (items[j].y > height + itemsSize / 2) {
        items[j].y = 0;
      }
      if (items[j].y < -itemsSize / 2) {
        items[j].y = 400;
      }

      image(itemsImg[j], items[j].x, items[j].y, itemsSize);

      pop();
    }
  }
  
  function updateLasers() {
    for (var i = 0; i < lasers.length; i++) {
      //checks collisions from laser to dog
      for (var z = 0; z < dog.length; z++) {
        if (dist(lasers[i].x, lasers[i].y, dog[z].x, dog[z].y) < dogSize / 2) {
          dog[z] = createVector(random(0, width), random(0, height));
          dogVel[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
          Score++;
        }
      }
  
      
      lasers[i].add(laserVel[i]);
lasers[i].add(laserVel[i]);
      push();
      stroke(132, 112, 255);

      line(
        lasers[i].x,
        lasers[i].y,
        lasers[i].x + laserVel[i].x * 4,
        lasers[i].y + laserVel[i].y * 4
        
      
      );

      pop();
    }
    
  }
// I just copied and pasted the updated laser 
/*function updateLasers() {
    for (var i = 0; i < lasers.length; i++) {
      //checks collisions
      for (var z = 0; z < dog.length; z++) {
        if (dist(lasers[i].x, lasers[i].y, dog[z].x, dog[z].y) < dogSize / 2) {
          dog[z] = createVector(random(0, width), random(0, height));
          dogVel[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
          Score++;
        }
      }
      //checks collisions
      
      lasers[i].add(laserVel[i]);
lasers[i].add(laserVel[i]);
      push();
      stroke(132, 112, 255);

      line(
        lasers[i].x,
        lasers[i].y,
        lasers[i].x + laserVel[i].x * 4,
        lasers[i].y + laserVel[i].y * 4
        
      
      );

      pop();
    }
  }*/

  //cat code

  function keyPressed() {
    if (keyCode == 32) {
      //laser velocity + direction
      lasers.push(createVector(cat.x, cat.y));
      laserVel.push(p5.Vector.fromAngle(radians(heading)).mult(13));
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
      //moves the cat
      force = p5.Vector.fromAngle(radians(heading));
      catVel.add(force.mult(0.2));
    }

    //makes the cat stay inside the screen
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
    image(catImg, size / 10, size / 10);
    //draws the cat again
    imageMode(CENTER);
    image(catImg, size / 10, size / 10);
    //makes the score go in the corner
    pop();
    fill(255);
    text(Score, 25, 25);
  }

