const readline = require('readline');

const checkDiapason = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

checkDiapason.question('Enter diapason(from 500 to 1000). For example(600, 700): ', Diapason => {
    checkDiapason.close();
    let arrDiapason = Diapason.split(',');
    if (arrDiapason[0] < 500 || arrDiapason[1] > 1000) {
        console.log('Enter please valid diapason(from 500 to 1000). For example(600, 700):');
        return;
    }
    if (!isNaN(arrDiapason[0]) && !isNaN(arrDiapason[1])) {
        let minNumber = arrDiapason[0] - 1;
        let maxNumber = arrDiapason[1];
        let length = (maxNumber - minNumber) / 10 - 1;

        let number = minNumber.toString();

        let arr = number.split('');

        let leftNumber = arr[0];
        let centralNumber = arr[1];
        let rightNumber = arr[2];

        for (let i = 0; i < length; i++) {
            rightNumber = leftNumber;
            centralNumber++;
            if (centralNumber === 10) {
                leftNumber++;
                centralNumber = 0;
                rightNumber = leftNumber;
            }
            console.log(leftNumber + '' + centralNumber + '' +rightNumber);
        }
    } else {
        console.log('Please, enter a valid diapason. For example: 500, 1000');
    }
});


