function randNumb(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const fiboNumb = () => {
    const arr = [0, 1];
    for (let i = 0; i < 10; i++) {
        const a = arr[i] + arr[i + 1];
        if (a <= randNumb) {
            arr.push(a);
        }
    }
    return arr;
};

module.exports = { fiboNumb };
