const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function searchPow(number) {
    if (number > 1) {
        return searchPow(number / 2);
    } if (number === 1) {
        return true;
    }
    return false;
}

rl.question('Enter min & max positive numbers (example:10 600): ', (value) => {
    const mass = value.split(' ').map(Number);
    let minValue = mass[0];
    const maxValue = mass[1];
    if (minValue > 0 && minValue < maxValue && Number.isInteger(minValue)) {
        rl.close();
        for (minValue; minValue <= maxValue; minValue++) {
            if (searchPow(minValue)) {
                console.log(minValue);
            }
        }
    } else {
        console.log('Oops you have entered an invalid value, try again');
        rl.close();
    }
});
