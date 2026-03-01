const CHOICES = ['rock','paper','scissor']

function getComputerChoice(){
    const intChoice = Math.floor(Math.random()*3)
    return CHOICES[intChoice]
}

function getHumanChoice(){
    let HumanChoice = prompt('Pick between rock, paper and scissor').toLowerCase()
    while (!(CHOICES.includes(HumanChoice))){
        HumanChoice = prompt(`Not a valid option, please pick again.
Your choices are rock, paper and scissor`).toLowerCase()
    }
    return HumanChoice
}

function round(turns, score){

    while (turns>0){

        const computerChoice = getComputerChoice()
        const humanChoice = getHumanChoice()

        if (humanChoice===computerChoice){
            alert('Its a draw!')
        }else if(humanChoice==='rock'){
            switch(computerChoice) {
                case 'paper':
                    alert('You lost :( ')
                    --score
                    break
                case 'scissor':
                    alert('Yay! you won')
                    ++score
                    break
            }
        }else if (humanChoice==='paper'){
            switch(computerChoice){
                case 'rock':
                    alert('Yay! you won')
                    ++score
                    break
                case 'scissor':
                    alert('You lost :( ')
                    --score
                    break
            }
        }else if (humanChoice==='scissor'){
            switch(computerChoice){
                case 'rock':
                    case 'scissor':
                    alert('You lost :( ')
                    --score
                    break
                case 'paper':
                    alert('Yay! you won')
                    ++score
                    break
            }
        }
            

        --turns
        alert(`Your score is ${score}
you have ${turns} turn(s) left`)
    }
    return score
}

function game(){
    let turns = +prompt(`Let's play rock, paper, scissor- enter the number of rounds you want to play`)
    while (!(Number.isInteger(turns))){
        turns = +prompt('Please choose a number for the number of rounds you would like to play')
    }

    alert(`Best of ${turns} wins. Good luck!`)

    score = round(turns, 0)

    if (score<0){alert('You lost, better luck next time bozo!')

    }else if (score===0){alert('Well, this was a waste of time')

    }else {alert('Congratulations, you won against a basic computer, You must be proud')}

    alert("Hit refresh to play again!")


}

game()