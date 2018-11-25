function operation1(n) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(n + 10);
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });
}

function operation2(n) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(n * 3);
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });
}

function operation3(n) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(n - 20);
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });
}

function logNumbers(n) {
    operation1(n)
        .then((result1) => {
            console.log(`After the 1st second:  ${n} + 10 = ${result1}`);
            return operation2(result1);
        })
        .then((result2) => {
            console.log(`After the 2nd second:  ${result2 / 3} * 3 = ${result2}`);
            return operation3(result2);
        })
        .then((result3) => {
            console.log(`After the 3rd second: ${result3 + 20} - 20 = ${result3}`);
        });
}

logNumbers(5); // 15 .. 45 .. 25
// logNumbers(-10); // 0 .. 0 .. -20
// logNumbers(0); // 10 .. 30 .. 10
