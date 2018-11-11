function drawpyrapid(hpyramid) {
    const s = ' ';
    const s1 = '#';
    for (let i = 1; i <= hpyramid; i++) {
        console.log(s.repeat(hpyramid - i) + s1.repeat(2 * i + 2));
    }
}
const readline = require('readline');

const readconsole = readline.createInterface(process.stdin, process.stdout);
readconsole.question('Enter the height of the pyramid in the range from 1 to 20:', (answer) => {
    const a = parseInt(answer, 10);
    if (a >= 1 && a <= 20) {
        drawpyrapid(a);
    } else {
        console.log('***Invalid data entered***');
    }
    readconsole.close();
});
