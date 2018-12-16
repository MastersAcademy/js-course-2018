function randomNumber() {
    return Math.floor(Math.random() * 50 + 50);
}
const rand = randomNumber();
console.log(rand);

function fibonacci() {
    const sequence = [0, 1];
    let x;
    for (let i = 0, j = 1, k = 0; k < rand; i = j, j = x, k += i) {
        x = i + j;
        sequence.push(x);
    }
    return sequence;
}
console.log(fibonacci());
module.exports = { fibonacci, randomNumber };
