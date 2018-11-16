const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

(function create() {
    let searchPowNumber;
    let minValue;
    let maxValue;

    function searchPow(number) {
        let value = number;
        while (value < minValue) {
            value *= searchPowNumber;
        }
        if (value >= minValue && value <= maxValue) {
            console.log(value);
            return searchPow(value * searchPowNumber);
        }
        return 0; // close recursion
    }

    rl.question('Enter (searchPowNumber min max) positive numbers (example:2 10 600): ', (value) => {
        [searchPowNumber, minValue, maxValue] = value.split(' ').map(Number);
        if (minValue > 1 && searchPowNumber > 1 && minValue < maxValue) {
            rl.close();
            searchPow(searchPowNumber);
        } else { // repeat input
            console.log('Opps you have entered an invalid value, try again');
            create(); // recursion
        }
    });
}()); // function call "create"
