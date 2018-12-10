// Task_1

function getSums(numbers) {
    const sumArray = [];
    numbers.reduce((sum, key) => {
        sumArray.push(sum + key);
        return sum + key;
    }, 0);
    return sumArray;
}
console.log(getSums([10, -10, 10, -10, 10]));
console.log(getSums([0, 0, 0, 0, 0]));
console.log(getSums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
