document.addEventListener("DOMContentLoaded", function () {

  rps = ['Rock', 'Paper', 'Scissors'];


  //variables
  var usersChoice;
  // var computerChoice = compChoice(rps)

  // HTML elements 
  var startButton = document.getElementById('start-button')
  var userNameField = document.getElementById('user-name')
  var game = document.getElementById('game')

  var rock = document.getElementById("choice1")
  var paper = document.getElementById("choice2")
  var scissors = document.getElementById("choice3")

  // back end functions

  function compChoice(rps) {
    var choice = rps[Math.floor(Math.random() * rps.length)];
    console.log(choice)
    return choice;
  }

  function winLose(computerChoice, usersChoice, rps) {
    var result = null
    // debugger
    if (usersChoice == compChoice) {
      result = 'Draw';
    }
    else if (((usersChoice == rps[0]) && (computerChoice == rps[2])) || ((usersChoice == rps[1]) && (computerChoice == rps[0])) || ((usersChoice == rps[2]) && (computerChoice == rps[1]))) {
      result = 'You won';
    }
    else {
      result = 'Computer Won';
    }
    console.log(result);
    return result;
  }


  function registerChoice(usersChoice) {
    // var usersChoice = null
    rock.addEventListener('click', function () {
      return usersChoice = rps[0]
    })
    paper.addEventListener('click', function () {
      return usersChoice = rps[1]
    })
    scissors.addEventListener('click', function () {
      return usersChoice = rps[2]
    })
  };

  // listeners
  userNameField.addEventListener('keyup', function (event) {
    if (event.target.value !== '') {
      startButton.className = "vis";
    } else {
      startButton.className = "hide";
    }
  })

  startButton.addEventListener('click', startGame);

  function startGame() {
    game.className = "game-field-show";
    registerChoice()

    if (usersChoice != null) {
      winLose( usersChoice,compChoice, rps)
    }
    else {
      console.log("user choice was null")
    }
  }
})
