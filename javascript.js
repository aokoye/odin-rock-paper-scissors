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

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const computerScoreDisplay = document.getElementById('computerScore')
const userScoreDisplay = document.getElementById('userScore')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let humanScore = 0;
let compScore = 0;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  getComputerChoice()
  getResult()
  userScoreDisplay.innerHTML = humanScore;
  computerScoreDisplay.innerHTML = compScore;
  
    if (humanScore >= 5) {
        document.querySelector('.finish').innerHTML = "You won!!"}
    if (compScore >= 5) {
        document.querySelector('.finish').innerHTML = "The computer won this time..."
        }
}))


function getComputerChoice() {
    let ranChoice = Math.floor(Math.random() * 3);


    if (ranChoice == 0) {
        computerChoice = 'rock';
    } else if (ranChoice == 1) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult() {
        if (userChoice === computerChoice) {
            result = 'There is a tie!'
        }
        if (userChoice === 'rock' && computerChoice === 'scissors') {
            result = 'Your rock crushed the scissors - You won!'
            humanScore = ++humanScore;
        }
        if (userChoice === 'paper' && computerChoice === 'rock') {
            result = 'Your paper covered the rock - You won!'
            humanScore = ++humanScore;
        }
        if (userChoice === 'scissors' && computerChoice === 'paper') {
            result = 'Your scissors cut up the paper - You won!'
            humanScore = ++humanScore;
        }
        if (userChoice === 'scissors' && computerChoice === 'rock') {
            result = 'Your scissors got crushed by a rock - You lost. Good luck next time!'
            compScore = ++compScore;
        }
        if (userChoice === 'rock' && computerChoice === 'paper') {
            result = 'Your rock got covered by the paper - You lost. Good luck next time!'
            compScore = ++compScore;
        }
        if (userChoice === 'paper' && computerChoice === 'scissors') {
            result = 'Your paper got cut by the scissors - You lost. Good luck next time!'
            compScore = ++compScore;
        }

        
        resultDisplay.innerHTML = result
        return [compScore, humanScore]
     }