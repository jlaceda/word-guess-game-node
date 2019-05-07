const Letter = require('./Letter');

class Word {
	constructor(word) {
		this.letters = [];
		for (const letter of word) {
			this.letters.push(new Letter(letter));
		}
		this.letters = letters;
	}
	getWord() {
		let word = '';
		for (const letter of this.letters) {
			word = word + letter.getLetter();
		}
		return word;
	}
	check(guess) {
		for (const letter of this.letters) {
			letter.check(guess);
		}
	}
}

module.exports = Word;