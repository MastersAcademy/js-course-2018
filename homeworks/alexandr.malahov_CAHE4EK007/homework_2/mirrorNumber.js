const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const MIN_RANGE_NUMBER = 500;
const MAX_RANGE_NUMBER = 1000;

mirrorNumbers = (number) => {
    for (let i=1; i <= number; i++){
        let str = `${i}`;
        let strLength = str.length;

        switch (strLength   ) {
            case 3:
                if (str[0] === str[2]) {
                    console.log(str);
                }
                break;
            case 4:
                if (str[0] === str[3] && str[1] === str[2]) {
                    console.log(str);
                }
                break;
            case 5:
                if (str[0] === str[4] && str[1] === str[3]) {
                    console.log(str);
                }
                break;
        }
    }
};

checkRangeNumber = (number) => {
    return typeof number !== 'number' || number < MIN_RANGE_NUMBER || number > MAX_RANGE_NUMBER;
};

rl.question('Enter a number in the range 500 - 1000: ', (number) => {
    if (checkRangeNumber(number))
        console.log('Sorry your answer is not correct');
        rl.close();

    mirrorNumbers(number);
    rl.close();
});
