// This is a Game created to play against the computer.
// It's a simple rock, paper, or scissors game.

// Set up variables to store the player/computer's score & the game result.
let playerSelection;
let roundWinner = "";

// Function to play a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "Draw!";
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        roundWinner = 'player';
    } else {
        roundWinner = 'computer';
    }

    updateScore(roundWinner, playerSelection, computerSelection);
}

// Function to get Computer's Choice
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
};

// Initialize computerSelection after getComputerChoice function definition
let computerSelection = getComputerChoice();

function isGameOver(winningScore) {
    return playerSelection === winningScore || computerSelection === winningScore;
}

const playerSelectionDisplay = document.getElementById("player-score");
const computerSelectionDisplay = document.getElementById("computer-score");
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");

// Function to update the Score display
function updateScore() {
    if (roundWinner === 'player') {
        scoreInfo.textContent = "You win !"
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = "You lose !"
    } else if (roundWinner === 'Draw!') {
        scoreInfo.textContent = "Draw!"
    }

    playerSelectionDisplay.textContent = `Player: ${playerSelection}`;
    computerSelectionDisplay.textContent = `Computer: ${computerSelection}`;

    // Update player and computer signs based on their selections
    updateChoices(playerSelection, computerSelection);
}

function updateChoices(playerSelection, computerSelection) {
    // Update player sign
    switch (playerSelection) {
        case "ROCK":
            playerSign.textContent = "🪨";
            break;
        case "PAPER":
            playerSign.textContent = "📃";
            break;
        case "SCISSORS":
            playerSign.textContent = "✌";
            break;
    }

    // Update computer sign
    switch (computerSelection) {
        case "ROCK":
            computerSign.textContent = "🪨";
            break;
        case "PAPER":
            computerSign.textContent = "📃";
            break;
        case "SCISSORS":
            computerSign.textContent = "✂️";
            break;
    }
}

// // Function to Display the Result
function displayResult(roundWinner) {
    const result = document.getElementById("scoreMessage");
    result.textContent = roundWinner;
}

// Function to Restarts the Game
function restartGame() {
    playerSelection = 0;
    computerSelection = 0;
    // Update the Score Display
    updateScore(playerSelection, computerSelection);
    console.log("Game restarted Successfully");
}

// Get the Buttons
const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => handleClick("ROCK"));

const paperBtn = document.querySelector("#paperBtn")
.addEventListener("click", () => handleClick("PAPER"));

const scissorsBtn = document.querySelector("#scissorsBtn")
.addEventListener("click", () => handleClick("SCISSORS"));

const restartBtn = document.querySelector("#restartBtn")
.addEventListener("click", restartGame);

const scoreInfo = document.querySelector("#scoreInfo");

// Function to handle the Clicks
function handleClick(playerSelection) {
    if (isGameOver(5)) {
        return;
    }
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);  // removed parentheses after computerSelection
    displayResult(roundWinner);
}

