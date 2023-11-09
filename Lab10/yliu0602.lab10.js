const button1 = document.querySelector(".button1");

button1.addEventListener("click", () => {

    // rng variable usedf or setting computer choice
    let rng = Math.floor(Math.random() * 100) - 1;
    let user = "rock";
    const results = document.querySelector(".results")

    // uses if statement with rng variable to set computer choice
    let computer;
    if (rng >= 66) {
        computer = "rock"
        results.innerText = `User chose: ${user} Computer choice: ${computer} It's a tie!`
    }
    else if (rng >= 33) {
        computer = "paper"
        results.innerText = `User chose: ${user} Computer choice: ${computer} Computer wins!`
    }
    else {
        computer = "scissors"
        results.innerText = `User chose: ${user} Computer choice: ${computer} User wins!`
    }
})

const button2 = document.querySelector(".button2");

button2.addEventListener("click", () => {

    // rng variable usedf or setting computer choice
    let rng = Math.floor(Math.random() * 100) - 1;
    let user = "paper";
    const results = document.querySelector(".results")

    // uses if statement with rng variable to set computer choice
    let computer;
    if (rng >= 66) {
        computer = "rock"
        results.innerText = `User chose: ${user} Computer choice: ${computer} User wins!`
    }
    else if (rng >= 33) {
        computer = "paper"
        results.innerText = `User chose: ${user} Computer choice: ${computer} It's a tie!`
    }
    else {
        computer = "scissors"
        results.innerText = `User chose: ${user} Computer choice: ${computer} Computer wins!`
    }
})

const button3 = document.querySelector(".button3");

button3.addEventListener("click", () => {

    // rng variable usedf or setting computer choice
    let rng = Math.floor(Math.random() * 100) - 1;
    let user = "scissors";
    const results = document.querySelector(".results")

    // uses if statement with rng variable to set computer choice
    let computer;
    if (rng >= 66) {
        computer = "rock"
        results.innerText = `User chose: ${user} Computer choice: ${computer} Computer wins!`
    }
    else if (rng >= 33) {
        computer = "paper"
        results.innerText = `User chose: ${user} Computer choice: ${computer} User wins!`
    }
    else {
        computer = "scissors"
        results.innerText = `User chose: ${user} Computer choice: ${computer} It's a tie!`
    }
})