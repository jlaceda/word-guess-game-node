class Letter {
	constructor(letter) {
		this.letter = letter.toUpperCase();
		this.guessed = false;
	}
	getLetter() {
		if (this.guessed) {
			return this.letter;
		}
		return '_';
	}
	check(guess) {
		if (guess.toUpperCase() === this.letter) {
			this.guessed = true;
		}
	}
}

module.exports = Letter;