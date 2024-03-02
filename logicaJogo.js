let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection) {
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
}

function displayResult(result, playerSelection, computerSelection) {
  const choiceElement = document.getElementById("choice");
  choiceElement.innerHTML = `You chose <span style="color: green">${playerSelection}</span> the computer chose <span style="color: green">${computerSelection}</span>`;
}

function updateScore(result) {
  const playerScoreElement = document.querySelector(".playerScore");
  const computerScoreElement = document.querySelector(".computerScore");

  if (result === "player") {
    playerScore++;
  } else if (result === "computer") {
    computerScore++;
  }

  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;

  if (playerScore >= 6 || computerScore >= 6) {
    displayWinner();
    resetGame();
  }
}

function displayWinner() {
  const winnerMessage = document.getElementById("winner-message");
  const winner = playerScore === 5 ? "Player" : "Computer";
  winnerMessage.textContent = `${winner} is the winner!`;

  setTimeout(() => {
    winnerMessage.textContent = "";
  }, 2000);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  const playerScoreElement = document.querySelector(".playerScore");
  const computerScoreElement = document.querySelector(".computerScore");
  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
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
