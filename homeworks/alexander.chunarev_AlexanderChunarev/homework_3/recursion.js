const array = [];

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter first value of diapason: ', (firstValue) => {
    rl.question('Enter first value of diapason: ', (lastValue) => {
        function isDigit() {
            return firstValue.match(/\d*/) > 0 && lastValue.match(/\d*/) > 0;
        }

        function isCorrectDiapason() {
            return firstValue < lastValue;
        }

        function fillArray() {
            if (isDigit() && isCorrectDiapason()) {
                for (let i = firstValue; i <= lastValue; i++) {
                    array.push(i);
                }
            } else {
                console.log('Invalid input!');
            }
        }

        function isPowerOfTwo(digit) {
            if (digit % 2 === 0) {
                return isPowerOfTwo(digit / 2);
            }
            return digit === 1;
        }

        function print() {
            fillArray();
            for (let i = 0; i < array.length; i++) {
                if (isPowerOfTwo(array[i])) {
                    console.log(array[i]);
                }
            }
        }
        print();
        rl.close();
    });
});
