const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is the height of the pyramid?', (answer) => {
    const height = +answer;

    for (let i = 1; i < height + 1; i++) {
        const spaces = ' '.repeat(height - i);
        const symbol = '#'.repeat(i);
        const piramida = spaces + symbol + symbol;
        console.log(piramida);
    }

    rl.close();
});
