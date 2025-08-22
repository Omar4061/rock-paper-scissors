// Function to get a random choice
function getComputerChoice(max) {
  let choice = 0;
  let result = "";
  choice = Math.floor(Math.random() * max);

  if (choice == 0) {
    result = "rock";
  } else if (choice == 1) {
    result = "paper";
  } else {
    result = "scissors";
  }

  return result;
}

// Function to get the human choice
function getHumanChoice() {
  let userInput = prompt("Make your choice");
  let userChoice = userInput.toLowerCase();
  return userChoice;
}

function playGame() {
  // Scores
  let humanScore = 0;
  let computerScore = 0;

  // Function to play the game
  function playRound(humanChoice, computerChoice) {
    console.log("Human: ", humanChoice);
    console.log("Computer: ", computerChoice);

    let winner = "";

    if (humanChoice == "rock") {
      if (computerChoice == "scissors") winner = "You win!";
      else if (computerChoice == "paper") winner = "You lose!";
      else winner = "Draw!";
    } else if (humanChoice == "paper") {
      if (computerChoice == "scissors") winner = "You lose!";
      else if (computerChoice == "rock") winner = "You win!";
      else winner = "Draw!";
    } else if (humanChoice == "scissors") {
      if (computerChoice == "paper") winner = "You win!";
      else if (computerChoice == "rock") winner = "You lose!";
      else winner = "Draw!";
    }

    if (winner == "You win!") {
      humanScore++;
    } else if (winner == "You lose!") {
      computerScore++;
    }
    return winner;
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`== Round ${i} ==`);
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(3);
    let result = playRound(humanChoice, computerChoice);
    console.log("Result: " + result);
  }
  console.log("=== FINAL RESULTS ===");
  console.log("Human final score: ", humanScore);
  console.log("Computer final score", computerScore);

  if (humanScore < computerScore) {
    console.log("You lose the game :/");
  } else if (humanScore > computerScore) {
    console.log("You won the game! :D");
  } else {
    console.log("It was a draw :0");
  }
}

// Call the game
playGame();
