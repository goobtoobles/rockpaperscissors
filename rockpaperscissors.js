console.log("Hello!");

//make a function that returns one of "rock", "paper", or "scissors" chosen at random
function computerPlay() {
    const plays = ["Rock", "Paper", "Scissors"];        //create a list of possible plays
    let p = Math.floor(Math.random() * plays.length);   //generate a number between 0 and the length of the plays array - 1
    return plays[p];                                    //return a string corresponding to a random play
}