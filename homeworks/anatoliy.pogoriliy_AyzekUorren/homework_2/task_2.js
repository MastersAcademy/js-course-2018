'use strict';

const readline = require('readline');
const palindrome = require('./palindrome').RangePalindromes;

let rl = readline.createInterface(process.stdin, process.stdout);
process.stdin.setEncoding('utf8');
rl.question('Please enter start number:', (start) => {
    rl.question('Please enter end number:', (end) => {
        start = Number.parseInt(start, 10) || null;  
        end = Number.parseInt(end, 10) || null;
        if(start === null || end === null) {
            console.log('Only numbers allow');
        } else if (start <= 500 && end <= 1000 && start <= end) {
            console.log(palindrome(start, end));
        } else {
            console.log('start max: 500, end max: 1000 and start <= end');
        }
        rl.close();
    });
});