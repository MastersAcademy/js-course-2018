const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumsOfArrayElems(numsArray) {
    const result = [];
    result.push(input[0]);
    console.log(numsArray);
    numsArray.reduce((prevSum, currentNumber) => {
        result.push(prevSum + currentNumber);
        return prevSum + currentNumber;
    });
    return result;
}

console.log(sumsOfArrayElems(input));
