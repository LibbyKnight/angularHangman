angular
	.module('angularHangman.main')
	.controller('MainCtrl', MainCtrl);

function MainCtrl()  {
		var vm = this; 

		var wordsArray = ["ipa", "stout", "lager", "porter", "pilsner", "weissbier", "cider"];
		var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
		var answerArray = [];
		var guess;
		var lives;
	
var showLives = document.getElementById("lives");

	function startGame () {
		//Set word spaces
		for (var i = 0; i < randomWord.length; i++) {
		answerArray[i] = "_";
	}

	function playerLives () {
		showLives.innerHTML = "You have " + lives + " lives";
		if (lives < 1) {
			showLives.innerHTML = "Game Over"
			startGame();
		}
	}


}

