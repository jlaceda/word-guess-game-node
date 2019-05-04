const Letter = require('./Letter');
const Word = require('./Word');

let a = new Letter('a');

console.assert(a.getLetter() === '_');

a.check('f');

console.assert(a.getLetter() === '_');

a.check('a');

console.assert(a.getLetter() === 'A');