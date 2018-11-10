/*I know it could be better, especially with readline functionality, but I didn't find out how to make it correctly via 'rl.on' to ask it in a loop :(
Also I dont know why readline throws an error, my pyramid works without it in two variants.*/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let parsed;
let buildingPyramid = function() {
    rl.question('Enter the height of pyramid: ', function(height) {
        parsed = parseInt(height);
        if(typeof(parsed) === 'number' && height % 1 === 0) {
            console.log('Here you are!');
            let initialStroke = '##';
            let pyramidHeight = height;
            let iterations = height + 1;
            let space = ' ';
            let amountOfSpace = 0;
            for(let i = 2; i <= iterations; i++) {
                let stroke = initialStroke.repeat(i);
                amountOfSpace++;
                if(amountOfSpace !== pyramidHeight) {
                    let spaceBefore = space.repeat(pyramidHeight - amountOfSpace); 
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
};
buildingPyramid();

//working variant without readline

/*
console.log('Here you are!');
let initialStroke = '##';
let pyramidHeight = 15;
let iterations = 15 + 1;
let space = ' ';
let amountOfSpace = 0;
for(let i = 2; i <= iterations; i++) {
    let stroke = initialStroke.repeat(i);
    amountOfSpace++;
    if(amountOfSpace !== pyramidHeight) {
        let spaceBefore = space.repeat(pyramidHeight - amountOfSpace); 
        // let amountOfSpace = ((pyramidHeight * 2 + 2) - stroke.length) / 2;
        // let spaceBefore = space.repeat(amountOfSpace); 
        console.log(`${spaceBefore}${stroke}`);
    } else {
        console.log(`${stroke}`);
    }
}
*/
