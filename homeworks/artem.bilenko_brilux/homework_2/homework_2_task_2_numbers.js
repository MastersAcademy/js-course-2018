const readline = require('readline');

const checkDiapason = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

checkDiapason.question('Enter diapason(from 500 to 1000). For example(600,700): ', diapason => {
    checkDiapason.close();
    let arrDiapason = diapason.split(',');
    if (arrDiapason[0] < 500 || arrDiapason[1] > 1000 || arrDiapason[0] === arrDiapason[1]) {
        console.log('Enter please valid diapason(from 500 to 1000). For example(600,700):');
        return;
    }
    if (!isNaN(arrDiapason[0]) && !isNaN(arrDiapason[1])) {
        let length = (arrDiapason[1] - (arrDiapason[0] - 1)) / 10 - 1;
        let number = (arrDiapason[0] - 1).toString();
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
            console.log(leftNumber.toString() + centralNumber + rightNumber);
        }
    } else {
        console.log('Please, enter a valid diapason. For example: 500, 1000');
    }
});


