function twoSquare(num) {
    if (num % 2 === 0) {
        return twoSquare(num / 2);
    }
    return num === 1;
}
const result = [];
for (let i = 10; i <= 600; i++) {
    if (twoSquare(i)) {
        result.push(i);
    }
}
console.log(`Power's of 2 : ${result}`);
