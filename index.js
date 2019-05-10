const Word = require('./Word');
const inquirer = require('inquirer');
let words = require('./movie-titles');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let numberOfWrongGuessesLeft = 10;
let alreadyGuessedLetters = [];
let numberOfWordsToGuess = 5;
let wins = 0;
let losses = 0;

const guessLetterPrompt = {
	name: 'guess',
	message: 'Guess a letter:',
	transformer: input => input.toUpperCase().trim(),
	filter: input => input.toUpperCase().trim(),
	validate: input => {
		return new Promise((resolve, reject) => {
			if (input.length > 1) {
				reject('Please enter just one letter.');
			}
			if (alphabet.indexOf(input) === -1) {
				reject('Please enter a letter.');
			} 
			if (alreadyGuessedLetters.indexOf(input) > -1) {
				reject('You have already guessed ' + input.toUpperCase());
			}
			resolve(true);
		});
	}
}

function getNewWord() {
	if (numberOfWordsToGuess < 1) return false;
	if (words.length < 1) return false;
	numberOfWordsToGuess--
	numberOfWrongGuessesLeft = 10;
	alreadyGuessedLetters = [];
	const rand = Math.floor(Math.random() * words.length);
	return new Word(words.splice(rand, 1)[0]);
}

function processGuess(guess, word) {
	console.log('\033[2J');
	alreadyGuessedLetters.push(guess);
	if (word.check(guess)) {
		console.log('\n\nCorrect!\n');
	} else {
		console.log('\n\nWrong...\n');
		numberOfWrongGuessesLeft--;
		if (numberOfWrongGuessesLeft < 1) {
			console.log('\nRan out of guesses!\n');
			losses++;
			word = getNewWord();
			if (word) {
				console.log('\nNext word:\n');
			}
		}
		console.log(`\nWrong guesses left: ${numberOfWrongGuessesLeft}\n`);
	}
	if (word.isSolved()) {
		console.log('\nYou Got it!\n');
		wins++;
		word = getNewWord();
		if (word) {
			console.log('\nNext word:\n');
		}
	}
	if (word) {
		guessLetter(word);
	} else {
		console.log(`\nGame Over!\nFinal Score: ${wins} - ${losses}\n`);
		console.log('\nThanks for playing!\n');
	}
}

function guessLetter(word) {
	console.log(`\n\t${word.toString()}\n\n`);
	inquirer
		.prompt(guessLetterPrompt)
		.then(answers => processGuess(answers.guess, word));
}

console.log(`\n\tHangman Game: Movie Edition! by John Michael Laceda\n`)
guessLetter(getNewWord());