const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function pyramid(num) {
    let i = 2;
    const bs = ' ';
    const str = '#';
    let j = 15;
    if (num > j) {
        console.log('Your number is bigger than 15');
        return;
    }
    for (j = num; j >= 1; j--) {
        i += 2;
        console.log(bs.repeat(j) + str.repeat(i));
    }
}

r1.question('What is the height of pyramid? (under 15) :', (num) => {
    pyramid(num);
    r1.close();
});
