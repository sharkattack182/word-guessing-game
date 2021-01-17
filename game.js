const inquirer = require("inquirer");
const Word = require("./word");
const words = require("./words");

class Game {
    constructor() {
        this.guessLeft = 0;
    }

    play() {
        this.guessLeft = 5;
        this.nextWord();
    }

    nextWord() {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        this.currentWord = new Word(randomWord);
        console.log("\n" + this.currentWord)
    }

    makeGuess() {
        this.askForLetter().then(() => {
            if(this.guessLeft < 1) {
                console.log(`Out of guesses the word was ${this.currentWord.getSolution()}`)
                this.askToPlayAgain();
            } else if(this.currentWord.correctGuess()) {
                console.log("Correct");
                this.guessLeft = 5;
                this.nextWord();
            } else {
                this.makeGuess();
            }
        })
    }

    askToPlayAgain() {
        inquirer.prompt([
            {
              type: "confirm",
              message: "Play Again?",
              name: "choice"
            }
        ]).then(res => {
            if(res.choice) {
                this.play();
            } else {
                this.quit();
            }
        })
    }

    askForLetter() {
        return inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter",
                name: "letter"
            }
        ]).then(response => {
            const didGuessCorrectly = this.currentWord.guessLetter(response.letter);
            if(didGuessCorrectly) {
                console.log("Correct");
            } else {
                this.guessLeft --;
                console.log("Wrong");
                console.log(`${this.guessLeft} guesses left.`)
            }
        })
    }

    quit() {
        console.log("Goodbye");
        process.exit(0);
    }
}


module.exports = Game;