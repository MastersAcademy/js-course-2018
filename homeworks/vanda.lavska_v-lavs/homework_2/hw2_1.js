const  readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter height pyramid: ', (height) => {

    pyramid(`${height}`);

    rl.close();
});

function pyramid(height) {
    for (let i=0; i< height; i++) {
        let x = 2 * i + 4;
        let y = (2 * height + 2 - x)/2;
        let str = '';
        for ( let i=0; i< y; i++) {
            str += ' ';
        }
        for (let i=0; i<x ; i++){
            str += '#';
        }
        console.log(str);
    }
}











































