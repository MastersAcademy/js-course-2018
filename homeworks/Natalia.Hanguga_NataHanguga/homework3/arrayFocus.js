//task1.2
function createArray() {
    const arr = [];
    let arr1 = [];
    const max = 32;
    const step = 4;
    for (let n = 0; n < max; n += step) {
        arr.push(n);
        console.log(n);
    }
    console.log(arr);
    //task 1.3
    arr1 = arr.map(el => return el*el);
    console.log(arr1);
    //task1.4
    const sum = arr1.reduce((a, b) => return a + b);
    console.log(sum);
}

createArray();
