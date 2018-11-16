
// Task 1.1
function square(a) {
    return a * a;
}
console.log(square(53));

// Task 1.2

function arr(a, b) {
    const arrM = [];
    for (let i = 0; i <= a; i += b) {
        arrM.push(i);
    }
    return arrM;
}

console.log(arr(32, 4));

// Task 1.3

function arrInSquare(a = arr(32, 4)) {
    const arrNew = [];
    a.forEach((item) => {
        arrNew.push(square(item));
    });
    return arrNew;
}

console.log(arrInSquare());

// Task 1.4

function arrSum(a = arrInSquare()) {
    let sum = 0;
    a.forEach((item) => {
        sum += item;
    });
    return sum;
}

console.log(arrSum());

// Task 2

const recursion = (n) => {
    if (n === 1) {
        return 1;
    } if (n < 1) {
        return 0;
    } return recursion(n / 2);
};

for (let i = 1; i <= 600; i++) {
    if (recursion(i) !== 0) { console.log(i); }
}
