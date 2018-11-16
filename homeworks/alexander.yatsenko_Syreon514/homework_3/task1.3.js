const someArray = [0, 4, 8, 12, 16, 20, 24, 28, 32];

function square(array) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
        results.push(array[i] ** 2);
    }
    return results;
}

console.log(square(someArray));
