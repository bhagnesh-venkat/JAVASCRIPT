//Number Guessing Game

const minNum=50;
const maxNum=100;
const ans=Math.floor(Math.random()*(maxNum-minNum))+minNum
let attempts=0;
let guess;
let running=true
while(running){
    guess=window.prompt(`Guess a Number between ${minNum} and ${maxNum}`)
    guess=Number(guess)
    if(isNaN(guess)){
        window.alert('Please enter a valid number')
    }
    else if(guess<minNum || guess>maxNum){
        window.alert('Please enter a valid number')
    }
    else{
        attempts++;
        if(guess<ans){
            window.alert('Too Low!!! Try again')
        }
        else if(guess>ans){
            window.alert('Too High!!! Try again')
        }
        else{
            window.alert(`Hurray!!! The answer was ${ans}. It took you ${attempts}`)
            running=false;
        }
    }
}