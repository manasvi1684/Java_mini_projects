const random=parseInt(Math.random() *100 +1);
const submit=document.querySelector('#subt')
const userInp=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowORhigh=document.querySelector('.lowORhigh')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')
let prevGuess=[]
let numGuess=1
let playGame=true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInp.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    }else if(guess<1){
        alert('Please enter a Number more than 1')
    }
    else if(guess>100){
        alert('Please enter a no less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over.Random number ${random}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===random){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<random){
        displayMessage(`Number tooo low`)
    }
    else if(guess>random){
        displayMessage(`Number tooo high`)
    }

}
function displayGuess(guess){
    userInp.value=''
    guessSlot.innerHTML+=`${guess} `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){

    lowORhigh.innerHTML=`<h2>${message}</h2>` 
}
function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        const random=parseInt(Math.random() *100 +1);
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`;
        userInp.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame=true
    })

}
function endGame(){
    userInp.value=''
    userInp.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">Start new Game </h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}