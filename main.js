//Refactor function into array and randomizes choice through math methods
let choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * choices.length);
  let computerSelection = choices[choiceIndex];
  return computerSelection;
}

//Declaring variables that reference RPS items via. JS
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const cpuRock = document.querySelector("#cpu-rock");
const cpuPaper = document.querySelector("#cpu-paper");
const cpuScissors = document.querySelector("#cpu-scissors");
const allPlayerButtons = document.querySelectorAll(".player-buttons");
const allCpuButtons = document.querySelectorAll(".computer-buttons");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

function resetColor() {
  let playerButtonList = Array.from(allPlayerButtons);
  let cpuButtonList = Array.from(allCpuButtons);
  for (let playerButtons of playerButtonList) {
    playerButtons.style.backgroundColor = "#FF8000";
  }
  for (let cpuButtons of cpuButtonList) {
    cpuButtons.style.backgroundColor = "#FF7F27";
  }
}

//Takes 3 parameters (one from calling getComputerChoice(), one from user clicks via. event listeners on RPS buttons.
//User click gets event id to manipulate playerSelection) and compares them to output a string.
function playRound(event, playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = "";
  playerSelection += event.currentTarget.id;
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === "paper" && computerSelection === "rock") {
    resetColor();
    paper.style.backgroundColor = "yellowGreen";
    cpuRock.style.backgroundColor = "crimson";
    console.log("CPU chose ROCK. YOU WIN this round! :)");

  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    resetColor();
    rock.style.backgroundColor = "yellowGreen";
    cpuScissors.style.backgroundColor = "crimson";
    console.log("CPU chose SCISSORS. YOU WIN this round! :)");

  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    resetColor();
    scissors.style.backgroundColor = "yellowGreen";
    cpuPaper.style.backgroundColor = "crimson";
    console.log("CPU chose PAPER. YOU WIN this round! :)");

  } else if (playerSelection === "rock" && computerSelection === "paper") {
    resetColor();
    rock.style.backgroundColor = "crimson";
    cpuPaper.style.backgroundColor = "yellowGreen";
    console.log("CPU chose PAPER. Sorry, YOU LOST this round! :(");

  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    resetColor();
    paper.style.backgroundColor = "crimson";
    cpuScissors.style.backgroundColor = "yellowGreen";
    console.log("CPU chose SCISSORS. Sorry, YOU LOST this round! :(");

  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    resetColor();
    scissors.style.backgroundColor = "crimson";
    cpuRock.style.backgroundColor = "yellowGreen";
    console.log("CPU chose ROCK. Sorry, YOU LOST this round! :(");

  } else if (playerSelection === computerSelection) {
    resetColor();
    event.currentTarget.style.backgroundColor = "gray";
    if (event.currentTarget.id === "paper") {
      cpuPaper.style.backgroundColor = "gray";
    } else if (event.currentTarget.id === "scissors") {
      cpuScissors.style.backgroundColor = "gray";
    } else if (event.currentTarget.id === "rock") {
      cpuRock.style.backgroundColor = "gray";
    }
    console.log("CPU chose the SAME. It's a TIE!");
  }
}

//Variables used to check return string from playRound() to determine win/loss.
const smiley = ":)";
const frown = ":(";
const tie = "TIE";

//Used to increment score string.
let playerScore = 0;
let computerScore = 0;

//Loops 5 times, prompts player to enter R, P or S. Outputs playRound() return string and score tally.
//Line 44-46 variables used to check for substring in return string. Line 49-50 variables used to keep score.
//Defines playRound() parameters.
/*function game() {
  let i = 5;
  do {

    let computerSelection = getComputerChoice();

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
  } while ((playerScore || computerScore) < i);
}*/

//Compares scores, outputs message when game function ends.
/*function endMessage() {

  if (playerScore > computerScore) {
    console.log("You have defeated the computer!")

  } else if (playerScore < computerScore) {
    console.log("The computer has defeated you!")

  } else {
    console.log("Draw game!")
  }
}*/

//Invoking functions.
//game();
//endMessage();

//Add div that displays results with DOM console.logs
//Running score not Bo5/ Game is now 1st to 5