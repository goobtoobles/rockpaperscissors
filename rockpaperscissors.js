console.log("Hello!");
const plays = ["Rock", "Paper", "Scissors"];        //create a list of possible plays

//make a function that returns one of "rock", "paper", or "scissors" chosen at random
function computerPlay() {
    let p = Math.floor(Math.random() * plays.length);   //generate a number between 0 and the length of the plays array - 1
    return plays[p];                                    //return a string corresponding to a random play
}

function playRound(playerSelection, computerSelection) {
    //return a string declaring win, loss, or tie

    // make the casing of playerSelection comparable to computerSelection's returns
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();
    if(playerSelection === computerSelection) {  //check for tie
        return `Tie! You both chose ${playerSelection}.`;
    } else if(checkWin(playerSelection, computerSelection)){  //check for win
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else return `You lose! ${computerSelection} beats ${playerSelection}.`;
}

function checkWin(playerSelection, computerSelection) {
    // assuming no tie, compare plays and return true in the case of a player win
    return  (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper');
    
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
