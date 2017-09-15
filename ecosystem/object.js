var Object = function() {
  
  this.position = createVector(random(width), random(height));
  this.velocity = createVector();
  this.accel = createVector(-0.001, 0.01);
  
  this.update = function() {
    this.velocity.add(this.accel);
    this.velocity.limit(10);
    this.position.add(this.velocity);
    this.show();
    this.checkEdges();
  };
  
  this.show = function() {
    stroke(0, 0, 255);
    line(this.position.x, this.position.y, this.position.x - 2, this.position.y + 9);
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