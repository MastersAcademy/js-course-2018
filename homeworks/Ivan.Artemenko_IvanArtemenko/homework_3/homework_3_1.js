function square(num) {
    return num * num;
}
let numbs = [5, 15, 53];
numbs.forEach(num => console.log(`${num}^2 = ${square(num)}`));
// Task 1.2
function mainFunction(numeric, step) {
    const result = [];
    let num = 0;
    for (let i = 0; num <= numeric; i++) {
        result[i] = num;
        num += step;
    }
    return result;
}
console.log(mainFunction(50, 5));
console.log(mainFunction(32, 4));
// Task 1.3
numbs = mainFunction(32, 4);
const squareNumbs = numbs.map(square);
console.log(squareNumbs);
// Task 1.4
let sum = 0;
squareNumbs.forEach((num) => { sum += num; });
console.log(sum);
