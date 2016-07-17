////// Requires //////
var Letter = require('./letter.js');

var Word = function(randomWord) {

  // Class properties
  this.word = randomWord.split('');
  this.lets = [];
  this.found = false;

  // Class methods
  // Create letter objects of the word and push to array
  this.getLetterObj = function() {

    var locallets = []; 

    this.word.forEach(function(element) {
      locallets.push(new Letter(element));
    });

    this.lets = locallets;

  };
  
  // Check letter object property if TRUE
  this.isWordFound = function() {
    
    this.found = this.lets.every(curLet => curLet.charappear);
    return this.found;

  };

  // Change letter object property to TRUE when letter found
  this.isLetterFound = function(userGuessedLetter) {
    var countOfLetterFnd = 0;

    this.lets.forEach( function(elementObj) {
      if ( elementObj.char == userGuessedLetter )  {
        elementObj.charappear = true;
        countOfLetterFnd++;
      }
    });

    return countOfLetterFnd;
  };

  // Display the word based on the right letter guessed
  this.getWordToDisplay = function() {
    var wordToDisplay = '';

    this.lets.forEach( function(elementObj) {
      wordToDisplay += elementObj.letterDisplay();
    });

    return wordToDisplay;
  };
}

module.exports = Word;