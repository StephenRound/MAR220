var world;
var bridge;

function setup() {
  createCanvas(640, 360);

  world = createWorld();

  bridge = new Bridge();
}

function draw() {
  background(100);
  var timeStep = 1/30;
  world.Step(timeStep, 10, 10);
  bridge.display();
}
