function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  if (playerScore < 5 && computerScore < 5) {
    const computerSelection = getComputerChoice();
    let result = "";

    if (playerSelection === computerSelection) {
      result = "draw";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      result = "player";
    } else {
      result = "computer";
    }

    displayResult(result, playerSelection, computerSelection);
    updateScore(result);

    if (playerScore === 5 || computerScore === 5) {
      displayWinner();
      resetGame();
    }
  }
}

function displayResult(result, playerSelection, computerSelection) {
  const choiceElement = document.getElementById("choice");
  choiceElement.innerHTML = `You chose <span style="color: green">${playerSelection}</span> the computer chose <span style="color: green">${computerSelection}</span>`;
}

let playerScore = 0;
let computerScore = 0;

function updateScore(result) {
  const playerScoreElement = document.querySelector(".playerScore");
  const computerScoreElement = document.querySelector(".computerScore");

  if (result === 'player') {
    playerScore++;
  } else if (result === 'computer') {
    computerScore++;
  }
  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
}

function displayWinner() {
  const winnerMessage = document.getElementById("winner-message");
  const winner = playerScore === 5 ? "Player" : "Computer";
  winnerMessage.textContent = `${winner} is the winner!`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

function handleClick(selection) {
  playRound(selection);
}

document.getElementById("rock").addEventListener("click", function () {
  handleClick("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  handleClick("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  handleClick("scissors");
});
