const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.question('Enter the beginning of the range: ', (startRange) => {
    rl.question('Enter end of range: ', (endRange) => {
        rl.close();
        function getNum(n, start, end) {
            if ((n >= start) && (n <= end)) {
                console.log(n);
            }
            if (n > end) {
                return n;
            }
            return getNum(n * 2, startRange, endRange);
        }
        const start = Math.ceil(Math.log(startRange, 2));
        getNum(2 ** start);
    });
});
