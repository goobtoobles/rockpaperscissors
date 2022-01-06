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

function game(){
    let playerWins = 0,    //initialize counters
        computerWins = 0,
        tieGames = 0;
    for(let i = 1; i <=5; i++){  //play 5 rounds and log results
        let computerSelection = computerPlay();
        let playerSelection = getPlay();
        if(playerSelection === computerSelection){
            tieGames++;
        } else if(checkWin(playerSelection, computerSelection)){
            playerWins++;
        } else computerWins++;
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerWins > computerWins) {
        console.log("You win the match!");
    } else if(computerWins > playerWins){
        console.log("You lose the match!");
    } else console.log("It's a tie!");
    console.log(`You won ${playerWins} games and the computer won ${computerWins}. There were ${tieGames} ties.`);
}

function getPlay(){
    let playerSelection;
    while(!plays.includes(playerSelection)){  //check plays array for presence of playerSelection
        playerSelection = prompt("Enter rock, paper, or scissors.", "");  //get player play
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase(); //standardize capitalization to match plays array
    }
    return playerSelection;
}

game();