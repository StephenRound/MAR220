var Weather = function(m, x, y) {
  this.mass = m
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.accel = createVector(0, 0);
  this.size = createVector(0, 0);
  
  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.accel.add(f);
  }
  
  this.update = function() {
    this.velocity.add(this.accel);
    if (this.position.y < height/2) {
      this.velocity.limit(5);
    } else {
      this.velocity.limit(3);
    }
    this.position.add(this.velocity);
    this.accel.mult(0);
    this.show();
  };
  
  this.show = function() {
    stroke(0, 0, 255);
    this.size.x = this.position.x - 2;
    this.size.y = this.position.y + 9;
    line(this.position.x, this.position.y, this.size.x, this.size.y);
  };
  
  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
     if (this.position.y > height) {
        this.position.y = height;
        this.velocity.y *= -1;
    } else if (this.position.y < 0) {
      this.velocity.y *= -1;
      this.position.y = 0;
    }
  };
    
    this.ambiance = function() {
      if (this.position.x > width) {
        this.position.x = 0;
      } else if (this.position.x < 0) {
        this.position.x = width;
      }
      if (this.position.y > height) {
        this.position.y = 0;
      }
    };
};