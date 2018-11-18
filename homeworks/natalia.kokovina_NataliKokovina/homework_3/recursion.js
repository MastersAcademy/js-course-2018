
function recursion(startNum) {
    if (startNum > 2) {
        return recursion(startNum / 2);
    } if (startNum === 2) {
        return (1);
    }
    return (0);
}

const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please write first value ', (firstAnswer) => {
    rl.question('Please write second value ', (secondAnswer) => {
        if (+firstAnswer > +secondAnswer || +firstAnswer <= 2) {
            console.log('N/A');
        } else {
            for (let i = +firstAnswer; i < +secondAnswer; i++) {
                if (recursion(i) === 1) {
                    console.log(i);
                }
            }
        }
        rl.close();
    });
});
