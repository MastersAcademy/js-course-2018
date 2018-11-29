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

async function logNumbersAwait(numeric) {
    if (typeof numeric !== 'number') {
        return false;
    }
    const result1 = await step(numeric + 10);
    const result2 = await step(result1 * 3);
    await step(result2 - 20);

    return true;
}

logNumbersAwait(1);
