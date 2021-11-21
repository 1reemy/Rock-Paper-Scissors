console.log('Rock, Paper, Scissors!!!');
let selection = ['rock','paper','scissors'];

function computerPlay(){
    let com = '';
    com = selection[Math.floor(Math.random()*selection.length)];
    return com;
}

const computerSelection = computerPlay();

const input = prompt('Select Rock, Paper or Scissors');
let playerSelection = input.toLowerCase();

function playRound(playerSelection,computerSelection){
    
       if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'you win!!! Rock beats Scissors';
       }
       else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'you lose!!! Paper beats Rock';
       }
       else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'you win!!! Paper beats Rock';
       }
       else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'you lose!!! Scissors beats Paper';
       }
       else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'you win!!! Scissors beats Paper';
       }
       else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'you lose!!! Scissors beats Rock';
       }
       else{
        return 'Tie!!! Try again!';
       }
}

console.log(playRound(playerSelection,computerSelection));