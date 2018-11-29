function sumClosure(arr) {
    const result = [];
    arr.reduce((sum, current) => {
        result.push(sum + current);

        return sum + current;
    }, 0);

    return result;
}

console.log(sumClosure([10, -10, 10, -10, 10]));
console.log(sumClosure([0, 0, 0, 0, 0]));
console.log(sumClosure([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
