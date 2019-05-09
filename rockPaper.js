//intialise variables
let userChoice;
let answers = ["rock", "paper", "scissors", "cat"];
let computerChoice = "";
let result = "";
let choices;
let cat;
let winner;
let myAudio;
let gameAnswer;

setupInput();

function setupInput() {
    choices = document.getElementsByClassName("choice");
    cat = document.getElementById("cat");
    winner = document.getElementById("winner");
    myAudio = document.getElementById("myAudio");
    myAudio.addEventListener("canplaythrough", function(){myAudio.play()});
    cat.addEventListener("click", userPick);
    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", userPick);
    }
}


function displayOutput()
{
    if (userChoice =="cat") {
        myAudio.src = "Catmeow1.mp3";
    }
    winner.innerHTML = gameAnswer;
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

    gameAnswer = `User picked ${userChoice} , computer picked ${computerChoice} - ${result}`;
  
displayOutput();
}


    
