document.addEventListener("DOMContentLoaded", function () {

  rps = ['Rock', 'Paper', 'Scissors'];
  //variables
  var choicePicker = document.getElementById("choice-picker");
  var usersChoice;
  var result;
  // HTML elements 
  var startButton = document.getElementById('start-button');
  var userNameField = document.getElementById('user-name');
  var game = document.getElementById('game');
  var submitButton = document.getElementById('submit-choice');
  var tracker = [];
  var resultEl = document.getElementById('result');
  var userChoiceEl = document.getElementById('usersChoice');
  var compChoiceEl = document.getElementById('compsChoice');
  var trackerEl = document.getElementById('tracker')
  // back end functions

  function compChoice(rps) {
    var choice = rps[Math.floor(Math.random() * rps.length)];
    return choice;
  }

  function winLose(computerChoice, usersChoice, rps) {
    var result = null
    // debugger
    if (usersChoice == computerChoice) {
      result = 'Draw';
    }
    else if (((usersChoice == rps[0]) && (computerChoice == rps[2])) || ((usersChoice == rps[1]) && (computerChoice == rps[0])) || ((usersChoice == rps[2]) && (computerChoice == rps[1]))) {
      result = 'You won';
    }
    else {
      result = 'Computer Won';
    }
    
    tracker.push(result);
    console.log(result, tracker);
    printResults(result);
    return result;
  }

  function renderGame() {
    game.className = "game-field-show";
  }

  function printTracker (tracker) {
    // var resultString = tracker[0];
    // for (var i = 1; i<tracker.length; i++) {
    //   resultString += result + ","
    // }

    trackerEl.innerHTML = "Current results:  " + tracker.join(', ')
  }

  function printCompsChoice() {
    cChoice = compChoice(rps)
    console.log("Computers choice: " + cChoice)

    compChoiceEl.innerHTML = "Computers choice: " + cChoice;
  }


  function makeChoice() {
    usersChoice = choicePicker.options[choicePicker.selectedIndex].text
    printUsersChoice()
    return usersChoice;
  }

  function printUsersChoice() {
    console.log("Users choice: " + usersChoice)
    userChoiceEl.innerHTML = "Your choice: " + usersChoice;
  }


  function printResults(result) {
    resultEl.innerHTML = "Result: " + result;
  }

  function reset() {
    usersChoice = null;
    userChoiceEl.innerHTML = "";
    compChoiceEl.innerHTML = "";
    resultEl.innerHTML = "";
  }



  // listeners
  userNameField.addEventListener('keyup', function (event) {
    if (event.target.value !== '') {
      startButton.className = "vis";
    } else {
      startButton.className = "hide";
    }
  })

  startButton.addEventListener('click', renderGame);
  submitButton.addEventListener('click', startGame);

  function startGame() {
    if (tracker.length != 0) {
      reset()
    }
    makeChoice()
    printCompsChoice()
    winLose(cChoice, usersChoice, rps)
    printTracker(tracker);
  }
})
