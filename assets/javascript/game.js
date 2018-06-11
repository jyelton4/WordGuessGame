    
    
    
    // global array variables for letters in word, letters guessed wrong, letter guessed right, and variable for # of guesses left
    var chosenWord = "";
    var letters = [];
    var index = 0;
    var wrong = [];
    var correct = [];
    var guessesLeft = 0;
    var keystroke = "";
    // game object
    var wordGuessGame = {
        // array of words, property of game object
        wordBank: [
            // "WORD"
            "Elbert", 
            "Blanca",    
            "Harvard", 
            "Massive", 
            "LaPlata", 
            "Uncompahgre", 
            "Crestone", 
            "Lincoln", 
            "Grays", 
            "Antero", 
            "Torreys", 
            "Castle", 
            "Quandary", 
            "Evans", 
            "Longs", 
            "Wilson", 
            "Cameron", 
            "Shavano", 
            "Belford", 
            "CrestoneNeedle", 
            "Princeton", 
            "Yale", 
            "Bross", 
            "KitCarson", 
            "ElDiente", 
            "Maroon", 
            "Tabeguache", 
            "Oxford", 
            "Sneffels", 
            "Democrat", 
            "Capitol", 
            "Pikes", 
            "Snowmass", 
            "Eolus", 
            "Windom", 
            "Challenger", 
            "Columbia", 
            "Missouri", 
            "Humboldt", 
            "Bierstadt", 
            "Conundrum", 
            "Sunlight", 
            "Handies", 
            "Culebra", 
            "Ellingwood", 
            "Lindsey", 
            "NorthEolus", 
            "LittleBear", 
            "Sherman", 
            "Redcloud", 
            "Pyramid", 
            "Wilson", 
            "Wetterhorn", 
            "SanLuis", 
            "NorthMaroon", 
            "HolyCross", 
            "Huron", 
            "Sunshine"
        ], 
        alphaChar: [
            "a", 
            "b", 
            "c", 
            "d", 
            "e", 
            "f", 
            "g", 
            "h", 
            "i", 
            "h", 
            "j", 
            "k", 
            "l", 
            "m", 
            "n", 
            "o", 
            "p", 
            "q", 
            "r", 
            "s", 
            "t", 
            "u", 
            "v", 
            "w", 
            "x", 
            "y", 
            "z"
        ], 
        // method to randomly choose index number
        randomIndex: function () {
            var randomInt = Math.floor(Math.random() * wordGuessGame.wordBank.length);
            index = randomInt;
        }, 
        // method to "choose word', i.e. populate global array variable of each letter of randomly indexed word
        chooseWord: function () {
            chosenWord = wordGuessGame.wordBank[index].toLowerCase();
        }, 
        // method to array-ify letters of chosen word 
        arrayify: function () {
            for (i = 0; i < chosenWord.length; i++) {
               letters.push(chosenWord[i]); 
            }
        }, 
        // method to create html elements (dashes) for number of letters in word
        createDashesHTML: function () {
            var dashesHTML = document.getElementById("dashed-word");
            while (dashesHTML.firstChild) {
                dashesHTML.removeChild(dashesHTML.firstChild);
                console.log('god dammit');
            }
            letters.forEach(function(item) {
                var dash = document.createElement("BUTTON");
                dash.textContent = "_";
                dash.setAttribute("id", item);
                document.getElementById("dashed-word").appendChild(dash);
            })
        }, 
        // method to set number for guessses in guessesLeft variable
        setGuessesLeft: function () {
            guessesLeft = letters.length;
        }, 
        // method to call methods to set up game 
        loadGame: function () {
            wordGuessGame.randomIndex();
            wordGuessGame.chooseWord();
            wordGuessGame.arrayify();
            wordGuessGame.createDashesHTML();
            wordGuessGame.setGuessesLeft();
        }, 
        // method to decrement # of guesses left variable
        decrementGuesses: function () {
                guessesLeft--;
        },  
        // method to create html element for wrong letters guessed
        wrongGuessesHTML: function (keystroke) {
            var wrongLetter = document.createElement("BUTTON");
            wrongLetter.textContent = keystroke;
            document.getElementById("wrong-guesses").appendChild(wrongLetter);
        }, 
        // method to replace dash with correct letters in HTML element
        correctGuessesHTML: function (keystroke) {
            document.getElementById(keystroke).textContent = keystroke;
        }, 
        // method to update guess counter html
        counter: function() {
            if (guessesLeft >= 1) {
                document.getElementById("guess-counter").textContent = guessesLeft;
            } else {
                document.getElementById("guess-counter").textContent = '0';
            }   
        }, 
        // method to log correct guesses
        logCorrect: function(keystroke) {
            if (correct.indexOf(keystroke) === -1 && wordGuessGame.alphaChar.indexOf(keystroke) != -1) {
                correct.push(keystroke);
                wordGuessGame.correctGuessesHTML(keystroke);
            } else if (correct.indexOf(keystroke) != -1 && letters.indexOf(keystroke) != -1) {
                correct.push(keystroke);
                wordGuessGame.correctGuessesHTML(keystroke);
            }
        }, 
        // method to alert loss 
        loser: function () {
            // wordGuessGame.counter();
            alert("YOU LOST");
            location.reload();
        }, 
        // method to alert win 
        winner: function () {
            alert("YOU WIN");
            location.reload();
        }, 
        // method to log wrong guesses
        logWrong: function(keystroke) {
            if (wrong.indexOf(keystroke) === -1 && wordGuessGame.alphaChar.indexOf(keystroke) != -1) {
                wrong.push(keystroke);
                wordGuessGame.decrementGuesses();
                wordGuessGame.wrongGuessesHTML(keystroke);
            }
        }, 
        // method to handle correct guesses and wins
        guessIsCorrect: function (keystroke) {
            if (correct.length < (letters.length - 1)) {
                wordGuessGame.logCorrect(keystroke);
                wordGuessGame.correctGuessesHTML(keystroke);
            } else if (correct.length === (letters.length - 1) && correct.indexOf(keystroke) === -1) {
                wordGuessGame.correctGuessesHTML(keystroke);
                wordGuessGame.winner();
            }
        }, 
        // method to handle wrong guesses
        guessIsWrong: function (keystroke) {
            if (guessesLeft > 1) {
                wordGuessGame.logWrong(keystroke);
            } else if (guessesLeft === 1 && wrong.indexOf(keystroke) === -1) {
                wordGuessGame.logWrong(keystroke);
                wordGuessGame.loser();
            }
        }, 
        // method to handle guesses, populate global array variable of letters guessed, etc.
        guesses: function (keystroke) {
            if (letters.indexOf(keystroke) != -1) {
                wordGuessGame.guessIsCorrect(keystroke);
                wordGuessGame.counter();
            } else {
                wordGuessGame.guessIsWrong(keystroke);
                wordGuessGame.counter();
            }
        }
        // method to do something if win
        //
    }

    // // event handlers to start game with space bar key and listen for user input (keystrokes)
    document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to variable keystroke
        spacebar = event.key.toLowerCase();
        if (spacebar === ' ') {
            wordGuessGame.loadGame();
        } else {
            keystroke = event.key.toLowerCase();
            wordGuessGame.guesses(keystroke);
        }
    }

    alert("Press the space bar to start.");