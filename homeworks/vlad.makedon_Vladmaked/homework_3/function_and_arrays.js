// ============= Task 1.1 =============

function getSquaredNum(n) {
    return n * n;
}

console.log('Task 1.1.1:', getSquaredNum(5));
console.log('Task 1.1.2:', getSquaredNum(15));
console.log('Task 1.1.3:', getSquaredNum(53));

// ============= Task 1.2 =============

function createArray(max, step) {
    const arr = [];
    for (let i = 0; i <= max; i += step) {
        arr.push(i);
    }

    return arr;
}

console.log('Task 1.2.1:', createArray(50, 5));
console.log('Task 1.2.2:', createArray(32, 4));

// ============= Task 1.3 =============

function getSquaredArray(arr) {
    return arr.map(getSquaredNum);
}

console.log('Task 1.3:', getSquaredArray(createArray(32, 4)));

// ============= Task 1.4 =============s

function getArraySum(arr) {
    return arr.reduce((a, b) => a + b);
}

console.log('Task 1.4:', getArraySum(getSquaredArray(createArray(32, 4))));
