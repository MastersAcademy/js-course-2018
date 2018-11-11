'use strict';
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isNumber(obj) {
    return !isNaN(parseFloat(obj));
}
let flag = true;
console.log('enter number of Pyramids` layers:');
rl.on('line', (input) => {
    if(isNumber(input)) {
        let numSpace = input - 1;
        let space = ' ';
        let sharp = '##';
        let numSharp = 2;
        for(let iter = 0; iter < input; iter++) {
            console.log(space.repeat(numSpace-iter) + sharp.repeat(numSharp+iter));
        }
    }
    else {
        console.log('error.');
        // flag = false;
    }
    rl.close();
});
