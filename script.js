console.log("Hello");
function getComputerChoice(){
    var k = Math.random();
    if(k <= 0.5)return "rock";
    if(k>0.5 && k < 0.8)return "paper";
    else return "scissors";
}


var  userWins = 0;
var compWins = 0;

for(var i = 0;i<=3;i++){
    let comp = getComputerChoice();
    let user = prompt("write stone paper or scissors");
    if(comp == "rock" && user =="paper")userWins+=1;
    else if(comp =="paper" &&comp == "rock" )compWins +=1;
    else if(comp == "scissors" &&  user =="paper")compWins +=1;
    else if( user == "scissors" && comp =="paper")userWins+=1;
    else if(comp == "scissors" && user == "rock")userWins+=1;
    else if(comp == "rock" && user == "scissors" )compWins+=1;
}
if(userWins > compWins)console.log("You Win !!");
else if(compWins> userWins)console.log("System Wins !!");
else console.log("tie!!")