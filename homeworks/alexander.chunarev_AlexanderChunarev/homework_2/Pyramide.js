let amountOfSharps = 4;
const readline = require('readline');

const enterHeight = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function check(height) {
    return height.search(/^[\d]*$/);
}

enterHeight.question('Enter the height of pyramid: ', (height) => {
    enterHeight.close();
    if (check(height) !== -1) {
        for (let i = 1; i <= height; i++) {
            const str = ' '.repeat(height - i);
            const str2 = '#'.repeat(amountOfSharps);
            console.log(str + str2 + str);
            amountOfSharps += 2;
        }
    } else {
        console.log('Wrong input!');
    }
});
