function createarray(a, b) {
    let i;
    const arr = [];
    for (i = 0; i <= b; i += a) {
        arr.push(i * i);
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log('Square: ', arr);
    console.log('Sum: ', arr.reduce(reducer));
}
createarray(4, 32); // (step, max)
