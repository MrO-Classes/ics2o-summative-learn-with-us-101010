let img;

function setup() {
  createCanvas(400, 400);
  img = loadImage('art/SplashScreen.jpg')
}

function draw() {
  background(255, 0, 125);
  image(img, 75, 25, 250, 150);
  
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
  text("Click to Play", 50, 225);
  text("Instructions", 280, 225);
  text("Controls", 60, 325);
  text("About Us", 285, 325);
  
  //Debug
  text("X = " + mouseX + ", Y = " + mouseY, mouseX, mouseY);

  drawScene();
  
}

  //Button Function
  mouseClicked = function() {
    
  //Click to Play/Instructions/Controls/About Us
  if (mouseX >= 25 && mouseX <= 150 && mouseY >= 200 && mouseY <= 250 && sceneNum == 0) {
    print("Working-Click-to-Play");
    sceneNum = 1;
    
  } 
    else if (mouseX >= 250 && mouseX <= 375 && mouseY >= 200 && mouseY <= 250 && sceneNum == 0) {
    print("Working-Instructions");
    sceneNum = 2;
    
  } 
    else if (mouseX >= 25 && mouseX <= 150 && mouseY >= 300 && mouseY <= 350 && sceneNum == 0) {
    print("Working-Controls");
    sceneNum = 3;
    
  } 
    else if (mouseX >= 250 && mouseX <= 375 && mouseY >= 300 && mouseY <= 350 && sceneNum == 0) {
    print("Working-About-Us");
    sceneNum = 4;
    
  }
    else if(mouseX >= 325 && mouseX <= 380 && mouseY >= 22 && mouseY <= 55 && sceneNum > 0) {
    print("Working-Back");
    sceneNum = 0;
    textSize(12);
      
  }
    
  }

  var sceneNum = 0;

  var drawBackButton = function() {
    textSize(12);
    rect(325, 25, 55, 30);
    fill(255, 255, 255);
    text("BACK", 335, 45);
  }
  
  //To draw scenes - Click to Play/Instructions/Controls/About Us
  var drawScene = function() {
    if (sceneNum === 1) {
      background(255, 0, 0);
      print("Working-Scene-1");
      drawBackButton();
    }
      else if (sceneNum === 2) {
      background(0, 255, 0);
      print("Working-Scene-2");
      drawBackButton();
      fill(0, 0, 0);
      textSize(60);
      text("Instructions", 10, 75);
      textSize(25);
      text("What To Do:", 10, 125);
      fill(0, 255, 0);
      rect(10, 135, 380, 35);
      fill(0, 0, 0);
      textSize(15);
      text("You must guide Sparkles through obstacles, solve math", 15, 150);
      text("problems and more!", 15, 165);
      textSize(25);
      text("Objective:", 10, 200);
      fill(0, 255, 0);
      rect(10, 210, 380, 35);
      fill(0, 0, 0);
      textSize(15);
      text("The objective of the game is to make through all the", 15, 225);
      text("obstacles and get Spakles to the place he loves most.", 15, 240);
      textSize(25);
      text("Example of Math Problem:", 10, 275);
      fill(0, 255, 0);
      rect(10, 285, 380, 35);
      fill(0, 0, 0);
      textSize(16);
      text("' 2, 8, 12, 16, 20... ' What does the pattern go up by?", 15, 305);
    }
      else if (sceneNum === 3) {
      background(0, 0, 255);
      print("Working-Scene-3");
      drawBackButton();
      fill(0, 0, 0);
      textSize(60);
      text("Controls", 10, 75);
    }
      else if (sceneNum === 4) {
      background(255, 255, 255);
      print("Working-Scene-4");
      drawBackButton();
      fill(0, 0, 0);
      textSize(60);
      text("About Us", 10, 75);
    }
  }
  
