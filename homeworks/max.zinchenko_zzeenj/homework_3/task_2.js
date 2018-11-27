const readline = require('readline');

const n = readline.createInterface(process.stdin, process.stdout);
n.question('Please enter the min value of array: ', (min) => {
    n.question('Please enter the max value of array: ', (max) => {
        function square2(number) {
            if (number > 2) {
                return square2(number / 2);
            }
            if (number === 2) {
                return true;
            }
            return false;
        }
        function arrayNumbers() {
            const array = [];
            for (let i = min; i <= max; i++) {
                if (square2(i)) {
                    array.push(i);
                }
            }
            return array;
        }
        console.log(arrayNumbers());
        n.close();
    });
});
