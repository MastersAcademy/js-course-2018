/* 1.1 */
const arg = [5, 15, 53];
arg.forEach((elarg) => {
    const result = elarg ** 2;
    console.log(result);
});

/* 1.2 */

function array(x, y) {
    const max = x;
    const step = y;
    const result = [];
    for (let i = 0; i <= max; i += step) {
        result.push(i);
    }
    console.log(result);
    /* 1.3 */
    const squard = result.map(sqmax => sqmax ** 2);
    console.log(squard);
    /* 1.4 */
    const sum = squard.reduce((a, b) => a + b);
    console.log(sum);
}

array(32, 4);
