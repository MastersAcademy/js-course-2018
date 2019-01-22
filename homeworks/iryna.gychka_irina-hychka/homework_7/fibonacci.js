function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function fibonacciInRange(maxNumber) {
    console.log(`Max number: ${maxNumber}`);
    const nums = [0];
    let sum = 1;
    do {
        nums.push(sum);
        sum = nums[nums.length - 1] + nums[nums.length - 2];
    } while (sum <= maxNumber);
    return nums;
}
console.log(fibonacciInRange(getRandomNumber(50, 101)));

module.exports = fibonacciInRange;
