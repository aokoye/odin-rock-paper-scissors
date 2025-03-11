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

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    let choices = humanChoice + computerChoice;

    if (humanChoice === computerChoice) {
        result = 'There is a tie!'
    }
    if (humanChoice === 'r' && computerChoice === 's') {
        result = 'You won!'
        humanScore = ++humanScore;
    }
    if (humanChoice === 'p' && computerChoice === 'r') {
        result = 'You won!'
        humanScore = ++humanScore;
    }
    if (humanChoice === 's' && computerChoice === 'p') {
        result = 'You won!'
        humanScore = ++humanScore;
    }
    if (humanChoice === 's' && computerChoice === 'r') {
        result = 'You lost. Good luck next time!'
        computerScore = ++computerScore;
    }
    if (humanChoice === 'r' && computerChoice === 'p') {
        result = 'You lost. Good luck next time!'
        computerScore = ++computerScore;
    }
    if (humanChoice === 'p' && computerChoice === 's') {
        result = 'You lost. Good luck next time!'
        computerScore = ++computerScore;
    }

    console.log(result + " Scores - you: " + humanScore + " computer: " + computerScore);
    return choices;


 }

 
console.log(playRound(humanChoice, computerChoice));