let readline = require('readline-sync');
let height = process.argv[2];

if(typeof height === 'undefined')
    height = readline.question('Type a number of rows: ');

if(!isNumeric(height)){
    console.log('Argument isn\'t a number.');
    process.exit(-1);
} else if(!inRange(height)){
    console.log('Argument must be more than 1.');
    process.exit(-1);
}

let lineWidth = 2 + height * 2;
let symbolsCount = 2;
let spacesCount = (lineWidth - symbolsCount) / 2;

for(let i = 0; i < height; i++){
    symbolsCount += 2;
    spacesCount = (lineWidth - symbolsCount) / 2;
    let spaces = ' '.repeat(spacesCount);
    let symbols = '#'.repeat(symbolsCount ); 
    let line = spaces + symbols + spaces;
    console.log(line);
}

function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function inRange(n){
    return n > 1; 
}