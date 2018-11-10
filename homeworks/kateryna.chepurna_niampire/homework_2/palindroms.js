const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter minimal number : ', (minNumber) => {
    r1.question('Enter maximal number : ', (maxNumber) => {
        check(parseInt(minNumber), parseInt(maxNumber));
        r1.close();
    });
});

function check(minNumber, maxNumber) {
    if ( !isNaN(minNumber) && !isNaN(maxNumber)){
        if ((minNumber > 0 && maxNumber >= 0) || (minNumber >= 0 && maxNumber > 0)) {
            if (minNumber > maxNumber){
                let changeNumber = minNumber; 
                minNumber= maxNumber;
                maxNumber = changeNumber;
            }
            for ( let i = minNumber; i <= maxNumber; i++ ){
                if ( i.toString() === i.toString().split("").reverse().join("")) {
                console.log (i);
                }  
            }
        }else{
            console.log('It\' a negative number. Enter correct value.');
        }  
    }else{
        console.log('It\'s not a number. Enter correct value.');
    }
}