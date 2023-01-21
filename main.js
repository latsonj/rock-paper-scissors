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

//Make case-insensitive
let computerSelection = getComputerChoice().toLowerCase();

//Make case-insensitive
let initialPlayerSelection = "ScIsSoRs";
let playerSelection = initialPlayerSelection.toLowerCase();

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

/*  -Check whether player or computer win
      -slice(-2) check whether smiley or frown? [x]
      -if smiley then award point to player, if frown award point to computer
      -let run for 5 rounds, output at end: you win, you lose, tie
    -Output score tally in console somehow
      -e.g. You: 1   Computer: 0   Rounds Remaining: 4
      -Can store score values in variables.
      -Use string from above example. Insert scores in template literal?

      -Use prompt to ask for player name?
      -Store player name in variable.
      -Can use template literal to insert players name. */

function game() {
  for (let i = 0; i < 5; i++) {

  }
}

const smiley = ":)";
const frown = ":(";
const tie = "tie";

console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection).includes(frown));