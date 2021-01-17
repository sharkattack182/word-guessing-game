const { truncate } = require("fs");

class Letter {
    constructor(character) {
        this.visible = !/[a-z1-9]/i.test(character);
        this.character = character;
    }

    displayChar() {
        if(this.visible === true) {
            return this.character
        } else {
            return "_"
        }
    }

    checkGuess(guess) {
        if(guess === this.character) {
            this.visible = true;
            return true;
        }
        else { return false}
    }
}

module.exports = Letter;