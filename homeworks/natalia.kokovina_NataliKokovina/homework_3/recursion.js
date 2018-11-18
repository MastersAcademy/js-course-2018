function recursion(fA, sA) {
    if (fA <= sA) {
        let result = 1;
        for (let i = 0; i < sA; i++) {
            result *= 2;
            if (result === fA) {
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
