function heySummarizer(value) {
    let summ = value;
    return (num) => {
        summ += num;
        return summ;
    };
}
const summarizer = heySummarizer(0);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumArr = arr.map(summarizer);
console.log((sumArr));
