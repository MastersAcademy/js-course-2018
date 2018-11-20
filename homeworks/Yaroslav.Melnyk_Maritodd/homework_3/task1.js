//  task 1.1

function numbers(num) {
    return (num * num);
}
console.log(numbers(5));
console.log(numbers(15));
console.log(numbers(53));

//  task 1.2

function array(num, step) {
    const arr = [];
    for (let j = 0; j <= num; j += step) {
        arr.push(j);
    }
    return arr;
}

console.log(array(50, 5));
console.log(array(32, 4));

//  task 1.3

const square = arr => arr.map(item => item * item);
console.log(square(array(32, 4)));

//  task 1.4

const sum = arr => arr.reduce((elem, current) => elem + current);
console.log(sum(square(array(32, 4))));
