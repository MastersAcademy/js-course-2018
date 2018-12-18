const randomNum = Math.floor(Math.random() * (100 - 50 + 1) + 50);

function fibonacci(maxNum) {
    const array = [0];
    let number = 1;
    while (number <= maxNum) {
        array.push(number);
        number = array[array.length - 1] + array[array.length - 2];
    }
    console.log(maxNum);
    return array;
}

console.log(fibonacci(randomNum));
module.exports = fibonacci;
