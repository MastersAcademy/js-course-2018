const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const polindrome = (min, max) => {
    for (let i = Math.min(min, max), total = Math.max(min, max); i <= total; i++) {
        let curI = i.toString();
        let curReverseI = curI.split('').reverse().join('');
        if (curI === curReverseI) console.log(i);
    }
};

rl.question('PLEASE ENTER "MIN-MAX": ', (answer) => {
    let arr=answer.split('-');
    let min=parseInt(arr[0]);
    let max=parseInt(arr[1]);
    if (isNaN(min) || isNaN(max) ) console.log('ERROR INVALID INPUTS, PLEAS ENTER NUMBERS !!!');
    else polindrome(min,max);
    rl.close();
});