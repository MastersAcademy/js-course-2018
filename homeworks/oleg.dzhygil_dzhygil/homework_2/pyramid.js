// Input question
const readline = require('readline');

const op = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function
function func(num) {
    let i = 2;
    const str1 = ' ';
    const str2 = '#';
    let c = 15;
    if (num > c) {
        console.log('Your number is bigger than 15');
        return;
    }
    for (c = num; c >= 1; c--) {
        i += 2;
        console.log(str1.repeat(c) + str2.repeat(i));
    }
}

op.question('What is the height of pyramid? (under 15) :', (num) => {
    func(num);
    op.close();
});
