const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.question('Enter the beginning of the range: ', (startRange) => {
    rl.question('Enter end of range: ', (endRange) => {
        rl.close();
        function numCheck(n) {
            if (n > 3 && Number.isInteger(n)) {
                return numCheck(n / 2);
            }
            if (n === 2) {
                return true;
            }
            return false;
        }
        function getNum(start, end) {
            for (let i = start; i <= end; i++) {
                if (numCheck(i) === true && i !== 2) {
                    console.log(i);
                }
            }
        }
        getNum(startRange, endRange);
    });
});
