const readline = require('readline');
const pyramid = require('./pyramid');

const rl = readline.createInterface(process.stdin, process.stdout);
process.stdin.setEncoding('utf8');
console.log('Pyramid\nOnly numbers allow');
rl.question('Please enter size:', (size) => {
    const strfSize = +size;
    console.log('Selected:', strfSize);
    if (!strfSize) {
        console.log('Wrong params');
        rl.close();
        return;
    }
    console.log(pyramid(strfSize));
    rl.close();
});
