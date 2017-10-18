function Bridge() {
  this.length = 10;
  this.endpoint = [];
  this.pBtwn = [];
  this.width = scaleToWorld(width);

  this.endpoint.push(new Particle(0, height/2));
  this.endpoint.push(new Particle(width, height/2));

  for (var i = 0; i < this.width/2; i++){
    this.pBtwn.push(new Particle(i*2, height/2))
  }

  var djd = new box2d.b2DistanceJointDef();

  djd.bodyA = this.endpoint[0].body;
  // djd.bodyx =[];
  // for (var i = 0; i < this.pBtwn.length; i++){
  //   djd.bodyx[i] = this.pBtwn[i].body;
  // }
  djd.bodyB = this.endpoint[1].body;

  djd.length = scaleToWorld(length);

  djd.frequencyHz = 4; //<5
  djd.dampingRatio = 0; //0>1

  var dj = world.CreateJoint(djd);

  this.done = function() {
    for (var i = this.pBtwn.length-1; i >= 0; i--) {
      return this.pBtwn[i].done();
    }
  };

  this.display= function() {
    var posBtwn= [];
    var pos1 = scaleToPixels(this.endpoint[0].body.GetPosition());
    var pos2 = scaleToPixels(this.endpoint[1].body.GetPosition());
    for (var i = this.pBtwn.length-1; i >= 0; i--) {
      posBtwn[i] = scaleToPixels(this.pBtwn[i].body.GetPosition());
    }

    stroke(200);
    strokeWeight(2);

    line(pos1.x, pos1.y, pos2.x, pos2.y);
    this.endpoint[0].display();
    for (var e = this.pBtwn.length-1; e >= 0; e--){
      for(var w = 0; w < this.pBtwn.length; w++) {
        if (e !== w) {
          line(posBtwn[e].x, posBtwn[e].y, posBtwn[w].x, posBtwn[w].y);
          this.pBtwn[e].display(); //this is where the wadding up happens. trying to make them a line 
          this.pBtwn[w].display();
        }
      }
    }
    this.endpoint[1].display();



  }









}
