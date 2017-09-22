var Weather = function(m, x, y) { //originally called object before i discovered it worked pretty well as rain
  this.mass = m
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.accel = createVector(0, 0);
  this.size = createVector(0, 0);
  this.time = 0;
  
  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.accel.add(f);
  } //applies the forces that get defined in the sketch
  
  this.update = function() { //updates each frame, allows the rain to fall
    this.velocity.add(this.accel);
    //if (this.position.y < height/2) {
      //this.velocity.limit(5);
    //} else {
      this.velocity.limit(3);
    //} //this function made the rain not bounce as much when it hit the bottom of the screen, but is now unncessary.
    this.position.add(this.velocity);
    this.accel.mult(0);
    //this.checkDeath();
    this.show(); 
  };
  
  this.show = function() {
    stroke(0, 0, 255);
    this.size.x = this.position.x - 2;
    this.size.y = this.position.y + 9; //these odd numbers give the rain its slightly slanted shape
    line(this.position.x, this.position.y, this.size.x, this.size.y);
  };
  
  this.checkDeath = function() {
  //rain doesn't die, but this function checks every 20 frames
  //if the drop exists at the bottom 20 pixels of the screen and kills it if so 
  //and checks every 7 frames if it needs to respawn dead drops
    this.time++;
    if(this.position.y >= height-20 && this.time % 20 === 0) {
      this.size.x = 0;
    }
    if (this.size.x === 0 && this.time % 7 === 0) {
      this.position.y = 0;
      this.show();
    }
  };
  
  this.checkEdges = function() {
    //there's two "check edges" functions. this one is used for the bouncing drops
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
    //this check edges function is used for the background drops to make 
    //them continuously fall
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