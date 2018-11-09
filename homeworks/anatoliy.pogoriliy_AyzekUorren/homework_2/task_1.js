const readline = require('readline');
const pyramid = require('./pyramid');

const rl = readline.createInterface(process.stdin, process.stdout);
process.stdin.setEncoding('utf8');
rl.question('Please enter size:', (size) => {
    const decodedSize = Number.parseInt(size, 10) || null;
    console.log('Selected:', decodedSize);
    if (decodedSize === null) {
        console.log('Only numbers allow');
    } else {
        console.log(pyramid(decodedSize));
    }
    rl.close();
});
