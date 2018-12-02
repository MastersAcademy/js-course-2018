const readline = require('readline');

// Callback based solution

let logNumbers = (number) => {
    setTimeout((() => {
        const sum = number + 10;
        console.log(`${number} + 10 = ${sum}`);
        setTimeout((() => {
            const product = sum * 3;
            console.log(`${sum} * 3 = ${product}`);
            setTimeout((() => {
                const difference = product - 20;
                console.log(`${product} - 20 = ${difference}`);
            }), 1000);
        }), 1000);
    }), 1000);
};

// Promise based solution

const increase = base => new Promise((resolve) => {
    const result = base + 10;
    setTimeout((() => {
        console.log(`${base} + 10 = ${result}`);
        resolve(result);
    }), 1000);
});

const multiply = factor => new Promise((resolve) => {
    const product = factor * 3;
    setTimeout((() => {
        console.log(`${factor} * 3 = ${product}`);
        resolve(product);
    }), 1000);
});

const substract = minued => new Promise((resolve) => {
    const difference = minued - 20;
    setTimeout((() => {
        console.log(`${minued} - 20 = ${difference}`);
        resolve(difference);
    }), 1000);
});

logNumbers = (number) => {
    increase(number).then(multiply).then(substract).catch(error => `An error has occured: ${error}`);
};

// Async/await based solution

async function logNumbersAsync(number) {
    const increased = await increase(number);
    const multiplied = await multiply(increased);
    const substracted = await substract(multiplied);

    return substracted;
}

// Output results

const isNumber = (string) => {
    const number = parseInt(string, 10);

    return !Number.isNaN(number) && number.toString() === string;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please enter a number: ', (answer) => {
    if (!isNumber(answer)) {
        console.log('Wrong input!');
    } else {
        const input = parseInt(answer, 10);
        console.log('Callback based solution:');
        logNumbers(input);

        setTimeout((() => {
            console.log('Promise based solution:');
            logNumbers(input);
        }), 4000);

        setTimeout((() => {
            console.log('Async/await based solution:');
            logNumbersAsync(input);
        }), 8000);
    }
    rl.close();
});
