const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question('Enter the height of the piramide: ' , function(heightPiramide) {
    func (heightPiramide);
    r1.close();
});

function func(heightPiramide) {

let emptySpace = heightPiramide - 1;
let symb = 2;
let spaceLeft = ' ';
let sharpSymbol = '#'

    if (!isNaN(heightPiramide) ) { 
        if (heightPiramide <= 100){
            while(emptySpace > 0){
                emptySpace--;
                symb+=2;
                console.log(spaceLeft.repeat(emptySpace)+sharpSymbol.repeat(symb));
            }
        }
        else {
            console.log('It\'s too high');
        }
    }
    else{
        console.log('It\'s not a number. Please, enter number')
    }
}