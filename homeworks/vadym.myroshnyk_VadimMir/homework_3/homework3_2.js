const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What range is minimum: ', (min) => {
    rl.question('What range is maxsimum: ', (max) => {
        const minNumber = +min;
        const maxNumber = +max;


        function powerOfTwo(maxNum, minNum) {
            if (maxNum === minNum) {
                return 'complete';
            }

            if (Math.log2(maxNum) % 2 === 0 || Math.log2(maxNum) % 2 === 1) {
                console.log(maxNum);
            }

            return powerOfTwo(maxNum - 1, minNum);
        }

        powerOfTwo(maxNumber, minNumber);
        rl.close();
    });
});
