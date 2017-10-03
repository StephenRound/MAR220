var Mover = function() {
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(0, 0);
  this.accel = 0;
  this.topspeed = 2;
  this.r = height*0.09;
  this.theta = 0;

  //setting up some variables
   
  this.update = function() {
    var x = this.r * cos(this.theta);
    var y = this.r * sin(this.theta);
    var attract = createVector(x, y);
    //these are the ball's oscillating variables
    var dir = p5.Vector.sub(attract, this.position);
    dir.normalize();
    dir.mult(0.5);
    this.accel = dir;
    
    ellipse(x, y, 40);
  //this is the ball
    this.velocity.add(this.accel);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.theta += 0.2; //increase the theta
  };

  this.display = function() {
    var angle = this.velocity.heading();

    stroke(0);
    strokeWeight(2);
    fill(127);
    push();
    rectMode(CENTER);

    translate(this.position.x, this.position.y);
    rotate(angle);
    rect(0, 0, 50, 10);
    ellipse(0, 0, 25);
    noStroke();
    fill(50);
    ellipse(0, 0, 15);
  // little gears with only two teeth
    pop();
  };

  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  };
};