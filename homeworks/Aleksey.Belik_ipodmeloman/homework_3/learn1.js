// 1.1
function func(a) {
    const b = a * a;
    return b;
}
console.log(func(5));
console.log(func(15));
console.log(func(55));

// 1.2
function func2(step, max) {
    const arr = [];
    for (let i = 0; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}
console.log(func2(4, 32));

// 1.3
function func3(a) {
    const arr2 = [];
    for (let i = 0; i < a.length; i++) {
        arr2.push(func(a[i]));
    }
    return arr2;
}
console.log(func3(func2(4, 32)));

// 1.4
function func4(a) {
    const sum = a.reduce((x, y) => x + y);
    return sum;
}
console.log(func4(func3(func2(4, 32))));
