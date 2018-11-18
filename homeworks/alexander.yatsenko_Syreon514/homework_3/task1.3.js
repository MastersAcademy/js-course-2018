const someArray = [0, 4, 8, 12, 16, 20, 24, 28, 32];

function squareTheArray(array) {
    const squaredArray = array.map(num => num * num);
    return squaredArray;
}

console.log(squareTheArray(someArray));
