// allow the user to input rock, paper, or scissors (make case insensitive)
function getHumanChoice() {
    let humanChoice = prompt('Rock, Paper, or Scissors?');
    humanChoice = humanChoice.toLowerCase();
    humanMessage = 'You have chosen ' + humanChoice;
    console.log(humanMessage);
    return humanChoice;
}

getHumanChoice();

// allow the computer to input rock, paper, or scissors
function getComputerChoice() {
    const randomValue = Math.random();

  if (randomValue < 1 / 3) {

    return 'rock';

  } else if (randomValue < 2 / 3) {

    return 'paper';

  } else {

    return 'scissors';

  }
}

computerChoice = getComputerChoice();
computerMessage = 'Computer has chosen ' + computerChoice;
console.log(computerMessage);

// write the logic for what beats what

// write the logic for 1 round

// make a counter for amount of wins

// make the entire game 5 rounds