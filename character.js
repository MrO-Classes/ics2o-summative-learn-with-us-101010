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

    background(10, 200, 255);
    
    //ground
    fill(255, 0, 0);
    rect(this.pos.x - 50, height * 0.89, width, height * 2.5);
    
    //Walls
    rect(900, height * 0.6, width/2, height * 5);
    rect(1050, height * 0.3, width/2, height * 5);
    
  if (sceneNum === 1) {
     drawEnemyCat();
    }
    
    fill(255);
    stroke(255);
    rect(this.pos.x, this.pos.y - 95, 30, 50, 30);

  if (sceneNum === 1) {
  drawWinBone();
  }
    
    if (sceneNum === 1) {
      textSize(20);
   text("This level moves for you", Sparkles.pos.x, 110);
   }

  }
  
  this.edges = function() {
      if (this.pos.y > height) {
        this.vel.y *= -0.5; //-1 for bouncing
        this.pos.y = height;
      } 
    }
}
