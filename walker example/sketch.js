var walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.render();
}

function Walker() {
  this.x = width/2;
  this.y = height/2;
  
  this.render = function() {
    stroke(random(255), random(255), random(255));
    ellipse(this.x, this.y, 10);
  };
  
  this.step = function() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}