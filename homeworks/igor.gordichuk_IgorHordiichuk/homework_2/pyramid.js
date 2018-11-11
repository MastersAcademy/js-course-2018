const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// pyramid height finding
rl.question('Enter your pyramid height: ', (height) => {
    if (+height) {
        // build pyramid
        const pyramidBGround = ' ';
        let pyramidBody = '^^';

        for (let i = height; i >= 1; i--) {
            pyramidBody += '^^';
            console.log(`${pyramidBGround.repeat(i)} ${pyramidBody}`);
        }
    } else {
        console.log('Mission failed! Pharaoh will kill you! Run');
    }
    rl.close();
});
