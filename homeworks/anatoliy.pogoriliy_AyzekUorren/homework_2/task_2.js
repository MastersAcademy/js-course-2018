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
        } else {
            console.log(palindrome(start, end));
        }
        rl.close();
    });
});