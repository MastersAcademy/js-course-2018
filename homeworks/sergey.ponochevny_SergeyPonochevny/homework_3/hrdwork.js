/* eslint-disable no-array-constructor */
/* task1.1 */
function inSquare(h) {
    return h * h;
}
console.log(inSquare(5));
console.log(inSquare(15));
console.log(inSquare(53));

/* task1.2 */

function Array(max, step) {
    const Arr = [];
    for (let i = 0; i <= max; i += step) {
        Arr.push(i);
    }
    return Arr;
}

console.log(Array(50, 5));
console.log(Array(32, 4));

/* Task 1.3 */
const ArrayInSquare = (Array(32, 4)).map(n => inSquare(n));
console.log(ArrayInSquare);

/* task 1.4 */
// eslint-disable-next-line no-undef
const SumarrSquare = ArrayInSquare.reduce((sum, number) => sum + number);
console.log(SumarrSquare);
