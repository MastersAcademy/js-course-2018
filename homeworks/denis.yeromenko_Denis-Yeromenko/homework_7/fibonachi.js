const numFibonachi = () => {
    const lastNumb = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const arr = [0, 1];
    for (let i = 0; i < 10; i++) {
        const num = arr[i] + arr[i + 1];
        if (num <= lastNumb) {
            arr.push(num);
        }
    }
    return arr;
};
module.exports = { numFibonachi };
