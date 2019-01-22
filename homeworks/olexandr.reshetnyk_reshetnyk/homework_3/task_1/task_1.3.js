const { squareNumber } = require('./task_1.1');

const squareAllArrayNumbers = array => array.map(num => squareNumber(num));

exports.squareAllArrayNumbers = squareAllArrayNumbers;
