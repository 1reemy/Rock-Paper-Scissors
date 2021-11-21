console.log('Rock, Paper, Scissors!!!');
let selection = ['rock','paper','scissors'];

function computerPlay(){
    let com = '';
    com = selection[Math.floor(Math.random()*selection.length)];
    return com;
}

let score = [];

function playRound(){

const computerSelection = computerPlay();    
const input = prompt('Select Rock, Paper or Scissors');
let playerSelection = input.toLowerCase();
        
       if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You win!!! Rock beats Scissors');
        score.push(1);        
       }
       else if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You lose!!! Paper beats Rock');
        score.push(0);        
       }
       else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You win!!! Paper beats Rock');
        score.push(1);        
       }
       else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You lose!!! Scissors beats Paper');
        score.push(0);        
       }
       else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('You win!!! Scissors beats Paper');
        score.push(1);        
       }
       else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You lose!!! Rock beats Scissors');
        score.push(0);        
       }
       else{
        console.log('Tie!!! Try again!');                
       } 
       let sum = 0;
       for(let i = 0; i < score.length; i++){
           sum += score[i];           
       } 
       if(sum > 2){
           return 'You Win!!! You won ' + sum + ' rounds';
       } else{
           return 'You Lose....Try Again!';
       }
}
function game(){
    for(let round = 0; round < 4; round++){
        playRound()[round];
    }
    return playRound();    
};
console.log(game());