// 1.1
function expanent(a) {
    const b = a * a;
    return b;
}
console.log(expanent(5));
console.log(expanent(15));
console.log(expanent(55));

// 1.2
function createArray2(step, max) {
    const arr = [];
    for (let i = 0; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}
console.log(createArray2(4, 32));

// 1.3
function editedArray3(a) {
    const arr2 = [];
    for (let i = 0; i < a.length; i++) {
        arr2.push(expanent(a[i]));
    }
    return arr2;
}
console.log(editedArray3(createArray2(4, 32)));

// 1.4
function arrayEISum4(a) {
    const sum = a.reduce((x, y) => x + y);
    return sum;
}
console.log(arrayEISum4(editedArray3(createArray2(4, 32))));
