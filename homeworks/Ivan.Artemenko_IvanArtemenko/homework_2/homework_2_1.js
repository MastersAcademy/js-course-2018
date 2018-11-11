const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter the number of triangle levels from 3 to 15 ', (number) => {
    const numeric = number - 0;
    if (numeric <= 16 && numeric >= 3) {
        for (let i = 2; i <= numeric + 1; i++) {
            let a = '**';
            let b = ' ';
            const j = ((numeric + 1) - i);
            a = a.repeat(i);
            b = b.repeat(j);
            console.log(b + a);
        }
    } else console.log('You must enter a number from 3 to 15');
    rl.close();
});
