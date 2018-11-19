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
            for (let sharp = 0; sharp <= quantity; sharp++) {
                pyramid += '##';
            }
            console.log(pyramid);
        }
    }
    // Condition checks
    if (inputValue - 1 > 30) {
        console.log('So big pyramid, don\'t do this (max 30)');
    } else {
        pyramidRun(inputValue);
    }
    rl.close();
});
