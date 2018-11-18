const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function checkInputValue(min, max) {
    return ((!Number.isNaN(min) && min > 500 && min < 1000)
            && (!Number.isNaN(max) && max > 500 && max < 1000));
}

function getMinMaxArr(minInt, maxInt) {
    if (minInt > maxInt) {
        return [maxInt, minInt];
    }
    return [minInt, maxInt];
}

function getArray(arr) {
    const numbers = [];

    for (let i = arr[0]; i <= arr[1]; i++) {
        numbers.push(i);
    }

    return numbers;
}

function getReverseArr(arr) {
    const arrReverse = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        const a = String(arr[i]);
        arrReverse.push(a.split('').reverse().join(''));
    }

    return arrReverse;
}

function compareArray(firtstArr, secondArr) {
    const resultArr = [];

    for (let i = 0; i < firtstArr.length; i++) {
        const a = +firtstArr[i];
        const b = +secondArr[i];

        if (a === b) {
            resultArr.push(a);
        }
    }

    return resultArr;
}

function showPolindrom(arr) {
    const str = arr.join(', ');
    console.log(str);
}

function getPalindrome(min, max) {
    const minInt = parseInt(min, 10);
    const maxInt = parseInt(max, 10);

    if (checkInputValue(minInt, maxInt)) {
        const arrMinMax = getMinMaxArr(minInt, maxInt);
        const allNumbers = getArray(arrMinMax);
        const reverseAllNumbers = getReverseArr(allNumbers);
        const resultArr = compareArray(reverseAllNumbers, allNumbers);
        showPolindrom(resultArr);
    } else {
        console.log('Incorrect data entered');
    }
}

rl.question('Enter the first number more than 500 and less than 1000: ', (min) => {
    rl.question('Enter the second number more than 500 and less than 1000: ', (max) => {
        getPalindrome(min, max);
        rl.close();
    });
});
