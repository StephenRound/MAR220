var object;

function setup() {
  createCanvas(windowWidth, windowHeight);
  object = new Object();
}

function draw() {
  background(155);
  
  object.update();
}
