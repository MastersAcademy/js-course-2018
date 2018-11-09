const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('How big pyramid you want?: ', (answer) => {
    // Convert string to number, and +1 for correct score of pyramid
    const inputValue = +answer + 1;
    // Loop to add space and sharp into variable pyramid, and render if conditions true
    function pyramidRun(int) {
        for (let quantity = 1; quantity < int; quantity++) {
            let pyramid = '';
            for (let space = 1; space < int - quantity; space++) {
                pyramid += ' ';
            }
            for (let indentTop = 0; indentTop <= quantity; indentTop++) {
                pyramid += '##';
            }
            console.log(pyramid);
        }
    }
    // Condition checks
    if (inputValue <= 0) {
        console.log('Your number have negative value');
    } else if (inputValue - 1 === 0) {
        console.log('Our pyramid can\'t begin from 0');
    } else if (inputValue > 70) {
        console.log('So big pyramid, don\'t do this');
    } else {
        pyramidRun(inputValue);
    }
    rl.close();
});
