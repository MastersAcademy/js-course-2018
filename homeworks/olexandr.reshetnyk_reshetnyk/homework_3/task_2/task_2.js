const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

// main function
function printNumbersDegreesOf2(rangeStart, rangeEnd) {
    // recursion
    function isDegreeOf2(n) {
        if (n === 1) {
            return true;
        }
        if (n % 2 === 0) {
            return isDegreeOf2(n / 2);
        }
        return false;
    }

    // enumeration
    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (isDegreeOf2(i)) {
            console.log(i);
        }
    }
}

// validation
function valid(start, end) {
    return !Number.isNaN(start) && !Number.isNaN(end) && start <= end && start >= 0;
}

// an entry point
rl.question('Type a start number: ', (startStr) => {
    rl.setPrompt('Type an end number: ');
    rl.prompt();
    rl.on('line', (endStr) => {
        rl.close();
        const start = parseInt(startStr, 10);
        const end = parseInt(endStr, 10);
        if (valid(start, end)) {
            printNumbersDegreesOf2(start, end);
        } else {
            console.log('Bad arguments!');
        }
    });
});
