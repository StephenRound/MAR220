var rain = [];
var bugs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 40; i++) {
    rain[i] = new Object();
  }
  for (var b = 0; b < 5; b++) {
    bugs[b] = new Animal();
  }
}

function draw() {
  background(155);
  for (var i = 0; i < rain.length; i++) {
    rain[i].update();
  }
  for (var  b = 0; b < bugs.length; b++) {
    bugs[b].update();
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
