//Refactor function into array and randomizes choice through math methods
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"]
  let choiceIndex = Math.floor(Math.random() * choices.length);
  return choices[choiceIndex];
}

//Takes 2 parameters (one from calling getComputerChoice(), one from user input via. prompt) and compares them to output a string.
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

//Variables used to check return string from playRound() to determine win/loss.
const smiley = ":)";
const frown = ":(";
const tie = "tie";

//Used to increment score string.
let playerScore = 0;
let computerScore = 0;

//Loops 5 times, prompts player to enter R, P or S. Outputs playRound() return string and score tally.
//Line 44-46 variables used to check for substring in return string. Line 49-50 variables used to keep score.
//Defines playRound() parameters.
function game() {
  for (let i = 0; i < 5; i++) {

    let playerSelection = prompt("Enter \"rock\", \"paper\" or \"scissors\": ").toLowerCase();
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
  }
}

//Compares scores, outputs message when game function ends.
function endMessage() {

  if (playerScore > computerScore) {
    console.log("You have defeated the computer!")

  } else if (playerScore < computerScore) {
    console.log("The computer has defeated you!")

  } else {
    console.log("Draw game!")
  }
}

//Invoking functions.
//game();
//endMessage();

//This game should be able to be played through buttons
//Create 3 buttons for R, P and S
//Buttons should have event listeners which call playRound() function w/ correct playerSelection every time.
//Console.log() for above can be kept

//Add div that displays results with DOM console.logs
//Running score not Bo5/ Game is now 1st to 5