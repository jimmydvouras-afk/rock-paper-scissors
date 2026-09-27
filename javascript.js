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

// write the logic for what beats what

// write the logic for 1 round

// make a counter for amount of wins

// make the entire game 5 rounds