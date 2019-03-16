var letterBank = 
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm'
    ];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuess = [];


var winsText = document.getElementById("win-counter");
var lossesText = document.getElementById("loss-counter");
var guessesLeftText = document.getElementById("guess-counter");
var lettersGuessedText = document.getElementById("letters-guessed");

document.onkeyup = function (event) {
    var userGuess = event.key;

    var compGuess = letterBank[Math.floor(Math.random()*letterBank.length)];

    if (compGuess === userGuess) {
        wins++
        guessesLeft--
        (wins);
    } else if (compGuess != userGuess) {
        guessesLeft--
        losses++
        (losses);
        
        
    }


}

