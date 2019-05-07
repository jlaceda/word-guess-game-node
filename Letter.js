class Letter {
	constructor(letter) {
		this.letter = letter.toUpperCase();
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		this.guessed = alphabet.indexOf(this.letter) === -1;
	}
	toString() {
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