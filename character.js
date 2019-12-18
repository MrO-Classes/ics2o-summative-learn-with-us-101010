function Character(x, y) {
  this.pos = createVector(50, height);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  this.lives = 3;

  this.applyForce = function(force) {
    // var f = force.copy();
    // f.div(this.mass);
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {

    //ground
    fill(150, 150, 2);
    rect(this.pos.x - 50, height * 0.99, width, height * 0.040);

    fill(255);
    stroke(255);
    rect(this.pos.x, this.pos.y - 50, 30, 50, 30);

  }
  this.edges = function() {
      if (this.pos.y > height) {
        this.vel.y *= -0.5; //-1 for bouncing
        this.pos.y = height;
      }
    }
}
