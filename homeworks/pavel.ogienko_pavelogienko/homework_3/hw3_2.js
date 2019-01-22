function rec(nummer) {
    if (nummer === 2) {
        return true;
    }
    if (nummer % 2 === 0) {
        return rec(nummer / 2);
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
