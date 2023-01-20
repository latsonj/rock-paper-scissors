function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      return "Rock"
      break;
    case 2:
      return "Paper"
      break;
    case 3:
      return "Scissors"
      break;
  }
}

/*  -RNG between 1-3 [x]
    -Store RNG value in variable [x] */

console.log(getComputerChoice());
