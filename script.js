// This is a Game created to play against the computer.
// It's a simple rock, paper, or scissors game.

// Set up variables to store the player/computer's score & the game result.
let playerScore = 0;
let computerScore = 0;
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
        playerScore++;
        roundWinner = 'player';
    } else {
        computerScore++
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

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

// Get the Buttons
const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => handleClick("ROCK"));

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => handleClick("PAPER"));

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));

const restartBtn = document.querySelector("#restartBtn");
restartBtn.addEventListener("click", restartGame)


// Function to handle the Clicks
function handleClick(playerSelection) {
    if (isGameOver()) {
        return;
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    displayResult(roundWinner);

    if (isGameOver()) {
        setFinalMessage();
    }
}

let scoreInfo = document.getElementById("scoreInfo");
let scoreMessage = document.getElementById("scoreMessage");
let scoreDisplay = document.getElementById("scoreDisplay");
let playerScorePara = document.getElementById('playerScore')
let computerScorePara = document.getElementById('computerScore')
let playerSign = document.getElementById("playerSign");
let computerSign = document.getElementById("computerSign");
let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
updateChoices(playerSelection, computerSelection);
updateScore()

if (isGameOver()) {
    scoreDisplay.style.display = "none";
    scoreInfo.textContent = "Game Over!";
    scoreMessage.textContent = "Press Restart to play again!";
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
            playerSign.textContent = "✂️";
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

// Function to update the Score display
function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost!'
    }

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}
// function updateScoreMessage(winner, playerSelection, computerSelection) {
//     if (winner === 'player') {
//         scoreMessage.textContent = `${capitalizeFirstLetter(
//             playerSelection
//         )} beats ${computerSelection.toLowerCase()}`
//         return
//     }
//     if (winner === 'computer') {
//         scoreMessage.textContent = `${capitalizeFirstLetter(
//             playerSelection
//         )} is beaten by ${computerSelection.toLowerCase()}`
//         return
//     }

//     scoreMessage.textContent = `${capitalizeFirstLetter(
//         playerSelection
//     )} ties with ${computerSelection.toLowerCase()}`
// }

    // // Function to Display the Result
    function displayResult(roundWinner) {
        const result = document.getElementById("scoreMessage");
        result.textContent = roundWinner;
    }

    // Function to Restarts the Game
    function restartGame() {
        playerScore = 0;
        computerScore = 0;
        // Update the Score Display
        scoreInfo.textContent = "Choose your weapon";
        scoreMessage.textContent = "First to score 5 points wins the game";
        playerScorePara.textContent = 'Player: 0'
        computerScorePara.textContent = 'Computer: 0'
        playerSign.textContent = '❔'
        computerSign.textContent = '❔'
        updateScore(playerSelection, computerSelection);
        console.log("Game restarted Successfully");
    }

function setFinalMessage() {
    return playerScore > computerScore
        ? (endgameMsg.textContent = 'You won!')
        : (endgameMsg.textContent = 'You lost...')
}
