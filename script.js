function getComputerChoice() {
    let rando = Math.floor(Math.random() * 3)
    // console.log(rando)

    switch(rando) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    } 
}


function titleCase(myString) {
    let first = myString.charAt(0).toUpperCase();
    let others = myString.slice(1).toLowerCase();
    return first + others;
}


function playRound(computerSelection, playerSelection) {
    let player = titleCase(playerSelection);

    console.log(`computer: ${computerSelection}`);
    console.log(`Player: ${player}`);

    if (computerSelection == player) {
        return "Tie!";
    } else if ((computerSelection=="Rock") && (player=="Paper")) { 
        return "You Win! Paper Beats Rock";
    } else if ((computerSelection=="Rock") && (player=="Scissors")) { 
        return "You Lose! Rock Beats Scissors";
    } else if ((computerSelection=="Scissors") && (player=="Paper")) { 
            return "You Lose! Scissors Beats Paper";    
    } else if ((computerSelection=="Scissors") && (player=="Rock")) { 
        return "You Win! Rock Beats Scissors";
    } else if ((computerSelection=="Paper") && (player=="Scissors")) { 
        return "You Win! Scissors Beats Paper";    
    } else if ((computerSelection=="Paper") && (player=="Rock")) { 
        return "You Lose! Paper Beats Rock";    
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your weapon: ");
        let result = playRound(getComputerChoice(), playerSelection);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        } else {
            continue;
        }

        console.log(result);
    }

    if (playerScore == computerScore) {
        console.log("TIE!");
    } else if (playerScore > computerScore) {
        console.log("You Win The Match!");
    } else {
        console.log("You Lose The Match!");
    }
    
}
