// allow the user to input rock, paper, or scissors (make case insensitive)
function getHumanChoice() {
    let humanChoice = prompt('Rock, Paper, or Scissors?');
    humanChoice = humanChoice.toLowerCase();
    humanMessage = 'You have chosen ' + humanChoice;
    console.log(humanMessage);
    return humanChoice;
}

const humanChoice = getHumanChoice();

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

const computerChoice = getComputerChoice();
computerMessage = 'Computer has chosen ' + computerChoice;
console.log(computerMessage);

// write the logic for 1 round
function playRound(humanChoice, computerChoice) {
  switch (true) {
    case (humanChoice === 'rock' && computerChoice === 'rock'):
      console.log("It's a tie! Play Again!");
      return 'tie';
    case (humanChoice === 'rock' && computerChoice === 'paper'):
      console.log("You lose! paper beats rock!");
      return 'loss';
    case (humanChoice === 'rock' && computerChoice === 'scissors'):
      console.log('You win! rock beats scissors!');
      return 'win';
    case (humanChoice === 'paper' && computerChoice === 'rock'):
      console.log('You win! paper beats rock!');
      return 'win';
     case (humanChoice === 'paper' && computerChoice === 'paper'):
      console.log("It's a tie! Play Again!");
      return 'tie';
    case (humanChoice === 'paper' && computerChoice === 'scissors'):
      console.log("You lose! scissors beats paper!");
      return 'loss';
    case (humanChoice === 'scissors' && computerChoice === 'rock'):
      console.log("You lose! rock beats scissors!");
      return 'loss';
    case (humanChoice === 'scissors' && computerChoice === 'paper'):
      console.log('You win! scissors beats paper!');
      return 'win';
     case (humanChoice === 'scissors' && computerChoice === 'scissors'):
      console.log("It's a tie! Play Again!");
      return 'tie';   
  }
}

const round = playRound(humanChoice, computerChoice);

// make win counter
let humanScore = 0;
let computerScore = 0;

function winCounter (humanScore, computerScore) {
  if (round === 'win') {
    humanScore = humanScore + 1;
  }
  else if (round === 'loss') {
    computerScore = computerScore + 1;
  }
  else {
    console.log('No score change!');
  }
  console.log('Your score: ' + humanScore + ' Computer score: ' + computerScore);
}

winCounter(humanScore, computerScore);

// make the entire game 5 rounds