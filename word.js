const Letter = require("./letter");

class Word {
    constructor(word) {
        this.letters = word.split("").map(character => new Letter(character))
    }

    getSolution() {
        return this.letters.map(letter => letter.getSolution()).join("")
    }

    toString() {
        return this.letters.join(" ")
    }

    guessLetter(character) {
        let foundLetter = false;
        this.letters.forEach(letter => {
            if(letter.checkGuess(character)) {
                foundLetter = true;
            }
        });

        console.log("\n" + this + "\n");
        return foundLetter;
    }

    correctGuess() {
        return this.letters.every(letter => letter.visible)
    }
}

module.exports = Word;