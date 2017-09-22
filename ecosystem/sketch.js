//goal for monday:
//make the raindrops bounce a little, delete themselves, then generate new rain
// *checkmark*

var rain = [];
var rainBG = [];
var bugs = [];
var time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawn();
  for (var i = 0; i < height/2; i++) {
    rainBG[i] = new Weather(10, random(width), random(height));
  } // this is the background rain to make it look like it's constantly falling
  // it spawns an amount of rain proportionate to the size of the window, but doesn't 
  // actively change with resizing the window
}

function spawn (){
  for (var i = 0; i < 30; i++) {
    rain[i] = new Weather(5, random(width), random(height));
  } //this is the rain that bounces then respawns
  for (var b = 0; b < 5; b++) {
    bugs[b] = new Animal();
  } //a small group of bugs
}

function draw() {
  background(155);
  //time++;
  noStroke();
  fill('white');
  //text(time, 20, 100);
  //text(time % 500, 20, 50);
  text('height:'+ height, 20, 50);
  text('height threshold:'+ (height - 20), 20, 100);
  text('mouseX:'+ mouseX, 20, 150);
  text('mouseY:' + mouseY, 20, 200);
  //a small debug that tells me if my variables were correct
  for (var i = 0; i < rain.length; i++) {
    var wind = createVector(-0.01, 0);
    var gravity = createVector(0, 0.1*rain[i].mass);
    //i pretty much ripped the forces straight from the book. 
    //i'm no physicist, i'm not able to calculate these things
    var c = 0.01;
    var normal = 1;
    var frictMag = c * normal;
    var friction = rain[i].velocity.copy(); 
    //friction is a copy of velocity, but operates under a different
    //set of rules
    friction.mult(-0.1);
    friction.normalize();
    friction.mult(frictMag);
    
    rain[i].applyForce(friction);
    rain[i].applyForce(wind);
    rain[i].applyForce(gravity);
    rain[i].update();
    rain[i].checkDeath();
    rain[i].checkEdges();
    
    
    //rainBG doesn't get to check for death or friction
    rainBG[i].applyForce(wind);
    rainBG[i].applyForce(gravity);
    rainBG[i].update();
    rainBG[i].ambiance();
    
  //  if (time % 500 === 0 ) {
  //    rain[i].position.y = random(height)-height*10;
  //  } //this is an old if loop that would attempt to respawn 
  // the bouncy rain every 500 frames. looked bad
    
  }
  
  for (var  b = 0; b < bugs.length; b++) {
    bugs[b].update();
  }
  //the bugs just do their own thing, and don't get any forces of nature
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} //i love this function, expect to see it in every single code i write
