// ***** Beheaded's Game ******

/* function beheadGame(name) {
  let counterAttempts = 0;
  let counterPrompt = 5;
  
  alert("Let's play! You need guess the male name")

  answer = prompt("Let's started! you have 5 initial attempts");


  while(answer !== name && counterAttempts < 4 ) {
    counterAttempts++
    counterPrompt--
    prompt(`You haven't guess still, you have ${counterPrompt} attempts left`);
  } counterAttempts, counterPrompt
    
  if(counterAttempts < 3) {
    alert("Congrats you have guessed")
  } else { 
    alert("You have lost")
  }

}

beheadGame('Abdiel');  */

const launchGame = document.getElementById("launch-game");
launchGame.addEventListener("click", () => beheadGame("Abdiel"));

function beheadGame(secretWord) {
  // Creating hidden word
  let wordforUser = "_".repeat(secretWord.length);
  console.log(wordforUser);

  // Attempts numbers
  let attempts = 5;

  // Loop: while dont has been yet guessed all words and while has attempts left at user also
  while (attempts > 0 && wordforUser !== secretWord) {
    // Asking a letter
    let letter = prompt("Guessing the word, enter one letter");

    //Comproving if the letter is in the word so update the variable
    if (secretWord.includes(letter)) {
      //Update the wordHidden variable and package the letter in the correct position
      for (
        let letterCounter = 0;
        letterCounter < secretWord.length;
        letterCounter++
      ) {
        if (letter === secretWord[letterCounter]) {
          console.log(letterCounter, secretWord[letterCounter]);

          //Turning the hidden word up into an array
          let wordforUserArray = Array.from(wordforUser);

          //Select one index and exchange it by the guessed word
          wordforUserArray[letterCounter] = letter;

          //Joining the string into one array again and update the hidden word variable
          wordforUser = wordforUserArray.join("");
        }
      }
    } else if (letter === null) {
        console.log("You are canceled the game");
      break;
    } else {
      //If the letter isn't in the word, then deduct the attempts number
      attempts--;
    }

    //Showing what is the hidden word actual state
    console.log(`The word is: ${wordforUser}`);

    //Showing how many attempts are left
    console.log(`You are ${attempts} attempts left`);
  }

  //When get out of the loop...showing a victory or beat message
  if (secretWord === wordforUser) {
    console.log(
      `¡Congratulations, you have won!, the secret word is ${secretWord}`
    );
  } else {
    console.log(`Very sorry, you have lost. The secret word is: ${secretWord}`);
  }
}
