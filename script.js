// This is a Game created to play against the computer.
// Is a Simple Rock, Paper or Scissors game.

// Initialize the Score
let playerScore = 0;
let computerScore = 0;
let gameWinner = "";

// Function to play a round
function playRound(playerSelection, computerSelection) {
    let gameWinner;
    if (playerSelection === computerSelection) {
        gameWinner = "It\'s a Tie!"
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++
        gameWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++
        gameWinner = 'computer'
    }
    updateScore(gameWinner, playerSelection, computerSelection);
    return gameWinner;
}

// Function to get Computer's Choice
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * choices.length)
    return choices[randomNumber]
}

function isGameOver(winningScore) {
    return playerScore === winningScore || computerScore === winningScore
}


const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
// Function to update the Score display
function updateScore(playerScore, computerScore) {
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;

    // Check if the Player has reached a score of 5 to Win the Game
    if (playerScore === 5) {
        displayResult.textContent = "Congratulations, You Beat Up a Machine! John Connor is proud";
    }
    else if (computerScore === 5) {
        displayResult.textContent = "Look at you, You Lose against a Machine, Pathetic!";
    }
}

// Function to Display the Result
function displayResult(gameWinner) {
    const result = document.getElementById("result");
    result.textContent = gameWinner;
} 

// Function to announce the Winner
function announceWinner(winner){
    const winnerDisplay = document.querySelector("#winner");
    winnerDisplay.textContent = `The Winner is ${winner ? winner : 'unknown'}!`;
}

// Function to Restarts the Game
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    // Update the Score Display
    updateScore(playerScore, computerScore);
    console.log("Game restarted Successfully");
}

// Event listener for the Restart Button
const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", restartGame);

// Event listener for the Buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const playerSelection = e.target.dataset.selection;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })
})
