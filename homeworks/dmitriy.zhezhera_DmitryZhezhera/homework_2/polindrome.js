const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const polindrome = (min, max) => {
    for (let i = Math.min(min, max), total = Math.max(min, max); i <= total; i++) {
        const currentI = i.toString();
        const currentMirrorI = currentI.split('').reverse().join('');
        if (currentI === currentMirrorI) console.log(i);
    }
};

rl.question('PLEASE ENTER "MIN-MAX": ', (answer) => {
    const arr = answer.split('-');
    const min = parseInt(arr[0], 10);
    const max = parseInt(arr[1], 10);
    if (Number.isNaN(min) || Number.isNaN(max)) console.log('ERROR INVALID INPUTS, PLEAS ENTER NUMBERS !!!');
    else polindrome(min, max);
    rl.close();
});
