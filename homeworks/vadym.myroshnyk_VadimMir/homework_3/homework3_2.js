const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What range is minimum: ', (min) => {
    rl.question('What range is maxsimum: ', (max) => {
        const minNumber = +min;
        const maxNumber = +max;


        const powerOfTwo = (maxNum, minNum) => {
            if (maxNum === minNum) {
                const stop = 'complete';
                return stop;
            }

            if (Math.sqrt(maxNum) % 2 === 0) {
                console.log(maxNum);
            }

            return powerOfTwo(maxNum - 1, minNum);
        };

        const allPowersOfTwo = powerOfTwo(maxNumber, minNumber);
        console.log(allPowersOfTwo);
        rl.close();
    });
});
