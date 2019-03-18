rps = ['Rock', 'Paper', 'Scissors'];


//variables

var usersChoice = rps[1]
var computerChoice = compChoice(rps)
var result = winLose(computerChoice, usersChoice, rps)

// HTML elements 
var startButton = document.getElementById('start-button')
var userNameField = document.getElementById('user-name')
var userName;
var letsStart = document.getElementsById('welcome')

// back end functions

function compChoice(rps) {
  var choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}

function winLose(computerChoice, usersChoice, rps)  {
  var result = null

  if (usersChoice == compChoice) {
     result = 'Draw';
  }
  else if (((usersChoice == rps[0]) && (computerChoice == rps[2])) || ((usersChoice == rps[1]) && (computerChoice == rps[0])) || ((usersChoice == rps[2]) && (computerChoice == rps[1]))) {
     result = 'You won' ;
  }
  else {
    result = 'Computer Won';
  }
  return result;
}

startButton.addEventListener("click", function() {

  letsStart.className = "";
});

//testing
console.log(compChoice(rps))
console.log(result)
console.log(letsStart)

// debugger


