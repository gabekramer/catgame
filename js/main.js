var catAlive = false; // game running

var score = 0;
var food = 100;
var water = 100;

var gameI; // The catAlive interval


function normalCat () { // Changes cat picture back to a normal cat
  document.getElementById("cat").src = "images/kitty.png";
}

function giveFood(){ // Feed the cat
  document.getElementById("cat").src = "images/kitty_hungry.png";
  setTimeout(normalCat, 1500);
	if(food <= 100 && food >= 0 && water >= 0){
		food = food + 10;
  }
}

function giveWater(){ // Water the cat
  document.getElementById("cat").src = "images/kitty_drink.png";
  setTimeout(normalCat, 1500);
	if(water <= 100 && water >= 0 && food >= 0){
	  water = water + 10;
	}
}

function startGame () {
	catAlive = true;
  score = 0;
	score_time = 1000;
	catAlive = true;
}

function stopGame (){
  clearInterval(gameI);
  /*clearInterval(hungerUpdate);
  clearInterval(thirstUpdate);
  clearInterval(myInterval_score_time);*/
}

function updateUI () {
  // Score bar
	document.getElementById('score').innerHTML =  'Score: ' + score;
  // Food bar
  foodBar.style.width = (3*food)  + "px";
  // Water bar
  waterBar.style.width = (3*water)  + "px";
}

function updateGame () {
  hungerUpdate();
  thirstUpdate();

  if (food<=0 || water<=0) { 
    // Cat is dead
    stopGame();
  }
  else {
    score = Number(score) + 1; // Still alive!
  }

  updateUI();
}

function hungerUpdate () {
  food = food - Math.floor(Math.random() * Math.floor(2+1)); // Random hunger on int of [0, 2] (inclusive)
}

function thirstUpdate () {
  water = water - 1;
}

//
// catAlive modes
//

function fast() {
  stopGame();
  gameI = setInterval(updateGame, 50);
}

function slow() {
  stopGame();
  gameI = setInterval(updateGame, 1000);
}
