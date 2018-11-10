/*  I know it could be better, especially with readline functionality,
but I didn't find out how to make it correctly via 'rl.on' to ask it in a loop :(
Also I dont know why readline throws an error, my pyramid works without it in two variants. */
/* const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
let parsed;
function buildingPyramid() {
    rl.question('Enter the height of pyramid: ', (height) => {
        parsed = parseInt(height, 10);
        if (typeof (parsed) === 'number' && height % 1 === 0) {
            console.log('Here you are!');
            const initialStroke = '##';
            const pyramidHeight = height;
            const iterations = height + 1;
            const space = ' ';
            let amountOfSpace = 0;
            for (let i = 2; i <= iterations; i++) {
                const stroke = initialStroke.repeat(i);
                amountOfSpace++;
                if (amountOfSpace !== pyramidHeight) {
                    const spaceBefore = space.repeat(pyramidHeight - amountOfSpace);
                    // let amountOfSpace = ((pyramidHeight * 2 + 2) - stroke.length) / 2;
                    // let spaceBefore = space.repeat(amountOfSpace);
                    console.log(`${spaceBefore}${stroke}`);
                } else {
                    console.log(`${stroke}`);
                }
            }
            process.exit();
        } else {
            console.log('Please, enter only integers!');
            buildingPyramid();
        }
    });
}
buildingPyramid();
*/

//  working variant without readline


console.log('Here you are!');
const initialStroke = '##';
const pyramidHeight = 15;
const iterations = 15 + 1;
const space = ' ';
let amountOfSpace = 0;
for (let i = 2; i <= iterations; i++) {
    const stroke = initialStroke.repeat(i);
    amountOfSpace++;
    if (amountOfSpace !== pyramidHeight) {
        const spaceBefore = space.repeat(pyramidHeight - amountOfSpace);
        // let amountOfSpace = ((pyramidHeight * 2 + 2) - stroke.length) / 2;
        // let spaceBefore = space.repeat(amountOfSpace);
        console.log(`${spaceBefore}${stroke}`);
    } else {
        console.log(`${stroke}`);
    }
}
