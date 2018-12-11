// rec
function rec(num) {
    return num % 2 === 0 ? rec(num / 2) : num === 1;
}
for (let i = 10; i <= 600; i++) {
    if (rec(i)) {
        console.log(i);
    }
}
