'use strict';

const readline = require('readline');
const Pyramid = require('./pyramid');

let rl = readline.createInterface(process.stdin, process.stdout);
process.stdin.setEncoding('utf8');
rl.question('Please enter size:', (size) => {
    size = Number.parseInt(size, 10) || null;
    console.log('Selected:', size);
    if(size === null) {
        console.log('Only numbers allow');
    } else {
        console.log(Pyramid(size));
    }
    rl.close();
});