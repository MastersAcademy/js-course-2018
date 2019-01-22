function divide(a, b) {
    if (b === 0) throw Error('You can`t divide by zero');
    return a / b;
}

async function asyncDivide(a, b) {
    return new Promise((resolve, reject) => {
        try {
            resolve(divide(a, b));
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = { divide, asyncDivide };
