const someArray = [0, 16, 64, 144, 256, 400, 576, 784, 1024];

function arraySum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

console.log(arraySum(someArray));
