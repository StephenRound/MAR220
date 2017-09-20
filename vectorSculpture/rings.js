var Ring = function(number, level) {
  this.num = number;
  this.audio = level;
  
  this.update = function(level) {
    this.loop(level);
  };

  this.draw = function(level) {
    translate(width / width, height / height);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(mouseX, mouseY, level*1000);
    sphere(100, 100);
    torus(300, 10);
    box(10, 600, 10);
    push();
    translate(width / width, height / height - 100);
    torus(200, 10);
    translate(0, -100);
    torus(100, 10);
    pop();
    push();
    translate(width / width, height / height + 100);
    torus(200, 10);
    translate(0, 100);
    torus(100, 10);
    pop();
  };
  
 this.loop = function(level) {
    for (var i = 0; i <= this.num; i++) {
      rotateX(PI / 6);
      this.draw(level);
    }
  };
}