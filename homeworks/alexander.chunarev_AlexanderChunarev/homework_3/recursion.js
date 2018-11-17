const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isCorrectDiapason(firstValue, lastValue) {
    return Number(firstValue) < Number(lastValue);
}

function isPositive(firstValue, lastValue) {
    return Number(firstValue) > 0 && Number(lastValue) > 0;
}

function isPowerOfTwo(digit) {
    if (digit % 2 === 0) {
        return isPowerOfTwo(digit / 2);
    }
    return digit === 1;
}

rl.question('Enter first value of diapason: ', (firstValue) => {
    rl.question('Enter last value of diapason: ', (lastValue) => {
        function fillArray() {
            const array = [];
            for (let i = firstValue; i <= lastValue; i++) {
                array.push(i);
            }
            return array;
        }

        function print() {
            console.log(fillArray().filter(isPowerOfTwo));
        }

        if (isCorrectDiapason(firstValue, lastValue) && isPositive(firstValue, lastValue)) {
            print();
        } else {
            console.log('Wrong input!');
        }
        rl.close();
    });
});
