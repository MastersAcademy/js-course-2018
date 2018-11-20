// Task 1.1
function square(n) {
    return n * n;
}
console.log(`5 ^ 2 = ${square(5)}`);
console.log(`15 ^ 2 = ${square(15)}`);
console.log(`53 ^ 2 = ${square(53)}`);

// Task 1.2

function range(end, step) {
    const arr = [];
    for (let start = 0; start <= end; start += step) {
        arr.push(start);
    }
    return(arr);
}

// 1.2.1

console.log (range(50, 5));

// 1.2.2

console.log (range(32, 4));

// 1.3

let Square = range(32, 4).map(square);
console.log (Square);

// 1.4

let total = 0;
for (let i = 0; i < Square.length; i++) {
    total += Square[i];
}
console.log(total);

