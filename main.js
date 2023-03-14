//Refactor function into array and randomizes choice through math methods
let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * choices.length);
  let computerSelection = choices[choiceIndex];
  return computerSelection;
}

//Declaring variables that reference RPS items via. JS
const body = document.querySelector("body");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const cpuRock = document.querySelector("#cpu-rock");
const cpuPaper = document.querySelector("#cpu-paper");
const cpuScissors = document.querySelector("#cpu-scissors");

const allPlayerButtons = document.querySelectorAll(".player-buttons");
const allCpuButtons = document.querySelectorAll(".computer-buttons");

const roundMessage = document.querySelector("#round-message");

let playerScoreNum = document.querySelector(".player-score-num");
let cpuScoreNum =  document.querySelector(".cpu-score-num");

const playAgain = document.getElementById("play-again");

//EventListeners
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

body.addEventListener("click", endMessage);

playAgain.addEventListener("click", resetGame);

//Functions
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

function roundWinMessage() {
  roundMessage.style.visibility = "visible";
  roundMessage.textContent = "You WIN this round! :)";
}

function roundLoseMessage() {
  roundMessage.style.visibility = "visible";
  roundMessage.textContent = "Sorry, you LOSE this round! :(";
}

function roundTieMessage() {
  roundMessage.style.visibility = "visible";
  roundMessage.textContent = "It's a TIE!";
}

function playRound(event) {
  computerSelection = getComputerChoice();
  playerSelection = "";
  playerSelection += event.currentTarget.id;

  if (playerSelection === "paper" && computerSelection === "rock") {
    resetColor();
    paper.style.backgroundColor = "yellowGreen";
    cpuRock.style.backgroundColor = "crimson";
    roundWinMessage();
    playerScoreNum.textContent++;

  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    resetColor();
    rock.style.backgroundColor = "yellowGreen";
    cpuScissors.style.backgroundColor = "crimson";
    roundWinMessage();
    playerScoreNum.textContent++;

  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    resetColor();
    scissors.style.backgroundColor = "yellowGreen";
    cpuPaper.style.backgroundColor = "crimson";
    roundWinMessage();
    playerScoreNum.textContent++;

  } else if (playerSelection === "rock" && computerSelection === "paper") {
    resetColor();
    rock.style.backgroundColor = "crimson";
    cpuPaper.style.backgroundColor = "yellowGreen";
    roundLoseMessage();
    cpuScoreNum.textContent++;

  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    resetColor();
    paper.style.backgroundColor = "crimson";
    cpuScissors.style.backgroundColor = "yellowGreen";
    roundLoseMessage();
    cpuScoreNum.textContent++;

  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    resetColor();
    scissors.style.backgroundColor = "crimson";
    cpuRock.style.backgroundColor = "yellowGreen";
    roundLoseMessage();
    cpuScoreNum.textContent++;

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
    roundTieMessage();
  }
}

function endMessage() {
  if (playerScoreNum.textContent >= 5) {
    roundMessage.textContent = "*You WIN the game*";
    roundMessage.style.color = "green";
    roundMessage.style.border = "4px solid green";

    rock.removeEventListener("click", playRound);
    paper.removeEventListener("click", playRound);
    scissors.removeEventListener("click", playRound);

    playAgain.style.visibility = "visible";

  } else if (cpuScoreNum.textContent >= 5) {
    roundMessage.textContent = "*CPU WINS the game*";
    roundMessage.style.color = "crimson";
    roundMessage.style.border = "4px solid crimson";

    rock.removeEventListener("click", playRound);
    paper.removeEventListener("click", playRound);
    scissors.removeEventListener("click", playRound);

    playAgain.style.visibility = "visible";
  }
}

function resetGame() {
  resetColor();
  playerScoreNum.textContent = 0;
  cpuScoreNum.textContent = 0;

  roundMessage.style.visibility = "hidden";
  playAgain.style.visibility = "hidden";

  rock.addEventListener("click", playRound);
  paper.addEventListener("click", playRound);
  scissors.addEventListener("click", playRound);

  roundMessage.style.color = "#222222";
  roundMessage.style.border = "0px";
}