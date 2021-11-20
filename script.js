console.log('Rock, Paper, Scissors!!!');
let selection = ['rock','paper','scissors'];

function computerPlay(){
    let com = '';
    com = selection[Math.floor(Math.random()*selection.length)];
    return com;
}
//console.log(computerPlay());
const computerSelection = computerPlay();

const playerSelection = prompt('Select Rock, Paper or Scissors');

function playRound(playerSelection,computerSelection){
    let answer = '';
switch(playerSelection,computerSelection){
    case (playerSelection === 'rock' && computerSelection === 'scissors'):
        answer = 'you win!!! Rock beats Scissors';
        break;
    case (playerSelection === 'rock' && computerSelection === 'paper'):
        answer = 'you lose!!! Paper beats Rock';
        break;
    case (playerSelection === 'paper' && computerSelection === 'rock'):
        answer = 'you win!!! Paper beats Rock';
        break;
    case (playerSelection === 'paper' && computerSelection === 'scissors'):
        answer = 'you lose!!! Scissors beats Paper';
        break;
    case (playerSelection === 'scissors' && computerSelection === 'paper'):
        answer = 'you win!!! Scissors beats Paper';
        break;    
    case (playerSelection === 'scissors' && computerSelection === 'rock'):
        answer = 'you lose!!! Scissors beats Rock';
        break; 
    default:
        answer = 'Tie!!! Try again!';
        
}
return answer;
}
console.log(playRound());