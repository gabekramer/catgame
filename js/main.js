var score = 0;
var score_time = 0;
var game = false;
var food = 100;
var water = 100;
var gameI; // The game interval

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

function startNewGame () {
	game = true;
  score = 0;
	score_time = 1000;
	game = true;
}

function stopGame (){
  clearInterval(gameI);
  /*clearInterval(hungerUpdate);
  clearInterval(thirstUpdate);
  clearInterval(myInterval_score_time);*/
}

function updateUI () {
	document.getElementById('score').innerHTML =  'Score:' + score;
}

function updateGame () {
  score = Number(score) + 1;
  hungerUpdate();
  thirstUpdate();
  updateUI();
}

function hungerUpdate () {
  food = food - 1;
  if(food >= 0){
    foodBar.style.width = (3*food)  + "px";
  }
  else{
    clearInterval(hungerUpdate);
    clearInterval(myInterval_score_time);
    game = false;

  }
}

function thirstUpdate () {
  water = water - 1;
  if(water >= 0){
          waterBar.style.width = (3*water)  + "px";
  }
  else{
    clearInterval(thirstUpdate);
    clearInterval(myInterval_score_time);
    game = false;
  }
}


function fast() {
  stopGame();
  gameI = setInterval(updateGame, 50);
}


function slow() {
  stopGame();
  gameI = setInterval(updateGame, 1000);
}
