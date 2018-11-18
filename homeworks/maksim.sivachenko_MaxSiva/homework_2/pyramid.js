
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        const emptyLine = ' '.repeat(n - i);
        const PyramidElements = '#'.repeat(i * 2 + 2);

        console.log(emptyLine + PyramidElements);
    }
}

rl.question('Укажите высоту пирамиды: ', (answer) => {
    const height = +answer;

    if (Number.isNaN(height)) {
        console.log('Значение должно быть числового типа');
    } else {
        pyramid(height);
    }
    rl.close();
});
