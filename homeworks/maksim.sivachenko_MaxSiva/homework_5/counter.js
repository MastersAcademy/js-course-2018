function setCounter() {
    let counter = 0;
    return (n) => {
        counter += n;
        return counter;
    };
}

const countA = setCounter();
console.log([10, -10, 10, -10, 10].map(countA));
const countB = setCounter();
console.log([0, 0, 0, 0, 0].map(countB));
const countC = setCounter();
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(countC));
