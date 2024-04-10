let options = ['paper', 'rock', 'scissors', 'spock', 'lizard'];
let playerScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
      button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "reset") {
              resetGame();
          } else {
              playRound(this.id);
          }
      })
    }
  })



function playRound(playerChoice) {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    let result = getResult(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
    updateScore(result);
    }

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
      } else if (
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
        (playerChoice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock'))
      ) {
        return 'win';
      } else {
        return 'lose';
      }
    }
    

function displayResult(result, playerChoice, computerChoice) {
    let resultDisplay = document.getElementById('result');
    let message;
    if (result === 'win') {
      message = `You win! ${playerChoice} beat ${computerChoice}.`;
    } else if (result === 'lose') {
      message = `You lose! ${computerChoice} beat ${playerChoice}.`;
    } else {
      message = `Tie!  ${playerChoice}.`;
    }
    resultDisplay.textContent = message;
  }

function updateScore(result) {
    let playerScoreDisplay = document.getElementById('player-score');
    let computerScoreDisplay = document.getElementById('computer-score');
    if (result === 'win') {
      playerScore++;
    } else if (result === 'lose') {
      computerScore++;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  }

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = '0';
    document.getElementById('computer-score').textContent = '0';
    document.getElementById('result').textContent = '';
  }