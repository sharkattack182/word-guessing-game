
class Letter {
    constructor(character) {
        this.character = character;
    }

    toString() {
        if(this.visible === true) {
            return this.character
        } else {
            return "_"
        }
    }
    
    getSolution() {
        return this.character;
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