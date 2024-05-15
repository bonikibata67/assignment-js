
//QUESTION ONE
// function declaration
let computerChoice = prompt("rock paper scissors")
var userChoice = prompt("rock paper scissors")

function gameRules(userChoice, computerChoice){
    if (userChoice === "rock") {
        return "rock";
    } else if (userChoice === "scissors") {
        return "scissors";
    } else if (userChoice === "paper") {
        return "paper";
    } else {
        alert("empty");
    }
    if (computerChoice === "rock") {
        return "rock";
    } else if ( computerChoice === "scissors") {
        return "paper";
    } else if (computerChoice === "paper") {
        return "scissors";   
    } 
    if (userChoice === computerChoice){
        return "tie"
    }

    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return "user wins"
        } else if (computerChoice === "rock") {
            return "tie...";
        } else {
            return "computer wins";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "user wins";
        } else if (computerChoice === "rock") {
            return "computer wins";
        } else {
            document.write("tie...");
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "scissors") {
            return "tie...";
        } else if (computerChoice === "paper") {
            return "user wins";
        } else {
            return "computer wins";
        }
    } 
    

}


//function expression
const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    const result = comparison(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
  };
const playAgain = confirm("Play Again?");
    if(playAgain) {
        
        playGame();
    }


//function arrow function
const getComputerChoice = () => {
    const randomNum = Math.random();
    if (randomNum < 0.34) return "rock";
    else if (randomNum < 0.67) return "paper";
    else return "scissors";
  };
  
// anonymous function


let userChoice = () => {
    return ("rock, paper, or scissors?");
  };


 

  