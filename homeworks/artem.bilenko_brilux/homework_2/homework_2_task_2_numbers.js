const readline = require('readline');

const checkDiapason = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

checkDiapason.question('Enter diapason(from 500 to 1000). For example(600, 700): ', (Diapason) => {
    checkDiapason.close();
    let arrDiapason = Diapason.split(',');
    if (arrDiapason[0] < 500 || arrDiapason[1] > 1000) {
        console.log('Enter please valid diapason(from 500 to 1000). For example(600, 700):');
    } else if (!isNaN(arrDiapason[0])) {
        let minNumber = arrDiapason[0] - 1;
        let maxNumber = arrDiapason[1];
        let length = (maxNumber - minNumber) / 10 - 1;

        min = minNumber.toString();

        let arr = min.split('');

        for (let i = 0; i < length; i++) {
            arr[2] = arr[0];
            arr[1]++;

            if (arr[1] === 10) {
                arr[0]++;
                arr[1] = 0;
                arr[2] = arr[0];
            }
            num = arr.toString();
            num = parseFloat(num.replace(/,/g, ''));
            console.log(num);
        }
    } else {
        console.log('Please, enter a valid diapason. For example: 500, 1000');
    }
});


