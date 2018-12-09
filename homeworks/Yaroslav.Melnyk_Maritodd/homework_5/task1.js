function sumArray(nums) {
    const arr = [];
    nums.reduce((sum, current) => {
        arr.push(sum + current);
        return sum + current;
    }, 0);
    return arr;
}

console.log(sumArray([10, -10, 10, -10, 10]));
console.log(sumArray([0, 0, 0, 0, 0]));
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
