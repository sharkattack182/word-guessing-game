const Letter = require("./letter");

class Word {
    constructor(word) {
        this.letters = word.split("").map(character => new Letter(character))
    }
}