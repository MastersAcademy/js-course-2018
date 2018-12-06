function initSummarizer(defaultValue) {
    let summ = defaultValue;
    return (num) => {
        summ += num;
        return summ;
    };
}

const summarizer = initSummarizer(0);
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumArr = testArr.map(summarizer);

console.log('Test array: ');
console.log(testArr);
console.log('\nSum array: ');
console.log(sumArr);
