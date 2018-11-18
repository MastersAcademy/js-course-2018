const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// /* task1.1 */
function square(num) {
    return num * num;
}

rl.on('line', (input) => {
    const num = input;
    rl.close();
    console.log(square(num));
});

/* task 1.2 */
function createArray(end, step) {
    const array = [0];
    const newEnd = Number(end);
    const newStep = Number(step);
    let temp = 0;
    for (let i = 1; (temp + newStep) <= newEnd; i += 1) {
        array.push(temp + newStep);
        temp += newStep;
    }
    for (let i = 0; i < array.length; i += 1) { console.log(array[i]); }
    return array;
}

/* task 1.4 */
function sumOfElems(array) {
    console.log('task 1.4');
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(array.reduce(reducer));
}
/* task 1.3 */
function squareArray(array) {
    console.log('task 1.3');
    const temp = array.map(x => x * x);
    console.log(temp);
    console.log('\n');
    sumOfElems(array);
}
rl.on('line', (input) => {
    const temp = input.split(' ');
    const end = temp[0];
    const step = temp[1];
    rl.close();
    const arr = createArray(end, step);
    console.log('\n');
    squareArray(arr);
});
