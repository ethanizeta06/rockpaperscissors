function getComputerChoice(max){
    let resp;
    resp = Math.floor(Math.random()* max);
    if (resp==1)
    {
        return "rock";
    }
    else if (resp==2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}
function getHumanChoice(){
    let resp = prompt("Enter either rock, paper or scissors: ");
    return resp;
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    if (humanChoice==computerChoice)
    {
        console.log("It's a tie");
    }
    else if (humanChoice.toLowerCase()=="rock" && computerChoice=="scissors")
    {
        console.log("Human wins, "+humanChoice+" beats "+computerChoice);
        return 1;
    }
    else if (computerChoice=="rock" && humanChoice.toLowerCase()=="scissors")
    {
        console.log("Computer wins, "+computerChoice  +" beats "+humanChoice);
        return -1;
    }
    else if (humanChoice.toLowerCase()=="paper" && computerChoice=="rock")
    {
        console.log("Human wins "+humanChoice+" beats "+computerChoice);
        return 1;
    }
    else if (computerChoice=="paper" && humanChoice.toLowerCase()=="rock")
    {
        console.log("Computer wins "+computerChoice+" beats "+humanChoice);
        return -1;
    }
    else if (humanChoice.toLowerCase()=="scissors" && computerChoice=="paper")
    {
        console.log("Human wins, "+humanChoice+" beats "+computerChoice);
        return 1;
    }
    else if (computerChoice=="scissors" && humanChoice.toLowerCase()=="paper")
    {
        console.log("computer wins, "+computerChoice+" beats "+humanChoice);
        return -1;
    }
}
function playGame(){
    let humanChoice;
    let computerChoice;
    humanScore=0;
    computerScore=0;
    for (let i=0; i<5; i++)
    {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice(3);
        let resp = playRound(humanChoice,computerChoice);
        if (resp==1)
        {
            humanScore++;
        }
        else if (resp==-1)
        {
            computerScore++;
        }
    }
    if (humanScore>computerScore)
    {
        console.log("Congratulations, you won!");
    }
    else
    {
        console.log("I'm sorry you lost, maybe next time.");
    }
}
playGame();