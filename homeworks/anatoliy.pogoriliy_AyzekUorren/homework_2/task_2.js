const readline = require('readline');
const { rangePalindromes } = require('./palindrome');

const rl = readline.createInterface(process.stdin, process.stdout);
process.stdin.setEncoding('utf8');
rl.question('Please enter start number:', (start) => {
    rl.question('Please enter end number:', (end) => {
        const options = {
            start: Number.parseInt(start, 10) || null,
            end: Number.parseInt(end, 10) || null,
        };
        if (options.start === null || options.end === null) {
            console.log('Only numbers allow');
        } else if (options.start <= 500 && options.end <= 1000 && options.start <= options.end) {
            console.log(rangePalindromes(options));
        } else {
            console.log('start max: 500, end max: 1000 and start <= end');
        }
        rl.close();
    });
});
