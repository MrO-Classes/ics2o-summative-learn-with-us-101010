let img;
let Sparkles;
let bonetreat;
let enemycat;
var sceneNum = 0;
let imgbone;
let imgcat;
let imgsparkles;

function setup() {
  
  img = loadImage('art/SplashScreen.jpg');
  imgbone = loadImage('art/winbone.png');
  imgcat = loadImage('art/enemyCat.png');
  imgsparkles = loadImage('art/Sparkles.png');
  
  createCanvas(600, 400);
  Sparkles = new Character(50, height, imgsparkles);
  bonetreat = new Bone(1150, 75, imgbone);
  enemycat = new Cat(945, height * 0.5, imgcat);
}


//How you move for the first level
function keyPressed() {
  if (key == ' ') {
    var jump = createVector(0, -3);
    Sparkles.applyForce(jump);
  }

}

function draw() {
background(255, 0, 125);

  if (sceneNum === 0) {
    image(img, 172, 25, 250, 150);
  }

  if (sceneNum === 1 || sceneNum === 5) {
    translate(-Sparkles.pos.x + 50, 0);

    Sparkles.update();
    Sparkles.edges();
    sceneNum=Sparkles.display(sceneNum);
    print(sceneNum);

    //bonetreat.pos.x = 1150;
    //bonetreat.pos.y = 75;
    bonetreat.display();


    enemycat.pos.x = 945;
    enemycat.pos.y = height * 0.5;
    enemycat.display();

    var gravity = createVector(0, 0.1);
    Sparkles.applyForce(gravity);
    textSize(15);
    fill(0, 0, 0);
  }

  //Buttons\/

  fill(0, 110, 255);

  //'Click to Play' Button
  rect(185, 200, 225, 50);

  //'Instructions' Button
  rect(410, 300, 150, 50);

  //'Controls' Button
  rect(35, 300, 150, 50);

  //'About Us' Button
  rect(240, 300, 125, 50);

  fill(0, 0, 0);
  text("Click to Play", 265, 225);
  text("Instructions", 450, 325);
  text("Controls", 80, 325);
  text("About Us", 275, 325);

  //Debug
  //text("X = " + mouseX + ", Y = " + mouseY, mouseX, mouseY);

  drawScene();

  //   if (sceneNum === 1) {
  //   drawWinBone();
  //   }

}

//Buttons on title screen
mouseClicked = function() {

  //Click to Play/Instructions/Controls/About Us
  if (mouseX >= 185 && mouseX <= 410 && mouseY >= 200 && mouseY <= 250 && sceneNum == 0) {
    //print("Working-Click-to-Play");
    sceneNum = 1; //Level 1

  } else if (mouseX >= 410 && mouseX <= 560 && mouseY >= 300 && mouseY <= 350 && sceneNum == 0) {
    //print("Working-Instructions");
    sceneNum = 2;

  } else if (mouseX >= 35 && mouseX <= 185 && mouseY >= 300 && mouseY <= 350 && sceneNum == 0) {
    //print("Working-Controls");
    sceneNum = 3;

  } else if (mouseX >= 240 && mouseX <= 365 && mouseY >= 300 && mouseY <= 350 && sceneNum == 0) {
    //print("Working-About-Us");
    sceneNum = 4;

  } else if (mouseX >= 525 && mouseX <= 580 && mouseY >= 22 && mouseY <= 55 && sceneNum > 1) {
    //print("Working-Back");
    sceneNum = 0;
    textSize(12);

  }

}


var drawBackButton = function() {
  textSize(12);
  rect(525, 25, 55, 30);
  fill(255, 255, 255);
  text("BACK", 535, 45);
}

var drawMainScreenbtn = function() {
  textSize(15);
  rect(200, 200, 175, 30);
  fill(255, 255, 255);
  text("Back to Main Menu", 220, 220);
}

// FOR LATER
// var drawExitButton = function() {
//   textSize(12);
//   rect(525, 25, 55, 30);
//   fill(255, 255, 255);
//   text("EXIT", 535, 45);
// }

//To draw scenes - Click to Play/Instructions/Controls/About Us
var drawScene = function() {
  if (sceneNum === 1) {
    //level 1
    //print("Working-Scene-1");
    stroke(0, 0, 0);
    textSize(35);
    text("Level 1", Sparkles.pos.x, 45)
    text("Lives: " + Sparkles.lives, Sparkles.pos.x, 85);
    textSize(12);
    //print(Sparkles.pos.y);
    //text("SPARKLES " + Sparkles.pos.y, Sparkles.pos.x + 5, Sparkles.pos.y - 75);
    //text(mouseX + "," + mouseY, mouseX, mouseY);
  } else if (sceneNum === 2) {
    //instructions
    background(0, 255, 0);
    //print("Working-Scene-2");
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
    text("Example of a Math Problem:", 10, 275);
    fill(0, 255, 0);
    rect(10, 285, 380, 35);
    fill(0, 0, 0);
    textSize(16);
    text("' 2, 8, 12, 16, 20... ' What does the pattern go up by?", 15, 305);

  } else if (sceneNum === 3) {
    //controls
    background(0, 0, 255);
    //print("Working-Scene-3");
    drawBackButton();
    fill(0, 0, 0);
    textSize(60);
    text("Controls", 10, 75);
    fill(255, 255, 255);
    rect(50, 95, 50, 50);
    rect(50, 175, 50, 50);
    rect(50, 255, 50, 50);
    rect(50, 335, 50, 50);

    rect(250, 115, 250, 50);

    fill(0, 0, 0);
    text("-", 365, 155);
    textSize(20);
    text("First Level", 340, 100);
    textSize(15);
    text("(Space)", 525, 130);
    text("To Jump", 525, 155);

  } else if (sceneNum === 4) {
    //about us
    background(255, 255, 255);
    //print("Working-Scene-4");
    drawBackButton();
    fill(0, 0, 0);
    textSize(60);
    text("About Us", 10, 75);
    textSize(15);
    text("Soon to come", 20, 20);
  } else if (sceneNum === 5) {
    //level '3'
    background(0, 100, 100);
    stroke(200, 200, 200);
    textSize(35);
    fill(255, 0, 0);
    rect(550, 100, 10, 10);
    fill(0, 0, 0);
    text("Level 3", Sparkles.pos.x, 45);
    text("Lives: " + Sparkles.lives, Sparkles.pos.x, 85);
  } else if (sceneNum === 6) {
    //death screen
    background(200, 50, 10);
    textSize(30);
    text("You lost all your lives!", 150, 100);
    textSize(20);
    text("Press the button to go to the main menu.", 130, 150);
    drawMainScreenbtn();
    mouseClicked = function(){
      if(sceneNum === 6 && mouseX >= 200 && mouseX <= 250 && mouseY >= 200 && mouseY <= 255) {
    sceneNum = 0;
    //Need better perameters for button
  }
    }
  }
}
