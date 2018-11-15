const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let searchPowNumber;
let minValue;
let maxValue;

function searchPow(n, min, max) {
    if (n >= min && n <= max) {
        console.log(n);
        return searchPow(n * searchPowNumber, min, max);
    }
    if (n > max) {
        return 0; // close recursion
    }
    return searchPow(n * searchPowNumber, min, max); // in searchPowNumber < min
}

(function create() {
    rl.question('Enter (searchPowNumber min max) positive integer (example:2 10 600): ', (value) => {
        [searchPowNumber, minValue, maxValue] = value.split(' ');
        searchPowNumber = +searchPowNumber;
        minValue = +minValue;
        maxValue = +maxValue;
        if ( // input check
            Number.isInteger(searchPowNumber)
            && Number.isInteger(minValue)
            && Number.isInteger(maxValue)
            && searchPowNumber > 1
            && minValue < maxValue
        ) { // if true
            rl.close();
            searchPow(searchPowNumber, minValue, maxValue);
        } else { // if false, repeat input
            console.log('Opps you have entered an invalid value, try again');
            create(); // recursion
        }
    });
}()); // function call "create"
