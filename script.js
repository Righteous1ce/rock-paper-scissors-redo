const options = ["rock", "paper", "scissors"];
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let gameActive = true;


const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const startBtn = document.getElementById("start-btn");
const userSelection = document.querySelector(".left-display");
const compSelection = document.querySelector(".right-display");
const roundCounter = document.querySelector(".upper-round-display");
const userScoreCounter = document.querySelector(".left-score-display");
const compScoreCounter = document.querySelector(".right-score-display");
const roundWinner = document.querySelector(".round-win-display");




startBtn.addEventListener("click", () =>{
    console.log("start")
    return startGame();
    
})


function startGame(){
    playerScore = 0;
    computerScore = 0;
    round = 1;
    
    roundWinner.textContent = ""; // Reset round winner text
    userSelection.textContent = "";
    compSelection.textContent = "";
    userScoreCounter.textContent = "Player Score: " + playerScore;
    compScoreCounter.textContent = "Computer Score: " + computerScore;
    game();
}

// the event listeners are being called too many times and 
//thus with one click is playing multiple rounds at once 
// need to remove and add new ones basically


function game() {
    const totalRounds = 5;
    let currentRound = 1;
    
    
   

    function playCurrentRound() {
        roundCounter.textContent = "Round: " + currentRound;

    }

    rockBtn.addEventListener("click", () => {
        if(gameActive){
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log("btn press");
        userSelection.textContent = "Player Selected: " + playerSelection.toUpperCase();
        compSelection.textContent = "Computer Selected: " + computerSelection.toUpperCase();
        playRound(playerSelection, computerSelection);
        evaluateScore();
        }
    });

    paperBtn.addEventListener("click", () => {
        if(gameActive){
        const playerSelection = "paper";
        const computerSelection = getComputerChoice();
        console.log("btn press");
        userSelection.textContent = "Player Selected: " + playerSelection.toUpperCase();
        compSelection.textContent = "Computer Selected: " + computerSelection.toUpperCase();
        playRound(playerSelection, computerSelection);
        evaluateScore();
        }
    });

    scissorsBtn.addEventListener("click", () => {
        if(gameActive){
        const playerSelection = "scissors";
        const computerSelection = getComputerChoice();
        console.log("btn press");
        userSelection.textContent = "Player Selected: " + playerSelection.toUpperCase();
        compSelection.textContent = "Computer Selected: " + computerSelection.toUpperCase();
        playRound(playerSelection, computerSelection);
        evaluateScore();
        }
    });


   

    function evaluateScore() {
        
        currentRound++;
        if (currentRound <= totalRounds) {
            playCurrentRound();
        } else {
            endGame();
        }
    }

    playCurrentRound();
}




// rounds arent being counted except for round 1 


// the btn calls roundPlayed not the game() function which is why we arent getting anything starting

function playRound(playerSelection, computerSelection){
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
            roundWinner.textContent = "Player Won That Round";
            playerScore++
            userScoreCounter.textContent = "Player Score: " + playerScore;
            return "player";
    } else if (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
    ){
                roundWinner.textContent = "Computer Won That Round";
                computerScore++
                compScoreCounter.textContent = "Computer Score: " + computerScore;
                return "computer";
    } else{
                roundWinner.textContent = "It's a Tie !!";
                return "Tie";
            }
        }




// EVERYTHING ^^ ^^ SEEMS TO WORK FINE









function endGame(){ 
    gameActive = false;
    roundCounter.textContent = "Game Over !!!"
    
    if(playerScore > computerScore){
        roundWinner.textContent = "Congrats PLAYER Has Won!!";
    } else if( computerScore > playerScore){
        roundWinner.textContent = "0O0oops You Lost To A Computer..."
    } else {
        roundWinner.textContent = "It's A Tie Better Play Again!"
    }
    return 

}





function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);
    const randomSelection = options[randomChoice];

    
    return randomSelection;

    


}


