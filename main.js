
/////////  Requires //////////
var prompt = require('prompt');
var hangmanCurrWord = require('./word.js');
var hangmanGameWord = require('./game.js')();

///////// Variables //////////
var properties = [
  {
    name: 'enteredLetter', 
    validator: /^[A-Z,\s,0-9]$/,
    warning: 'HANGMAN : Please enter valid letters. Allowed values to enter A - Z, Space, 0 - 9 only.',
    message: 'HANGMAN : ENTER A - Z, Space, 0 - 9 ONLY'
  }
];

hangmanGame = {

  // Initial number of guesses
  guessesRemaining : 10, 

  // Word object
  currRandomWrd : null, 

  // Function to start the game
  startGame : function() {
    
    // Get the random word
    this.currRandomWrd = new hangmanCurrWord(hangmanGameWord.getRandomWord());

    // Get letter objects of the random word selected
    this.currRandomWrd.getLetterObj();

    // Prompt user for letter
    this.askLetter();    

  }, 

  // Function to prompt for letter
  askLetter : function()  {

    // For scope
    var local = this;

    // Prompt user for letter
    prompt.get(properties, function(err, result) {

      // Get total number of letters found
      var cntOfLetter = local.currRandomWrd.isLetterFound(result.enteredLetter);

      // If guessed incorrectly then inform user and substract number of guesses remaining
      if (cntOfLetter == 0) {

        console.log('HANGMAN : You guessed wrong!');
        local.guessesRemaining--;

      } 
      // If guessed correctly then inform user and check total of correctly guessed
      else  {
        
        console.log('HANGMAN : You guessed right!');

        if ( local.currRandomWrd.isWordFound() ){
          
          console.log('HANGMAN : You Won!!!');
          return;

        }
      }
      
      // Display current status of guesses remaining
      console.log('HANGMAN : Total Guesses remaining : ', local.guessesRemaining);

      // Display total guessed so far
      console.log('HANGMAN :', local.currRandomWrd.getWordToDisplay());
      
      // If guesses remaining is > 0 and word has not be guessed yet
      if (( local.guessesRemaining > 0 ) && ( local.currRandomWrd.found == false )){
        
        // Prompt user of new letter
        local.askLetter();

      }

      // If total guesses is zero then display the correct word
      else if ( local.guessesRemaining == 0 )  {
        
        console.log('HANGMAN : Game over. The word was : ', local.currRandomWrd.word.join(''));

      } 
    });
  }
};


// Program entering for first time, so start the game
hangmanGame.startGame();
