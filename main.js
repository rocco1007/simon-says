(function(){
	'user strict';
	
	var gamePieces = document.querySelectorAll(".game-piece");
	var level = 2;

	var matchElements = [];
	attachEvents();
	createPattern();
	function createPattern() {
		setTimeout(function() {
			lightUpPiece();
			if(--level) {
				createPattern();
			}
		}, 700);
	}

	function attachEvents() {

		for (var i = 0; i < gamePieces.length; i++) {
			gamePieces[i].addEventListener('click', handleGamePiece, false);
		}
	}


	function handleGamePiece(e) {
		var target = e.target;

		if(target === matchElements[clickCount]) {
			console.log("match!");
		} else {
			level = 1;
			createPattern();
		}

		setActiveGamePiece(target);

		setTimeout(function() { 
			removeActiveGamePiece(target);
		}, 500);
	}

	function setActiveGamePiece(element) {
		element.classList.add("active");
	}

	function removeActiveGamePiece(element) {
		element.classList.remove("active"); 
	}

	function lightUpPiece() {
		var pattern = [];
		//for (var i = 0; i < level; i++) {
			var index = getRandomIndex();
			var piece = gamePieces[index];
			matchElements.push(piece);
			setAndRemovePiece(piece);
		//}
	}

	function setAndRemovePiece(element) {
		setActiveGamePiece(element);

		setTimeout(function() { 
			removeActiveGamePiece(element);
		}, 500);
	}

	function getRandomIndex() {
		return Math.floor((Math.random() * 4));
	}

	function start() {
		var countDown = 3;
		var c = setInterval(function() { 
			console.log(countDown);
			if(countDown === 0) {
				setActiveGamePiece(gamePieces[rand]);
				clearTimeout(c);
			}
			countDown--;
		}, 1000);
	}

})();