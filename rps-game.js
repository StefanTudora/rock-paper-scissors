
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
        updateScoreForPlayer(document.getElementById("player"));
        return true;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        // Update Seymours score
        updateScoreForPlayer(document.getElementById("cpu"));
        return false;
    }
}

function attachListeners() {
    let idx = 0;
    let choicelist = ["rock", "paper", "scissors"];
    // Attach listener to the buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        const choice = choicelist[idx++];
        button.addEventListener("click", () => {
            playWithChoice(choice);
        });
    });
}

function playWithChoice(choice) {
    playRound(choice, getComputerChoice());
}

function updateScoreForPlayer(elem) {
    const winner = elem.getAttribute('id');
    const playerScoreNodeID = winner + "-score";
    const scoreNode = document.getElementById(playerScoreNodeID);
    let currentScore = Number(scoreNode.textContent);
    scoreNode.textContent = (++currentScore).toString();
    if (currentScore == 5) {
        // Declare the winner
        alert(`Round over -> the winner is ${winner}!`)
        // Clear round
        clearGame();
    }
}


function clearGame() {
    const nodeList = document.querySelectorAll(".sc");
    nodeList.forEach(score => {
        score.textContent = '0';
    });
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
 
attachListeners();

