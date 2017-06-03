angular
	.module('angularHangman.main')
	.controller('MainCtrl', MainCtrl);

function MainCtrl()  {
		var vm = this;

		var wordsArray = ["ipa", "stout", "lager", "porter", "pilsner", "weissbier", "cider"];
		var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
		var answerArray = [];
		

	function startGame () {

		for (var i = 0; i < randomWord.length; i++) {
		answerArray[i] = "_";
	}

	

}