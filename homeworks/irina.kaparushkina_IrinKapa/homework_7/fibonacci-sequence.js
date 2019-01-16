function randomNumber() {
    return Math.floor(Math.random() * 50 + 50);
}
const rand = randomNumber();
console.log(rand);

function fibonacci() {
    const sequence = [0, 1];
    for (let k = 0; k < rand; k += sequence[sequence.length - 2]) {
        const x = sequence[sequence.length - 2] + sequence[sequence.length - 1];
        sequence.push(x);
    }
    return sequence;
}
console.log(fibonacci());
module.exports = { fibonacci, randomNumber };
