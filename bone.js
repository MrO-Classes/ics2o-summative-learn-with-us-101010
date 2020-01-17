
function Bone (x, y, pic) {
  this.pos = createVector(x, y);
  //imgbone = loadImage('art/winbone.jpg');
  
  this.display = function() {
    
    fill(255, 255, 255);
    image(pic, this.pos.x, this.pos.y, 75, 30);
    //rect(this.pos.x, this.pos.y, 75, 15);
    
  }
  
}
