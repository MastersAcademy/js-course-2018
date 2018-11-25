const readline = require('readline');

const isPowerOf = (base, number) => {
    if (number === 1) {
        return true;
    }

    if (number < 1) {
        return false;
    }

    return isPowerOf(base, number / base);
};

const expList = (min, max, base = 2) => {
    const list = [];
    let member = min;

    while (!isPowerOf(base, member)) {
        member++;
    }
    while (member <= max) {
        list.push(member);
        member *= base;
    }

    return list.length ? list : 'not available';
};

const isNaturalNumber = (string) => {
    const number = parseInt(string, 10);

    return !Number.isNaN(number) && number.toString() === string && number >= 0;
};

console.log(`Exponents of two in the range from 10 to 600 are ${expList(10, 600).join(', ')}`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please enter min and max natural numbers: ', (answer) => {
    const input = answer.split(' ');

    if (input.length !== 2
        || !isNaturalNumber(input[0])
        || !isNaturalNumber(input[1])
        || parseInt(input[0], 10) > parseInt(input[1], 10)) {
        console.log('Wrong input!');
    } else {
        const min = parseInt(input[0], 10);
        const max = parseInt(input[1], 10);
        console.log(`Exponents of two in the range from ${min} to ${max} are: ${expList(min, max).join(', ')}`);
    }
    rl.close();
});
