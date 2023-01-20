//Return 3 string outputs from RNG(1, 3) to plug in playRound() function.
function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

//Takes 2 parameters and compares them to output win/loss string
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You won this round! Paper beats rock. :)";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You won this round! Rock beats scissors. :)";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You won this round! Scissors beats paper. :)";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Sorry, you lose this round! Paper beats rock. :(";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Sorry, you lose this round! Scissors beats paper. :(";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Sorry, you lose this round! Rock beats Scissors. :(";
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
}

//Make case-insensitive
let finalComputerSelection = getComputerChoice().toLowerCase();
let computerSelection = finalComputerSelection;

//Make case-insensitive
let playerSelection = "PaPeR";
let finalPlayerSelection = playerSelection.toLowerCase();

console.log(playRound(finalPlayerSelection, finalComputerSelection));