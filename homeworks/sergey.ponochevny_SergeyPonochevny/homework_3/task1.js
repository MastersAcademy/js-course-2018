/* task 1.1 */
function inSquare(h) {
    return h * h;
}
console.log(inSquare(5));
console.log(inSquare(15));
console.log(inSquare(53));

/* task1.2 */

function array(max, step) {
    const Arr = [];
    for (let i = 0; i <= max; i += step) Arr.push(i);
    return Arr;
}

console.log(array(50, 5));
console.log(array(32, 4));

/* Task 1.3 */
function arrSquare(Arr) {
    return Arr.map(element => element * element);
}
/* task 1.4 */
function sumArray(Arr) {
    return Arr.reduce((num1, num2) => num1 + num2);
}
console.log(sumArray(arrSquare(array(32, 4))));
