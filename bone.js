function Bone (x, y) {
  this.pos = createVector(1150, 75);
  
  this.display = function() {
    
    fill(255, 255, 255);
    rect(this.pos.x, this.pos.y, 75, 15);
    fill(0, 0, 0);
    text("BONE", 1150, 75);
    
  }
  
}
