let userChoice;
let answers = ["rock", "paper", "scissors", "cat"];
let computerChoice = "";
let choices = document.getElementsByClassName("choice");
let cat = document.getElementById("cat");
let result = "";
cat.addEventListener("click", playGame);
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", playGame);
}

let winner = document.getElementById("winner");
winner.innerHTML = `User picked ${userChoice} , computer picked ${computerChoice} - ${result}`;



function playGame(evt) {
    userChoice = this.id;
    console.log(userChoice);
    computerChoice = answers[Math.floor(Math.random() * 3)];
    console.log(computerChoice);


    if (userChoice = "cat") {
        result = "meow meow meow MEOW"
    }

    if (userChoice == computerChoice) {
        result = "it's a draw!"
    } else if (userChoice =="rock") {
        if (computerChoice =="scissors") {
            result ="you win, the computer loses!"
        } else {
            result = "the computer wins, you lose!"
        }
    } else if (userChoice =="paper") {
        if (computerChoice =="rock") {
            result = "you win, the computer loses!"
        } else {
            result = "the computer wins, you lose!"
        }
    } else if (userChoice =="scissors") {
        if (computerChoice =="paper") {
            result = "you win, the computer loses!"
        } else {
            result = "the computer wins, you lose!"
        }
    } 

}
    
