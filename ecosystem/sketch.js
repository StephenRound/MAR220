var object = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 20; i++) {
    object[i] = new Object();
  }
}

function draw() {
  background(155);
  
  for (var i = 0; i < object.length; i++) {
    object[i].update();
  }
}
