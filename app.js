let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
     const options = ["rock", "paper", "scissors"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
     if(userWin) {
          userScore++;
          userScorePara.innerText = userScore;
          msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
          msg.style.backgroundColor = "green";  
     } else {
          compScore++;
          compScorePara.innerText = compScore;
          msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
          msg.style.backgroundColor = "red";
     }
}


const drawGame = () => {
     msg.innerText = "Game was Draw. play again!";
     msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
     //Generate Computer Choice
     const compChoice = genCompChoice();

     /* If else logic */
     if(userChoice == compChoice) {
          //Draw Game
          drawGame();
     }
     else {
          let userWin = true; //this track winning position
          if(userChoice === "rock") {
               //paper, scissors
              userWin = compChoice === "paper" ? false:true;
          } else if(userChoice) {
               //rock, scissors
               userWin = compChoice === "rock" ? false:true;
          } else {
               //rock ,paper
               userWin = compChoice === "scissors" ? false:true;
          }
          showWinner(userWin, userChoice, compChoice);
     }  
}

choices.forEach((choice) => {
     choice.addEventListener("click", () => {
          const userChoice = choice.getAttribute("id");
          playGame(userChoice);
     })
})