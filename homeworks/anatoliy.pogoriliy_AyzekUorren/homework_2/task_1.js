const readline = require('readline');
const pyramid = require('./pyramid');

const rl = readline.createInterface(process.stdin, process.stdout);
process.stdin.setEncoding('utf8');
console.log('Pyramid\nOnly numbers allow');
rl.question('Please enter size:', (strfSize) => {
    const size = +strfSize;
    console.log('Selected:', size);
    if (!size) {
        console.log('Wrong params');
        rl.close();
        return;
    }
    console.log(pyramid(size));
    rl.close();
});
