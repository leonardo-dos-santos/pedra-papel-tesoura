const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  if (playerScore < 5 && computerScore < 5) {
    const computerSelection = getComputerChoice();
    let result;

    if (playerSelection === computerSelection) {
      result = `It's a Tie!`;
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      result = `You Win! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
    } else {
      result = `You Lose! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
    }

    displayResult(result, playerSelection, computerSelection);
    updateScore();

    if (playerScore === 5 || computerScore === 5) {
      displayWinner();
      resetGame();
    }
  }
}

function displayResult(result, playerSelection, computerSelection) {
  const choice = document.getElementById('choice');
  choice.textContent = `You chose ${playerSelection} the computer chose ${computerSelection}`;
  console.log(result);
}

function updateScore() {
  console.log(`Running Scores: Player ${playerScore} - ${computerScore} Computer`);
}

function displayWinner() {
  const winner = playerScore === 5 ? 'Player' : 'Computer';
  alert(`${winner} is the winner!`);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

function handleClick(selection) {
  playRound(selection);
}

document.getElementById('rock').addEventListener('click', function () {
  handleClick('rock');
});

document.getElementById('paper').addEventListener('click', function () {
  handleClick('paper');
});

document.getElementById('scissors').addEventListener('click', function () {
  handleClick('scissors');
});
