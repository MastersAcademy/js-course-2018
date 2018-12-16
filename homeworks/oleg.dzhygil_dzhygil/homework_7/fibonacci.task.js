function fibonacci() {
    const random = Math.floor(Math.random() * 50 + 50);
    const array = [0, 1];
    for (let i = 0; i < random; i++) {
        const a = array[i] + array[i + 1];
        if (a <= random) {
            array.push(a);
        }
    }
    return array;
}

console.log(fibonacci());
module.exports = { fibonacci };
