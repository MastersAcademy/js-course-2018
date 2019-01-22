const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('How much? ', (answer) => {
    const spase = ' ';
    const grille = '#';
    for (let i = 0; i < answer; i++) {
        const first = spase.repeat(answer - i) + grille.repeat(2 + i);
        const second = first.toString().split('').reverse().join('');
        console.log(first + second);
    }
    rl.close();
});
