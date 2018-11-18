const isPowerOfTwo = (numb) => {
    if (numb === 1) {
        return true;
    } if (numb < 1) {
        return false;
    }
    return isPowerOfTwo(numb / 2);
};

const isPower = (minNumb, maxNumb) => {
    for (let i = minNumb; i <= maxNumb; i++) {
        if (isPowerOfTwo(i)) {
            console.log(i);
        }
    }
};

isPower(10, 600);
