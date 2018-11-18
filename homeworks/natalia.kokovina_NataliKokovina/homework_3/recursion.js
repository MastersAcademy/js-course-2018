function recursion(fA, sA) {
    if (fA <= sA) {
        for (let i = 0; i < sA; i++) {
            if (2 ** (i + 1) === fA) {
                console.log(fA);
            }
        }
        return recursion((fA + 1), sA);
    }
    return (1);
}

const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please write first value ', (firstAnswer) => {
    rl.question('Please write second value ', (secondAnswer) => {
        if (+firstAnswer > +secondAnswer || +firstAnswer <= 0) {
            console.log('N/A');
        } else { recursion(+firstAnswer, +secondAnswer); }
        rl.close();
    });
});
