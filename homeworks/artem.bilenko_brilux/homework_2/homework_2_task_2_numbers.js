const readline = require('readline');

const checkDiapason = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

checkDiapason.question('Enter diapason(from 500 to 1000). For example(600,700): ', (diapason) => {
    checkDiapason.close();
    const arrDiapason = diapason.split(',');
    const diapasonStart = Number(arrDiapason[0]);
    const diapasonEnd = Number(arrDiapason[1]);
    const checkExecution = !Number.isNaN(arrDiapason[0]) && !Number.isNaN(arrDiapason[1]);
    const errCheckDiap = diapasonStart < 500 || diapasonEnd > 1000 || diapasonStart >= diapasonEnd;
    const errCheckEntry = Number.isNaN(diapasonStart) || Number.isNaN(diapasonEnd);
    if (errCheckDiap || errCheckEntry) {
        console.log('Enter please valid diapason(from 500 to 1000). For example(600,700):');
    } else if (checkExecution) {
        const length = (diapasonEnd - (diapasonStart - 1)) / 10 - 1;
        const number = (diapasonStart - 1).toString();
        const arrNumber = number.split('');

        let leftNumber = arrNumber[0];
        let centralNumber = arrNumber[1];
        let rightNumber = arrNumber[2];

        for (let i = 0; i < length; i++) {
            rightNumber = leftNumber;
            centralNumber++;
            if (centralNumber === 10) {
                leftNumber++;
                centralNumber = 0;
                rightNumber = leftNumber;
            }
            console.log(leftNumber.toString() + centralNumber + rightNumber);
        }
    }
});
