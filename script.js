// This is a Game created to play against the computer.
// Is a Simple Rock, Paper or Scissors game.

// Function to get Computer's Choice
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

// Initialize the Score
let playerScore = 0;
let computerScore = 0;

// Function to play a round
function playRound(playerSelection, computerSelection) {
    
    // Make Player Selection case-insensitive
    playerSelection = playerSelection.toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        throw new Error('Invalid input for playerSelection');
    }

    let result;

    // Check the outcome of the round & update scores accordingly
    if (playerSelection === computerSelection) {
        result =  "It's a Tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) 
    {
        result = "You Win!";
        playerScore++;
    } else {
        result = "You Lose!";
        computerScore++;
    }
    // Update the Score Display
    updateScore();

    // Display the Result
    displayResult(result);
}

// Function to update the Score display
function updateScore() {
    const playerScoreDisplay = document.querySelector("#player-score");
    const computerScoreDisplay = document.querySelector("#computer-score");
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
function displayResult(result) {
    const displayResult = document.querySelector("#score");
    displayResult.textContent = result;
}

// Function to announce the Winner
function announceWinner(winner){
    const winnerDisplay = document.querySelector("#winner");
    winnerDisplay.textContent = `The Winner is ${winner}!`;
}

// Function to Restarts the Game
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    // Update the Score Display
    updateScore();
    // Clear the Result Display
    clearResult();
    // Clear the Winner Display
    clearWinner();
}
// Event listener for the Restart Button
const restartButton = document.querySelector("#restart-game");
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

// // Function to play the Game
// function game() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Enter your choice: rock, paper, or scissors');
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// Testing the function 
console.log(playRound('rock', 'scissors')); // should log "You Win! Rock beats Scissors"
console.log(playRound('ROCK', 'paper')); // should log "You Lose! Paper beats Rock"
console.log(playRound('paper', 'paper')); // should log "It's a tie!"
console.log(playRound('rock', 'fire')); // should log "Invalid player selection. Please choose 'rock', 'paper', or 'scissors'."