function foo() {
    let sum = 0;
    return (element) => {
        sum += element;
        return sum;
    };
}
function bar(arr) {
    const baz = foo();
    return arr.map(baz);
}
console.log(bar([10, -10, 10, -10, 10]));
console.log(bar([0, 0, 0, 0, 0]));
console.log(bar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
