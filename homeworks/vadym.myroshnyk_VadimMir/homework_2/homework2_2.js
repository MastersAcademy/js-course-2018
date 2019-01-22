const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please enter the first number: ', (min) => {
    rl.question('Please enter the second number: ', (max) => {
        const rangeMin = +min;
        const rangeMax = +max;

        for (let i = rangeMin; i < rangeMax; i++) {
            const checkPalidromes = i.toString().split('').reverse().join('');
            if (checkPalidromes === i.toString()) {
                console.log(i);
            }
        }
        rl.close();
    });
});
