function step(numeric) {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                console.log(numeric);
                resolve(numeric);
            }, 1000,
        );
    });
}

function logNumbers(numeric) {
    if (typeof numeric !== 'number') {
        return false;
    }

    step(numeric + 10)
        .then(result => step(result * 3))
        .then(result => step(result - 20));

    return true;
}

logNumbers(100);
