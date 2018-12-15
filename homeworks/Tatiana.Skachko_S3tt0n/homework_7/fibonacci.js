const lastNum = Math.floor(Math.random() * (100 - 50)) + 50;
let a = 0;
let b = 1;

function fibonacci() {
    const fibArr = [a, b];
    for (let i = 3; i < lastNum; i++) {
        const c = a + b;
        a = b;
        b = c;
        fibArr.push(b);
    }
    return fibArr;
}
console.log(fibonacci());

module.exports = fibonacci;
