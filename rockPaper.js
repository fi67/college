//intialise variables
let userChoice;
 let gameAnswer;

setupInput();

function setupInput() {
    let choices = document.getElementsByClassName("choice");
    let cat = document.getElementById("cat");
    let elephant = document.getElementById("elephant");
    
    cat.addEventListener("click", userPick);
    elephant.addEventListener("click", userPick);
    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", userPick);
    }

}

function userPick(evt) {
    userChoice = this.id;
    console.log(userChoice);
    playGame();
}

function playGame() {
    // web only - all things to do with myAudio
    let myAudio = document.getElementById("myAudio");
    myAudio.addEventListener("canplaythrough", function(){myAudio.play()});
    
    let answers = ["rock", "paper", "scissors", "cat"];
    let computerChoice = answers[Math.floor(Math.random() * 4)];
    console.log(computerChoice);
    let result="";

    
    if (userChoice == computerChoice) {
        result = "it's a draw!"
    } else if ((userChoice == "cat") || (computerChoice =="cat")) {
            
        let catState = Math.floor(Math.random() * 2);
        console.log(catState);
        
        if (userChoice == "cat") {
            if (catState == 0) {
                result = "The user picked angry cat! The computer wins!";
                myAudio.src = "AngryCat.mp3";
            } else {
                result = "The user picked happy cat! The user wins!";
                myAudio.src = "Catmeow1.mp3";
            }
        } else {
            if (catState == 0) {
                result = "The computer picked angry cat! The user wins!";
                myAudio.src = "AngryCat.mp3";
            } else {
                result = "The computer picked happy cat! The computer wins!";
                myAudio.src = "Catmeow1.mp3";
            }
        }
    } else if (userChoice =="rock") {
        if (computerChoice =="scissors") {
            result ="you win, as rock blunts scissors!";
        } else {
            result = "the computer wins, as paper wraps rock!";
        }
    } else if (userChoice =="paper") {
        if (computerChoice =="rock") {
            result = "you win, as paper wraps rock!!";
        } else {
            result = "the computer wins, as scissors cuts paper!";
        }
    } else if (userChoice =="scissors") {
        if (computerChoice =="paper") {
            result = "you win, as scissors cuts paper!!";
        } else {
            result = "the computer wins, as rock blunts scissors!!";
        }
    } 

    if (result === "") {
        gameAnswer = `User picked ${userChoice}, this is not a valid choice, please try again`;
        } else {
        gameAnswer = `User picked ${userChoice} , computer picked ${computerChoice} - ${result}`;
    }
    //web only output to screen
    let winner = document.getElementById("winner");
    winner.innerHTML = gameAnswer;
  }


    
