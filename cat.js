function Cat (x, y, pic) {
  this.pos = createVector(x, y);
  
  this.display = function() {
    
    //rect(945, height * 0.5, width/10, height * 0.040);
    fill(0, 0, 0);
    image(pic, this.pos.x, this.pos.y, 75, 40);
  };
  
}
