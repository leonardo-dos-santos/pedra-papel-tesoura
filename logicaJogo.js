function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
  
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); // Torna a escolha do jogador em minúsculas

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return 'It\'s a Tie!';
  }
}
  
function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose: rock, paper, or scissors');
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(result);

    if (result.includes('Win')) {
      playerScore++;
    } else if (result.includes('Lose')) {
      computerScore++;
    }
  }

  console.log(`Final Scores: Player ${playerScore} - ${computerScore} Computer`);

  if (playerScore > computerScore) {
    console.log('Congratulations! You Win the Game!');
  } else if (playerScore < computerScore) {
    console.log('Sorry, You Lose the Game!');
  } else {
    console.log('It\'s a Tie! No one wins.');
  }
}
  
  // Inicie o jogo
playGame();
  