/* 
Have the computer pick rock, paper, or scissors.
Have the user pick rock, paper, or scissors.
When the computer wins add one point to their score.
when the human wins add one point to their score.
If there is a tie no one gets a point.
Have there be 5 rounds.
---
Rock beats scissors
Paper beats rock
Scissors beats paper
*/

function getComputerChoice() {
    let ranChoice = Math.floor(Math.random() * 3);

    let comChoice;

    if (ranChoice == 0) {
        comChoice = 'r';
    } else if (ranChoice == 1) {
        comChoice = 'p';
    }
    else {
        comChoice = 's';
    }

    return comChoice;
}

function getHumanChoice() {
    let huChoice = prompt ("Choose rock, paper, or scissors.");
    huChoice = huChoice.toLowerCase();

    if (huChoice == 'rock') {
        huChoice = 'r';
    } else if (huChoice == 'paper') {
        huChoice = 'p';
    } else {
        huChoice = 's';
    }
    
    return huChoice;
}

let humanScore = 0;
let computerScore = 0;
let result;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result = 'There is a tie!'
    }
    if (humanChoice === 'r' && computerChoice === 's') {
        result = 'Your rock crushed the scissors - You won!'
        humanScore = ++humanScore;
    }
    if (humanChoice === 'p' && computerChoice === 'r') {
        result = 'Your paper covered the rock - You won!'
        humanScore = ++humanScore;
    }
    if (humanChoice === 's' && computerChoice === 'p') {
        result = 'Your scissors cut up the paper - You won!'
        humanScore = ++humanScore;
    }
    if (humanChoice === 's' && computerChoice === 'r') {
        result = 'Your scissors got crushed by a rock - You lost. Good luck next time!'
        computerScore = ++computerScore;
    }
    if (humanChoice === 'r' && computerChoice === 'p') {
        result = 'Your rock got covered by the paper - You lost. Good luck next time!'
        computerScore = ++computerScore;
    }
    if (humanChoice === 'p' && computerChoice === 's') {
        result = 'Your paper got cut by the scissors - You lost. Good luck next time!'
        computerScore = ++computerScore;
    }
    return console.log(result + " Scores - you: " + humanScore + " computer: " + computerScore);
 }


function playGame() {
   for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice)
   }
   
   if (computerScore > humanScore) {
    console.log("Game over - try again next time.");
   } else if (computerScore < humanScore) {
    console.log("You won the game!");
   }else {
    console.log("It's a tie!");
   }

}
playGame();