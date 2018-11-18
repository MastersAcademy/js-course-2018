// 2
const minNumb = 0;
const maxNumb = 600;

function expNumber(a) {
    if (a >= maxNumb) {
        return;
    }
    const result = Math.log2(a);
    if (result % 1 <= 0) {
        console.log(2 ** result);
    }
    expNumber(a + 1);
}
expNumber(minNumb);
