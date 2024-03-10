
let currentNumber = generateRandomNumber();
console.log(currentNumber);

function generateRandomNumber() {
    let randomNumber = Math.random() * 100;
    let exectNumber = Math.floor(randomNumber);

    return exectNumber;
}

function play(){
    let guessvalue = document.getElementById('number-guess').Value;
    let guessNumber = parseInt(guessvalue)
}



