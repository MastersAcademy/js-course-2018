// Task 1.1

const degree = (num1, num2, num3) => {
    console.log(num1 ** 2);
    console.log(num2 ** 2);
    console.log(num3 ** 2);
};
degree(5, 15, 53);


// Task 1.2 (1)


const createArrayOne = () => {
    const firstArray = [];
    for (let i = 0; i < 50; i += 5) {
        firstArray.push(i);
    }
    console.log(firstArray);
};
createArrayOne();

// Task 1.2 (2)

const createArrayTwo = () => {
    const secondArray = [];

    for (let i = 0; i <= 32; i += 4) {
        secondArray.push(i);
    }
    return secondArray;
};

console.log(createArrayTwo());

// Task 1.3

function createArrayThree() {
    const thirdArray = [];
    const a = createArrayTwo();
    for (let i = 0; i < a.length; i++) {
        thirdArray.push(a[i] ** 2);
    }

    return thirdArray;
}

console.log(createArrayThree());

// Task 1.4

console.log(
    createArrayThree().reduce((a, b) => a + b),
);
