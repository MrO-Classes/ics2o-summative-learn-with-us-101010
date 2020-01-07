function Cat (x, y) {
  this.pos = createVector(945, height * 0.5);
  
  this.display = function() {
    
    rect(945, height * 0.5, width/10, height * 0.040);
    fill(0, 0, 0);
    text("CAT", 945, height * 0.5);
    
  }
  
}
