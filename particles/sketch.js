var systems = [];
var time = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 3; i++) {
    systems.push(new ParticleSystem(1, createVector(width / i + 1, -12)));
    //creating 3 particle emitters slightly above the canvas so they don't 
    //show their origin point
  }
}

function draw() {
  time++;
  background(151);
  if (time % 180 === 0) { //every 180 frames, ~3 seconds
    background(random(160, 250)); //this causes the sky to flash
    lightning(); //this is the lightning
    //pretty happy with that effect
  }

  drawGround();

  for (var s = 0; s < width / 2; s++) {
    // var delta = 0;
    var position = createVector(s * 2, random(0, s / 10));
    fill(random(100, 155), 50);
    noStroke();
    ellipse(position.x, position.y, random(70));
  } //the clouds ^^
  //delta+= 0.001
  // the delta didn't affect the speed of the clouds,so it gets removed.
  // couldn't do much for the speed of the clouds overall.
  // i know it's not realistic for storm clouds to be screaming past
  // the heavens, but messing with the position.x on ellipse() or 
  // with the position vector's x value itself only made
  // the storm cloud smaller instead of the width of the screen.

  for (var i = 0; i < systems.length; i++) {
    systems[i].addParticle();
    systems[i].run();
  } //the rain ^^ i wanna know, have you ever seen it?
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawGround() {
  fill(27, 185, 27);
  noStroke();
  rect(0, height * 2 / 3, width, height + 30);
  //the ground ^^
  fill(127);
  quad(width / 2 + 15, height * 2 / 3, width / 2 - 15, height * 2 / 3, width / 4, height, width * 3 / 4, height);
  //the road ^^
  fill(10, 45, 60);
  quad(60, height * 7 / 15, 40, height / 2, 0, height * 2 / 3, width / 2 - 40, height * 2 / 3);
  quad(width - 60, height * 8 / 15, width - 20, height * 3 / 5, width, height * 2 / 3, width * 2 / 3, height * 2 / 3);
  //the (carefully articulated to scale with the window) mountains ^^
  for (var f = 0; f < 8; f++) {
    var f1 = f * 10;
    fill(0, 0, 15, f1);
    rect(0, f1 - height * 2 / 3, width, height + f1); //sky
    rect(0, f1 + height * 2 / 3, width, height + f1); //ground
  } //the shading gradients. was going for fog but ended up with this instead
}

function lightning() {
  var p1 = random(width, height);
  //var p2 = random(width, height);
  //var p3 = random(width, height);
  fill('white');
  stroke('white');
  strokeWeight(3);
  line(random(width), 0, p1, p1);
  //line(p1, p1, p2, p2);
  //line(p2, p2, p3, p3);
  //originally wanted to create a zigzag, but realized a single line
  //had the same effect. very very frigtening, ME!
}