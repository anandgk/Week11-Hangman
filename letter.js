var Letter = function(guessedLetter) {
  
  this.char = guessedLetter;
  this.charappear = false;
  this.letterDisplay = function() {
    return (this.charappear) ? this.char : " _ ";
  };

};

module.exports = Letter;