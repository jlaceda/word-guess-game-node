class Letter {
	constructor(letter) {
		this.letter = letter.toUpperCase();
		const weirdChars = `'"?,./\\ -_`
		this.guessed = weirdChars.indexOf(this.letter) !== -1;
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