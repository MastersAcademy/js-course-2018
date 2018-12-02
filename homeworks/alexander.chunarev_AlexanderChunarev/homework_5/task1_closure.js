function calculateSum() {
    let sum = 0;
    return (value) => {
        sum += value;
        return sum;
    };
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.map(calculateSum()));
