console.log('Rock, Paper, Scissors!!!');

const display = document.querySelector('#display');
const rock = document.querySelector('#rock'); 
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
let btnPress = document.querySelectorAll('button');
const scorePlayer = document.querySelector('#playerScore');
const pc = document.querySelector('#pc');

const video = document.createElement('div');
const welcome = document.createElement('h2');
const choice = document.createElement('h2');
const result = document.createElement('h2');
const stats = document.createElement('h2');
let player = document.createElement('h1');
let pcScore = document.createElement('h1');

video.style.cssText = 'background-color: black';
welcome.style.cssText = 'color: green';
choice.style.cssText = 'color: green';
result.style.cssText = 'color: green';
stats.style.cssText = 'color: gold';
player.style.cssText = 'color: red';
pcScore.style.cssText = 'color: red';

welcome.textContent = "Welcome to a game of Rock, Paper, Scissors!!!";
choice.textContent = "Make your choice from one of the buttons below";

video.appendChild(welcome);
video.appendChild(choice);
video.appendChild(result);
video.appendChild(stats);
display.appendChild(video);
scorePlayer.appendChild(player);
pc.appendChild(pcScore);

let selection = ['rock','paper','scissors'];

function computerPlay(){
    let com = '';
    com = selection[Math.floor(Math.random()*selection.length)];
    return com;
}

let computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;
player.textContent = 0;
pcScore.textContent = 0;

rock.addEventListener('click',() => {    
    if(computerSelection === 'scissors'){        
        result.textContent = "You win!!! Rock beats Scissors";
        playerScore += 1;        
        player.textContent = playerScore;        
       }
       else if(computerSelection === 'paper'){        
        result.textContent = "You lose!!! Paper beats Rock";
        computerScore += 1;         
        pcScore.textContent = computerScore;      
       }
       else if(computerSelection === 'rock'){        
        result.textContent = "Tie!!! Try again!";                
       }
});
paper.addEventListener('click', () => {
    if(computerSelection === 'rock'){
        result.textContent = "You win!!! Paper beats Rock";
        playerScore += 1;
        player.textContent = playerScore;                
       }
       else if(computerSelection === 'scissors'){
        result.textContent = "You lose!!! Scissors beats Paper";
        computerScore += 1;
        pcScore.textContent = computerScore;    
       }
       else if(computerSelection === 'paper'){
       result.textContent = "Tie!!! Try again!";        
       }
});
scissors.addEventListener('click',() => {
    if(computerSelection === 'paper'){
        result.textContent = "You win!!! Scissors beats Paper";
        playerScore += 1;
        player.textContent = playerScore;    
       }
       else if(computerSelection === 'rock'){
        result.textContent = "You lose!!! Rock beats Scissors";
        computerScore += 1;
        pcScore.textContent = computerScore;   
       }
       else if(computerSelection === 'scissors'){
       result.textContent = "Tie!!! Try again!";             
       }
});

btnPress.forEach((button) =>{
    button.addEventListener('click',() =>{
        computerSelection = computerPlay();
        
        function winner(){
            if(playerScore > computerScore){
                stats.textContent = "You Won The Battle!!!";
            }else{
                stats.textContent = "You Lost The Battle But Will You Lose The War?";
            }
        }
        if(playerScore === 5 || computerScore === 5){
            winner(); 
            rock.setAttribute('disabled','disabled');
            paper.setAttribute('disabled','disabled');
            scissors.setAttribute('disabled','disabled');           
        }else{
            stats.textContent = "Onward!!!";            
        }
                                                      
    })
});

reset.addEventListener('click',() =>{
        document.location.href = "";        
});