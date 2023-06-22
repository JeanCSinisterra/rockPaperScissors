// This is a Game created to play against the computer.
// Is a Simple Rock, Paper or Scissors game.

// Function to get Computer's Choice
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}
// Function to play a round
function playRound(playerSelection, computerSelection) {
    // Make Player Selection case-insensitive
    playerSelection = playerSelection.toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        throw new Error('Invalid input for playerSelection');
    }
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else {
        return "Look at you, You Lose against a Machine, Pathetic";
    }
}

// Function to play the Game
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice: rock, paper, or scissors');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

// Testing the function 
console.log(playRound('rock', 'scissors')); // should log "You Win! Rock beats Scissors"
console.log(playRound('ROCK', 'paper')); // should log "You Lose! Paper beats Rock"
console.log(playRound('paper', 'paper')); // should log "It's a tie!"
console.log(playRound('rock', 'fire')); // should log "Invalid player selection. Please choose 'rock', 'paper', or 'scissors'."