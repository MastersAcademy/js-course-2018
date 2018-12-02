const arr = [10, -10, 10, -10, 10];

function sum() {
    let hiddenValue = 0;
    return function first(elemx) {
        hiddenValue += elemx;
        return hiddenValue;
    };
}

const count = sum();
const arr2 = arr.map(elem => count(elem));
console.log(arr2);
