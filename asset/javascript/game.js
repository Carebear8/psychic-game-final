var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	var win = 0;
	var loss = 0;
	var guessesLeft = 9;
	var guessesSoFar = [];

	//reset everything to default and start a new game!
	function reset (){
		guessesLeft = 9;
		guessesSoFar = [];
		computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
		console.log(computerGuess);

	}
	reset();

  //when user press a key it records the 'letter' and save the 'letter' to the userGuess. 
   
document.onkeyup = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	//if a letter is not typed yet, then log it in the guessSoFar array

	if (guessesSoFar.indexOf(userGuess) === -1){
    guessesSoFar.push(userGuess);
		}

	else {
		alert ("already tried, please choose another one");		
	}

	
		//if userGuess is the same with computerGuess, then record win (#)
		if (userGuess === computerGuess) {
			win++;
      alert ("You guessed right, nice job!");
      reset();
		}

		//if userGuess is not the same with computerGuess, then record loss (#)
		else {
      guessesLeft--;
      console.log(guessesLeft);

    }

		//if guestLeft is 0 then the game reset to the default and start a new game
		if (guessesLeft === 0) {
			loss++
			alert ("You lost")
      
      reset();
    }

    console.log("win", win, "losses", loss, "guessesLeft", guessesLeft)
    document.getElementById("wins").textContent = win;
    document.getElementById("losses").textContent = loss 
    document.getElementById("guesses-so-far").textContent = guessesSoFar
    document.getElementById('guesses-left').textContent = guessesLeft
    
}