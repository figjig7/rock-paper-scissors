let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const lowerHumanChoice = humanChoice.toLowerCase();

    let roundWinner;
    if (
        (lowerHumanChoice === "rock" && computerChoice === "scissors") ||
        (lowerHumanChoice === "paper" && computerChoice === "rock") ||
        (lowerHumanChoice === "scissors" && computerChoice === "paper")
    ) {
        roundWinner = "You win!";
        humanScore++;
    } else if (
        (lowerHumanChoice === "rock" && computerChoice === "paper") ||
        (lowerHumanChoice === "paper" && computerChoice === "scissors") ||
        (lowerHumanChoice === "scissors" && computerChoice === "rock")
    ) {
        roundWinner = "You lose!";
        computerScore++;
    } else {
        roundWinner = "It's a tie!";
    }
    console.log(roundWinner, "You chose:", lowerHumanChoice, "Computer chose:", computerChoice);
    return roundWinner;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const roundWinner = playRound(humanChoice, computerChoice);

        if (roundWinner === "You win!") {
            humanScore++;
        } else if (roundWinner === "You lose!") {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("You win the game! Final score:", humanScore + "-" + computerScore);
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game! Final score:", humanScore + "-" + computerScore);
    } else {
        console.log("It's a tie! Final score:", humanScore + "-" + computerScore);
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = null;
    const validChoices = ["rock", "paper", "scissors"];

    while (choice === null) {
        let userInput = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

        if (validChoices.includes(userInput)) {
            choice = userInput;
        } else {
            alert("Invalid choice. Please enter rock, paper, or scissors.");
        }
    }
    return choice;
}

playGame();
