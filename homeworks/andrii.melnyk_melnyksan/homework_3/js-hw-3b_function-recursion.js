// 2 Recursion
// Given a range of natural numbers from 10 to 600 inclusive.
// Output numbers, that is power of two (1, 2, 4, 8, 16, ..., 512, etc).
// Use the recursion to check if the number is the power of the two.

const isPowOfTwo = function isPowerOfTwo(num) {
    if (num < 1) {
        return false;
    } if (num === 1) {
        return true;
    }
    return isPowerOfTwo(num / 2);
};

const isAllNumbersPowerOfTwo = () => {
    const min = 10;
    const max = 600;
    const arrayService = [];

    for (let i = min; i <= max; i++) {
        if (isPowOfTwo(i) === true) {
            arrayService.push(i);
        }
    }

    return arrayService;
};

console.log('\nisAllNumbersPowerOfTwo', isAllNumbersPowerOfTwo(), '\n');
