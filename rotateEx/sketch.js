var mover = [];
//var time;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 20; i++) {
    mover[i] = new Mover();
  }
}

function draw() {
  //time++;
  background(50);
  for (var i = 0; i < mover.length; i++) {
    for (var j = 0; j < mover.length; j++) {
      if (i !== j) {
        if (mover[j].position.x === mover[i].position.x) {
          mover[j].position = p5.Vector.random2D();
        }
      }//this function can sort of be neglected, it was meant to 
      //check for overlapping gears and displace them if they converged
      //onto the same point. they used to cluster up before i added the
      //attractor ball
    }
    mover[i].update();
    mover[i].checkEdges();
    mover[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}