const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const initialArray = [];
function isInt(data) {
    return (typeof (data) === 'number' && data % 1 === 0);
}
function isDegreeOfTwo(num) {
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return isDegreeOfTwo(num / 2);
    }
    return false;
}
function arrayFiltering(array) {
    return array.filter(el => isDegreeOfTwo(el));
}
function arrayFilter() {
    rl.question('Enter the range of array; (Example: start, end); ', (values) => {
        const arrayOfValues = values.split(',');
        const parsedStartValue = parseInt(arrayOfValues[0], 10);
        const parsedEndValue = parseInt(arrayOfValues[1], 10);
        if (isInt(parsedStartValue) && isInt(parsedEndValue)) {
            for (let i = parsedStartValue; i <= parsedEndValue; i++) {
                initialArray.push(i);
            }
            const result = arrayFiltering(initialArray);
            console.log(result);
            process.exit();
        } else {
            console.log('Please enter only intengers with coma!');
            arrayFilter();
        }
    });
}
arrayFilter();
