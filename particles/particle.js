var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-10, 10), random(-3, 0));
  this.position = position.copy();
  this.lifespan = 280;

  this.run = function() {
    this.update();
    this.display();
  };

  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };

  this.display = function() {
    stroke(5, 27, 127, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    rect(this.position.x, this.position.y, 2, 10);
  };

  this.isDead = function(){
    if (this.lifespan < 0) {
        return true;
    } else {
      return false;
    }
  };
};