var score = 0;
var score_time = 0
var game = false;
function normalCat () {
        document.getElementById("cat").src = "images/kitty.png";
}

function feed () {
        document.getElementById("cat").src = "images/kitty_hungry.png";
        setTimeout(normalCat, 1500);
}

function water () {
        document.getElementById("cat").src = "images/kitty_drink.png";
        setTimeout(normalCat, 1500);
}


//var myBarWidth;
//var fast = false;
var score_time
var width = 300;
var width_2 = 300;
function slow () {
	game = true
        if(game = false){
                 width = 0;
                 width_2 = 0;
        }

	var score_time = 14400000;
        var myInterval = setInterval(function (){
                width = width - 3;
                if(width >= 0){
                        myBar.style.width = width  + "px";
                }
	
                else{
                        clearInterval(myInterval);
			clearInterval(myInterval_score_time);
			game = false;

                }
        },14400000 );


var myInterval = setInterval(function (){
                width_2 = width_2 - 3;
                if(width >= 0){
                        myBar_2.style.width = width_2  + "px";
                }
                else{
                        clearInterval(myInterval);
			clearInterval(myInterval_score_time);
			game = false;

                }
        }, 14400000);



}



function fast() {
	game = true
	if(game = false){
		width = 0;
		width_2 = 0;
	}
	score_time = 1000
	game = true
	var myInterval_score_time = setInterval(function(){
		 score += 1
		document.getElementById('score').innerHTML =  'Score:' + score ;

}, score_time)
	var myInterval_food = setInterval(function (){
		width = width - 3;
		if(width >= 0){
			myBar.style.width = width  + "px";
		}
		else{
			clearInterval(myInterval_food);
			clearInterval(myInterval_score_time);
			game = false;

		}
	}, 50);


var myInterval_food2 = setInterval(function (){
                width_2 = width_2 - 3;
                if(width_2 >= 0){
                        myBar_2.style.width = width_2  + "px";
                }
                else{
                        clearInterval(myInterval_food2);
			clearInterval(myInterval_score_time);
			game = false;
                }
        }, 50);

}

function feed(){
	if(width <= 300 && width >= 0 && width_2 >= 0){

		width = width + 30;
}	}
function water(){
	if(width_2 <= 300 && width >= 0 && width_2 >= 0){
	width_2 = width_2 + 30;
	}
}

