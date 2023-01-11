let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generates a number between 0 and 9.
function generateTarget() {
    return Math.floor(Math.random() * 10);
};

// Calculates absolute value of guesses and finds the lower value.
function compareGuesses(userGuess, compGuess, targetNumber) {
    let userPoints = Math.abs(userGuess - targetNumber);
    let compPoints = Math.abs(compGuess - targetNumber);
    if (userPoints === compPoints) {
        return true;
    } else if (userPoints < compPoints) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winnerName) {
    if (winnerName === 'human') {
        humanScore ++;
    }
    if (winnerName === 'computer') {
        computerScore ++;
    }
}

function advanceRound() {
    currentRoundNumber ++;
}