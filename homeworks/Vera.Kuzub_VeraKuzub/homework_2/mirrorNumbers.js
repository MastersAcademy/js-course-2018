function mirrorNumbers(str) {
    const arr = str.split(' ');
    if (arr.length !== 2) console.log('Incorrect input');
    else if (Number.isNaN(Number(arr[0])) || Number.isNaN(Number(arr[1]))) console.log('Please enter numbers');
    else if (Number(arr[0]) >= Number(arr[1])) console.log('Error: min is greater than max');
    else {
        while (Number(arr[0]) <= Number(arr[1])) {
            if (Number(arr[0]) < 10) arr[0] = String(Number(arr[0]) + 1);
            else {
                const reverseNumber = arr[0].split('').reverse().join('');
                if (arr[0] === reverseNumber) console.log(arr[0]);
                arr[0] = String(Number(arr[0]) + 1);
            }
        }
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question('Enter min and max number divided with space: ', (answer) => {
    mirrorNumbers(answer);
    rl.close();
});
