// rec
function rec(num) {
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return rec(num / 2);
    }
    return false;
}
const minNum = 10;
const maxNum = 600;
for (let i = minNum; i <= maxNum; i++) {
    if (rec(i)) {
        console.log(i);
    }
}
