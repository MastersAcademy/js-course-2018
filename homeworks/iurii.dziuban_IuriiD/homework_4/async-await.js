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
            }, 2000);
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
            }, 3000);
        } catch (error) {
            reject(error);
        }
    });
}

async function logNumbers(n) {
    const result1 = await operation1(n);
    console.log(`After the 1st second: ${n} + 10 = ${result1}`);
    const result2 = await operation2(result1);
    console.log(`After 2 more seconds: ${result1} * 3 = ${result2}`);
    const result3 = await operation3(result2);
    console.log(`After another 3 seconds: ${result2} - 20 = ${result3}`);
}

logNumbers(5); // 15 .. 45 .. 25
// logNumbers(-10); // 0 .. 0 .. -20
// logNumbers(0); // 10 .. 30 .. 10
