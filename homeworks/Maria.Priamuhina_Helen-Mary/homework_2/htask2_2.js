'use strict';
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('enter an interval of values:');

function IsSymetry(num) {
    let str = String(num);
    let flag = true;
    let strNew ='';
    for (let iter = str.length - 1; iter >= 0; iter--) {
        strNew += str[iter];
    }
    if(str != strNew) {
        flag = false;
    }
    return flag;
}

rl.on('line', (input) => {
    let temp = input.split(' ');
    let start = temp[0];
    let end = temp[1];
    for(let temp = start; temp < end; temp++) {
        if(IsSymetry(temp)){
            console.log(temp +' ');
        }
    }
    rl.close();
});
