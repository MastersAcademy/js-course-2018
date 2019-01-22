const readline = require('readline');

function numberCheck(number) {
    if (number === 1) {
        return true;
    }

    if (number > 0 && Number.isInteger(number)) {
        return numberCheck(number / 2);
    }

    return false;
}


function checkRange(min, max) {
    const result = [];

    for (let i = min; i < max + 1; i++) {
        if (numberCheck(i)) {
            result.push(i);
        }
    }

    return result;
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
        console.log(checkRange(min, max));
    }

    integerQuestion.close();
});
