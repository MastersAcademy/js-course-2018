// Task 1.1

function degree(num) {
    console.log(num * num);
}

degree(5);
degree(15);
degree(53);

// Task 1.2 (1)

function createArrayTwo(max, step) {
    const secondArray = [];

    for (let i = 0; i <= max; i += step) {
        secondArray.push(i);
    }
    return secondArray;
}

console.log(createArrayTwo(50, 5));

// Task 1.3 and 1.4 combine in one

const sumOfArray = createArrayTwo(32, 4).map(degree).reduce((a, b) => a + b);
console.log(sumOfArray);
