console.log('Rock, Paper, Scissors!!!');

const message = document.querySelector('#message');
const rock = document.querySelector('#rock'); 
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
let btnPress = document.querySelectorAll('input');
const scorePlayer = document.querySelector('#playerScore');
const pc = document.querySelector('#pc');

const video = document.createElement('div');
const welcome = document.createElement('h2');
const choice = document.createElement('h2');
const result = document.createElement('h2');
const stats = document.createElement('h2');
let player = document.createElement('h1');
let pcScore = document.createElement('h1');
//let reset = prompt();

video.style.cssText = (
    'background-color: black; display:flex; flex-direction:column; justify-content:center; align-items: center; border-radius: 30px; margin: auto 320px auto 320px;padding:0px 20px 0px 20px'
    );
welcome.style.cssText = 'color: aquamarine; margin-bottom:0px';
choice.style.cssText = 'color: aquamarine; margin-bottom:0px';
result.style.cssText = 'color: green';
stats.style.cssText = 'color: gold';
player.style.cssText = 'color: red; display: flex; justify-content: center';
pcScore.style.cssText = 'color: red; display: flex; justify-content: center';

welcome.textContent = "You vs the computer! 5 shots is all it takes to win!!!";
choice.textContent = "Use the Rock, Paper or Scissors to beat the machine!!!";

video.appendChild(welcome);
video.appendChild(choice);
video.appendChild(result);
video.appendChild(stats);
message.appendChild(video);
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
                if(window.confirm("You Won The Battle!!! Want to go another round?")){
                    location.reload();
                }                                             
            }else{                
                if(window.confirm("You got K.Oed...Want to go another round?")){
                    location.reload();
                }                               
            }            
        }
        if(playerScore === 5 || computerScore === 5){
            winner(); 
            rock.setAttribute('disabled','disabled');
            paper.setAttribute('disabled','disabled');
            scissors.setAttribute('disabled','disabled');           
        }        
        else{
            stats.textContent = "Next Shot!";            
        }
                                                      
    })
});

/*reset.addEventListener('click',() =>{
        document.location.href = "";        
});*/