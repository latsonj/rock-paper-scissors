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

//Takes 2 parameters and compares them to output win/loss string.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "Computer chose rock. You won this round! :)";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Computer chose scissors. You won this round! :)";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Computer chose paper. You won this round! :)";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer chose paper. Sorry, you lose this round! :(";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer chose scissors. Sorry, you lose this round! :(";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer chose rock. Sorry, you lose this round! :(";
  } else if (playerSelection === computerSelection) {
    return "Computer chose the same. It's a tie!";
  }
}

//Variables used to check string to determine win/loss.
const smiley = ":)";
const frown = ":(";
const tie = "tie";

//Used to increment score string
let playerScore = 0;
let computerScore = 0;

//Loops 5 times, prompts user to enter R, P or S. Outputs win/loss string and score tally.
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter \"rock\", \"paper\" or \"scissors\": ").toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    if (playRound(playerSelection, computerSelection).includes(smiley)) {
      console.log(playRound(playerSelection, computerSelection));
      console.log(`Player: ${++playerScore}     Computer: ${computerScore}`);
    } else if (playRound(playerSelection, computerSelection).includes(frown)) {
      console.log(playRound(playerSelection, computerSelection));
      console.log(`Player: ${playerScore}     Computer: ${++computerScore}`);
    } else if (playRound(playerSelection, computerSelection).includes(tie)) {
      console.log(playRound(playerSelection, computerSelection));
      console.log(`Player: ${playerScore}     Computer: ${computerScore}`)
    }
  }
}

game();