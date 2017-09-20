//goal for monday:
//make the raindrops bounce a little, delete themselves, then generate new rain


var rain = [];
var rainBG = [];
var bugs = [];
var time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawn();
  for (var i = 0; i < 70; i++) {
    rainBG[i] = new Weather(10, random(width), random(height));
  }
}

function spawn (){
  for (var i = 0; i < 30; i++) {
    rain[i] = new Weather(5, random(width), random(height));
  }
  for (var b = 0; b < 5; b++) {
    bugs[b] = new Animal();
  }
}

function draw() {
  background(155);
  time++;
  noStroke();
  text(time, 20, 100);
  text(time % 500, 20, 50)
  for (var i = 0; i < rain.length; i++) {
    var wind = createVector(-0.01, 0);
    var gravity = createVector(0, 0.1*rain[i].mass);
    
    var c = 0.01;
    var normal = 1;
    var frictMag = c * normal;
    var friction = rain[i].velocity.copy(); //friction is a copy of velocity
    friction.mult(-0.1);
    friction.normalize();
    friction.mult(frictMag);
    
    rain[i].applyForce(friction);
    rain[i].applyForce(wind);
    rain[i].applyForce(gravity);
    rain[i].update();
    
    rainBG[i].applyForce(wind);
    rainBG[i].applyForce(gravity);
    rainBG[i].update();
    rainBG[i].ambiance();
    
    if (time % 500 === 0 ) {
      rain[i].position.y = random(height)-height*10;
    } 
    
    rain[i].checkEdges();
  }
  
  for (var  b = 0; b < bugs.length; b++) {
    bugs[b].update();
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} //i love this function, expect to see it in every single code i write
