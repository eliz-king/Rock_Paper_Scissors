rps = ['Rock', 'Paper', 'Scissors'];

var rockWins = 

// var user = document.getElementById('#user-name')

var usersChoice = null

function compChoice(rps) {
  var choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}




console.log(compChoice(rps))
