function findMirrors(a, b) {
    for (let i = a; i <= b; i++) {
        if (i.toString() === i.toString().split('').reverse().join('')) {
            console.log(i);
        }
    }
}

const standardInput = process.stdin;
standardInput.setEncoding('utf-8');
console.log('Please input min and max values devided by space');

standardInput.on('data', (data) => {
    const numbers = data.split(' ');
    const start = parseInt(numbers[0], 10);
    const end = parseInt(numbers[1], 10);
    if (numbers.length === 2 && start < end) {
        findMirrors(start, end);
    } else {
        console.log('Your input is invalid.');
    }
    process.exit();
});
