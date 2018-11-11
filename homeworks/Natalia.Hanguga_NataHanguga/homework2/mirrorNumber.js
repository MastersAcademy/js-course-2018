const readline = require('readline');

let startWidth = 4;
const str = '#';
const s = '*';
const str1 = '';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question('Enter height of pyramid', (height) => {
    for (let i = 0; i < height; i++) {
        console.log(str1.concat(s.repeat(height - 1 - i))
            .concat(str.repeat(startWidth))
            .concat(s.repeat(height - 1 - i)));
        startWidth += 2;
    }
    r1.close();
});
