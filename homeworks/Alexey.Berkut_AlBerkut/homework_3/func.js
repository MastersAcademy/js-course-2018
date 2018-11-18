/* 1.1 */

const arg = [5, 15, 53];
function func(arg) {
    arg.forEach(function pow(arg) {
        const num = arg;
        let result = Math.pow(num, 2);
        console.log(result);
    });
}

func(arg);

/* 1.2 */

function array(x, y) {
    const max = x;
    const step = y;
    let result = [];
    for (let i = 0; i <= max; i += step) {
        result.push(i);
    }
    console.log(result);
    /* 1.3 */
    let squard = result.map(function(x) {
        return Math.pow(x, 2);
    });
    console.log(squard);
    /* 1.4 */
    let sum = squard.reduce(function(a, b) {
        return a + b;
    });
    console.log(sum);
}

array(32, 4);
