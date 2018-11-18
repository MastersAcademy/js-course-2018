const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('first nomber ', (answer) => {
    rl.question('final number ', (answer2) => {
        let info = +answer;
        for (info; info < answer2; info++) {
            const newNumber = info.toString().split('').reverse().join('');
            const rev = info.toString();
            if (newNumber === rev) {
                console.log(info);
            }
        }
        rl.close();
    });
});
