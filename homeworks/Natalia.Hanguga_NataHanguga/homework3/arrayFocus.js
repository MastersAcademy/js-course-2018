function createArray() {    // task1.2
    const arr = [];
    const max = 32;
    const step = 4;
    for (let n = 0; n < max; n += step) {
        arr.push(n);
        console.log(n);
    }
    console.log(arr);
    return arr;
}

function arrElemSquare(){   // task1.3
    const arr = createArray();
    let arr1 = arr.map(el => el*el);
    console.log(arr1);
    return arr1;
}

function sumArray(){     // task1.4
    const arr1 = arrElemSquare();
    const sum = arr1.reduce((a, b) => a + b);
    return sum;
}

console.log(sumArray());
