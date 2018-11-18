function powerOf2(checkNum) {
    if (checkNum % 2 === 0) {
        return powerOf2(checkNum / 2);
    }
    return checkNum === 1;
}
const result = [];
for (let i = 10; i <= 600; i++) {
    if (powerOf2(i)) {
        result.push(i);
    }
}
console.log(`Power of the 2 are: ${result}`);
