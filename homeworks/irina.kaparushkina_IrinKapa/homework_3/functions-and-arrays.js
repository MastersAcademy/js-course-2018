// 1.1 square an argument

const sq = x => x * x;
console.log(`5 ^2 = ${sq(5)}`);
console.log(`15 ^2 = ${sq(15)}`);
console.log(`53 ^2 = ${sq(53)}`);

// 1.2 array_pr

let arr = [];
function addstep(maxvalue, step) {
    for (let i = 0; i <= maxvalue; i += step) {
        arr.push(i);
    }
}
addstep(50, 5);
console.log(arr);
arr.length = 0;
addstep(32, 4);
console.log(arr);

// 1.3 square an array

arr = arr.map(elem => sq(elem));
console.log(arr);

// 1.4 Sum

const total = arr.reduce((prevValue, currentElem) => prevValue + currentElem, 0);
console.log(total);
