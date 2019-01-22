function createarray(a, b) {
    let i;
    const arr = [];
    for (i = 0; i <= b; i += a) {
        arr.push(i);
    }
    console.log(arr);
}
createarray(4, 32); // (step, max)
