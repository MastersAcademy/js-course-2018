function first(a) {
    return a > 2 ? first(a / 2) : a === 2;
}
function second(from, to) {
    const b = [];
    for (let i = from; i < to; i++) {
        if (first(i)) {
            b.push(i);
        }
    }
    return b;
}
console.log(second(10, 600));
