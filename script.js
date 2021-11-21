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
        return 'You win!!! Rock beats Scissors';
       }
       else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You lose!!! Paper beats Rock';
       }
       else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win!!! Paper beats Rock';
       }
       else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You lose!!! Scissors beats Paper';
       }
       else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You win!!! Scissors beats Paper';
       }
       else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You lose!!! Scissors beats Rock';
       }
       else{
        return 'Tie!!! Try again!';
       }
}
console.log(playRound(playerSelection,computerSelection));