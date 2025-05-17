let userChoice = 0;
let systemChoice = 0;
let userScore = 0;
let systemScore = 0;
let roundCount = 1;
function getUserChoise(){
    userChoice = parseInt(prompt("Enter your choice: 1.Rock 2.Paper 3.Scissor"));
    console.log(`User choice: ${getChoice(userChoice)}`);
}

function getChoice(a){
    if(a==1){
        return "Rock";
    }
    else if(a==2){
        return "Paper";
    }
    else if(a==3){
        return "Scissor";
    }
}

function getSystemChoice(){
    systemChoice = Math.floor(Math.random()*3)+1;
    console.log(`Computer choice: ${getChoice(systemChoice)}`);
}

function getWinner(userChoice, systemChoice){
    let winner;
    if(userChoice == systemChoice){
        winner = "draw";
    }
    else if(userChoice == 1 && systemChoice == 3){
        winner = "user";
    }

    else if(userChoice == 1 && systemChoice == 2){
        winner = "system";
    }

    else if(userChoice == 2 && systemChoice == 1){
        winner = "user"
    }
    else if(userChoice == 2 && systemChoice == 3){
        winner = "system";
    }
    else if(userChoice == 3 && systemChoice == 1){
        winner = "system";
    }
    else if(userChoice == 3 && systemChoice== 2){
        winner="user";
    }
    return winner;
}

function addScore(winner){
    if(winner == "user"){
        userScore++;
    }
    else if(winner=="system"){
        systemScore++;
    }
    console.log(`User score: ${userScore}`);
    console.log(`System score: ${systemScore}`);
}



const divResult = document.querySelector("#showResult");


const resultText = document.createElement("p");

resultText.style.color = "black";
resultText.style.fontSize = "50px"



function showWinner(uscore, sscore){
    if (uscore>sscore){
        resultText.textContent = "User wing the game! check console for details";
    }

    else if(sscore>uscore){
        resultText.textContent ="System wins the game! check console for details";
    }
    else{
        resultText.textContent ="Game Draw! check console for details";
    }
    divResult.appendChild(resultText);
}

function playRound(){

        roundCount++;
        getUserChoise();
         getSystemChoice();
         let myWinner = getWinner(userChoice, systemChoice);
         console.log(`Winner: ${myWinner}`);
         addScore(myWinner);
        check_next_round();
    
}


function check_next_round(){
    if(roundCount<=5){
    playRound();
}
else{
    showWinner(userScore, systemScore);
}
}
// check_next_round();

const start_button = document.querySelector("#startBtn");
start_button.addEventListener("click", check_next_round);





