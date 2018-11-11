const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

read.question('For example, enter the numbers 100, 1000 => ', (input) => {
    const [start, end] = input.split(', ').map(num => +num);
    for (let num = start; num <= end; num++) {
        if (num.toString().split('').reverse().join('') === num.toString()) {
            console.log(num);
        }
    }
    read.close();
});
