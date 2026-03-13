const CHOICES = ['rock','paper','scissor']
let turns = 5;
let score = 0;
resultDisplay = document.querySelector('#resultDisplay');
scoreDisplay = document.querySelector('#scoreDisplay');
let btn = document.querySelector('.container');

function getComputerChoice(){
   const intChoice = Math.floor(Math.random()*3)
   return CHOICES[intChoice]
}

function round(humanChoice){

    const computerChoice = getComputerChoice()

    if (humanChoice===computerChoice){
        resultDisplay.textContent= 'It is a draw'
    }else if(humanChoice==='rock'){
        switch(computerChoice) {
            case 'paper':
                resultDisplay.textContent= 'You lost! :('
                --score
                break
            case 'scissor':
                resultDisplay.textContent= 'Yay! You won!'
                ++score
                break
        }
    }else if (humanChoice==='paper'){
        switch(computerChoice){
            case 'rock':
                resultDisplay.textContent= 'Yay! You won!'
                ++score
                break
            case 'scissor':
                resultDisplay.textContent= 'You lost! :('
                --score
                break
        }
    }else if (humanChoice==='scissor'){
        switch(computerChoice){
            case 'rock':
                case 'scissor':
                resultDisplay.textContent= 'You lost! :('
                --score
                break
            case 'paper':
                resultDisplay.textContent= 'Yay! You won!'
                ++score
                break
        }
    }
            

        --turns
        scoreDisplay.textContent = `Your score is ${score}, you have ${turns} turns left`;
    
    return score
}


btn.addEventListener('click', e=>{
    humanChoice = e.target.closest('button').id;
    if (turns>0){
        round(humanChoice);
    }else {
        scoreDisplay.textContent = `No turns left refresh the page to try again. Your final score was ${score}`
        resultDisplay.textContent = ` `}
})

