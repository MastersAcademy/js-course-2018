function operation1(n, callback) {
    setTimeout(() => {
        const x = n + 10;
        console.log(`After the 1st second: ${n} + 10 = ${x}`);
        callback(x);
    }, 1000);
}

function operation2(n, callback) {
    setTimeout(() => {
        const x = n * 3;
        console.log(`After 2 more seconds: ${n} * 3 = ${x}`);
        callback(x);
    }, 2000);
}

function operation3(n, callback) {
    setTimeout(() => {
        const x = n - 20;
        console.log(`After another 3 seconds: ${n} - 20 = ${x}`);
        callback(x);
    }, 3000);
}

function logNumbers(n) {
    operation1(n, (result1) => {
        operation2(result1, (result2) => {
            operation3(result2, () => {});
        });
    });
}

logNumbers(5); // 15 .. 45 .. 25
// logNumbers(-10); // 0 .. 0 .. -20
// logNumbers(0); // 10 .. 30 .. 10
