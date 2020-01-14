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

   this.display = function(sceneNum) {

     background(10, 200, 255);

     if (sceneNum === 1) {

       //ground
       fill(255, 0, 0);
       rect(this.pos.x - 50, height * 0.89, width, height * 2.5);

       //Walls
       rect(900, height * 0.6, width / 2, height * 5);
       rect(1050, height * 0.3, width / 2, height * 5);

     }


     fill(255);
     stroke(255);
     rect(this.pos.x, this.pos.y - 95, 30, 50, 30);

     if (sceneNum === 1) {
       textSize(20);
       text("This level moves for you", Sparkles.pos.x, 110);

     }
     //Question
     if (this.pos.x == bonetreat.pos.x && this.pos.y > 120 && this.pos.y < 175) {
       //print("true");
       bonetreat.pos.y = -400;
       //print("WORKING BONE GRAB");
       //Figure out better way to ask questions.
       var user_answer1 = prompt("Starting at 0, make a pattern that goes up by 7 each time for 5 terms.");
       //Better wording???

       //You Eat The Bone
       if (user_answer1 == "0, 7, 14, 21, 28" || user_answer1 == "0,7,14,21,28") {
         alert("That's correct!!! On to the next level.");
         this.lives++;
         //setTimeOut()
         sceneNum = 5; //Level 3
         //Switch out with real level 2
       } else {
         alert("Uh Oh, you got it wrong!");
       }
     }

     //Cat Attacks You
     if (this.pos.x == enemycat.pos.x && this.pos.y > 200 && this.pos.y < 325) {
       //print("WORKING CAT ATTACK");
       fill(255, 255, 255);
       text("OW", Sparkles.pos.x, Sparkles.pos.y);
       this.lives--;
     }
     return sceneNum
   }



   this.edges = function() {
     if (sceneNum == 1 && this.pos.y > height) {
       this.vel.y *= 0; //-1 for bouncing
       this.pos.y = height;
       print(Sparkles.pos.x);
     }
     if (sceneNum == 1 && this.pos.x >= 870 && this.pos.x <= 1050 && this.pos.y <= 400 && this.pos.y >= 270) {
       this.vel.x *= 0;
       // } else if (sceneNum == 1){
       //   this.vel.x = 1; 
     } else if (this.pos.x >= 870 && this.pos.y >= 270) {
       this.pos.y = 270;
       this.vel.x = 1;
       this.vel.y *= -0.5; //-1 for bouncing
     } else {
       this.vel.x = 1;
     }
   }
 }
