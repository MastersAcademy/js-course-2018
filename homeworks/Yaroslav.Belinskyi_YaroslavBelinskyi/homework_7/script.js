function randomEndValue() {
    return Math.floor(Math.random() * 51 + 50);
}
function fibonacci() {
    const array = [0];
    const endOfArray = randomEndValue();
    let nextNumber = 1;
    do {
        array.push(nextNumber);
        nextNumber = array[array.length - 1] + array[array.length - 2];
    } while (nextNumber <= endOfArray);
    return array;
}
console.log(fibonacci());
module.exports = { fibonacci, randomEndValue };
