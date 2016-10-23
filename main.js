(function(){
	'user strict';

	attachEvents();

	function attachEvents() {
		var gamePieces = document.querySelectorAll(".game-piece");

		for (var i = 0; i < gamePieces.length; i++) {
			gamePieces[i].addEventListener('click', handleGamePiece, false);
		}
	}

	function handleGamePiece(e) {
		var target = e.target;

		target.classList.add("active");

		setTimeout(function() { 
			target.classList.remove("active"); 
		}, 500);
	}
})();