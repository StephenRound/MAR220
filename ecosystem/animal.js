var Animal = function() {
  
  this.position = createVector(random(width), random(height - 100));
  this.velocity = createVector();
  this.accel = createVector();
  
  this.update = function() {
    this.accel = p5.Vector.random2D();
    this.velocity.add(this.accel);
    this.velocity.limit(5);
    this.position.add(this.velocity);
    this.show();
    this.checkEdges();
  };
  
  this.show = function() {
    strokeWeight(2);
    fill(127);
    stroke(0);
    ellipse(this.position.x, this.position.y, 10, 10);
  };
  
  this.checkEdges = function() {
  //updated this to make sure the bugs wouldn't enter the floor and 
  //come out of the sky. didn't make much sense for them to do that
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
    
    if (this.position.y > height) {
      this.position.y = height;
      this.velocity.y *= -1;
    } else if (this.position.y < 0) {
      this.position.y = 0;
      this.velocity.y *= -1;
    }
  };
};