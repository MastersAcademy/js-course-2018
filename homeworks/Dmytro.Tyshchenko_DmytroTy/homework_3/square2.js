// Task 1.1

function square(num) {
    return num * num;
}

let numbs = [5, 15, 53];
numbs.forEach(num => console.log(`${num}^2 = ${square(num)}`));

// Task 1.2

function createMassiv(max, step) {
    const result = [];
    for (let num = 0; num <= max; num += step) {
        result.push(num);
    }
    return result;
}

console.log(createMassiv(50, 5));
console.log(createMassiv(32, 4));

// Task 1.3

numbs = createMassiv(32, 4);
const sqNumbs = numbs.map(square);
console.log(sqNumbs);

// Task 1.4

let sum = 0;
sqNumbs.forEach((num) => { sum += num; });
console.log(sum);
