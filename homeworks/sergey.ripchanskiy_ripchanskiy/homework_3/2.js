// Show numbers which are exponentiating of 2
const minValue = 10;
const maxValue = 600;

function exponentiatingNumber(number) {
    if (number >= maxValue) {
        return;
    }
    const result = Math.log2(number);
    if (result % 1 <= 0) {
        console.log(number);
    }
    exponentiatingNumber(number + 1);
}
console.log(exponentiatingNumber(minValue));
