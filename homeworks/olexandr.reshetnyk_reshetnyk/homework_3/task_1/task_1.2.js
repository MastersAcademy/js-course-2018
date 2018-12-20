// task 1.2
const numbersWithSomeStep = (step, limit) => {
    const result = [];
    for (let i = 0; i <= limit; i += step) {
        result.push(i);
    }
    return result;
};

exports.numbersWithSomeStep = numbersWithSomeStep;
