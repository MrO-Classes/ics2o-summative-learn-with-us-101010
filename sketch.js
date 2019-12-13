let img;

function setup() {
  createCanvas(400, 400);
  img = loadImage('art/SplashScreen.jpg')
}

function draw() {
  background(100, 150, 200);
  image(img, 75, 25, 250, 150);
  
  var sceneNum = 0;
  
  //Buttons\/

  fill(0, 110, 255);

  //'Click to Play' Button
  rect(25, 200, 125, 50);

  //'Instructions' Button
  rect(250, 200, 125, 50);

  //'Controls' Button
  rect(25, 300, 125, 50);

  //'About Us' Button
  rect(250, 300, 125, 50);

  fill(0, 0, 0);
  text("Click to Play", 45, 225);
  text("Instructions", 275, 225);
  text("Controls", 45, 325);
  text("About Us", 270, 325);
  
  
  //Debug
  text("X = " + mouseX + ", Y = " + mouseY, mouseX, mouseY);
  
  //'Click to Play' Button
  if (mouseIsPressed && mouseX >= 25 && mouseX <= 150 && mouseY >= 200 && mouseY <= 250) {
    print("Working-Click-to-Play");
    sceneNum = 1;
  }

  //'Instructions' Button
  if (mouseIsPressed && mouseX >= 250 && mouseX <= 375 && mouseY >= 200 && mouseY <= 250) {
    print("Working-Instructions");
    
  }

  //'Controls' Button
  if (mouseIsPressed && mouseX >= 25 && mouseX <= 150 && mouseY >= 300 && mouseY <= 350) {
    print("Working-Controls");
    
  }
  
  //'About Us' Button
  if (mouseIsPressed && mouseX >= 250 && mouseX <= 375 && mouseY >= 300 && mouseY <= 350) {
    print("Working-About-Us");
  }
  
}
