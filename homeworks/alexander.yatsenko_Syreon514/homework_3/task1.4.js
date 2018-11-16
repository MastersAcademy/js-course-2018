const someArray = [0, 16, 64, 144, 256, 400, 576, 784, 1024];

function arraySum(array) {
    const sum = array.reduce((total, arg) => total + arg);
    return sum;
}

console.log(arraySum(someArray));
