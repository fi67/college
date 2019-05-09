let userChoice;
let answers = ["rock", "paper", "scissors", "cat"];
let computerChoice = "";
let choices = document.getElementsByClassName("choice");
let cat = document.getElementById("cat");
let result = "";
let winner = document.getElementById("winner");
cat.addEventListener("click", userPick);
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", userPick);
}

function userPick(evt) {
    userChoice = this.id;
    console.log(userChoice);
    playGame();
}


function playGame() {
    
    computerChoice = answers[Math.floor(Math.random() * 3)];
    console.log(computerChoice);


    if (userChoice == "cat") {
        result = "meow meow meow MEOW"
    }

    if (userChoice == computerChoice) {
        result = "it's a draw!"
    } else if (userChoice =="rock") {
        if (computerChoice =="scissors") {
            result ="you win, as rock blunts scissors!"
        } else {
            result = "the computer wins, as paper wraps rock!"
        }
    } else if (userChoice =="paper") {
        if (computerChoice =="rock") {
            result = "you win, as paper wraps rock!!"
        } else {
            result = "the computer wins, as scissors cuts paper!"
        }
    } else if (userChoice =="scissors") {
        if (computerChoice =="paper") {
            result = "you win, as scissors cuts paper!!"
        } else {
            result = "the computer wins, as rock blunts scissors!!"
        }
    } 
  
displayWinner();
}

function displayWinner()
{
    winner.innerHTML = `User picked ${userChoice} , computer picked ${computerChoice} - ${result}`;
}
    
