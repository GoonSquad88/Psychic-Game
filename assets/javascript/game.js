var letterBank = 
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm'
    ];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuessChoices = [];


var compGuess = letterBank[Math.floor(Math.random() * letterBank.length)];



document.querySelector("#win-counter").innerHTML = "Wins: " + wins;
    
document.querySelector("#loss-counter").innerHTML = "Losses: " + losses;

function updateGuessesLeft() {
        document.querySelector("#guess-counter").innerHTML = "Guesses left: " + guessesLeft;
    }
function guessesSoFar() {
        document.querySelector("#letters-guessed").innerHTML = "Your guesses so far: " + userGuessChoices.join(" ");
    }
    
updateGuessesLeft();
guessesSoFar();

var reset = function () {
    var compGuess = letterBank[Math.floor(Math.random() * letterBank.length)];
    guessesLeft = 10;
    userGuessChoices = [];
}


document.onkeyup = function (event) {

    guessesLeft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    userGuessChoices.push(userGuess);

    updateGuessesLeft();
    guessesSoFar();

    console.log(compGuess);


        if (userGuess === compGuess) {
            wins++;
            document.querySelector("#win-counter").innerHTML = "Wins: " + wins;
            reset();
            
        } else if (guessesLeft === 0) {
            losses++;
            document.querySelector("#loss-counter").innerHTML = "Losses: " + losses;
            reset();
        }
}

