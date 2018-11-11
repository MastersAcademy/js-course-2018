let i = 0;
let a = 0;
const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please write first values ', (firstAnswer) => {
    rl.question('Please write second values ', (secondAnswer) => {
        if (+firstAnswer < +secondAnswer) {
            for (i = +firstAnswer; i <= +secondAnswer; i++) {
                a = String(i).split('').reverse().join('');
                if (i === +a) {
                    console.log(i);
                }
            }
        } else if (+firstAnswer > +secondAnswer) {
            console.log('You wrote first values bigger than second');
        } else {
            console.log('You wrote incorrect values');
        }
        rl.close();
    });
});
