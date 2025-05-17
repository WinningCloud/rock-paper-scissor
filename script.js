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

function showWinner(uscore, sscore){
    if (uscore>sscore){
        console.log("User wing the game!");
    }

    else if(sscore>uscore){
        console.log("System wins the game!");
    }
    else{
        console.log("Game Draw!");
    }
}

function playRound(){
    getUserChoise();
    getSystemChoice();
    let myWinner = getWinner(userChoice, systemChoice);
    console.log(`Winner: ${myWinner}`);
    addScore(myWinner);
    
    if(roundCount<5){
        roundCount++;
        playRound();
        showWinner(userScore, systemScore);
    }

}
playRound();