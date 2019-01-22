// Task 1
function counterClosure() {
    let summ = 0;
    return (parameter) => {
        summ += parameter;
        return summ;
    };
}

console.log([10, -10, 10, -10, 10].map(counterClosure()));
console.log([0, 0, 0, 0, 0].map(counterClosure()));
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(counterClosure()));
