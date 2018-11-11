const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the height of the pyramid.\nOnly numbers are allowed for input, and they must be greater than zero.\nEnter heigth: ', (answer) => {
    if (answer > 0 && Number(+answer) === +answer) {
        const heigth = +answer + 2;
        const str = '##';
        const line = ((heigth - 3) * str.length + (str.length * 2));
        for (let i = 2; i < heigth; i++) {
            console.log(' '.repeat((line - str.length * i) / 2) + str.repeat(i));
        }
    } else {
        console.log('Error: Only numbers are allowed for input, and they must be greater than zero.');
    }
    rl.close();
});
