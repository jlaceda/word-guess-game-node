const Letter = require('./Letter');

class Word {
	constructor(word) {
		let letters = [];
		for (const letter of word) {
			letters.push(new Letter(letter));
		}
		this.letters = letters;
	}
	toString() {
		let word = '';
		for (const letter of this.letters) {
			word = word + letter + ' ';
		}
		return word;
	}
	check(guess) {
		for (const letter of this.letters) {
			letter.check(guess);
		}
	}
	isSolved() {
		for (const letter of this.letters) {
			if (letter.guessed) {
				continue;
			}
			return false;
		}
		return true;
	}
}

module.exports = Word;