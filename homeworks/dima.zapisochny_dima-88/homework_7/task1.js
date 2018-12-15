const fibNumbers = () => {
    const lastNumb = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const arr = [0, 1];
    for (let i = 0; i < 10; i++) {
        const a = arr[i] + arr[i + 1];
        if (a <= lastNumb) {
            arr.push(a);
        }
    }
    return arr;
};

module.exports = { fibNumbers };
