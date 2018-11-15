const readline = require('readline');

function integerRecursion(current, maxNumber) {
    if (current <= maxNumber) {
        if (Math.log2(current) % 1 === 0) {
            console.log(current);
        }

        return integerRecursion(current + 1, maxNumber);
    }

    return false;
}

const integerQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

integerQuestion.question('What is the range of numbers? Print two numbers (ex: 10, 600).', (range) => {
    const rangeArray = range.split(',');
    const min = Number(rangeArray[0]);
    const max = Number(rangeArray[1]);

    if (rangeArray.length > 2 || Number.isNaN(min) || Number.isNaN(max) || min >= max) {
        console.log('Incorrect Input!');
    } else {
        integerRecursion(min, max);
    }

    integerQuestion.close();
});
