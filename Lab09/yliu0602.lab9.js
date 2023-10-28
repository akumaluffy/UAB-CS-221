function play() {

    // rng variable used for setting computer choice
    let rng = Math.floor(Math.random() * 100) - 1;

    // user input for rock, paper, or scissors with error handling using an if statement
    // uses toLowerCase in case user uses upper case
    let user = prompt("Rock, Paper, or Scissors: ").toLowerCase()
    if (user != "rock" && user != "paper" && user != "scissors") {
        user = prompt("Please enter a valid choice, 'rock, paper, or scissors': ")
    }

    // uses if statement with rng variable to set computer choice
    let computer;
    if (rng >= 66) {
        computer = "rock"
    }
    else if (rng >= 33) {
        computer = "paper"
    }
    else {
        computer = "scissors"
    }

    console.log(`User chose: ${user}`);
    console.log(`computer chose: ${computer}`);

    // if statement to compare user and computer choice to determine who wins
    if (user === computer) {
        console.log("It's a tie!")
    }
    else if ((user === "rock" && computer === "scissors") || 
    (user === "paper" && computer === "rock") || 
    (user === "scissors" && computer === "paper")) {
        console.log("User wins!")
    }
    else {
        console.log("Computer wins!")
    }

    // variable to prompt if user wants to play again
    let again = prompt("Would you like to play again? ").toLowerCase()
    if (again != "yes" && again != "no") {
        again = prompt("Please enter a valid choice: 'yes or no': ")
    }

    if (again === "yes") {
        play()
    }
}

play()