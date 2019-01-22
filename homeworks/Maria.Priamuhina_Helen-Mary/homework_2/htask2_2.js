const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('enter an interval of values:');

function IsSymetry(num) {
    const str = String(num);
    let flag = true;
    let strNew = '';
    for (let iter = str.length - 1; iter >= 0; iter--) {
        strNew += str[iter];
    }
    if (str !== strNew) {
        flag = false;
    }
    return flag;
}

rl.on('line', (input) => {
    const temp = input.split(' ');
    const start = temp[0];
    const end = temp[1];
    for (let tempIter = start; tempIter < end; tempIter++) {
        if (IsSymetry(tempIter)) {
            console.log(`${tempIter} `);
        }
    }
    rl.close();
});
