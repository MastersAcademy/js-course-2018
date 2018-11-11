// build pyramid
function buildPyramid(height) {
    const pyramidBGround = ' ';
    let pyramidBody = '^^';

    for (let i = height; i >= 1; i--) {
        pyramidBody += '^^';
        console.log(`${pyramidBGround.repeat(i)} ${pyramidBody}`);
    }
}

// pyramid height finding
function pyramidHeightFindout() {
    /* eslint-disable global-require */
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter your pyramid height: ', (height) => {
        if (+height) {
            buildPyramid(height);
        } else {
            console.log('Mission failed! Pharaoh will kill you! Run');
        }
        rl.close();
    });
}pyramidHeightFindout();
