
const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please write first values ', (firstAnswer) => {
    rl.question('Please write second values ', (secondAnswer) => {
        if (+firstAnswer > +secondAnswer || +firstAnswer <= 0) {
            console.log('N/A');
        }
        function recursion(fA) {
            if (fA <= +secondAnswer) {
                for (let i = 0; i < +secondAnswer; i++) {
                    if (2 ** (i + 1) === fA) {
                        console.log(fA);
                    }
                }
                return recursion(fA + 1);
            }
            return (1);
        }
        recursion(+firstAnswer);
        rl.close();
    });
});
