const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

(function create() {
    rl.question('Enter min and max a positive integer > 9 (example:59 1000): ', answer => {
        answer = answer.split(' ');
        answer[0] = +answer[0];
        answer[1] = +answer[1];
        if (
            typeof answer[0] === 'number' &&
            Number.isInteger(answer[0]) &&
            answer[0] > 9 &&
            typeof answer[1] === 'number' &&
            Number.isInteger(answer[1]) &&
            answer[1] > answer[0]
        ) {
            for (answer[0]; answer[0] <= answer[1]; answer[0]++) {
                const str = String(answer[0]).split('');
                if (Number.parseInt(str.reverse().join('')) === answer[0]) {
                    console.log(answer[0]);
                }
            }
            rl.close();
        } else {
            console.log('Opps you have entered an invalid value, try again');
            create(); //recursion
        }
    });
})();
