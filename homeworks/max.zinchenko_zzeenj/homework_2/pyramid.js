const readline = require('readline');

const n = readline.createInterface(process.stdin, process.stdout);
n.question('Please enter a rows of your pyramid: ', (answer) => {
    if (answer.match(/^\d+$/)) {
        for (let i = 1; i <= answer; i++) {
            const str = ' '.repeat(answer - i);
            const str2 = '#'.repeat(i * 2 + 2);
            console.log(str + str2 + str);
        }
    } else {
        console.log(answer, ' is not a number');
    }
});
