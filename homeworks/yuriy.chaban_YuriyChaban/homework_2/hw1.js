const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please, indicate the height of the pyramid (number of lines) as a number greater than 0:\n', (answer) => {
    let totalNumberOfRows = parseInt(Math.ceil(answer)),
        isAnswerIsNumber = typeof totalNumberOfRows === 'number' && !isNaN(totalNumberOfRows);

    if (isAnswerIsNumber && totalNumberOfRows > 0) {
        console.log(`The height of the pyramid is: ${Math.ceil(answer)} \n`);

        for(let i = 1; i <= totalNumberOfRows; i++) {
            let stringWhitespace = ' '.repeat(totalNumberOfRows - i),
                pyramidBlock = '#'. repeat((2 * i) + 2);
            console.log(stringWhitespace + pyramidBlock + stringWhitespace);
        }

    } else if (isAnswerIsNumber && totalNumberOfRows  === 0) {
        console.log(`Your answer: " ${Math.ceil(answer)} " is less or equal to 0.`);
    } else {
        console.log(`Your answer: " ${answer} " is not a number.`);
    }

    rl.close();
});
