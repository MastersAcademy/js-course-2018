function someArr(arr) {
    const result = [];
    const sumArr = arr.reduce((sum, elem) => {
        result.push(sum);
        return sum + elem;
    });
    result.push(sumArr);
    return result;
}
console.log(someArr([10, -10, 10, -10, 10]));
console.log(someArr([0, 0, 0, 0, 0]));
console.log(someArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
