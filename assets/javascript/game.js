    
    
    
    // global array variables for letters in word, letters guessed wrong, letter guessed right, and variable for # of guesses left
    var letters = [];
    var index = 0;
    var wrong = [];
    var correct = [];
    var guessesLeft = 0;
    // game object
    var wordGuessGame = {
        // array of words, property of game object
        wordBank: [
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
        // method to randomly choose index number
        randomIndex: function () {
            var randomInt = Math.floor(Math.random() * wordGuessGame.wordBank.length);
            index = randomInt;
        }, 
        // method to "choose word', i.e. populate global array variable of each letter of randomly indexed word
        chooseWord: function () {
            var chosenWord = wordGuessGame.wordBank[index];
            console.log(chosenWord);
            for (i = 0; i < chosenWord.length; i++) {
               letters.push(chosenWord[i]); 
            }
        }, 
        // method to create html elements (dashes) for number of letters in word
        createDashesHTML: function () {
            letters.forEach(function(item) {
                var dash = document.createElement("BUTTON");
                dash.textContent = "_";
                dash.setAttribute("id", item);
                document.getElementById("dashed-word").appendChild(dash);
            })
        }, 
        // method to set number for guessesLeft variable
        setGuessesLeft: function () {
            guessesLeft = letters.length;
        }, 
        // method to decrement # of guesses left variable
        decrementGuesses: function () {
            if (guessesLeft > 0) {
                guessesLeft--;
            }
        }, 
        // method to create html element for wrong letters guessed
        wrongGuesses: function (keystroke) {
            var wrongLetter = document.createElement("BUTTON");
            wrongLetter.textContent = keystroke;
            document.getElementById("wrong-guesses").appendChild(wrongLetter);
        }, 
        // method to replace dash with correct letters 
        correctGuesses: function (keystroke) {
            var correctGuess = document.getElementById(keystroke).textContent = keystroke;
        }, 
        // method to handle guesses, populate global array variable of letters guessed, etc.
        guesses: function (keystroke) {
            if (letters.indexOf(keystroke) != -1) {
                correct.push(keystroke);
                wordGuessGame.correctGuesses(keystroke);
            } else {
                wrong.push(keystroke);
                wordGuessGame.decrementGuesses();
                wordGuessGame.wrongGuesses(keystroke);
            }
        }, 
        // method to create html element for win or loss notification
        
    }




    // method to do something if win
    // event handlers to re/start game with any key and listen for user input (keystrokes)

    wordGuessGame.randomIndex();
    console.log(index);
    wordGuessGame.chooseWord();
    console.log(letters);
    wordGuessGame.createDashesHTML();
    wordGuessGame.setGuessesLeft();
    console.log(guessesLeft);
    wordGuessGame.guesses('z');
    wordGuessGame.guesses('a');
    console.log(correct);
    console.log(wrong);
    console.log(guessesLeft);

