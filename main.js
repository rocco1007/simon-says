(function(){
	'user strict';

	var rootElement = document.getElementById("root");
	var gamePieces = rootElement.querySelectorAll(".game-piece");
	var levelContainer = rootElement.querySelectorAll(".level")[0];

	if (!gamePieces.length) {
	    alert("Simon Says is currently unavailable! Please reload the browser!");
			return;
	}

	var level = 1;
	var levelCounter = level;
	var pattern = [];
	var pieceClickIndex = 0;

	createPattern();
	attachEvents();

	function createPattern() {
		setTimeout(function() {
			var piece = gamePieces[getRandomIndex()];
			lightUpPiece(piece);
			pattern.push(piece);
			if(--levelCounter) {
				createPattern();
			}
		}, 700);
	}

	function attachEvents() {

		for (var i = 0; i < gamePieces.length; i++) {
			gamePieces[i].addEventListener('click', handleGamePiece, false);
		}

		rootElement.querySelectorAll(".start-over")[0].addEventListener('click', startOver, false);
		rootElement.querySelectorAll(".level-up")[0].addEventListener('click', levelUp, false);

	}

	function handleGamePiece(e) {
		var target = e.target;

		// the correcte pattern was clicked
		if(target === pattern[pieceClickIndex]) {
				lightUpPiece(target);
				pieceClickIndex++;

				// go to the next level
				if(pieceClickIndex === level) {
					levelUp();
				}
		}
		// incorrect pattern start the game over
		else {
			startOver();
		}
	}

	function setActiveGamePiece(element) {
		element.classList.add("active");
	}

	function removeActiveGamePiece(element) {
		element.classList.remove("active");
	}

	function lightUpPiece(element) {
		setActiveGamePiece(element);

		setTimeout(function() {
			removeActiveGamePiece(element);
		}, 500);
	}

	function getRandomIndex() {
		return Math.floor((Math.random() * 4));
	}

	function startOver() {
		//reset settings to default state
		level = 1;
		setDefaults();
		updateLevelContainer();
		createPattern();
	}

	function levelUp() {
		//reset settings but level up
		level++;
		setDefaults();
		updateLevelContainer();
		createPattern();
	}

	function updateLevelContainer() {
		if(levelContainer) {
			levelContainer.innerHTML = level;
		}
	}

	function setDefaults() {
		pattern = [];
		levelCounter = level;
		pieceClickIndex = 0;
	}

})();
