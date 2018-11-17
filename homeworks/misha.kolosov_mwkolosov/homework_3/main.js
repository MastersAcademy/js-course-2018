
// Task 1.1
function square(num) {
    return num * num;
}
console.log(square(53));

// Task 1.2

function arr(max, step) {
    const arrM = [];
    for (let i = 0; i <= max; i += step) {
        arrM.push(i);
    }
    return arrM;
}

console.log(arr(32, 4));

// Task 1.3

function arrInSquare(a = arr(32, 4)) {
    return a.map(item => square(item));
}

console.log(arrInSquare());

// Task 1.4

function arrSum(a = arrInSquare()) {
    return a.reduce(((sum, current) => sum + current), 0);
}

console.log(arrSum());

// Task 2

const recursion = (n) => {
    if (n === 1) {
        return 1;
    }
    if (n < 1) {
        return 0;
    }
    return recursion(n / 2);
};

for (let i = 1; i <= 600; i++) {
    if (recursion(i) !== 0) { console.log(i); }
}
