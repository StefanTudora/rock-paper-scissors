
// Helper function to simulate a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        // Update the player score
        updateScoreForPlayer(document.getElementById('player'));
        return true;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        // Update Seymours score
        updateScoreForPlayer(document.getElementById('cpu'));
        return false;
    }
}

// Function used to attach the needed listeners
function attachListeners() {
    let choice = 0;
    let choicelist = ["rock", "paper", "scissors"];
    // Attach listener to the buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach("click", e => {
        selectAndPlay(choicelist[choice ++]);
    })
}

function selectAndPlay(choice) {
    playRound(choice, getComputerChoice());
}

function updateScoreForPlayer(elem) {
    let currentScore = Number(elem.innerText);
    elem.textContent = (++ currentScore).toString();
    // if (currentScore == 5) {
    //     // Declare the winner
        
    // }
}

// Function used in getting the user choice from the a prompt --> no longer needed since we rely on listeners now
// function getHumanChoice() {
//     let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
//     const validChoices = ["rock", "paper", "scissors"];
//     while (!validChoices.includes(choice)) {
//         choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
//     }
//     return choice;
// }


// function used to simulate the computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Main playing function, it simulates the game -> no longer needed, we rely on listeners
// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         if (playRound(getHumanChoice(), getComputerChoice())) {
//             ++ humanScore;
//         } else ++ computerScore;
//     }
//     if (humanScore > computerScore) {
//         console.log("Congratulations, you won!");
//     } else {
//         if (humanScore == computerScore) {
//             console.log("We have a tie! Nobody won.");
//         } else {
//             console.log(`Uff, you lost! Your score is ${humanScore}.`);
//         }
//     }
// }


