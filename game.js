//List of star wars words 
var wordList = ["ADMIRAL ACKBAR","BAZINE NETAL","BB8","C3P0","CAPTAIN PHASMA","CHEWBACCA","DOCTOR KALMONIA","DQAR","FINN","THE FIRST ORDER","GENERAL HUX","HAN SOLO","HAPPABORE","LEIA ORGANA","LUKE SKYWALKER","MAJOR EMATT","MILLENNIUM FALCON","R2D2","THE RESISTANCE","BAIL ORGANA","BOSS LYONIE","BOSS NASS","DARTH VADER","EMPEROR PALPATINE"];

//Determine index number and get random word from array list
var newWord = wordList[Math.floor(Math.random() * wordList.length)];

//Function that returs random word
module.exports = function()  {
  return {
    getRandomWord: function() {
       return newWord;
    }
  }
}
